var HEADER_TIMEOUT = 10;

var currentIndex = 0;
var currentRow = null;
var secondBeforeSlideUp = 0;
var readyToSlideUp = false;

var scrollTop = 0;

forwardedParameters = "";

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
        pages.style.width = toolbarOffset - 20; //repositionnement du div pages par un magic number
    }
    
    // On remet le scroll a la place enregistré
    var test = document.getElementById("tableLevelTwo");
    if (test != null) {
        test.scrollTop = scrollTop;
    }
    
    var endTimeRefreshPage = new Date().getTime();
    if(remoteLogAvailable()){
        var range = "from clic to finally loading the supervisor";
        if(global_refreshAuto){
            range = "auto-refresh";
        }
        parent.remoteLog(parent.global_startTimeClicSurBouton, endTimeRefreshPage, "JS REQUEST Loading supervisor (" + range + ")", "Lvl 2-Table");
    }            
}

processRefreshPreference = function (innerHTML) {
    showMessage(innerHTML);

    refreshPages();
}

function slideUp() {
    if(readyToSlideUp) {
        secondBeforeSlideUp = secondBeforeSlideUp + 1;
    }
    
    if(secondBeforeSlideUp > HEADER_TIMEOUT && readyToSlideUp) {
        closeHeader();
    }
    setTimeout("slideUp()", 1000);
}

function closeHeader() {
    
    var navigation = document.getElementById('navigation');

    if(navigation.style.visibility === 'visible') {

        new Effect.SlideUp(navigation);
        
        // headerMouseOut est appelé même si l'utilisateur a cliqué sur la croix 
        // de fermeture du menu. Donc, pour éviter d'avoir la barre de 
        // navigation qui se raffiche pour disparaître, on appelle une fonction 
        // anonyme 1.2 seconde plus tard pour remettre readyToSlideUp à false et
        // masquer le header proprement dit
        setTimeout(function(){

            navigation.style.visibility = "hidden";
            readyToSlideUp = false;
        }, 1200);
    }
    readyToSlideUp = false;
        
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

        if(currentRow != null) {
            document.getElementById('navigation').style.display = '';
            refreshNavigation(3, false);
            document.getElementById('navigation').style.visibility = 'visible';
        }
    }
}


function showNavigation2() {
    if(NAVIGATION_VISIBILITY == 'visible') {
        HEADER_TIMEOUT = NAVIGATION_TIMEOUT;

        document.getElementById('navigation').style.display = '';
        refreshNavigation(2, false);
        document.getElementById('navigation').style.visibility = 'visible';
    }
}

function hideNavigation() {
    document.getElementById('navigation').style.visibility = 'hidden';
}

function refreshNavigation(level, next) {
    var path = PAGE_PATH;
    if(currentRow != null) {
        path = currentRow.getAttribute("path");
    }
    WAITING = true;
    sendQuery(NAVIGATION_URL + "&_path=" + path + "&_level=" + level + "&_next=" + next + "&_header-height=" + HEADER_IMG_HEIGHT, process);
    secondBeforeSlideUp = 0;
    
    readyToSlideUp = true;

}


function refreshPages() {
    // On enregistre la place du scroll
    var test = document.getElementById("tableLevelTwo");
    if (test != null) {
        scrollTop = test.scrollTop;
    }
    
    WAITING = true;
    if(global_refreshAuto){
        if(remoteLogAvailable()){
           parent.global_startTimeClicSurBouton = new Date().getTime(); 
        }
    }
    sendQuery(LEVEL2_TABLE_REFRESH_URL + "&_path=" + PAGE_PATH + "&_index=" + currentIndex, process);
}

function refreshTab(index) {
    WAITING = true;
    currentIndex = index;
    sendQuery(LEVEL2_TABLE_REFRESH_URL + "&_path=" + PAGE_PATH + "&_index=" + currentIndex, process);
}

function selectRow(tr) {
    if(currentRow != tr) {
        currentRow = tr;
        forwardedParameters = currentRow.getAttribute("forwarded-parameters");

        showNavigation();
    }
}

function timer (autoCalled) {
    global_refreshAuto = autoCalled;
    if (!WAITING) {
        refreshPages();
    }
    if(LEVEL2_TIMER_PERIOD > 0) {
        setTimeout("timer(true)", LEVEL2_TIMER_PERIOD * 1000);
    }
    
}

function pageToPdf(mappingId) {
    document.location.href = PDF_URL + "&_path=" + PAGE_PATH + "&_mapping-id=" + mappingId + "&_extend=level2-table";
}

function pageToDts(mappingId) {
    document.location.href = DTS_URL + "&_path=" + PAGE_PATH + "&_mapping-id=" + mappingId + "&_extend=level2-table";
}
