var PREFERENCE_TIMEOUT = 5;
var PREFERENCE_DYN_LIST_TIMEOUT = 20;

var secondBeforeToClose = 0;
var secondBeforeToCloseDynList = 0;
var readyToClose = false;
var readyToCloseDynList = false;

var settingsState = 'hidden';
var currentTabIndex = -1;

processDynListPreference = function (innerHTML) {
    var div = document.getElementById('dynamic-list');
    div.innerHTML = innerHTML;
    div.style.display = '';
}

timerList();

function timerList() {
    if(readyToClose) {
        secondBeforeToClose =  secondBeforeToClose + 1;
    }
    if(secondBeforeToClose > PREFERENCE_TIMEOUT) {
        closePreference();
    }
    if(readyToCloseDynList) {
        secondBeforeToCloseDynList =  secondBeforeToCloseDynList + 1;
    }
    if(secondBeforeToCloseDynList > PREFERENCE_DYN_LIST_TIMEOUT) {
        closeDynList();
    }
    setTimeout("timerList()", 1000);
}

function showDynList(src, listId, listPath) {
    WAITING = true;
    var url;
    if(PAGE_PATH != null && PAGE_PATH != '') {
        url = PREFERENCE_DYN_LIST_URL + "&_path=" + PAGE_PATH + "&_src=" + src.id + "&_list-id=" + listId + "&_list-path=" + listPath + "&_list-char=" + Url.encode(src.value);
        sendQuery(url, process);
    } else {
        url = PREFERENCE_DYN_LIST_URL + "&_src=" + src.id + "&_list-id=" + listId + "&_list-path=" + listPath + "&_list-char=" + Url.encode(src.value);
        sendQuery(url, process);
    }

    //    var img = document.getElementById('img' + src.id);
    //    img.src = "images/loading_1_24x24.gif";

    var td = document.getElementById('td' + src.id);
    

    var div = document.getElementById('dynamic-list');
    div.innerHTML = 'Loading...';
    div.style.left = td.offsetLeft;
    div.style.top = td.offsetTop + td.offsetHeight + 5;
    
    //Modification P.MAHE du 23/02/2015 (mantis 3032) :
    //déplacement de la liste dynamique pour qu'elle apparaisse sous le bon
    //input
    td.appendChild(div);
    
    div.style.display = '';
    
    secondBeforeToCloseDynList = 0;
    readyToCloseDynList = true;
}

function hideDynList(srcId, value) {
    var src = document.getElementById(srcId);
    src.value = value;

    //    var img = document.getElementById('img' + src.id);
    //    img.src = "images/loading_1s_24x24.gif";

    //    var div = document.getElementById('dynamic-list');
    //    div.innerHTML = 'Loading...';
    //    div.style.display = 'none';
    //
    //    readyToCloseDynList = false;
    //    secondBeforeToCloseDynList = 0;

    closeDynList();
    var div = document.getElementById('dynamic-list');
    src.removeChild(div)
}

function closeDynList() {
    //    var img = document.getElementById('img' + src.id);
    //    img.src = "images/loading_1s_24x24.gif";

    var div = document.getElementById('dynamic-list');
    div.innerHTML = 'Loading...';
    div.style.display = 'none';
    
    //le div contenant la liste dynamique quand elle est masquée
    var dynamicListOriginalFatherNode = document.getElementById('preference');
    dynamicListOriginalFatherNode.appendChild(div);

    readyToCloseDynList = false;
    secondBeforeToCloseDynList = 0;
}

function showTab(index) {
    closeDynList();

    var currentTab = document.getElementById("Tab" + currentTabIndex);
    var currentTabBody = document.getElementById("TabBody" + currentTabIndex);

    if(currentTab !== null){
        addCSSClass(currentTab, "titreOngletPreferences");
        removeCSSClass(currentTab, "titreOngletSelectionnePreferences");
    }
    if(currentTabBody !== null) {
        currentTabBody.style.display = 'none';
    }

    currentTabIndex = index;

    currentTab = document.getElementById("Tab" + index);
    currentTabBody = document.getElementById("TabBody" + index);
    if(currentTab !== null){
        addCSSClass(currentTab, "titreOngletSelectionnePreferences");
        removeCSSClass(currentTab, "titreOngletPreferences");
    }
    
    if(currentTabBody !== null) {
        currentTabBody.style.display = '';
    }
}

