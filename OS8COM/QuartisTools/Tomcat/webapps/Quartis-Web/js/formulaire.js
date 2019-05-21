/* Function appelee e l'ouverture de la page */
function initPage() {
    // Si le textarea de l'export est visible, on selectionne son contenu par defaut.
    var textarea_export = document.getElementById("form1:textarea_export");
    if (textarea_export != null) {
        textarea_export.select();
    }

    document.onmousedown = function(evt) {
        var div_ombre = document.getElementById("div_ombre_color");
        if (div_ombre != null) {
            if (evt) {
                if (!(evt.target.id == "div_ombre_color") && !(isParent(evt.target, "div_ombre_color"))) {
                    div_ombre.style.display = "none";
                }
            } else {
                if (!(window.event.srcElement.id == "div_ombre_color") && !(isParent(window.event.srcElement, "div_ombre_color"))) {
                    div_ombre.style.display = "none";
                }
            }
        }
    };
    
    initResizeDataGridColumn();

    keepDataGridParams();
    
    var panelGroupFormTabOverflow = document.getElementById("form1:panelGroupFormTabOverflow");
    
    if (panelGroupFormTabOverflow != null) {
        panelGroupFormTabOverflow.onscroll = function() {
            var div_ombre = document.getElementById("div_ombre_color");
            if (div_ombre != null) {
                if (div_ombre.style.display != "none") {
                    div_ombre.style.top = getElementTop(color_picker_img) + 20 - panelGroupFormTabOverflow.scrollTop;
                }
                  
            }
        };
        //
    }
}

var paramTabArray = new Array();
var paramAlpha;
function keepDataGridParams() {
    //--- on recupere le tableau
    var paramTable = document.getElementById("form1:paramTabDataTable");
    if (paramTable != null) {
        //--- dans ce tableau, on recupere la liste des elements TBODY (normalement un seul)
        var paramTbodyList = paramTable.getElementsByTagName("TBODY");
        //--- S'il y en a un
        if (paramTbodyList.length>0) {
            //--- on le recupere
            var paramTbody = paramTbodyList[0];
            //--- on recupere la liste des elements TR de ce TBODY
            var paramTrList = paramTbody.getElementsByTagName("TR");
            //--- tant que le compteur est in ferieur au nombre de TR, on boucle
            for (var i = 0; i<paramTrList.length; i++) {
                var paramTr = paramTrList[i];
                //--- On recupere la liste des elements INPUT du TR en cours
                var inputList = paramTr.getElementsByTagName("INPUT");
                // S'il y en a 2
                if (inputList.length == 2) {
                    //--- Le checkbox est le 1er
                    var checkInput = inputList[0];
                    //--- La zone de texte des tailles de colonne est le 2eme
                    var textInput = inputList[1];
                    //--- On sauvegarde la valeur des 2 inputs dans une liste
                    paramTabArray.push(new Array(checkInput.checked, textInput.value));
                }
            }
        }
    }
    var selectColumnAlphaSearch = document.getElementById("form1:selectColumnAlphaSearch");
    if (selectColumnAlphaSearch != null) {
        paramAlpha = selectColumnAlphaSearch.value;
    }
}

var checkAllColumns = false;
function checkAllColumnsVisible() {

    var check = checkAllColumns;
    checkAllColumns = !check;
    
    //--- on recupere le tableau
    var paramTable = document.getElementById("form1:paramTabDataTable");
    //--- dans ce tableau, on recupere la liste des elements TBODY (normalement un seul)
    var paramTbodyList = paramTable.getElementsByTagName("TBODY");
    //--- S'il y en a un
    if (paramTbodyList.length>0) {
        //--- on le recupere
        var paramTbody = paramTbodyList[0];
        //--- on recupere la liste des elements TR de ce TBODY
        var paramTrList = paramTbody.getElementsByTagName("TR");
        //--- tant que le compteur est in ferieur au nombre de TR, on boucle
        for (var i = 0; i<paramTrList.length; i++) {
            var paramTr = paramTrList[i];
            //--- On recupere la liste des elements INPUT du TR en cours
            var inputList = paramTr.getElementsByTagName("INPUT");
            // S'il y en a 2
            if (inputList.length == 2) {
                //--- Le checkbox est le 1er
                var checkInput = inputList[0];
                checkInput.checked = check;
            }
        }
    }
}

