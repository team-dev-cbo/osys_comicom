function hidePopupMessage() {
    var popupTable = document.getElementById('popupTable');
    var panel_desactiv_for_popup_message = document.getElementById('panel_desactiv_for_popup_message');
    popupTable.style.display='none';
    panel_desactiv_for_popup_message.style.display='none';
}

function openBrowse() {


    
    var iframe = document.createElement("IFRAME");
    iframe.setAttribute("id", "browse_iframe");
    iframe.setAttribute("src", "browse.brw?action=load&indiceRoot=C");
    iframe.style.width = "430px";
    iframe.style.height = "434px";
    iframe.style.border = "2px solid #3877AA";
    
    var td = document.createElement("TD");
    td.setAttribute("align", "center");
    td.appendChild(iframe);
    
    var tr = document.createElement("TR");
    tr.appendChild(td);
    
    var tbody = document.createElement("TBODY");
    tbody.appendChild(tr);
    
    var table = document.createElement("TABLE");
    table.cellSpacing = "0";
    table.cellPadding = "0";
    table.appendChild(tbody);
    
    
    
    var divboite = document.createElement("DIV");
    divboite.style.width = "427px";
    divboite.style.height = "438px";
    divboite.className = "boite";
    divboite.style.backgroundColor = "#FF0000";
    divboite.appendChild(table);
    
    var divombre = document.createElement("DIV");
    divombre.setAttribute("id", "container");
    divombre.style.width = "427px";
    divombre.style.height = "438px";
    divombre.className = "ombre";
    
    divombre.appendChild(divboite);
    
    
    
    
    
    
    var ctd = document.createElement("TD");
    ctd.setAttribute("align", "center");
    ctd.appendChild(divombre);
    
    var ctr = document.createElement("TR");
    ctr.appendChild(ctd);
    
    var ctbody = document.createElement("TBODY");
    ctbody.appendChild(ctr);
    
    var ctable = document.createElement("TABLE");
    ctable.style.width = "100%";
    ctable.style.height = "100%";
    ctable.style.position = "absolute";
    ctable.style.zIndex = "999";
    ctable.appendChild(ctbody);
    
    /*
    <div id="container" class="ombre" width="427" height="438">
        <div class="boite " width="427" height="438">
        </div>
    </div>
    */
    
    
 
    document.getElementById("span_browse").appendChild(ctable);
}

function closeBrowse() {
    document.getElementById("span_browse").innerHTML = "";
}

function fillBrowseField(path) {
    document.getElementById("param:application").value = path;
}

function showTestConnect(message, result) {
    if (result == "ok") {
        document.getElementById("testConnectImage").src = "images/button_ok.png";
    } else {
        document.getElementById("testConnectImage").src = "images/button_cancel.png";
    }
    document.getElementById("testConnectMessage").innerText = message;
    document.getElementById("testConnectTable").style.display = "inline";
    document.getElementById("testConnectDesactiv").style.display = "inline";
}

function hideTestConnect() {
    document.getElementById("testConnectTable").style.display = "none";
    document.getElementById("testConnectDesactiv").style.display = "none";
}

/*
function changeDataBase(lstTypeBD){

    var typeBD = lstTypeBD.value; // element selectionne dans la list
    //var password = document.getElementById("param:pwd_bd");
    //var password_label1 = document.getElementById("param:label1_pwd_bd");
    //var password_label2 = document.getElementById("param:label2_pwd_bd");
    var domain = document.getElementById("param:domain_bd");
    var domain_label1 = document.getElementById("param:label1_domain_bd");
    var domain_label2 = document.getElementById("param:label2_domain_bd");
    
    if (typeBD == "sqlserver"){
      // Affichage du choix sur l'authentification
      document.getElementById("param:id_win").style.display = "inline";
      var radioValue;
      var radioTab = document.getElementsByName("param:id_win");
      for (var i=0; i<radioTab.length; i++) {
          if (radioTab[i].tagName=="INPUT") {
              if (radioTab[i].checked) {
                  radioValue = radioTab[i].value;
              }
          }
      }
      
      if (radioValue=="windows") {
          //password.style.display = "none";
          //password_label1.style.display = "none";
          //password_label2.style.display = "none";
          domain.style.display = "inline";
          domain_label1.style.display = "inline";
          domain_label2.style.display = "inline";
      } else {
          //password.style.display = "inline";
          //password_label1.style.display = "inline";
          //password_label2.style.display = "inline";
          domain.style.display = "none";
          domain_label1.style.display = "none";
          domain_label2.style.display = "none";
      }
    }else{
      // Pas affichage du choix sur l'authentification  
      document.getElementById("param:id_win").style.display = "none"; 
      //password.style.display = "inline";
      //password_label1.style.display = "inline";
      //password_label2.style.display = "inline";
      domain.style.display = "none";
      domain_label1.style.display = "none";
      domain_label2.style.display = "none";
    }
}
*/


function changeTypeAuthentification() {
    var radioValue;
    var radioTab = document.getElementsByName("param:id_win");
    for (var i=0; i<radioTab.length; i++) {
        if (radioTab[i].tagName=="INPUT") {
            if (radioTab[i].checked) {
                radioValue = radioTab[i].value;
            }
        }
    }
    
    //var password = document.getElementById("param:pwd_bd");
    //var password_label1 = document.getElementById("param:label1_pwd_bd");
    //var password_label2 = document.getElementById("param:label2_pwd_bd");
    var domain = document.getElementById("param:domain_bd");
    var domain_label1 = document.getElementById("param:label1_domain_bd");
    var domain_label2 = document.getElementById("param:label2_domain_bd");
    
    if (radioValue=="windows") {
        //password.style.display = "none";
        //password_label1.style.display = "none";
        //password_label2.style.display = "none";
        domain.style.display = "inline";
        domain_label1.style.display = "inline";
        domain_label2.style.display = "inline";
    } else {
        //password.style.display = "inline";
        //password_label1.style.display = "inline";
        //password_label2.style.display = "inline";
        domain.style.display = "none";
        domain_label1.style.display = "none";
        domain_label2.style.display = "none";
    }
}














