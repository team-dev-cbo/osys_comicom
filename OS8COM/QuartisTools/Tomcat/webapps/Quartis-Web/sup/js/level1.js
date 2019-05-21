var HEADER_TIMEOUT = 10;
var HEADER_MENU_TIMEOUT = 3;

var currentPage = null;
var secondBeforeSlideUp = 0;
var readyToSlideUp = false;

forwardedParameters = "";

processModuleList = function (innerHTML) {
    var div = document.getElementById('menu');
    div.innerHTML = innerHTML;
    secondBeforeSlideUp = 0;
    readyToSlideUp = true;
}

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
    //    pages.innerHTML = innerHTML;
    
    var divs = innerHTML.split("DIV_HEADER=");
    for(var d=1; d<divs.length; d++) {
        
        var div = divs[d].split(";DIV_INNERHTML=");

        var divInfos = div[0].split(";");
        var divInnerHTML = div[1];

        var currentDiv = document.getElementById(divInfos[0]);
        if(currentDiv == null) {
            currentDiv = document.createElement('div');
            currentDiv.id = divInfos[0];
            currentDiv.style.position = "absolute";
            currentDiv.style.left = divInfos[1];
            currentDiv.style.top = divInfos[2];
            currentDiv.setAttribute("path", divInfos[0]);

            pages.appendChild(currentDiv);
        }
        currentDiv.width = divInfos[3];
        currentDiv.height = divInfos[4];
        currentDiv.innerHTML = divInnerHTML;
    }

    var childNodes = pages.childNodes;
    for(var i=0; i<childNodes.length; i++) {
        var child = childNodes[i];
        
        if(child.id != null && child.id != "") {
            child.onclick = function() {

                if(LEVEL1_MENU_VISIBILITY == 'visible') {
                    var close = document.getElementById('X_page');
                    close.style.left = this.style.left;
                    close.style.top = this.style.top;
                    close.style.visibility = 'visible';
                }

                //if(currentPage != this) {
                currentPage = this;
                forwardedParameters = currentPage.getAttribute("forwarded-parameters");
                showNavigation();
            //}
            };
            var handler = DragHandler.attach(child);
            handler.dragBegin = select;
            handler.dragEnd = store;
        }
    }

    var endTimeRefreshPage = new Date().getTime();
    if(remoteLogAvailable()){
        var range = "from clic to finally loading the supervisor";
        if(global_refreshAuto){
            range = "auto-refresh";
        }
        parent.remoteLog(parent.global_startTimeClicSurBouton, endTimeRefreshPage, "JS REQUEST Loading supervisor (" + range + ")", "Lvl 1");
    }
}

processRefreshPreference = function (innerHTML) {
    showMessage(innerHTML);
    refreshPages();
}

function select (div, x, y) {
    WAITING = true;
    if(LEVEL1_MENU_VISIBILITY == 'visible') {
        var close = document.getElementById('X_page');        
        close.style.visibility = 'hidden';
    }
}

function store (div, x, y) {
    if(LEVEL1_MENU_VISIBILITY == 'visible') {
        var close = document.getElementById('X_page');
        close.style.visibility = 'visible';
    }

    storePage(div.id, x, y);
}

function removeXPage() {
    if(currentPage != null) {
        var pages = document.getElementById('pages');
        pages.removeChild(currentPage);
        removePage(currentPage.id);
    }
    currentPage = null;
    if(LEVEL1_MENU_VISIBILITY == 'visible') {
        var close = document.getElementById('X_page');
        close.style.visibility = 'hidden';
    }
}

