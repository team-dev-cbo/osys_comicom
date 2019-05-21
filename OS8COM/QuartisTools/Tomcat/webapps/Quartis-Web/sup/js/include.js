var WAITING = false;
var HEADER_IMG_HEIGHT = 80; //en pixels

var TOOLBAR_VISIBILITY = 'visible';
var NAVIGATION_VISIBILITY = 'visible';
var NAVIGATION_TIMEOUT = 5; //en secondes
var LEVEL1_MENU_VISIBILITY = 'visible';
var LEVEL1_MENU_TIMEOUT = 3; //en secondes

var PAGE_NAME = "";
var PAGE_LABEL = "";
var PAGE_DESCRIPTION = "";
var PAGE_PATH = "";
var PAGE_PARAMETERS = "";

var LEVEL1_TIMER_PERIOD = 10; //en secondes
var LEVEL2_TIMER_PERIOD = 10; //en secondes
var LEVEL3_TIMER_PERIOD = 10; //en secondes

var LEVEL1_URL = "";
var LEVEL1_REFRESH_URL = "";
var LEVEL1_STORE_URL = "";
var LEVEL1_REMOVE_URL = "";
var LEVEL1_ADD_URL = "";
var LEVEL1_MODULE_LIST_URL = "";
var LEVEL1_TO_PDF_URL = "";

var LEVEL2_URL = "";
var LEVEL2_REFRESH_URL = "";
var LEVEL2_TO_PDF_URL = "";
var LEVEL2_TABLE_REFRESH_URL = "";
var LEVEL2_TABLE_TO_PDF_URL = "";

var LEVEL3_URL = "";
var LEVEL3_REFRESH_URL = "";
var LEVEL3_TO_PDF_URL = "";

var PDF_URL = "";
var PDF_GEN_URL = "";
var PDF_COMET_URL = "";

var DTS_URL = "";
var DTS_GEN_URL = "";
var DTS_COMET_URL = "";

var NAVIGATION_URL = "";
var PREFERENCE_LOAD_URL = "";
var PREFERENCE_STORE_URL = "";
var PREFERENCE_APPLY_URL = "";
var PREFERENCE_DYN_LIST_URL = "";
var PREFERENCE_COMPONENT_URL = "";

var FAVORITE_URL = "";

var EXPORT_COMPONENT_URL = "";

var RESPONSE_BODY_PREFIX = "";
var RESPONSE_MODULES_PREFIX = "";
var RESPONSE_NAVIGATION_PREFIX = "";
var RESPONSE_PREFERENCE_PREFIX = "";
var RESPONSE_PREFERENCE_DYN_LIST_PREFIX = "";
var RESPONSE_PREFERENCE_COMPONENT_PREFIX = "";
var RESPONSE_MESSAGE_PREFIX = "";
var RESPONSE_NO_PREFIX = "";

var processRefreshPages = new Function();
var processModuleList = new Function();
var processNavigation = new Function();
var processRefreshPreference = new Function();
var processDynListPreference = new Function();
var processComponentPreference = new Function();
//var showMessage = new Function();
var forwardedParameters = "";

var TPS_REQUETE_SUP = "Temps appel réseau pour le superviseur";
var TPS_AFFICHAGE_SUP = "Temps entre début du chargement et affichage de la page";

var global_refreshAuto = true;

function goHome() {
    var dimension = getClientDimensions();
    var url = LEVEL1_URL + "&_clientWidth=" + (dimension[0]+100) + "&_clientHeight=" + dimension[1];
    document.location.href = url;
}

function go(url) {
    var dimension = getClientDimensions();
    document.location.href = url + "&_clientWidth=" + (dimension[0]+45) + "&_clientHeight=" + dimension[1];
}

function goPage(path, level) {
    switch(level) {
        case 1: goHome();
            break;
        case 2: go(LEVEL2_URL + "&_path=" + path);
            break;
        case 3: go(LEVEL3_URL + "&_path=" + path + forwardedParameters);
            break;
        default:goHome();
            break;
    }
}

function sendQuery(url) {
    req = newXMLHttpRequest();
    if(req !== null) {
        var dimension = getClientDimensions();
        url = url + "&_clientWidth=" + (dimension[0]+45) + "&_clientHeight=" + dimension[1];

        /* 
         * Modification P.MAHE du 06/02/2017
         * Correctif pour supprimer le Mantis 3380 : le navigateur se fige après 
         * avoir chargé un superviseur.
         * Analyse : la fonction onreadystatechange est appelée de façon répétée
         * (plus de 30 fois de suite), ce qui consomme _beaucoup_ de mémoire et 
         * de processeur parce que le navigateur provoque le rendu graphique de 
         * la page de façon répétée.
         * Solution : utiliser la fonction onload plutôt qu'onreadystatechange.
         * Elle n'est appelée qu'une fois. Mais n'est pas disponible sur IE8 ou
         * ses prédécesseurs. Comme c'est un de ceux-là qui est utilisée pour les
         * consoles (IE7 si j'en crois le userAgent), il faut maintenir l'usage
         * de onreadystatechange pour les TCL.
         */
        
        if(naviPeutUtiliserOnLoad()){
            req.onload = processInternal;
        } else {
            req.onreadystatechange = process;
        }
        
        req.open("POST", url, true);
        
        req.send(null);
    }
}


