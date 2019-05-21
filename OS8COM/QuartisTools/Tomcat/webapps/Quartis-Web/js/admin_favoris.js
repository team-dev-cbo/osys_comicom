function initPage() {
    var tab2 = document.getElementById("formFavoris:TAB2");
    if (tab2!=null) {
        
        var radioChecked = document.getElementById("formFavoris:modulePageRadio:0").checked;
        if (radioChecked) {
            modulePageRadioCheck();
        } else {
            webPageRadioCheck();
        }
    }
}

function resizeMessagesPanel(img) {
    var messagesPanel = document.getElementById("mess");
    if (messagesPanel.style.height=='20px') {
        messagesPanel.style.height='100px';
        messagesPanel.style.overflow='auto';
        img.src="images/up_arrow1.png";
    } else {
        messagesPanel.style.height='20px';
        messagesPanel.style.overflow='hidden';
        img.src="images/down_arrow1.png";
    } 
}

function enregistrer() {
    var moduleID =  document.getElementById("formFavoris:comboModule").value;
    var pageIDParams =  document.getElementById("formFavoris:comboPage").value;
    
    var params = pageIDParams.split("$");
    if (params.length==3) {
        var pageID = params[0];
        var label = params[1];
        var type = params[2];
        
        var url =   "xxx.cas?action=save_favoris" + 
                    "&fromAdmin=true" +
                    "&moduleID=" + moduleID +
                    "&pageID=" + pageID +
                    "&type=" + type +
                    "&pageName=" + label;

        document.location.href = url;
        //alert(url);
    } else {
        alert("Le nombre de paramètres est incorrect.");
    }
    
        
}

var checkGlobalChecked = false;

function checkGlobalCheck(checkGlobal) {
    checkGlobalChecked = checkGlobal.checked;
}
    
function modulePageRadioCheck() {
    document.getElementById("formFavoris:comboModule").disabled = false;
    document.getElementById("formFavoris:comboPage").disabled = false;
    document.getElementById("formFavoris:webPageRadio:0").checked = false;
    document.getElementById("formFavoris:modulePageRadio:0").checked = true;
    document.getElementById("formFavoris:webPageInput").disabled = true;
    document.getElementById("formFavoris:webPageInput").style.border = "1px solid #C9C7BA";
    document.getElementById("formFavoris:webPageInput").style.backgroundColor = "#F5F4EA";
    document.getElementById("formFavoris:webPageInputLabel").disabled = true;
    document.getElementById("formFavoris:webPageInputLabel").style.border = "1px solid #C9C7BA";
    document.getElementById("formFavoris:webPageInputLabel").style.backgroundColor = "#F5F4EA";
    document.getElementById("formFavoris:ckeckGlobal").checked = checkGlobalChecked;
    document.getElementById("formFavoris:ckeckGlobal").disabled = false;
}

function webPageRadioCheck() {
    document.getElementById("formFavoris:comboModule").disabled = true;
    document.getElementById("formFavoris:comboPage").disabled = true;
    document.getElementById("formFavoris:modulePageRadio:0").checked = false;
    document.getElementById("formFavoris:webPageRadio:0").checked = true;
    document.getElementById("formFavoris:webPageInput").disabled = false;
    document.getElementById("formFavoris:webPageInput").style.border = "1px solid #7F9DB9";
    document.getElementById("formFavoris:webPageInput").style.backgroundColor = "#FFFFFF";
    document.getElementById("formFavoris:webPageInputLabel").disabled = false;
    document.getElementById("formFavoris:webPageInputLabel").style.border = "1px solid #7F9DB9";
    document.getElementById("formFavoris:webPageInputLabel").style.backgroundColor = "#FFFFFF";
    
    document.getElementById("formFavoris:ckeckGlobal").checked = true;
    document.getElementById("formFavoris:ckeckGlobal").disabled = true;
    
    
    
}