function restoreDataGridParams() {
    //--- on recupere le tableau
    var paramTable = document.getElementById("form1:paramTabDataTable");
    //--- dans ce tableau, on recupere la liste des elements TBODY (normalement un seul)
    var paramTbodyList = paramTable.getElementsByTagName("TBODY");
    //--- S'il y en a un
    if (paramTbodyList.length>0) {
        //--- on le recupere
        var paramTbody = paramTbodyList[0];
        //--- on recupere la liste des elements TR de ce TBODY
        var paramTrList = paramTbody.getElementsByTagName("TR");
        //--- tant que le compteur est in ferieur au nombre de TR, on boucle
        for (var i = 0; i<paramTrList.length; i++) {
            var paramTr = paramTrList[i];
            //--- On recupere la liste des elements INPUT du TR en cours
            var inputList = paramTr.getElementsByTagName("INPUT");
            // S'il y en a 2
            if (inputList.length == 2) {
                //--- Le checkbox est le 1er
                var checkInput = inputList[0];
                //--- La zone de texte des tailles de colonne est le 2eme
                var textInput = inputList[1];
                
                var currentArray = paramTabArray[i];
                checkInput.checked = currentArray[0];
                textInput.value = currentArray[1];
            }
        }
    }
    document.getElementById("form1:selectColumnAlphaSearch").value = paramAlpha;
}

function resizeDataGrid() {
    var pageWidth = document.body.clientWidth;
    //var ecart = 109;
    var ecart = 104; // s'agrandira une fois le filtre alphanumerique gere
    if (document.getElementById("form1:dataGrid1") != null) {
        document.getElementById("form1:dataGrid1").style.width = pageWidth - ecart;
    } 
    if (document.getElementById("form1:dataGrid1::dataTitle_scroll") != null) {
        document.getElementById("form1:dataGrid1::dataTitle_scroll").style.width = pageWidth - ecart - 2;
    } 
    if (document.getElementById("form1:dataGrid1::fixedHeader") != null) {
        document.getElementById("form1:dataGrid1::fixedHeader").style.width = pageWidth - ecart - 19;
    } 
    if (document.getElementById("form1:dataGrid1::dataBody_scroll") != null) {
        document.getElementById("form1:dataGrid1::dataBody_scroll").style.width = pageWidth - ecart - 2;
    } 
    if (document.getElementById("form1:dataGrid1::dataTable") != null) {
        document.getElementById("form1:dataGrid1::dataTable").style.width = pageWidth - ecart - 19;
    } 
}

function getLeft(MyObject) {
    if (MyObject.offsetParent)
        return (MyObject.offsetLeft + getLeft(MyObject.offsetParent));
    else
        return (MyObject.offsetLeft);
}

function getTop(MyObject) {
    if (MyObject.offsetParent)
        return (MyObject.offsetTop + getTop(MyObject.offsetParent));
    else
        return (MyObject.offsetTop);
}

function showColumnChooser() {
    deactivatePage();

    var paramTabPanel = document.getElementById("form1:paramTabPanel");
    paramTabPanel.style.display = "inline";

}

function showMultiLangPanel() {
    deactivatePage();
    
    var multiLangPanel = document.getElementById("form1:panel_multi_lang");
    multiLangPanel.style.display = "inline";
}

function hideColumnChooser() {
    var paramTabPanel = document.getElementById("form1:paramTabPanel");
    paramTabPanel.style.display = "none";
    activatePage();
    
    restoreDataGridParams();
}


function isParent(pElement, pId) {
    var trouve = false;
    if (pElement == null) return false;
    while (pElement.parentNode != null && !trouve) {
        var pParent = pElement.parentNode;
        if (pParent.id == pId) {
            trouve = true;
        }
        pElement = pParent;
    }
    return trouve;
}

var initCursorY;