function applyPreference() {
    closeDynList();
    sendPreference(PREFERENCE_APPLY_URL);
}

function savePreference() {
    closeDynList();
    sendPreference(PREFERENCE_STORE_URL);
    togglePreference();
}

function sendPreference(url) {
    if(url != null) {
        var params = formatPreference(document.getElementById("TabBody0"));
        
        if(params != null) {
            PAGE_PARAMETERS = params;
            url = url + PAGE_PARAMETERS;
            url = url + formatPreference(document.getElementById("TabBody1"));
            url = url + formatPreference(document.getElementById("TabBody2"));

            WAITING = true;
            
            updateLivePreferences();
            
            sendQuery(url);
        }
    }
}

function formatPreference(form) {
    var url = "";
    if(form !== null) {
        var inputs = form.getElementsByTagName("input");
        url = completeUrlWithTagList(inputs, url);
        
        var selects = form.getElementsByTagName("select");
        url = completeUrlWithTagList(selects, url);
    }
    return url;
}

function completeUrlWithTagList(tagList, url){
    for(var j = 0; j < tagList.length; j++) {
        var currentNode = tagList[j];
        var nodeName = currentNode["name"];
        var nodeValue = currentNode["value"];
        if(nodeValue.replace(/^\s+/g,'').replace(/\s+$/g,'') === "") {
            nodeValue = currentNode["default"];
        }
        url = url + "&" + nodeName + "=" + Url.encode(nodeValue);
    }
    return url;
}

function cleanPreference() {
    closeDynList();
    var currentTabBody = document.getElementById("TabBody" + currentTabIndex);
    if(currentTabBody !== null) {
        var inputs = currentTabBody.getElementsByTagName("input");
        for(var i = 0; i < inputs.length; i++) {
            var currInput = inputs[i];
            var dftvi = currInput.getAttribute("default");
            if(dftvi !== null) {
                currInput["value"] = dftvi;
            }
        }
        var selects = currentTabBody.getElementsByTagName("select");
        for(var j = 0; j < selects.length; j++) {
            var dftvs = selects[j].getAttribute("default");
            if(dftvs !== null) {
                selects[j]["value"] = dftvs;
            }
        }
    }
}

function closePreference() {
    closeDynList();
    settingsState = 'hidden';
    var div = document.getElementById('preference');
    div.style.visibility = settingsState;
}


function togglePreference() {
    closeDynList();
    if (settingsState == 'visible') {
        settingsState = 'hidden';
    } else {
        closeAll();
        settingsState = 'visible';
        if(currentTabIndex < 0) {
            showTab(0);
        }
    }
    var div = document.getElementById('preference');
    div.style.visibility = settingsState;
}

function updateLivePreferences() {
    var naviTimeout = document.getElementById('NAVIGATION_TIMEOUT')["value"];
    var level1MenuTimeout = document.getElementById('LEVEL1_MENU_TIMEOUT')["value"];
    var level1TimerTimeout = document.getElementById('LEVEL1_REFRESH_PERIOD')["value"];
    var level2TimerTimeout = document.getElementById('LEVEL2_REFRESH_PERIOD')["value"];
    var level3TimerTimeout = document.getElementById('NAVIGATION_TIMEOUT')["value"];
    
    NAVIGATION_TIMEOUT = naviTimeout;
    
    LEVEL1_MENU_TIMEOUT = level1MenuTimeout;
    
    LEVEL1_REFRESH_PERIOD = level1TimerTimeout;
    LEVEL1_TIMER_PERIOD = level1TimerTimeout;
    
    LEVEL2_TIMER_PERIOD = level2TimerTimeout;
    LEVEL2_REFRESH_PERIOD = level2TimerTimeout;
    
    LEVEL3_TIMER_PERIOD = level3TimerTimeout;
    LEVEL3_REFRESH_PERIOD = level3TimerTimeout;   
}