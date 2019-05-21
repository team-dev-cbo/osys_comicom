function dimensionsPourUrl (stringNouvelleUrl) {
    var retour = "";
    if(stringNouvelleUrl.indexOf("xxx.cas") > -1){
        retour = calculerDimensionsFenetrePourFormulaireOuEtat();
    } else if(stringNouvelleUrl.indexOf("sup-run") > -1){
        retour = calculerDimensionsFenetrePourSuperviseur();
    }
    return retour;
}

function calculerDimensionsFenetrePourSuperviseur(){

    return calculerDimensionsFenetreGenerique("_client");
}

function calculerDimensionsFenetrePourFormulaireOuEtat(){

    return calculerDimensionsFenetreGenerique("webContainer");
}

function calculerDimensionsFenetreGenerique(prefixParam){
    var webContainerHeight = getHauteurWebContainer();
    
    var webContainerWidth = getLargeurWebContainer(); 
    
//    mettreAJourDimensionsIframe(webContainerHeight, webContainerWidth);
    //pour que l'affichage ne soit pas tronqué, les dimensions de l'iframe sont 
    //également modifiées

    var chaineRetour = "&" + prefixParam + "Width=" +  webContainerWidth;
    chaineRetour += "&" + prefixParam + "Height=" +  webContainerHeight;

    return chaineRetour;
}

/**
 * Recalcule la taille de l'iframe en fonction de la taille de la fenêtre.
 * Appelée au premier chargement de la page pour compenser le fait que, même 
 * avec une height à 100%, l'iframe n'occupe pas tout l'espace de la page, 
 * elle descend seulement jusqu'en base du menu. De plus, IE gère mal la height 
 * à 100%.
 * Rappelée à chaque changement de taille de l'écran.
 * 
 * @returns {undefined}
 */
function ajusterHauteurIframe(){
    var headerHeight = $("#header").outerHeight(true);
    var navigenHeight = $("#navigationGenerale").outerHeight(true);
    var alertConHeight = $("#alerteConnexion").height();
    var alertLic = $("#alerteLicence");
    var alertLicHeight = alertLic.height();
    if(alertLic.hasClass("fondue")){
        // si l'alerte de licence est temporaire (indiqué par la classe 
        // "fondue"), sa hauteur est ignorée par le calcul
        alertLicHeight = 0;
    }
    var windowHeight = $(window).height();
        
    var browserOffset = 20; //Chrome
    //cf. http://stackoverflow.com/a/9851769/2112089
    var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6
    if(isIE){
        browserOffset = 8; //IE
    }
    var expectedIframeHeight = windowHeight - 
                                (headerHeight + 
                                navigenHeight +
                                alertConHeight +
                                alertLicHeight +
                                browserOffset);
    
    var frameElement = document.getElementById("framePrincipale");
    frameElement.height = expectedIframeHeight + "px";
}


function getHauteurWebContainer(){
    //on renvoie la hauteur de l'élément affichant l'image de chargement car au
    //moment où on demande la taille (pendant le changement de page), l'iframe 
    //est déjà cachée
    return $("#fondChargement").outerHeight();
}

function getLargeurWebContainer(){
    //on renvoie la largeur de l'élément affichant l'image de chargement car au
    //moment où on demande la taille (pendant le changement de page), l'iframe 
    //est déjà cachée
    return $("#fondChargement").outerWidth();
}
