function demandeTestConnexion() {
    
    var bd = document.getElementById("param:bd_bd").value;
    var server = document.getElementById("param:srv_bd").value;
    var port = document.getElementById("param:port_bd").value;
    var dbname = document.getElementById("param:nom_bd").value;
    var user = document.getElementById("param:user_bd").value;
    var password = document.getElementById("param:pwd_bd").value;
    
    //alert(bd + "\n" + server + "\n" + port + "\n" + dbname + "\n" + user + "\n" + password);
    
    req = newXMLHttpRequest();	
    var handlerFunction = attenteReponseTestConnexion;
    req.onreadystatechange = handlerFunction;
    req.open("POST", "test.tcs?bd=" + bd + 
                            "&server=" + server +
                            "&port=" + port +
                            "&dbname=" + dbname +
                            "&user=" + user +
                            "&password=" + password);
    req.setRequestHeader("Content-Type", 
           "application/x-www-form-urlencoded");
    req.send(null);    
    
}

function attenteReponseTestConnexion() {
    if (req.readyState == 4) {
        if (req.status == 200) {
            traitementReponseTestConnexion();
        } else {
            alert("Erreur " + req.status + "Erreur pendant la récupération de la réponse Ajax");
        }
    }
}

function traitementReponseTestConnexion() {
    
    var textdoc = req.responseText;
    //alert(textdoc);
    var xmldoc = req.responseXML;
    
    var resultList = xmldoc.getElementsByTagName("result");
    var result = "ok";
    if (resultList.length==1) {
        result = resultList[0].text;
    }
    var messageList = xmldoc.getElementsByTagName("message");
    var message = "";
    if (messageList.length==1) {
        message = messageList[0].text;
    }
 
    showTestConnect(message, result);
    
    
    /*
    var result = true;
    if (textdoc!="Test de connexion effectue avec succes !") {
        result = false;
    }
    showTestConnect(textdoc, result);
    */
    
}