var suggest_wait_img;
var suggest_wait_timer;

function s_prepare_suggest_wait_img() {
    suggest_wait_img = document.createElement("IMG");
    suggest_wait_img.src = "images/loading_suggest.gif";
    suggest_wait_img.style.width = "18px";
    suggest_wait_img.style.height = "18px";
    suggest_wait_img.style.position = "absolute";
    suggest_wait_img.style.display = "none";
    document.body.appendChild(suggest_wait_img);
}



function s_show_suggest_wait_img(s_input_top, s_input_left, s_input_width) {
    suggest_wait_img.style.top = (s_input_top + 2) + "px";
    suggest_wait_img.style.left = (s_input_left + s_input_width - 18) + "px";
    suggest_wait_img.style.display = "inline";
}

function s_hide_suggest_wait_img() {
    suggest_wait_img.style.display = "none";
}

function ajax_suggest(s_input) {
    suggest_wait_timer = window.setTimeout("s_show_suggest_wait_img(" + getElementTop(s_input) + "," + getElementLeft(s_input) + " , " + s_input.offsetWidth + ")", 100);
    
    req = newXMLHttpRequest();	
    //var handlerFunction = ajax_suggest_wait;
    req.onreadystatechange = function() {
        ajax_suggest_wait(s_input);
        //alert("a");//handlerFunction;
    }
    
    req.open("POST", encodeURI("suggest.mss?table=" + s_input.getAttribute("table") + 
                            "&champLien=" + s_input.getAttribute("champLien") +
                            "&champAffichage=" + s_input.getAttribute("champAffichage") +
                            "&chaine=" + s_input.value +
                            "&maxResult=" + s_input.getAttribute("maxResult") +
                            "&xmlAffichageSource=" + s_input.getAttribute("xmlAffichageSource")));
    req.setRequestHeader("Content-Type", 
           "application/xml");
    req.send(null);
}

function ajax_suggest_wait(s_input) {
    //s_show_suggest_wait_img(s_input);
    if (req.readyState == 4) {
        if (req.status == 200) {
            ajax_suggest_response(s_input);
        } else {
            window.clearTimeout(suggest_wait_timer);
            s_hide_suggest_wait_img();
            alert("Erreur " + req.status + "Erreur pendant la r�cup�ration de la r�ponse Ajax");
        }
    }
}

function ajax_suggest_response(s_input) {
    var xmldoc = req.responseXML;
    buildArray(xmldoc);
    s_generateTab(s_input);
    window.clearTimeout(suggest_wait_timer);
    s_hide_suggest_wait_img();
}

function buildArray(xmldoc) {
    s_list = new Array();

    var xmlSuggestList = xmldoc.getElementsByTagName("suggest");
    for (var i=0; i<xmlSuggestList.length; i++) {
        var xmlSuggest = xmlSuggestList[i];
        var item = new Array(2);
        item[0] = xmlSuggest.getAttribute("value");
        if (document.all) {
            item[1] = xmlSuggest.text;
            if (xmlSuggest.text === undefined) {
                item[1] = xmlSuggest.textContent;
            }
        } else {
            item[1] = xmlSuggest.textContent;
        } 
        
        s_list[i] = item;
    }
    
}


function getElementTop(elem) {
    var yPos = elem.offsetTop;
    var tempEl = elem.offsetParent;
    while (tempEl !== null) {
        yPos += tempEl.offsetTop;
        tempEl = tempEl.offsetParent;
    }
    return yPos;   
}


function getElementLeft(elem) {
    var xPos = elem.offsetLeft;
    var tempEl = elem.offsetParent;
    while (tempEl !== null) {
        xPos += tempEl.offsetLeft;
        tempEl = tempEl.offsetParent;
    }
    return xPos;
}
