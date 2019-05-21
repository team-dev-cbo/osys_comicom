function f_focus() {
    var ancien_pwd = document.getElementById('form_pwd:ancien_pwd');
    if (ancien_pwd != null) {
        ancien_pwd.focus();
        
    }
}

function cryptPassword(valeur_pwd_saisie, valeur_pwd_crypte) {
    
    var saisie_pwd = document.getElementById(valeur_pwd_saisie);
    var pwd_crypte = document.getElementById(valeur_pwd_crypte);
    pwd_crypte.value = MD5(saisie_pwd.value); 
}


function cryptagePassword() {
    
    // Crypte l'ancien mot de passe
    cryptPassword("form_pwd:ancien_pwd", "form_pwd:ancien_pwd_crypte");
    
    // Crypte le nouveau mot de passe
    cryptPassword("form_pwd:nouveau_pwd", "form_pwd:nouveau_pwd_crypte");    
    
    // Crypte la confirmation du nouveau mot de passe
    cryptPassword("form_pwd:conf_nv_pwd", "form_pwd:conf_nv_pwd_crypte");
    
    var mspRsa = document.getElementById("form_pwd:nouveau_pwd_rsa");
    var mdpSaisi = document.getElementById("form_pwd:nouveau_pwd");
    // Encrypt with the public key...
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    var encodedEncrypted = encrypt.encrypt(mdpSaisi.value)
    
    mspRsa.value = encodedEncrypted;
}

function hidePopupMess() {
    var popupMess = document.getElementById('popupMess');
    popupMess.style.display='none';
}

function verifMdPGen(){
    verifMdP();
    verifConfirmation();
    verifGrise();
}

function verifMdP(){
    
    var elmtNvMdP = document.getElementById("form_pwd:nouveau_pwd");
    var nvMdP = elmtNvMdP.value;
    
    verifierConformiteNbChar(nvMdP);
    verifierConformiteNbMaj(nvMdP);
    verifierConformiteNbNum(nvMdP);
    verifierConformiteNbSpec(nvMdP);
    verifierConformiteRenouvellement(nvMdP);
}

function verifConfirmation(){
    
    var elmtNvMdP = document.getElementById("form_pwd:nouveau_pwd");
    var nvMdP = elmtNvMdP.value;
    
    var elmtConfirmationMdP = document.getElementById("form_pwd:conf_nv_pwd");
    var confirmationMdP = elmtConfirmationMdP.value;
    
    var estConforme = nvMdP === confirmationMdP;
    changerMessageConformite("messageConformiteConfirmation", estConforme, "infoConfirmation");
}

function verifierConformiteNbChar(nvMdP){
    var estConforme = nvMdP.length >= nbCharMin;

    if(nbCharMin > 0){
        changerMessageConformite("messageConformiteNbChar", estConforme, "infoNbChar");
    }
}

function verifierConformiteNbMaj(nvMdP){
    
    // /regex/g <- le g signifie 'global', pour continuer la recherche après la 
    // première correspondance
    var estConforme = verifierNombreCorrespondance(nvMdP, /[A-Z]/g, nbMaj);
    
//    console.log("verifierConformiteNbMaj : conforme = " + estConforme);
    if(nbMaj > 0){
        changerMessageConformite("messageConformiteNbCaps", estConforme, "infoNbCaps");
    }
}

function verifierConformiteNbNum(nvMdP){
    
    // /regex/g <- le g signifie 'global', pour continuer la recherche après la 
    // première correspondance
    var estConforme = verifierNombreCorrespondance(nvMdP, /[0-9]/g, nbChiffres);

    if(nbChiffres > 0){
        changerMessageConformite("messageConformiteNbNum", estConforme, "infoNbNum");
    }
}