function activeDrag(evt) {//el_click
    var evt1 = evt || window.event; // event object
    var target = evt1.target || window.event.srcElement; // event target
    
    var el = target.parentNode.parentNode.parentNode.parentNode;
    initCursorY = evt.clientY;
    var initElementY = el.style.top;
    if (initElementY === "") {
        initElementY = 0;
    }
    el.style.position = "relative";
    changeOpacity(el, 50);
    document.onmousemove = function(evt) {
        var evt1 = evt || window.event; // event object
        doDrag(evt1, el, initElementY);
    }
    document.onmouseup = function() {
        changeOpacity(el, 100);
        this.onmousemove = null;
    }

}

function doDrag(evt, el, initElementY) {
    el.style.top = parseInt(initElementY)+evt.clientY-initCursorY;
}

//fonction recursive
function changeOpacity(el, nb) {
    if (el.style) {
        el.style.filter = "alpha(opacity = " + nb + ")";
        var childList = el.childNodes;
        for(var i = 0; i<childList.length; i++) {
            changeOpacity(childList[i], nb);
        }
    }
}


function cancelEnterKey() {
    if (window.event.keyCode == 13) {
        return cancel();
    } else {
        return true;
    }

}

function sur() {
    var a = confirm("Confirmer la suppression ?");
    if (a) {
        return true;
    } else {
        return cancel();
    }
}

function cancel() {
    window.event.cancelBubble = true;
    window.event.returnValue = false;
    return false;
}

function f_ariane(moduleid, pageid, text) {
    document.getElementById('ariane').value = 'OK';
    document.getElementById('ariane_moduleid').value = moduleid;
    document.getElementById('ariane_pageid').value = pageid;
    document.getElementById('ariane_text').value = text;
}

function test() {
    var arianeComp = document.getElementById("ariane");
    return arianeComp.value;
}

var timer = 0;
var componentID;
var sens;

function startScroll(p_componentID, p_sens) {
    componentID = p_componentID;
    sens = p_sens;
    timer = setInterval("scroll()", 75);
}

function stopScroll() {
    clearInterval(timer);
}

function scroll() {
    var component = document.getElementById(componentID);
    if (component != null) {
        if (sens === "+") {
            component.scrollTop = component.scrollTop + 10;
        } else if (sens === "-") {
            component.scrollTop = component.scrollTop - 10;
        }
    }

}

function showExportPanel() {
    deactivatePage();
    document.getElementById('form1:exportPanel').style.display = 'inline';
}

function hideExportPanel() {
    document.getElementById('form1:exportPanel').style.display = 'none';
    activatePage();
}

function activatePage() {
    document.getElementById('form1:panel_desactiv').style.display = 'none';
}

function deactivatePage() {
    document.getElementById('form1:panel_desactiv').style.display = 'inline';
}



function showImportPanel() {
    
    var hiddenImport = document.getElementById("form1:hidden_import");
    var textArea = document.getElementById("form1:textarea_import");
    hiddenImport.value = textArea.value;
        
    deactivatePage();
    var importPanel = document.getElementById('form1:importPanel');
    importPanel.style.zIndex = 310;
    importPanel.style.display = 'inline';
}

function hideImportPanel() {
    document.getElementById('form1:importPanel').style.display = 'none';
    activatePage();
}


