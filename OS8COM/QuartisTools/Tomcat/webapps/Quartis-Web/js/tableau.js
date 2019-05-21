/* Function appelee e l'ouverture de la page */
function initPage() {

    var load_table = document.getElementById("load_table");
    var container = document.getElementById("container");
    //--- Masquage le panel de chargment
    if (load_table!=null) {
        load_table.style.display = "none";
    }
    //--- Affichage du contenu de la page
    if (container!=null) {
        container.style.visibility = "visible";
    }
    
    /*
    resizeDataGrid();
    
    window.onresize = function () {
        resizeDataGrid();
    }*/
    
    
    // Si le textarea de l'export est visible, on selectionne son contenu par defaut.
    var textarea_export = document.getElementById("form_tableau:textarea_export");
    if (textarea_export!=null) {
        textarea_export.select();
    }

}

function resizeDataGrid() {
    var pageWidth = document.body.clientWidth;
    var ecart = 109;
    if (document.getElementById("form_tableau:datagrid_1")!=null) {
        document.getElementById("form_tableau:datagrid_1").style.width = pageWidth - ecart;
    } 
    if (document.getElementById("form_tableau:datagrid_1::dataTitle_scroll")!=null) {
        document.getElementById("form_tableau:datagrid_1::dataTitle_scroll").style.width = pageWidth - ecart - 2;
    } 
    if (document.getElementById("form_tableau:datagrid_1::fixedHeader")!=null) {
        document.getElementById("form_tableau:datagrid_1::fixedHeader").style.width = pageWidth - ecart - 19;
    } 
    if (document.getElementById("form_tableau:datagrid_1::dataBody_scroll")!=null) {
        document.getElementById("form_tableau:datagrid_1::dataBody_scroll").style.width = pageWidth - ecart - 2;
    } 
    if (document.getElementById("form_tableau:datagrid_1::dataTable")!=null) {
        document.getElementById("form_tableau:datagrid_1::dataTable").style.width = pageWidth - ecart - 19;
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

function showHideColumnChooser(lien) {

    var left = getLeft(lien);
    var top = getTop(lien);

    var div_colonnes = document.getElementById("div_colonnes");

    if (div_colonnes.parentNode.parentNode.style.display==="none") {
        div_colonnes.parentNode.parentNode.style.top = top - 15;
        div_colonnes.parentNode.parentNode.style.left = left;
        div_colonnes.parentNode.parentNode.style.left = left - (parseInt(div_colonnes.parentNode.parentNode.style.width) - parseInt(lien.offsetWidth));
        div_colonnes.parentNode.parentNode.style.display="inline";
    } else {
        div_colonnes.parentNode.parentNode.style.display="none";
    }

}

document.onmousedown = function(evt) {
    var evt = evt || window.event; // event object
    var target = evt.target || window.event.srcElement; // event target
    if (document.getElementById("div_colonnes")!=null) {
        if (!isParent(target, "div_colonnes")) {
            document.getElementById("div_colonnes").parentNode.parentNode.style.display = "none";
        }
    }
};

function isParent(pElement, pId) {
    var trouve = false;
    if (pElement==null) return false;
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
    var evt = evt || window.event; // event object
    var target = evt.target || window.event.srcElement; // event target
    
    var el = target.parentNode.parentNode.parentNode.parentNode;
    initCursorY = evt.clientY;
    var initElementY = el.style.top;
    if (initElementY==="") {
        initElementY = 0;
    }
    el.style.position = "relative";
    changeOpacity(el, 50);
    document.onmousemove = function(evt) {
        var evt = evt || window.event; // event object
        doDrag(evt, el, initElementY);
    };
    document.onmouseup = function() {
        changeOpacity(el, 100);
        this.onmousemove = null;
    };
}

function doDrag(evt, el, initElementY) {
    el.style.top = parseInt(initElementY)+evt.clientY-initCursorY;
}

//fonction recursive
function changeOpacity(el, nb) {
    if (el.style) {
        el.style.filter = "alpha(opacity=" + nb + ")";
        var childList= el.childNodes;
        for(var i=0; i<childList.length; i++) {
            changeOpacity(childList[i], nb);
        }
    }
}


/*

function imageDownOver(el) {
    for (var i=0; i<el.childNodes.length; i++) {
            if (el.childNodes[i].tagName=="IMG") {
                el.childNodes[i].src="images/down_arrow.png";
            }
    }
}

function imageDownOut(el) {
    for (var i=0; i<el.childNodes.length; i++) {
            if (el.childNodes[i].tagName=="IMG") {
                el.childNodes[i].src="images/down_arrow1.png";
            }
    }
}

function imageUpOver(el) {
    for (var i=0; i<el.childNodes.length; i++) {
            if (el.childNodes[i].tagName=="IMG") {
                el.childNodes[i].src="images/up_arrow.png";
            }
    }
}

function imageUpOut(el) {
    for (var i=0; i<el.childNodes.length; i++) {
            if (el.childNodes[i].tagName=="IMG") {
                el.childNodes[i].src="images/up_arrow1.png";
            }
    }
}

*/











function cancelEnterKey() {
    if (window.event.keyCode==13) {
        return cancel();
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
    if (component!=null) {
        if (sens==="+") {
            component.scrollTop = component.scrollTop + 10;
        } else if (sens==="-") {
            component.scrollTop = component.scrollTop - 10;
        }
    }

}

function showExportPanel() {
    deactivatePage();
    document.getElementById('panel_export').parentNode.style.display='inline';
}

function hideExportPanel() {
    document.getElementById('panel_export').parentNode.style.display='none';
    activatePage();
}

function activatePage() {
    document.getElementById('panel_desactiv').style.display='none';
}

function deactivatePage() {
    document.getElementById('panel_desactiv').style.display='inline';
}



function showImportPanel() {
    
    document.getElementById("form_tableau:hidden_import").value = document.getElementById("textarea_import").value;

    deactivatePage();
    document.getElementById('panel_import').parentNode.style.zIndex = 310;
    document.getElementById('panel_import').parentNode.style.display='inline';
}

function hideImportPanel() {
    document.getElementById('panel_import').parentNode.style.display='none';
    activatePage();
}


function showDeletePanel(suppAdmin) {
    /*
    var tabbedPane = document.getElementById("form_tableau:tabbedpane_1");
    //alert(tabbedPane);
    tabbedPane.f_setValue("TAB1");
    */
    //a = new f_component();
    
    var tab=f_core.GetElementById("form_tableau:tab_1");
    var tabbedPane=f_core.GetElementById("form_tableau:tabbedpane_1");
    tabbedPane.f_selectCard(tab);

    
    deactivatePage();
    
    var node = document.getElementById('panel_delete');
    node.parentNode.parentNode.style.zIndex = 310;
    node.parentNode.parentNode.style.display='inline';
    
    
    if (suppAdmin === "suppadmin"){
        
        // Message confirm suppression est affiche dans la popup
        node.firstChild.childNodes[0].firstChild.childNodes[0].style.display='inline';
        // Message confirm restauration n'est pas affiche dans la popup
        node.firstChild.childNodes[0].firstChild.childNodes[1].style.display='none';
        
        
        // Bouton d'id=panel_supp_admin est affiche dans la popup
        node.firstChild.childNodes[1].firstChild.childNodes[0].firstChild.childNodes[0].style.display='inline';
        // Bouton d'id=panel_supp_definitif n'est pas affiche dans la popup
        node.firstChild.childNodes[1].firstChild.childNodes[0].firstChild.childNodes[1].style.display='none';        
        // Bouton d'id=panel_restaurer n'est pas affiche dans la popup
        node.firstChild.childNodes[1].firstChild.childNodes[0].firstChild.childNodes[2].style.display='none';
    }else if (suppAdmin === "supp"){
      
        // Message confirm suppression est affiche dans la popup
        node.firstChild.childNodes[0].firstChild.childNodes[0].style.display='inline';
        // Message confirm restauration n'est pas affiche dans la popup
        node.firstChild.childNodes[0].firstChild.childNodes[1].style.display='none';
    
        // Bouton d'id=panel_supp_admin n'est pas affiche dans la popup
        node.firstChild.childNodes[1].firstChild.childNodes[0].firstChild.childNodes[0].style.display='none';
        // Bouton d'id=panel_supp_definitif est affiche dans la popup
        node.firstChild.childNodes[1].firstChild.childNodes[0].firstChild.childNodes[1].style.display='inline';
        // Bouton d'id=panel_restaurer n'est pas affiche dans la popup
        node.firstChild.childNodes[1].firstChild.childNodes[0].firstChild.childNodes[2].style.display='none';
    }else if (suppAdmin === "rest"){
      
        // Message confirm suppression n'est pas affiche dans la popup
        node.firstChild.childNodes[0].firstChild.childNodes[0].style.display='none';
        // Message confirm restauration est affiche dans la popup
        node.firstChild.childNodes[0].firstChild.childNodes[1].style.display='inline';
      
        
        // Bouton d'id=panel_supp_admin n'est pas affiche dans la popup
        node.firstChild.childNodes[1].firstChild.childNodes[0].firstChild.childNodes[0].style.display='none';
        // Bouton d'id=panel_supp_definitif n'est pas affiche dans la popup
        node.firstChild.childNodes[1].firstChild.childNodes[0].firstChild.childNodes[1].style.display='none';
        // Bouton d'id=panel_restaurer est affiche dans la popup
        node.firstChild.childNodes[1].firstChild.childNodes[0].firstChild.childNodes[2].style.display='inline';
    }
    
}

function hideDeletePanel() {
    document.getElementById('panel_delete').parentNode.parentNode.style.display='none';
    activatePage();
}


function importFocus(textarea) {
    if (textarea.innerText === "Copiez le contenu du fichier à importer ici.") {
        textarea.innerText = "";
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
    var messagesPanel = document.getElementById("mess");
    if (messagesPanel.style.height==='20px') {
        messagesPanel.style.height='100px';
        messagesPanel.style.overflow='auto';
        img.src="images/up_arrow1.png";
    } else {
        messagesPanel.style.height='20px';
        messagesPanel.style.overflow='hidden';
        img.src="images/down_arrow1.png";
    } 
}


function testradio(radio) {
    var inputs = document.getElementsByTagName("input");
    for (var i=0; i<inputs.length; i++) {
        var input = inputs[i];
        if (input.type === "radio") {
            if (input.id!=radio.id) {
                if (input.name.indexOf("radio_alpha")>=0) {
                    input.checked=false;
                }
            }
        }
    }
}

function hidePopupMessage() {
    var popupTable = document.getElementById('popupTable');
    var panel_desactiv_for_popup_message = document.getElementById('panel_desactiv_for_popup_message');
    popupTable.style.display='none';
    panel_desactiv_for_popup_message.style.display='none';
}


