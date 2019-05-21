var s_list = new Array(new Array("-", ""));
function s_documentMouseDown(evt) {
    var div_ombre = document.getElementById("div_ombre_suggest");
    if (div_ombre != null) {
        var element;
        if (evt.target) {
            element = evt.target;
        } else {
            element = window.event.srcElement;
        }
        if (!(element.id == "div_ombre_suggest") && !(isParent(element, "div_ombre_suggest"))) {
            if (div_ombre.style.display != "none") {
                div_ombre.style.display = "none";
            }
        }

    }
}

function s_init() {

    if (window.addEventListener) {
        document.addEventListener("onmousedown", s_documentMouseDown, false);
    } else {
        document.attachEvent("onmousedown", s_documentMouseDown);
    }

    var test = document.getElementsByClassName("contentForm");

    var empty_div = document.getElementById("empty_div");
    if (empty_div == null) {
        empty_div = document.createElement("DIV");
        empty_div.setAttribute("id", "empty_div");
        empty_div.style.lineHeight = "0px";

       for (var i = 0; i < test.length; i++) {
            test[i].appendChild(empty_div);
            test[i].appendChild(empty_div);
        }
    }


    String.prototype.startsWith = function (str) {
        return (this.match("^" + str) == str)
    };
    // Cr�ation de l'image d'attente
    s_prepare_suggest_wait_img();
}

/* fonction apell�e lors de la saisie d'un caract�re dans la zone de texte */
function s_go(e, input) {

    var keyCode = e.keyCode;
    if (keyCode == "27") {
        s_hideTab();
        input.setAttribute("realValue", "");
    } else if (keyCode != "16") {
// On masque l'assistant s'il est visible
        s_hideTab();
        // Nombre de caract�res minimum pour lequel on affiche l'assistant
        var minChars = input.getAttribute("minChars");
        var valeur = input.getAttribute("valeurHorsListe");
        var xmlAffichageSource = input.getAttribute("xmlaffichagesource");
        // Si la longueur de la cha�ne est au moins �gale au nombre de caract�res minimum
        if (input.value.length >= minChars) {
// Cr�ation de l'assistant
            ajax_suggest(input);
        }

//Si la valeur de l'input est d�j� �gal � un �l�ment de la liste, on r�cup�re la valeur de cet �l�ment de la liste
        var listItem = getListElementByText(input.value);
        if (listItem != null) {
            input.setAttribute("realValue", listItem);
            s_valide(input);
        } else {
            if (valeur == "O" || (xmlAffichageSource !== undefined && xmlAffichageSource.indexOf('valeurhorsliste="O"')) > 1) {
                input.setAttribute("realValue", input.value);
            } else {
                input.setAttribute("realValue", "-");
            }
            s_valide(input);
        }
    }
    if (input.getAttribute("realValue") == "") {
        input.value = "";
    }
}

/* fonction qui g�n�re l'assistant */
function s_generateTab(s_input) {
    selected_line_index = -1;
    if (s_list != null) {
        s_generateTab(s_input);
    }
}



function s_generateTab(s_input) {
    var div_ombre = document.createElement("DIV");
    div_ombre.id = "div_ombre_suggest";
    div_ombre.className = "ombre";
    div_ombre.style.zIndex = "999";
    div_ombre.style.position = "absolute";
    div_ombre.style.top = (getElementTop(s_input) -55) + "px";//s_top + "px";
    div_ombre.style.left = (getElementLeft(s_input) + 1) + "px";//s_left + "px";
    div_ombre.style.cursor = "default";
    //div_ombre.style.width = s_input.offsetWidth;
    /*/
     div_ombre.onkeydown = function() {
     s_keydown(event, s_input);
     }*/

    var div_boite = document.createElement("DIV");
    div_boite.id = "div_boite_color";
    div_boite.className = "boite";
    div_boite.style.border = "1px solid #7F9DB9";
    //div_boite.style.width = s_input.offsetWidth;

    var s_select_element = document.createElement("SELECT");
    //s_select_element.style.width = s_input.offsetWidth;
    s_select_element.id = "s_select_element";
    if (document.all) {
        s_select_element.onkeydown = function () {
            s_keydown(window.event, s_input);
        }
    } else {
        s_select_element.onkeydown = function (event) {
            s_keydown(event, s_input);
        }
    }




    var cptResult = 0; // Compte le nombre de r�sultats affich�s dans l'assistant
    // Pour chaque �l�ment de la liste de donn�es
    for (var i = 0; i < s_list.length; i++) {
// Si le nombre de r�sulats affich� dans l'assistant est inf�rieur au nombre maximal de r�sulats autoris�
        if (s_input.getAttribute("maxResult") == "" || cptResult < s_input.getAttribute("maxResult")) {
            var item = s_list[i];
            // Si l'item de liste en cours commence par la cha�ne pass�e en entr�e
//            if (escape(item[1].toLowerCase()).startsWith(escape(s_input.value.toLowerCase()))) {
            // On cr�e une nouvelle ligne dans l'assistant
            var s_option = document.createElement("OPTION");
            s_option.value = item[0];
            s_option.innerHTML = item[1];
            // Lors du clic sur la ligne, on �crit dans la zone de texte la valeur de la ligne
            // et on masque l'assistant'
            //s_option.onclick = function() {
            //    s_select(s_input, this);
            //}
            s_select_element.appendChild(s_option);
            cptResult++;
//            }
        }/* else {
         var s_option = document.createElement("OPTION");
         s_option.value="-";
         s_option.innerHTML="...";
         s_option.disabled="disabled";
         s_select_element.appendChild(s_option);
         }*/

    }

    s_select_element.onclick = function () {
        var optionList = this.options;
        var trouve = false;
        var i = 0;
        while (i < optionList.length && !trouve) {
            var option = optionList[i];
            if (option.selected) {
                trouve = true;
                s_select(s_input, option);
            }
            i++;
        }
    }




// si on a trouvé au moins 1 résultat, on affiche l'assistant
    if (cptResult > 0) {
        if (cptResult == 1) {
            s_select_element.size = "2";
        } else if (cptResult > 15) {
            s_select_element.size = "15";
        } else {
            s_select_element.size = cptResult;
        }
        div_boite.appendChild(s_select_element);
        if (s_input.getAttribute("maxResult") !== "" && cptResult >= s_input.getAttribute("maxResult")) {

            var s_option_group = document.createElement("OPTGROUP");
            s_option_group.setAttribute("label", "Seuls les " + s_input.getAttribute("maxResult") + " premiers résultats sont affichés");
            s_select_element.appendChild(s_option_group);
            s_select_element.size = cptResult + 1;
        }

        div_ombre.appendChild(div_boite);
        var empty_div = document.getElementById("empty_div");
        //empty_div.appendChild(div_ombre);
        
        var test = document.getElementsByClassName("contentForm");
        
        var verif = false;
        for (var i = 0; i < test.length; i++) {
            if (verif === false) {
                if (test[i].id.indexOf("form") > -1) {
                    test[i].appendChild(div_ombre);
                    verif = true;
                }
            }
        }
    }
}