function showDeletePanel(suppAdmin) {
    /*
    var tabbedPane = document.getElementById("form_tableau:tabbedpane_1");
    //alert(tabbedPane);
    tabbedPane.f_setValue("TAB1");
    */
    //a = new f_component();
    
    var tab = f_core.GetElementById("form1:tab1");
    var tabbedPane = f_core.GetElementById("form1:tabbedPane1");
    tabbedPane.f_selectCard(tab);

    
    deactivatePage();
    
    var node = document.getElementById('form1:panel_delete');
    node.style.zIndex = 310;
    node.style.display = 'inline';
    
    
    if (suppAdmin === "suppadmin"){
        document.getElementById("form1:conf_supp").style.display = "inline";
        document.getElementById("form1:conf_restore").style.display = "none";
        document.getElementById("form1:panel_supp_admin").style.display = "inline";
        document.getElementById("form1:panel_supp_definitif").style.display = "none";
        document.getElementById("form1:panel_restaurer").style.display = "none";
        document.getElementById("form1:panel_info_suppr_admin").style.display = "inline";
        document.getElementById("form1:panel_info_suppr_def").style.display = "none";
        
    }else if (suppAdmin === "supp"){
        document.getElementById("form1:conf_supp").style.display = "inline";
        document.getElementById("form1:conf_restore").style.display = "none";
        document.getElementById("form1:panel_supp_admin").style.display = "none";
        document.getElementById("form1:panel_supp_definitif").style.display = "inline";
        document.getElementById("form1:panel_restaurer").style.display = "none";
        document.getElementById("form1:panel_info_suppr_admin").style.display = "none";
        document.getElementById("form1:panel_info_suppr_def").style.display = "inline";
        
    }else if (suppAdmin === "rest"){
      
        document.getElementById("form1:conf_supp").style.display = "none";
        document.getElementById("form1:conf_restore").style.display = "inline";
        document.getElementById("form1:panel_supp_admin").style.display = "none";
        document.getElementById("form1:panel_supp_definitif").style.display = "none";
        document.getElementById("form1:panel_restaurer").style.display = "inline";
        document.getElementById("form1:panel_info_suppr_admin").style.display = "none";
        document.getElementById("form1:panel_info_suppr_def").style.display = "none";
        
    }
    
}

function hideDeletePanel() {
    document.getElementById('form1:panel_delete').style.display = 'none';
    activatePage();
}


function showMultiLangPanel(o){

    deactivatePage();

    var node = document.getElementById('form1:panel_multi_lang');
    node.style.zIndex = 310;
    node.style.display = 'inline';
    document.getElementById("form1:conf_test1").value = "khmo";
    document.getElementById("form1:shadowPanelForMultiLangPanelCancelButton").style.display = "inline";
    document.getElementById("form1:shadowPanelForMultiLangPanelValidButton").style.display = "inline";

}

function hideMultiLangPanel() {
    document.getElementById('form1:panel_multi_lang').style.display = 'none';
    activatePage();
}

function importFocus(textarea) {
    if (textarea.value === "Copiez le contenu du fichier à importer ici.") {
        textarea.value = "";
    } else if (textarea.value === "Copy the contents of the file to be imported here.") {
        textarea.value = "";
    }
}

function importBlur(textarea) {
    if (textarea.innerText === "") {
        textarea.innerText = "Copiez le contenu du fichier à importer ici.";
    }
}

function resizeMessagesPanel(img) {
    var messagesPanel = document.getElementById("form1:messSansPopup");
    if (messagesPanel.style.height === '20px') {
        messagesPanel.style.height = '100px';
        messagesPanel.style.overflow = 'auto';
        img.src = "images/up_arrow1.png";
    } else {
        messagesPanel.style.height = '20px';
        messagesPanel.style.overflow = 'hidden';
        img.src = "images/down_arrow1.png";
    } 
}


function testradio(radio) {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i<inputs.length; i++) {
        var input = inputs[i];
        if (input.type === "radio") {
            if (input.id != radio.id) {
                if (input.name.indexOf("radio_alpha") >= 0) {
                    input.checked = false;
                }
            }
        }
    }
}

function hidePopupMessage() {
    var popupTable = document.getElementById('form1:popupTable');
    var panel_desactiv_for_popup_message = document.getElementById('form1:panel_desactiv_for_popup_message');
    popupTable.style.display = 'none';
    panel_desactiv_for_popup_message.style.display = 'none';
}


function callExportCsvService(event) {
    var csvService = f_core.GetElementById("form1:exportCsvService");
    

    
    var requestID = csvService.f_asyncCall(new function() {result(event);}, null, null);
    alert(requestID);
    //csvService.f_syncCall(null, null);
}


function result(event) {
    
}

function addToFavorites() {
    
    var pageName = document.getElementById("form1:favoritePageName").value;
    var webContainerWidth = getClientDimensions()[0];
    var webContainerHeight = getClientDimensions()[1];
    
    document.location.href = 
            "xxx.cas?action=save_favoris&type=formulaire&pageName=" + pageName +
            "&webContainerHeight=" + webContainerHeight +
            "&webContainerWidth=" + webContainerWidth;
}