function verifierConformiteNbSpec(nvMdP){
    // les charactères spéciaux autorisés : ‘- _ & # @ ¤ $ ¥ £ € µ % ? ! § + = .
    // dans la regex, les caractères échappés : - ? + . (qui sont des caractèrs de regex)
    // /regex/g <- le g signifie 'global', pour continuer la recherche après la 
    // première correspondance
    
    var estConforme = verifierNombreCorrespondance(nvMdP, /[‘\-_&#@¤$¥£€µ%\?!§\+=\.]/g, nbCharSpec);
//    console.log("verifierConformiteNbMaj : conforme = " + estConforme);
    if(nbCharSpec > 0){
        changerMessageConformite("messageConformiteNbSpec", estConforme, "infoNbSpec");
    }
}

function verifierNombreCorrespondance(chaine, regexGlobale, nbCorrespondanceADepasser){
    var strLog = "verifierNombreCorrespondance : nb de " + regexGlobale + " dans ";
    var tabCorrespondance = chaine.match(regexGlobale); 
    strLog += ", tabCorrespondance = " + tabCorrespondance;
   // si le tableau de correspondance (tabCorrespondance) n'est pas null, le 
   // nombre de correspondance (nbCorrespondance) vaut la taille du tableau 
   // (tabCorrespondance.length), sinon il vaut 0
    var nbCorrespondance = tabCorrespondance ? tabCorrespondance.length : 0 ; 
    strLog += ", nbCorrespondance = " + nbCorrespondance;
    strLog += " (VS nbCorrespondanceADepasser = " + nbCorrespondanceADepasser + ")";
    var estConforme = nbCorrespondance >= nbCorrespondanceADepasser;
    strLog += ", estConforme = " + estConforme;
//    console.log(strLog);
    return estConforme;
}

function verifierConformiteRenouvellement(nvMdP){
        
    var elmtAncMdP = document.getElementById("form_pwd:ancien_pwd");
    var ancMdP = elmtAncMdP.value;
    
    //test si les deux mots de passe sont différents
    var nvEtAncDifferents = ancMdP !== nvMdP;
//    console.log("verifierConformiteRenouvellement : les deux mots de passe sont égaux = " + nvEtAncDifferents);
    changerMessageConformite("messageConformiteRenouvellement", nvEtAncDifferents, "infoRenouvellement");
}

function changerMessageConformite(idMessage, estConforme, prefixClefCarteMessage){
    var elmtMessage = document.getElementById(idMessage);
    var classe;
    var clefCarteMessage = prefixClefCarteMessage;
    if(estConforme){
        classe = "conformeMdP";
        clefCarteMessage += "OK";
    } else {
        classe = "nonConformeMdP";
        clefCarteMessage += "NOK";
    }
    
    var message = carteMessagesInfo[clefCarteMessage];
//    console.log("changerMessageConformite : idMessage = " + idMessage + 
//            ", estConforme = " + estConforme + 
//            ", la classe mise est = " + classe + 
//            ",\n le prefixClefCarteMessage est = " + prefixClefCarteMessage + 
//            ", la clefCarteMessage est = " + clefCarteMessage + 
//            ", le message est = " + message);
    
    elmtMessage.className = classe;
    elmtMessage.textContent = message;
}

function verifGrise(){
    var elmtMessageConformiteConfirmation = document.getElementById("messageConformiteConfirmation");
    var elmtMessageNbChar = document.getElementById("messageConformiteNbChar");
    var elmtMessageNbCaps = document.getElementById("messageConformiteNbCaps");
    var elmtMessageNbNum = document.getElementById("messageConformiteNbNum");
    var elmtMessageNbSpec = document.getElementById("messageConformiteNbSpec");
    var elmtMessageRenouvellement = document.getElementById("messageConformiteRenouvellement");
    
    var tabElmtMessage = [
        elmtMessageConformiteConfirmation,
        elmtMessageRenouvellement
    ];
    
    // certains éléments peuvent être null (si la politique de mot de passe 
    // indique qu'il en faut au moins 0, les règles ne sont pas affichées)
    // pour ceux-là, test avant l'insertion
    ajouterElmtAuTableauSiNonNull(tabElmtMessage, elmtMessageNbChar);
    ajouterElmtAuTableauSiNonNull(tabElmtMessage, elmtMessageNbCaps);
    ajouterElmtAuTableauSiNonNull(tabElmtMessage, elmtMessageNbNum);
    ajouterElmtAuTableauSiNonNull(tabElmtMessage, elmtMessageNbSpec);
    
    var tousConformes = true;
    for(var i = 0; i < tabElmtMessage.length; i++){
        var classesElmtMessageCourant = tabElmtMessage[i].className;
        var elmtCourantEstConforme = classesElmtMessageCourant.indexOf("nonConformeMdP") < 0;
        tousConformes = tousConformes && elmtCourantEstConforme;
    }
    
    var elmBoutonValider = document.getElementById("form_pwd:boutonValider");
    if(tousConformes){
        activerBouton(elmBoutonValider);
    } else {
        desactiverBouton(elmBoutonValider);
    }
}

function ajouterElmtAuTableauSiNonNull(tableau, elmt){
    if(elmt != null){
        tableau.push(elmt);
    }
}

function desactiverBouton(elmtBouton){
    changerActivationBouton(elmtBouton, false);
}

function activerBouton(elmtBouton){
    changerActivationBouton(elmtBouton, true);
}

function changerActivationBouton(elmtBouton, actif){
    if(actif){
        // activation du bouton
        elmtBouton.className = "btnOk commandButton";
        // pour que le bouton "s'enfonce" quand l'utilisateur clique dessus
        elmtBouton.removeAttribute("disabled");
        
    } else {
        // desactivation du bouton
        elmtBouton.className = "btnOk grise commandButton";
         // évite que le bouton ne "s'enfonce" quand l'utilisateur clique dessus
        elmtBouton.setAttribute("disabled", "disabled");
        
    }
}

function clickSiNonGrise(evt){
    var elmtBoutonValider = document.getElementById("form_pwd:boutonValider");
    if(elmtBoutonValider.className.indexOf("grise") > 0){
        evt.preventDefault();
    }
}