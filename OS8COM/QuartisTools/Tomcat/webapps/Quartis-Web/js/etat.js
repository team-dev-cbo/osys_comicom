function changerCursorWair() {
     document.body.style.cursor='wait';
}

function changerCursorDefault() {
     document.body.style.cursor='default';
}

function activatePage() {
     document.getElementById('form1:panel_desactiv').style.display='none';
}

function deactivatePage() {
                    
    // Affichage du 'panel_desactiv'
    document.getElementById('form1:panel_desactiv').style.display='inline';
                    
    // D�sactive toutes les listes d�roulantes pour IE6
    // desactivateListeDeroulante();    
}

function showExportPanel() {
    
    // Affichage du Panel 
    var panel_export = document.getElementById('form1:panel_export');
    panel_export.style.display='inline';
                   
    // Ajout d'une frame pour afficher le panel 'panel_export' au dessus 
    // des listes d�roulantes
    //putFrame("form1:panel_export"); 
                   
    // Affichage du 'panel_desactiv'
    deactivatePage();
    return false;
}

function hideExportPanel() {
    document.getElementById('form1:panel_export').style.display='none';
    activatePage();
}


function desactivateListeDeroulante() {
                
    var element = document.getElementsByTagName("select");

    for (i = 0; i < element.length; i++) {
        element[i].disabled="false";      
    }	
}
    
/*
function putFrame(idComposent){
    var f    = document.createElement("iframe");
    var d    = document.getElementById(idComposent);

    with(f.style){
        position  = "absolute";
        width     = d.offsetWidth+"px";
        height	  = d.offsetHeight+"px";;
        top	  = d.offsetTop+"px";
        left	  = d.offsetLeft+"px";
        zIndex	  = "1";
    }

    document.body.appendChild(f);
}*/


function initPage() {
    var load_table = document.getElementById("load_table");
    var container = document.getElementById("container");
    if (load_table!=null) {
        load_table.style.display = "none";
    }
    if (container!=null) {
        container.style.visibility = "visible";
    }
}

function cancelEnterKey() {
    if (window.event.keyCode==13) {
        return cancel();
    } else {
        return true;
    }
}

function cancel() {
    window.event.cancelBubble = true;
    window.event.returnValue = false;
    return false;
}

function test() {
    var arianeComp = document.getElementById("ariane");
    return arianeComp.value;
}


function hidePopupMessage() {
    var popupTable = document.getElementById('form1:popupTable');
    var panel_desactiv_for_popup_message = document.getElementById('form1:panel_desactiv_for_popup_message');
    popupTable.style.display='none';
    panel_desactiv_for_popup_message.style.display='none';
}

function addToFavorites() {
    
    // Modification P.MAHE du 10/03/2015
    // Pour ajuster la taille de la fenêtre après l'enregistrement en favori
    
    var pageName = document.getElementById("form1:favoritePageName").value;
    var webContainerWidth = getClientDimensions()[0];
    var webContainerHeight = getClientDimensions()[1];
    
    document.location.href = 
            "xxx.cas?action=save_favoris&type=etat&pageName=" + pageName +
            "&webContainerHeight=" + webContainerHeight +
            "&webContainerWidth=" + webContainerWidth;
}


function removeFromFavorites() {
    
    var webContainerWidth = getClientDimensions()[0];
    var webContainerHeight = getClientDimensions()[1];
    
    document.location.href = "xxx.cas?action=delete_favoris&type=etat" + 
                                "&webContainerHeight=" + webContainerHeight +
                                "&webContainerWidth=" + webContainerWidth;
}