function remove() {
    if(currentPage != null) {
        var pages = document.getElementById('pages');
        pages.removeChild(currentPage);
        removePage(currentPage.id);
    }
    currentPage = null;
    if(LEVEL1_MENU_VISIBILITY == 'visible') {
        var close = document.getElementById('X_page');
        close.style.visibility = 'hidden';
    }
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
    var menu = document.getElementById('menu');
    var navigation = document.getElementById('navigation');

    if(menu.style.visibility == 'visible') {
        readyToSlideUp = false;
        new Effect.SlideUp(menu);
    }
    if(navigation.style.visibility == 'visible') {
        readyToSlideUp = false;
        new Effect.SlideUp(navigation);
    }
    if(LEVEL1_MENU_VISIBILITY == 'visible') {
        var close = document.getElementById('X_page');
        close.style.visibility = 'hidden';
    }
    
    setTimeout(function(){
        navigation.style.visibility = "hidden";
        close.style.visibility = "hidden";
        menu.style.visibility = "hidden";
        readyToSlideUp = false;
    }, 1200);

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

function showMenu() {
    if(LEVEL1_MENU_VISIBILITY == 'visible') {
        HEADER_TIMEOUT = LEVEL1_MENU_TIMEOUT;

        hideNavigation();
        document.getElementById('menu').style.display = '';
        refreshModuleList(0);
        document.getElementById('menu').style.visibility = 'visible';
        secondBeforeSlideUp = 0;
        readyToSlideUp = true;
    }
}

function hideMenu() {
    document.getElementById('menu').style.visibility = 'hidden';
}

function showNavigation() {
    if(NAVIGATION_VISIBILITY == 'visible') {
        HEADER_TIMEOUT = NAVIGATION_TIMEOUT;

        if(currentPage != null) {
            hideMenu();
            document.getElementById('navigation').style.display = '';
            refreshNavigation(2, false);
            document.getElementById('navigation').style.visibility = 'visible';
        }
    }
}

function hideNavigation() {
    //    document.getElementById('navigation').style.display = 'none';
    document.getElementById('navigation').style.visibility = 'hidden';
}

function refreshModuleList(index) {
    WAITING = true;
    sendQuery(LEVEL1_MODULE_LIST_URL + "&_index=" + index + "&_header-height=" + HEADER_IMG_HEIGHT, process);
}

function refreshNavigation(level, next) {
    if(currentPage != null) {
        WAITING = true;
        sendQuery(NAVIGATION_URL + "&_path=" + currentPage.getAttribute("path") + "&_level=" + level + "&_next=" + next + "&_header-height=" + HEADER_IMG_HEIGHT, process);
        secondBeforeSlideUp = 0;
        readyToSlideUp = true;
    }
}

function refreshPages() {
    WAITING = true;
    if(global_refreshAuto){
        if(remoteLogAvailable()){
           parent.global_startTimeClicSurBouton = new Date().getTime(); 
        }
    }
    sendQuery(LEVEL1_REFRESH_URL, process);
}

function storePage(path, x, y) {
    WAITING = true;
    sendQuery(LEVEL1_STORE_URL + "&_path=" + path + "&_x=" + x +  "&_y=" + y, process);
}

function removePage(path) {
    WAITING = true;
    sendQuery(LEVEL1_REMOVE_URL + "&_path=" + path, process);
}

function addPage(path) {
    var div = document.getElementById(path);
    if(div != null) {
        showDivMessage("Superviseur existant !", "red");
    } else {
        WAITING = true;
        sendQuery(LEVEL1_ADD_URL + "&_path=" + path, process);

        var loading = document.getElementById('loading');
        loading.style.display = '';
    }
}

function timer (autoCalled) {
    global_refreshAuto = autoCalled;
    if (!WAITING) {
        refreshPages();
    }
    if(LEVEL1_TIMER_PERIOD > 0) {
        setTimeout("timer(true)", LEVEL1_TIMER_PERIOD * 1000);
    }
}

function pageToPdf() {
    window.open(LEVEL1_TO_PDF_URL, 'Level1', 'menubar=no, status=no, scrollbars=yes, resizable=yes, toolbar=no, location=no');
}

function pageToDts() {
    window.open(LEVEL1_TO_DTS_URL, 'Level1', 'menubar=no, status=no, scrollbars=yes, resizable=yes, toolbar=no, location=no');
}