function s_select(s_input, s_option) {
    if (document.all) {
        s_input.value = s_option.innerText;
    } else {
        s_input.value = s_option.textContent;
    }
    s_input.setAttribute("realValue", s_option.value);
    s_hideTab();
    s_input.focus();
}

function s_hideTab() {
    //var empty_div = document.getElementById("empty_div");
    var empty_div = document.getElementById("div_ombre_suggest");
    if (empty_div != null) {
        //alert(empty_div);
        empty_div.parentNode.removeChild(empty_div);
    }
    //empty_div.style.display = "none";
   // empty_div.innerHTML = "";
}

function s_valide(input) {
//var realInputId = input.getAttribute("for");
    var parent = input.parentNode;
    var inputList = parent.getElementsByTagName("INPUT");
    if (inputList.length > 0) {
        inputList[0].value = input.getAttribute("realValue");
    }

//var realInput = document.getElementById(realInputId);


//if (realInput!=null) {
//    var value = input.getAttribute("realValue");
//    realInput.value = value;
//}
}


var selected_line_index = -1;
function s_keydown(e, input) {
    var div_ombre = document.getElementById("div_ombre_suggest");
    if (div_ombre != null) {
        var keyCode = e.keyCode;
        if (keyCode == "40" || keyCode == "38") {
            if (input != null) {
                input.blur();
            }
            var s_select_element = document.getElementById("s_select_element");
            if (s_select_element != null) {
                s_select_element.focus();
            }
            /*
             if (keyCode=="40") {
             
             } else if (keyCode=="38") {
             
             }*/
        } else if (keyCode == "13") {
            if (e.target) {
                if (e.target.tagName == "SELECT") {
                    var s_select_element = document.getElementById("s_select_element");
                    if (s_select_element != null) {
                        var optionList = s_select_element.options;
                        var trouve = false;
                        var i = 0;
                        while (i < optionList.length && !trouve) {
                            var option = optionList[i];
                            if (option.selected) {
                                trouve = true;
                                s_select(input, option);
                            }
                            i++;
                        }
                    }
                }
            } else {
                if (e.srcElement.tagName == "SELECT") {
                    var s_select_element = document.getElementById("s_select_element");
                    if (s_select_element != null) {
                        var optionList = s_select_element.options;
                        var trouve = false;
                        var i = 0;
                        while (i < optionList.length && !trouve) {
                            var option = optionList[i];
                            if (option.selected) {
                                trouve = true;
                                s_select(input, option);
                            }
                            i++;
                        }
                    }
                }
            }

        } else if (keyCode == "8") {
            input.focus();
        }

        if (input.value == "") {
            input.setAttribute("realValue", "");
        }
    }
}

function isParent(pElement, pId) {
    var trouve = false;
    if (pElement == null)
        return false;
    while (pElement.parentNode != null && !trouve) {
        var pParent = pElement.parentNode;
        if (pParent.id == pId) {
            trouve = true;
        }
        pElement = pParent;
    }
    return trouve;
}

function getListElementByText(text) {
    var returnValue = null;
    var trouve = false;
    var cpt = 0;
    while (cpt < s_list.length && !trouve) {
        var item = s_list[cpt];
        if (item[1] == text) {
            returnValue = item[0];
            trouve = true;
        }
        cpt++;
    }
    return returnValue;
}