function removeFromFavorites() {
    
    var webContainerWidth = getClientDimensions()[0];
    var webContainerHeight = getClientDimensions()[1];
    
    document.location.href = "xxx.cas?action=delete_favoris&type=formulaire" + 
                                "&webContainerHeight=" + webContainerHeight +
                                "&webContainerWidth=" + webContainerWidth;
}


var resizeTimer = 0;

//--- Methode appelee au chargement de la page et qui ajoute une methode associee 
//--- e l'evenement onresize e chaque colonne du tableau
function initResizeDataGridColumn() {
    //--- On recupere le dataGrid
    var dataGrid = document.getElementById("form1:dataGrid1");
    if (dataGrid != null) {
        //--- On recupere la liste des elements TH (colonnes) du dataGrid
        var columnList = dataGrid.getElementsByTagName("TH");
        for (var i = 0; i<columnList.length; i++) {
            var column = columnList[i];
            //--- On ajoute un attribut resize_indice e chaque colonne
            column.setAttribute("resize_indice", i);
            //--- On lui ajoute une methode sur l'evenement onresize
            column.onresize = function() {

                var divList = this.getElementsByTagName("DIV");
                if (divList.length>0) {
                    var div = divList[0];
                    if (div != null) {
                        var width = parseInt(div.style.width.replace("px", "")) + 8;
                        clearTimeout(resizeTimer);
                        resizeTimer = setTimeout("fireResizeDataGridColumn(" + this.getAttribute("resize_indice") + "," + width + ")", 500);
                    }
                }
            }
        }
    }
        
}

//--- Methode qui synchronise les zones de saisie de taille des colonnes du panel de parametrage des colonnes
//--- lorsque un redimensionnement e ete fait par glisser/deplacer d'une entete de colonne.
function fireResizeDataGridColumn(indice, width) {

    //--- on recupere le tableau
    var paramTable = document.getElementById("form1:paramTabDataTable");
    //--- dans ce tableau, on recupere la liste des elements TBODY (normalement un seul)
    var paramTbodyList = paramTable.getElementsByTagName("TBODY");
    //--- S'il y en a un
    if (paramTbodyList.length>0) {
        //--- on le recupere
        var paramTbody = paramTbodyList[0];
        //--- on recupere la liste des elements TR de ce TBODY
        var paramTrList = paramTbody.getElementsByTagName("TR");
        var cptTotal = 0;
        var cptVisible = 0;
        var trouve = false;
        //--- tant que le compteur est in ferieur au nombre de TR, on boucle
        while (cptTotal<paramTrList.length && !trouve) {
            var paramTr = paramTrList[cptTotal];
            //--- On recupere la liste des elements INPUT du TR en cours
            var inputList = paramTr.getElementsByTagName("INPUT");
            // S'il y en a 2
            if (inputList.length == 2) {
                //--- Le checkbox est le 1er
                var checkInput = inputList[0];
                //--- La zone de texte des tailles de colonne est le 2eme
                var textInput = inputList[1];
                //--- Si le checkbox est checke, cela signifie que la colonne est visible dans le tableau
                if (checkInput.checked) {
                    cptVisible++;
                    //--- Si le compteur des colonnes visibles est egal e l'indice passe en parametre
                    if (cptVisible == indice) {
                        //--- On met e jour la zone de texte avec la taille passee en parametre
                        textInput.value = width;
                        currentArray = paramTabArray[cptTotal];
                        currentArray[1] = width;
                        trouve = true;
                    }
                }
            }
            
            cptTotal++;
        }
    }
    
}

var color_picker_img;

