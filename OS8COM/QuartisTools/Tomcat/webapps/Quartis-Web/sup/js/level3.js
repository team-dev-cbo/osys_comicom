var HEADER_TIMEOUT = 10;

var HEADER_MENU_TIMEOUT = 3;

var secondBeforeSlideUp = 0;
var readyToSlideUp = false;

processNavigation = function (innerHTML) {
    var div = document.getElementById('navigation');
    div.innerHTML = innerHTML;
    secondBeforeSlideUp = 0;
    readyToSlideUp = true;
}

processRefreshPages = function (innerHTML) {

    var loading = document.getElementById('loading');
    loading.style.display = 'none';
    
    var pages = document.getElementById('pages');
    pages.innerHTML = innerHTML;
    
    // Modification P.MAHE du 04/03/2015
    // Ajustement de la taille du div pages en fonction la taille de la fenêtre
    // (avec calcul pour prendre en compte la marge autour de la toolbar)
    var toolbar = document.getElementById('toolbar');
    if(toolbar !== null && toolbar.style.visibility === 'visible') {
        var toolbarOffset = toolbar.offsetLeft;
        pages.style.width = toolbarOffset - 5; //repositionnement du div pages par magic number
    }
    
    var endTimeRefreshPage = new Date().getTime();
    if(remoteLogAvailable()){
        var range = "from clic to finally loading the supervisor";
        if(global_refreshAuto){
            range = "auto-refresh";
        }
        parent.remoteLog(parent.global_startTimeClicSurBouton, endTimeRefreshPage, "JS REQUEST Loading supervisor (" + range + ")", "Lvl 3");
    }
}

processRefreshPreference = function (innerHTML) {
    showMessage(innerHTML);

    refreshPages();
}

function slideUp() {
    if(readyToSlideUp) {
        secondBeforeSlideUp =  secondBeforeSlideUp + 1;
    }    
    if(secondBeforeSlideUp > HEADER_MENU_TIMEOUT) {
        closeHeader();
    }
    setTimeout("slideUp()", 1000);
}

function closeHeader() {
    var navigation = document.getElementById('navigation');
    
    if(navigation.style.visibility == 'visible') {
        readyToSlideUp = false;
        new Effect.SlideUp(navigation);
        
        // headerMouseOut est appelé même si l'utilisateur a cliqué sur la croix 
        // de fermeture du menu. Donc, pour éviter d'avoir la barre de 
        // navigation qui se raffiche pour disparaître, on appelle une fonction 
        // anonyme 1.2 seconde plus tard pour remettre readyToSlideUp à false
        setTimeout(function(){
            readyToSlideUp = false;
            navigation.style.visibility = "hidden";
        }, 1200);
    }

    secondBeforeSlideUp = 0;
}

function headerMouseOver() {
    secondBeforeSlideUp = 0;
    readyToSlideUp = false;
}

function headerMouseOut() {
    secondBeforeSlideUp = 0;
    readyToSlideUp = true;
}

function showNavigation() {
    if(NAVIGATION_VISIBILITY == 'visible') {
        HEADER_TIMEOUT = NAVIGATION_TIMEOUT;
        
        document.getElementById('navigation').style.display = '';
        refreshNavigation(3, false);
        document.getElementById('navigation').style.visibility = 'visible';
    }
}

function hideNavigation() {
    document.getElementById('navigation').style.visibility = 'hidden';
}

function refreshNavigation(level, next) {
    WAITING = true;
    sendQuery(NAVIGATION_URL + "&_path=" + PAGE_PATH + "&_level=" + level + "&_next=" + next + "&_header-height=" + HEADER_IMG_HEIGHT, process);
    secondBeforeSlideUp = 0;
    readyToSlideUp = true;
}

function refreshPages() {
    WAITING = true;
    
    if(global_refreshAuto){
        if(remoteLogAvailable()){
           parent.global_startTimeClicSurBouton = new Date().getTime(); 
        }
    }
    sendQuery(LEVEL3_REFRESH_URL + "&_path=" + PAGE_PATH + PAGE_PARAMETERS, process);
}

function timer (autoCalled) {
    global_refreshAuto = autoCalled;
    if (!WAITING) {
        refreshPages();
    }
    if(LEVEL3_TIMER_PERIOD > 0) {
        setTimeout("timer(true)", LEVEL3_TIMER_PERIOD * 1000);
    }
}

function pageToPdf(mappingId) {
    document.location.href = PDF_URL + "&_path=" + PAGE_PATH + "&_mapping-id=" + mappingId;
//        document.location.href = PDF_GEN_URL + "&_path=" + PAGE_PATH + "&_mapping-id=" + mappingId;
}

function pageToDts(mappingId) {
    document.location.href = DTS_URL + "&_path=" + PAGE_PATH + "&_mapping-id=" + mappingId;
}