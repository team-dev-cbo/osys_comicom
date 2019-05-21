function testcrypt() {
    //var a = MD5("");
    //var b = MD5('');
    //var c = MD5("");
    //var d = MD5('');
    //alert(a + "\n" + b + "\n" + c + "\n" + d);
    
    alert(MD5("") + "\n" + MD5('') + "\n" + MD5("") + "\n" + MD5(''));
}

function cryptPassword() {
    var saisie_password = document.getElementById('form1:saisie_password');
    var password = document.getElementById('form1:password');
    if (saisie_password && password) {
        password.value = MD5(saisie_password.value);
    }
    
    var old_password_input = document.getElementById('form1:old_password_input');
    var old_password_input_crypt = document.getElementById('form1:old_password_input_crypt');
    if (old_password_input && old_password_input_crypt) {
        old_password_input_crypt.value = MD5(old_password_input.value);
    }
    
    var new_password_input = document.getElementById('form1:new_password_input');
    var new_password_input_crypt = document.getElementById('form1:new_password_input_crypt');
    if (new_password_input && new_password_input_crypt) {
        new_password_input_crypt.value = MD5(new_password_input.value);
    }
    
}

function checkChangePassword(isChecked) {

    var old_password_label1 = document.getElementById("form1:old_password_label1");
    var new_password_label1 = document.getElementById("form1:new_password_label1");
    
    var old_password_label2 = document.getElementById("form1:old_password_label2");
    var new_password_label2 = document.getElementById("form1:new_password_label2");
    
    var old_password_input = document.getElementById("form1:old_password_input");
    var new_password_input = document.getElementById("form1:new_password_input");


    if (isChecked) {
        old_password_label1.style.visibility = "visible";
        new_password_label1.style.visibility = "visible";
        old_password_label2.style.visibility = "visible";
        new_password_label2.style.visibility = "visible";
        old_password_input.style.visibility = "visible";
        new_password_input.style.visibility = "visible";
    } else {
        old_password_label1.style.visibility = "hidden";
        new_password_label1.style.visibility = "hidden";
        old_password_label2.style.visibility = "hidden";
        new_password_label2.style.visibility = "hidden";
        old_password_input.style.visibility = "hidden";
        new_password_input.style.visibility = "hidden";
    }

    //old_password_input.disabled = !isChecked;
    //new_password_input.disabled = !isChecked;
    
    //var color = "#C0C0C0";
    //if (isChecked) color = "#000000";
    
    //old_password_label1.style.color = color;
    //new_password_label1.style.color = color;
    //old_password_label2.style.color = color;
    //new_password_label2.style.color = color;
    
}

function initPage() {
    var checkbox = document.getElementById("form1:check_password");
    if (checkbox) {
        checkChangePassword(checkbox.checked);
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

function hidePopupMessage() {
    var popupTable = document.getElementById('popupTable');
    var panel_desactiv_for_popup_message = document.getElementById('panel_desactiv_for_popup_message');
    popupTable.style.display='none';
    panel_desactiv_for_popup_message.style.display='none';
}

function showDeletePanel() {
    
    var tab=f_core.GetElementById("form1:tab_1");
    var tabbedPane=f_core.GetElementById("form1:tabbedpane_1");
    tabbedPane.f_selectCard(tab);
    
    deactivatePage();
    //document.getElementById('panel_delete').parentNode.style.zIndex = 310;
    //document.getElementById('panel_delete').parentNode.style.display='inline';
    document.getElementById('form1:panel_delete').style.zIndex = 310;
    document.getElementById('form1:panel_delete').style.display='inline';
}

function hideDeletePanel() {
    //document.getElementById('panel_delete').parentNode.style.display='none';
    document.getElementById('form1:panel_delete').style.display='none';
    activatePage();
}

function activatePage() {
    document.getElementById('panel_desactiv').style.display='none';
}

function deactivatePage() {
    document.getElementById('panel_desactiv').style.display='inline';
}

function checkAllowRead(checkbox) {
    var idRead = checkbox.id;
    var position = idRead.indexOf("checkRead");
    var idGlobal = idRead.substr(0, position);
    
    if (!checkbox.checked) {
        document.getElementById(idGlobal + "checkInsert").checked = false;
        document.getElementById(idGlobal + "checkUpdate").checked = false;
        document.getElementById(idGlobal + "checkDelete").checked = false;
    } 
}

function checkAllowReadGlobal(checkbox) {
    var idRead = checkbox.id;
    var position = idRead.indexOf("checkReadGlobal");
    var idGlobal = idRead.substr(0, position);
    var cpt=0;
    var elementID = idGlobal + cpt +":checkRead";
    var element = document.getElementById(elementID);
    while (element!=null) {
        element.checked=checkbox.checked;
        checkAllowRead(element);
        
        cpt++;
        element = document.getElementById(idGlobal + cpt + ":checkRead");
    }
}

function checkAllowInsert(checkbox) {
    var idInsert = checkbox.id;
    var position = idInsert.indexOf("checkInsert");
    var idGlobal = idInsert.substr(0, position);
    
    if (checkbox.checked) {
        document.getElementById(idGlobal + "checkRead").checked = true;
    }
}

function checkAllowInsertGlobal(checkbox) {
    var idInsert = checkbox.id;
    var position = idInsert.indexOf("checkInsertGlobal");
    var idGlobal = idInsert.substr(0, position);
    var cpt=0;
    var elementID = idGlobal + cpt +":checkInsert";
    var element = document.getElementById(elementID);
    while (element!=null) {
        element.checked=checkbox.checked;
        checkAllowInsert(element);
        cpt++;
        element = document.getElementById(idGlobal + cpt + ":checkInsert");
    }
}

function checkAllowUpdate(checkbox) {
    var idUpdate = checkbox.id;
    var position = idUpdate.indexOf("checkUpdate");
    var idGlobal = idUpdate.substr(0, position);
    
    if (checkbox.checked) {
        document.getElementById(idGlobal + "checkRead").checked = true;
    }
}

function checkAllowUpdateGlobal(checkbox) {
    var idUpdate = checkbox.id;
    var position = idUpdate.indexOf("checkUpdateGlobal");
    var idGlobal = idUpdate.substr(0, position);
    var cpt=0;
    var elementID = idGlobal + cpt +":checkUpdate";
    var element = document.getElementById(elementID);
    while (element!=null) {
        element.checked=checkbox.checked;
        checkAllowUpdate(element);
        cpt++;
        element = document.getElementById(idGlobal + cpt + ":checkUpdate");
    }
}

function checkAllowDelete(checkbox) {
    var idDelete = checkbox.id;
    var position = idDelete.indexOf("checkDelete");
    var idGlobal = idDelete.substr(0, position);
    
    if (checkbox.checked) {
        document.getElementById(idGlobal + "checkRead").checked = true;
    }
}

function checkAllowDeleteGlobal(checkbox) {
    var idDelete = checkbox.id;
    var position = idDelete.indexOf("checkDeleteGlobal");
    var idGlobal = idDelete.substr(0, position);
    var cpt=0;
    var elementID = idGlobal + cpt +":checkDelete";
    var element = document.getElementById(elementID);
    while (element!=null) {
        element.checked=checkbox.checked;
        checkAllowDelete(element);
        cpt++;
        element = document.getElementById(idGlobal + cpt + ":checkDelete");
    }
}