function showColorPanel(p_color_picker_img) {
    color_picker_img = p_color_picker_img;
    
    var div_ombre = document.getElementById("div_ombre_color");
   
    if (div_ombre === null) {
               
        div_ombre = document.createElement("DIV");
        div_ombre.id = "div_ombre_color";
        div_ombre.className = "ombre";
        //div_ombre.style.width = "300px";
        //div_ombre.style.height = "300px";
        div_ombre.style.zIndex = "999";
        div_ombre.style.position = "absolute";
        
        
        var div_boite = document.createElement("DIV");
        div_boite.id = "div_boite_color";
        div_boite.className = "boite";
        div_boite.style.border = "2px solid #3877AA";
        div_boite.style.top = "-70px";
        div_boite.style.left = "15px";
        //div_boite.style.width = "300px";
        //div_boite.style.height = "300px";
        
        
        var cp_table = document.getElementById("cp_table");
        cp_table = document.createElement("TABLE");
        cp_table.id = "cp_table";
        cp_table.cellPadding = "0";
        cp_table.cellSpacing = "0";
        var cp_tbody = document.createElement("TBODY");
        var cp_tr = document.createElement("TR");
        var mod = 0;
        var end_td = document.createElement("TD");
        end_td.id = "end_td";
        end_td.colSpan = "8";
        end_td.style.cursor = "default";
        
        end_td.style.textAlign = "center";
        for (var i = 0; i < color_array.length; i++) {
            mod = (i/16)%2;
            if (mod === 0 || mod === 1) {
                cp_tr = document.createElement("TR");
            }
            var cp_td = document.createElement("TD");
            cp_td.style.width = "12px";
            cp_td.style.height = "12px";
            cp_td.style.border = "1px solid #FFFFFF";
            cp_td.innerHTML = ".";
            cp_td.style.cursor = "default";
            cp_td.style.color = color_array[i];
            cp_td.style.backgroundColor = color_array[i];
            
            cp_td.onmouseover = function() {
                this.style.border = "1px solid #FF0000";
                end_td.style.backgroundColor = this.style.backgroundColor;
                end_td.innerHTML = this.style.backgroundColor;
            };
            
            cp_td.onmouseout = function() {
                this.style.border = "1px solid #FFFFFF";
                end_td.style.backgroundColor = color_picker_img.style.backgroundColor;
                end_td.innerHTML = color_picker_img.style.backgroundColor;
            };
            
            cp_td.onclick = function() {
                div_ombre.style.display = "none";
                color_picker_img.style.backgroundColor = this.style.backgroundColor;
                var stringRgbColor = this.style.backgroundColor.toUpperCase();
                var stringHexColor = stringRgbToHex(stringRgbColor);
                color_picker_img.parentNode.parentNode.parentNode.getElementsByTagName("INPUT")[0].value = stringHexColor;
            };
            
            cp_tr.appendChild(cp_td);
            
            if (mod === 0 || mod === 1) {
                cp_tbody.appendChild(cp_tr);
            }
            if (i === 215) {
                cp_tr.appendChild(end_td);
            }
        }

        cp_table.appendChild(cp_tbody);
        div_boite.appendChild(cp_table);
        div_ombre.appendChild(div_boite);
        document.getElementById("form1:color_picker_container").appendChild(div_ombre);
    } else {
        if (div_ombre.style.display === "none") {
            div_ombre.style.display = "inline";
        } else {
            div_ombre.style.display = "none";
        }
        
    }
    
    var the_end_td = document.getElementById("end_td");
    if (the_end_td != null) {
        the_end_td.innerHTML = color_picker_img.style.backgroundColor;
        the_end_td.style.backgroundColor = color_picker_img.style.backgroundColor;
    }
    
    var panelGroupFormTabOverflow = document.getElementById("form1:panelGroupFormTabOverflow");
    
    div_ombre.style.top = getElementTop(color_picker_img) - 20 - panelGroupFormTabOverflow.scrollTop;
    div_ombre.style.left = getElementLeft(color_picker_img);
        
}