function processInternal(){
    try {

        req.onreadystatechange = null;   // normalement pas besoin, ? tester
        if(req.responseText){
            var xmltxt = req.responseText;
            WAITING = false;

            var resp = "";
            if (xmltxt.indexOf(RESPONSE_BODY_PREFIX) === 0) {
                resp = xmltxt.substring(RESPONSE_BODY_PREFIX.length, xmltxt.length);
                processRefreshPages(resp);
            } else if (xmltxt.indexOf(RESPONSE_MODULES_PREFIX) === 0) {
                resp = xmltxt.substring(RESPONSE_MODULES_PREFIX.length, xmltxt.length);
                processModuleList(resp);
            } else if (xmltxt.indexOf(RESPONSE_NAVIGATION_PREFIX) === 0) {
                resp = xmltxt.substring(RESPONSE_NAVIGATION_PREFIX.length, xmltxt.length);
                processNavigation(resp);
            } else if (xmltxt.indexOf(RESPONSE_PREFERENCE_PREFIX) === 0) {
                resp = xmltxt.substring(RESPONSE_PREFERENCE_PREFIX.length, xmltxt.length);
                processRefreshPreference(resp);
            } else if (xmltxt.indexOf(RESPONSE_PREFERENCE_DYN_LIST_PREFIX) === 0) {
                resp = xmltxt.substring(RESPONSE_PREFERENCE_DYN_LIST_PREFIX.length, xmltxt.length);
                processDynListPreference(resp);
            } else if (xmltxt.indexOf(RESPONSE_PREFERENCE_COMPONENT_PREFIX) === 0) {
                resp = xmltxt.substring(RESPONSE_PREFERENCE_COMPONENT_PREFIX.length, xmltxt.length);
                processComponentPreference(resp);
            } else if (xmltxt.indexOf(RESPONSE_MESSAGE_PREFIX) === 0) {
                resp = xmltxt.substring(RESPONSE_MESSAGE_PREFIX.length, xmltxt.length);
                showMessage(resp);
            }
        }
        
    } catch(e) {
        var msg = (typeof e === "string") ? e : ((e.message) ? e.message : "Unknown Error");
        showDivMessage("CRITICAL : " + msg, "red");
    }
}

function process() {
    if (req.readyState === 4) {
        if (req.status === 200) {
            processInternal();
        }
    }
}
function showDivMessage(mess, color) {
    WAITING = true;

    var div = document.getElementById('message');
    if(div !== null) {
        var innerHTML = "<div align='center' style='background-color:white; border:1px solid " + color + "; width:300px; height:40px; line-height: 40px;'>";
        innerHTML = innerHTML + " <font color='" + color + "'>" + mess + "</font>";
        innerHTML = innerHTML + "</div>";

        div.innerHTML = innerHTML;
        div.style.visibility = 'visible';

        //        new Effect.SlideDown(div);

        setTimeout("hideMessage()", 3000);
    }
}

function showMessage(mess) {
    WAITING = true;

    var div = document.getElementById('message');
    if(div !== null) {    
        div.innerHTML = mess;
        div.style.visibility = 'visible';

        setTimeout("hideMessage()", 3000);
    }
}

function hideMessage() {
    WAITING = false;
    var div = document.getElementById('message');
    if(div !== null) {
        div.style.visibility = 'hidden';
    //        new Effect.SlideUp(div);
    }
}

function addToFavorites() {
        
    var webContainerWidth = getClientDimensions()[0];
    var webContainerHeight = getClientDimensions()[1];
    
    document.location.href = FAVORITE_URL + "&_path=" + PAGE_PATH + 
                                "&webContainerHeight=" + webContainerHeight +
                                "&webContainerWidth=" + webContainerWidth;
}

function removeToFavorites() {
        
    var webContainerWidth = getClientDimensions()[0];
    var webContainerHeight = getClientDimensions()[1];
        
    document.location.href = FAVORITE_URL + "&_path=" + PAGE_PATH + 
            "&_remove=true" + 
            "&webContainerHeight=" + webContainerHeight +
            "&webContainerWidth=" + webContainerWidth;
}

function naviPeutUtiliserOnLoad(){
    var resultat = true;
    var userA = navigator.userAgent;
    // emplacement du début du numéro de la version d'IE
    var indexDebutNumIE = userA.indexOf("MSIE ");
    if(indexDebutNumIE > 0){
        // Le JavaScript récupère l'index du début de la chaîne, 
        // pour compenser, on ajoute la longueur de la chaîne
        indexDebutNumIE = indexDebutNumIE + 5; 
        // pour trouver l'emplacement du point-virgule après le numéro
        var indexPointVirgule = userA.indexOf(";", indexDebutNumIE);
        // découpage pour récupérer la bonne chaine
        var numIEAsStr = userA.substring(indexDebutNumIE, indexPointVirgule);
        // élimination des espaces
        numIEAsStr = numIEAsStr.replace(" ", "");
        // transformation en float
        var numIE = numIEAsStr + 0.0;
        if(numIE < 9){
            resultat = false;
        }
    } 
    
    return resultat;
}

function addCSSClass(elmt, cssClassName){
    if(elmt !== null){
        elmt.className += " " + cssClassName;
    }
}

function removeCSSClass(elmt, cssClassName){
    if(elmt !== null){
        // cf. http://stackoverflow.com/a/196038/2112089 
        // et http://stackoverflow.com/a/4371855/2112089
         elmt.className = elmt.className.replace( new RegExp(cssClassName, 'g') , '');
    }
}

function remoteLogAvailable(){
    var isAvailable = true;
    if ("undefined" === typeof parent.remoteLog){
        isAvailable = false;
    }
        
    return isAvailable;
}

function consoleAvailable(){
    var isAvailable = false;
        
    if ("undefined" !== typeof console){
        isAvailable = true;
    }
    
    return isAvailable;
}