var color_array = new Array(
"990033", "FF3366", "CC0033", "FF0033", "FF9999", "CC3366", "FFCCFF", "CC6699", "993366", "660033", "CC3399", "FF9933", "FF66CC", "FF99FF", "FF6699", "CC0066",
"FF0066", "FF3399", "FF0099", "FF33CC", "FF00CC", "FF66FF", "FF33FF", "FF00FF", "CC0099", "990066", "990033", "CC66CC", "CC33CC", "CC99FF", "CC66FF", "993399",
"CC00CC", "CC00FF", "9900CC", "990099", "CC99CC", "996699", "663366", "660099", "9933CC", "660066", "9900FF", "9933FF", "9966CC", "330033", "663399", "6633CC",
"6600CC", "9966FF", "330066", "6600FF", "6633FF", "CCCCFF", "9999FF", "9999CC", "6666CC", "6666FF", "666699", "333366", "333399", "330099", "3300CC", "3300FF",
"3333FF", "3333CC", "0066FF", "0033FF", "3366FF", "3366CC", "000066", "000033", "0000FF", "000099", "0033CC", "0000CC", "336699", "0066CC", "99CCFF", "6699FF",
"003366", "6699CC", "006699", "3399CC", "0099CC", "66CCFF", "3399FF", "003399", "0099FF", "33CCFF", "00CCFF", "99FFFF", "66FFFF", "33FFFF", "00FFFF", "00CCCC",
"009999", "669999", "99CCCC", "CCFFFF", "33CCCC", "66CCCC", "339999", "336666", "006666", "003333", "00FF00", "33FFCC", "33CC99", "00CC99", "66FFCC", "99FFCC",
"00FF99", "339966", "006633", "336633", "669966", "66CC66", "99FF99", "66FF66", "339933", "99CC99", "66FF99", "33FF99", "33CC66", "00CC66", "66CC99", "009966",
"009933", "33FF66", "00FF66", "CCFFCC", "CCFF99", "99FF66", "99FF33", "00FF33", "33FF33", "00CC33", "33CC33", "66FF33", "00FF00", "66CC33", "006600", "003300",
"009900", "33FF00", "66FF00", "99FF00", "66CC00", "00CC00", "33CC00", "339900", "99CC66", "669933", "99CC33", "336600", "669900", "99CC00", "CCFF66", "CCFF33",
"CCFF00", "999900", "CCCC00", "CCCC33", "333300", "666600", "999933", "CCCC66", "666633", "999966", "CCCC99", "FFFFCC", "FFFF99", "FFFF66", "FFFF33", "FFFF00",
"FFCC00", "FFCC66", "FFCC33", "CC9933", "996600", "CC9900", "FF9900", "CC6600", "993300", "CC6633", "663300", "FF9966", "FF6633", "FF9933", "FF6600", "CC3300",
"996633", "330000", "663333", "996666", "CC9999", "993333", "CC6666", "FFCCCC", "FF3333", "CC3333", "FF6666", "660000", "990000", "CC0000", "FF0000", "FF3300",
"CC9966", "FFCC99", "FFFFFF", "CCCCCC", "999999", "666666", "333333", "000000"
);


/*
 * Pour la conversion RGB / hexa cf.
 * http://stackoverflow.com/a/5624139/2112089
 */

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function stringRgbToHex(stringRgb){

    var stringRawNumbers = stringRgb.substring(4, stringRgb.length - 1);

    var arrayNumbers = stringRawNumbers.split(',');
    var red = parseInt(arrayNumbers[0].trim());
    var green = parseInt(arrayNumbers[1].trim());
    var blue = parseInt(arrayNumbers[2].trim());
    
    var stringHexColor = rgbToHex(red, green, blue);
    return stringHexColor;
}

function getElementWidth(elem) {
    var yPos = elem.offsetWidth;
    var tempEl = elem.offsetParent;
    while (tempEl != null) {
        yPos += tempEl.offsetWidth;
        tempEl = tempEl.offsetParent;
    }
    return yPos;
    
}

function encodeURLLink() {
    var links = document.getElementsByClassName("commandLink");
    for (var i = 0; i < links.length; i++) {
        var link = links[i].href;
        if (link.indexOf("+") > -1) {
            link = link.replace("+", "%2B");
            links[i].href = link;

        }
    }
}

function onMouseEnter() {
    var selectedTab = $("#form1\\:selectedTab");
    
    if (selectedTab !== undefined) {
        var value = $("#form1\\:selectedTab").val();

        if (value !== undefined && value === 'tab1') {
            $("#form1\\:searchButton").click();
            return false;
        }
    }
}