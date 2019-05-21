//--------------------------------------------------------------------
// function dateAdd()
// Resume : Ajoute un nombre de jours a une date passée en paramètre
// Parametres
// --> Entrée : - old_date : date a modifier
//              - days     : nombre de jours a ajouter
// --> Sortie : - new_date : date transformée
//-------------------------------------------------------------------
function dateAdd(old_date, days)
{

    // Date plus plus quelques jours
    var split_date = old_date.split('/');
    // Les mois vont de 0 a 11 donc on enleve 1, cast avec *1
    var new_date = new Date(split_date[2], split_date[1]*1 - 1, split_date[0]*1 + days);
    var new_day = new_date.getDate();
    new_day = ((new_day < 10) ? '0' : '') + new_day; // ajoute un zéro devant pour la forme
    var new_month = new_date.getMonth() + 1;
    new_month = ((new_month < 10) ? '0' : '') + new_month; // ajoute un zéro devant pour la forme
    var new_year = new_date.getYear();
    new_year = ((new_year < 200) ? 1900 : 0) + new_year; // necessaire car IE et FF retourne pas la meme chose
    var new_date_text = new_day + '/' + new_month + '/' + new_year;
    return new_date_text;

}


//--------------------------------------------------------------------
//
//     GESTION DE L'AFFICHAGE DU CALENDRIER PERSONNEL
//
// Fonction  : callCalendrierPersonnel
//              (Utilisation de la méthode AJAX)
//       a) Appel à la SERVLET
//--------------------------------------------------------------------
function callCalendrierPersonnel(mode){

    if(verif_date(document.getElementById("idDateCalePers"))) {

        document.body.style.cursor='wait';
        showObject("dataOnLoad");

        var codeSite = document.getElementById("codeSite").value;
        var atel   = document.getElementById("idListeAtelCalePers").value;
        var equi   = document.getElementById("idListeEquiCalePers").value;
        var date   = document.getElementById("idDateCalePers").value;
        var nbWeek = document.getElementById("idNbSemaineCalePers").value;
        var affichage = document.getElementById("idModeAffichage").value;
        var defaut = document.getElementById("idDefautAffichage").value;

        //---- S�curit� sur le mode d'affichage
        if (defaut==""){
            defaut="1";
        }
        if (affichage==""){
            affichage="1";
        }

        //--> Selon le mode passé en parametre
        if(mode=="up"){
            //--> on ajoute 7 jours à la date saisie
            date = dateAdd(date, 7);
            document.getElementById("idDateCalePers").value = date;
        }
        if(mode=="doubleup"){
            //--> on ajoute 7 jours à la date saisie
            date = dateAdd(date, (7*nbWeek));
            document.getElementById("idDateCalePers").value = date;
        }
        if(mode=="down"){
            //--> on ote 7 jours à la date saisie
            date = dateAdd(date, -7);
            document.getElementById("idDateCalePers").value = date;
        }
        if(mode=="doubledown"){
            //--> on ote 7 jours à la date saisie
            date = dateAdd(date, -(7*nbWeek));
            document.getElementById("idDateCalePers").value = date;
        }

        //---- Récupération de la largeur de la fenêtre
       //var frameWidth=document.getElementById("idCalDiv").clientWidth;
         var frameWidth=parent.document.body.clientWidth - 230;

        //---- Lancement de la requête au servlet
        reqCalRes = newXMLHttpRequest();
        var handlerFunction = waitCalendrierPersonnel; // on définie la méthode qui gérera la réponse de la requete Ajax
        reqCalRes.onreadystatechange = handlerFunction;
        reqCalRes.open("POST", contextPath+"/CalendrierPersonnelMainServlet?atel="+encodeURIComponent(atel)+"&equi="+encodeURIComponent(equi)+"&codeSite="+encodeURIComponent(codeSite)+"&date="+date+"&nbWeek="+nbWeek+"&width="+frameWidth+"&affichage="+encodeURIComponent(affichage)+"&defaut="+encodeURIComponent(defaut), true);
        reqCalRes.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        reqCalRes.send(null);

    }else{

        alert(document.getElementById('sip_msg_date').value);

    }
}
// Fonction  : waitCalendrierPersonnel
//              (Utilisation de la méthode AJAX)
//       b) Attente de la réponse de la SERVLET
//             Lorsque les 2 condition suivantes sont remplies (readyState==4 et status=200),
//             La fonction qui va traiter le résultat de la requête est appelée
function waitCalendrierPersonnel() {

    if (reqCalRes.readyState == 4) {

        hideObject("dataOnLoad");
        document.body.style.cursor='default';

        if (reqCalRes.status == 200) {

            showCalendrierPersonnel();

        } else {

            alert("Erreur " + reqCalRes.status + " : Erreur pendant la récupération de la réponse Ajax");

        }
    }
}
// Fonction  : showCalendrierPersonnel
//              (Utilisation de la méthode AJAX)
//       c) Réponse de la SERVLET reçue
//              On ecrit le résultat dans le DIV de la main page
function showCalendrierPersonnel() {

    // récupération de l'objet XML
    var innerSource = reqCalRes.responseText;

    document.getElementById("idCalDiv").innerHTML=innerSource;

}


//--------------------------------------------------------------------
//
//     GESTION DE LA SELECTION D'UNE ZONE DANS LE CALENDRIER
//
// Initialisation des Paramètres
//--------------------------------------------------------------------
var SelectEnable = false;
var ListeSelection = new Array();
var Xorigine = -1;
var Yorigine = -1;

// Fonction  : removePreviousZone
//       Vide le tableau en mémoire servant à mémoriser la zone sélectionnée
//
function removePreviousZone()
{

    //--> Effacement de la liste des <TD> selectionne
    for (var j=0; j<ListeSelection.length; j++) {
        ListeSelection.pop();
        j--;
    }

    Xorigine = -1;
    Yorigine = -1;
    SelectEnable = false;

}

// Fonction  : restorePreviousZone
//       Efface la zone précédemment sélectionnée
//          et remets les couleurs initiales
function restorePreviousZone(e)
{

    if (e.which == null)
       /* IE case */
       button= (e.button < 2) ? "LEFT" :
                 ((e.button == 4) ? "MIDDLE" : "RIGHT");
    else
       /* All others */
       button= (e.which < 2) ? "LEFT" :
                 ((e.which == 2) ? "MIDDLE" : "RIGHT");
    if(button == "LEFT"){

        //--> Effacement de la liste des <TD> selectionne
        for (var i=0; i<ListeSelection.length; i++) {
            var id       = ListeSelection[i][0];
            var backColor = ListeSelection[i][1];
            var textColor = ListeSelection[i][4];

            var tdSel = document.getElementById(id);
            tdSel.style.backgroundColor = backColor;
            tdSel.style.color = textColor;
        }

        removePreviousZone();

    }

}

// Fonction  : memorizeOriginZone
//       Sur clic droit (mouseDown) dans le tableau, mémorise les coordonnées du TD sélectionné
//
function memorizeOriginZone(e,td)
{

    if (e.which == null)
       /* IE case */
       button= (e.button < 2) ? "LEFT" :
                 ((e.button == 4) ? "MIDDLE" : "RIGHT");
    else
       /* All others */
       button= (e.which < 2) ? "LEFT" :
                 ((e.which == 2) ? "MIDDLE" : "RIGHT");
    if(button == "LEFT"){

       //--> RÃ©cupÃ©ration de l'id du <TD> pour alimentation
       //    des coordonnÃ©es d'origine de la selection
       var idTab = td.id.split("|");
       Xorigine = parseInt(idTab[0]);
       Yorigine = parseInt(idTab[1]);

       SelectEnable = true;

    }

}

// Fonction  : memorizeFinalZone
//       Sur clic droit (mouseUp) dans le tableau, récupère les coordonnées du TD sélectionné
//          puis pour toute la zone concernée (depuis le TD mémorisé lors du mouseDown
//          stocke dans ListeSelection les couleurs initiales de chaque cellule et
//          modifie la couleur de la zone sélectionnée
//
function memorizeFinalZone(e,td)
{

    if (e.which == null)
       /* IE case */
       button= (e.button < 2) ? "LEFT" :
                 ((e.button == 4) ? "MIDDLE" : "RIGHT");
    else
       /* All others */
       button= (e.which < 2) ? "LEFT" :
                 ((e.which == 2) ? "MIDDLE" : "RIGHT");
    if ((button == "LEFT") && (SelectEnable)) {

        //--> Tableau des donnÃ©es de l'id du <TD>
        var idTab    = td.id.split("|");
        var x_mouseOver = parseInt(idTab[0]);
        var y_mouseOver = parseInt(idTab[1]);

        //--> Creation de la liste des <TD> sÃ©lectionnÃ©

        //    Variables des coordonnÃ©es de la liste
        var x_debutSel = 0;
        var y_debutSel = 0;
        var x_finSel = 0;
        var y_finSel = 0;

        if(Xorigine > x_mouseOver){
            x_debutSel = x_mouseOver;
            y_debutSel = y_mouseOver;
            x_finSel   = Xorigine;
            y_finSel   = Yorigine;
        }else{
            x_debutSel = Xorigine;
            y_debutSel = Yorigine;
            x_finSel   = x_mouseOver;
            y_finSel   = y_mouseOver;
        }

        if(Yorigine > y_mouseOver){
            y_debutSel = y_mouseOver;
            y_finSel   = Yorigine;
        }else{
            y_debutSel = Yorigine;
            y_finSel   = y_mouseOver;
        }
        //alert(x_debutSel+"|"+y_debutSel +"--"+x_finSel+"|"+y_finSel);
        //--> DÃ©tection des <TD> devant Ãªtre selectionne
        for (var x = x_debutSel; x <= x_finSel ; x++){
            for (var y = y_debutSel; y <= y_finSel; y++){

                var idListe = new Array;
                var tdSel = document.getElementById(x+"|"+y);
                var valueTab = tdSel.getAttribute("data").split("|");

                idListe[0] = x+"|"+y;
                idListe[1] = tdSel.style.backgroundColor;
                idListe[2] = valueTab[0];
                idListe[3] = valueTab[1];
                idListe[4] = tdSel.style.color;

                ListeSelection.push(idListe);

                tdSel.style.backgroundColor = "#3872A8";
                tdSel.style.color = "#FFFFFF";


            }
        }

        SelectEnable = false;

    }

}

//--------------------------------------------------------------------
//
//     GESTION DU MENU GENERAL DU CALENDRIER
//
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// Fonction  : closeForm
//          Ferme le formulaire de saisi passé en paramètre
//
//--------------------------------------------------------------------
function closeForm(object){

    hideObject("cachForm");
    hideObject(object);

}

//--------------------------------------------------------------------
// Fonction  : openAddForm
//          Ouvre le formulaire permettant l'ajout d'un nouvel horaire
//
//--------------------------------------------------------------------
function openAddForm(){

    if(ListeSelection.length == 0){

        alert(document.getElementById('calRes_msg_1').value);

    }else{

        var listSize = ListeSelection.length;
        var dateDebu = ListeSelection[0][2];
        var dateFin  = ListeSelection[parseInt(listSize)-1][2];
        
        document.getElementById('idListeAjoutHoraire').style.visibility='visible';

        document.getElementById("idDateDebutAjout").value=dateDebu;
        document.getElementById("idDateFinAjout").value=dateFin;
        document.getElementById("idListeAjoutHoraire").value="-";
        document.getElementById("idPersAjout1").checked = "checked";

        showObject("cachForm");
        showObject("addForm");

    }

}

//--------------------------------------------------------------------
// Fonction  : openDeleteForm
//          Ouvre le formulaire permettant la suppression d'un horaire
//
//--------------------------------------------------------------------
function openDeleteForm(){

    if(ListeSelection.length == 0){

        alert(document.getElementById('calRes_msg_1').value);

    }else{

        document.getElementById("idPersDelete1").checked = "checked";

        showObject("cachForm");
        showObject("deleteForm");

    }

}

//--------------------------------------------------------------------
// Fonction  : openCalcForm
//          Ouvre le formulaire permettant le calcul des calendriers Equipement
//
//--------------------------------------------------------------------
function openCalcForm(){

    if(ListeSelection.length == 0){

        alert(document.getElementById('calRes_msg_1').value);

    }else{

        var listSize = ListeSelection.length;
        var dateDebu = ListeSelection[0][2];
        var dateFin  = ListeSelection[parseInt(listSize)-1][2];

        document.getElementById("idDateDebutCalcul").value=dateDebu;
        document.getElementById("idDateFinCalcul").value=dateFin;
        document.getElementById("idPersCalcul1").checked = "checked";

        showObject("cachForm");
        showObject("calcForm");

    }

}

//--------------------------------------------------------------------
// Fonction  : selectDisplayMode
//          Gère le réaffichage en fonction du mode d'affichage choisi
//     Paramètre : type de l'affichage choisi
//           1) Affichage du Code Horaire
//           2) Affichage du temps d'ouverture
//           3) Affichage si Horaire calculé oui ou non
//--------------------------------------------------------------------
function selectDisplayMode(displayMode){

    document.getElementById("idModeAffichage").value=displayMode;
    callCalendrierPersonnel();
}

//--------------------------------------------------------------------
// Fonction  : selectDisplayDefault
//          Gère le réaffichage en fonction du choix
//             avec ou sans l'affichage de l'horaire par défaut
//--------------------------------------------------------------------
function selectDisplayDefault(){

    if (document.getElementById("idDefautAffichage").value=="1"){
        document.getElementById("idDefautAffichage").value="2";
    }else{
        document.getElementById("idDefautAffichage").value="1";
    }
    callCalendrierPersonnel();
}


//--------------------------------------------------------------------
//
//     GESTION DU MENU FORMULAIRE D'AJOUT D'UN NOUVEL HORAIRE
//
//--------------------------------------------------------------------
// Fonction  : callCalendrierPersonnelAdd
//       Ajout d'un nouvel Horaire dans le calendrier
//              (Utilisation de la méthode AJAX)
//       a) Appel à la SERVLET
//--------------------------------------------------------------------
function callCalendrierPersonnelAdd(){

    //--> Récupération des données saisies
    var codeSite = document.getElementById("codeSite").value;
    var codeHora = document.getElementById("idListeAjoutHoraire").value;
    var dateDebu = document.getElementById("idDateDebutAjout").value;
    var dateFin  = document.getElementById("idDateFinAjout").value;
    var br       = document.getElementsByName("idPersAjout");
    var atel     = document.getElementById("idListeAtelCalePers").value;
    var equi     = document.getElementById("idListeEquiCalePers").value;
    var deltaUTC = document.getElementById("deltaUTC").value;
    
    document.getElementById('idListeAjoutHoraire').style.visibility='visible';
    
    //--> Test de la liste des codes horaires
    if(document.getElementById("idListeAjoutHoraire").value == "-"){
        alert(document.getElementById("calRes_msg_2").value);
        return;
    }

    //--> Comparaison entre les dates saisies
    if(!compare_dates_cale(dateDebu,dateFin)){
        alert(document.getElementById("calRes_msg_3").value);
        return;
    }

    //---- Mise en place des DIV
    document.body.style.cursor='wait';
    showObject("calcProcess");
    hideObject("addForm");

    var listeRes = "-";
    var type     = "";
    for (i = 0;i < br.length; i++) {
        if (br[i].checked == true){
            type = br[i].value ;
        }
    }

    //--> Selon le choix de liste d'equipement a renseigne
    //    si liste des dates selectionnée, creation d'un chaine
    //    de caracteres contenant les codes machine
    if (type==1) {

        listeRes = "";
        var prec ="-";

        //--> On parcour la liste des selection pour recupere les code machines
        for (var i=0; i<ListeSelection.length; i++) {
            var ec = ListeSelection[i][3];
            if(prec != ec){
                listeRes = listeRes + ec +"|";
                prec = ec;
            }
        }

    }

    req = newXMLHttpRequest();

    var handlerFunction = waitCalendrierPersonnelAdd; // on définie la méthode qui gérera la réponse de la requete Ajax
    req.onreadystatechange = handlerFunction;
    req.open("POST", contextPath+"/CalendrierPersonnelAjoutServlet?atel="+encodeURIComponent(atel)+"&equi="+encodeURIComponent(equi)+"&codeSite="+encodeURIComponent(codeSite)+"&codeHora="+encodeURIComponent(codeHora)+"&dateDebu="+dateDebu+"&dateFin="+dateFin+"&deltaUTC="+deltaUTC+"&listePers="+encodeURIComponent(listeRes), true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send(null);
}
// Fonction  : waitCalendrierPersonnelAdd
//              (Utilisation de la méthode AJAX)
//       b) Attente de la réponse de la SERVLET
//             Lorsque les 2 condition suivantes sont remplies (readyState==4 et status=200),
//             La fonction qui va traiter le résultat de la requête est appelée
function waitCalendrierPersonnelAdd() {

    if (req.readyState == 4) {

        document.body.style.cursor='default';
        hideObject("calcProcess");

        if (req.status == 200) {

            showCalendrierPersonnelAdd();

        } else {

            alert("Erreur " + req.status + " : Erreur pendant la récupération de la réponse Ajax");
            hideObject("cachForm");

        }
    }
}
// Fonction  : showCalendrierPersonnelAdd
//              (Utilisation de la méthode AJAX)
//       c) Réponse de la SERVLET reçue
//              on recharge le calendrier après modification
function showCalendrierPersonnelAdd() {

    // récupération de l'objet XML
    var xmldoc = req.responseXML;

    //--- récupération de la liste des balises <of>
    var xmlServlet = xmldoc.getElementsByTagName("insertop");
    var xml = xmlServlet[0];

    //--> On recupere la valeur de retour
    var retour  = xml.getElementsByTagName("retour")[0];
    var result  = retour.getAttribute("value");

    hideObject("cachForm");

    //--> Message d'erreur si necessaire
    if(result == "false"){

        alert(document.getElementById("calRes_msg_4").value);

    }else{

        removePreviousZone();
        callCalendrierPersonnel();

    }

}


//--------------------------------------------------------------------
// Fonction  : callCalendrierPersonnelDelete
//       Suppression d'un Horaire dans le calendrier
//              (Utilisation de la méthode AJAX)
//       a) Appel à la SERVLET
//--------------------------------------------------------------------
function callCalendrierPersonnelDelete(){

    //---- Mise en place des DIV
    document.body.style.cursor='wait';
    showObject("calcProcess");
    hideObject("deleteForm");

    //--> Récupération des données saisies
    var br       = document.getElementsByName("idPersDelete");
    var codeSite = document.getElementById("codeSite").value;
    var deltaUTC = document.getElementById("deltaUTC").value;

    var listeRes = "";
    var type     = "";

    //--> parcour des la liste des boutons radio
    for (i = 0;i < br.length; i++) {
        if (br[i].checked == true){
            type = br[i].value ;
        }
    }

        //--> On parcour la liste des selection pour recupere les code machines
    //    for (var i=0; i<self.opener.ListeSelection.length; i++) {
    //        var ec = self.opener.ListeSelection[i][3];
    var prec ="-";
    for (var i=0; i<ListeSelection.length; i++) {
        var ec = ListeSelection[i][3];
        if(prec != ec){
            listeRes = listeRes + ec +"|";
            prec = ec;
        }
    }

    var listSize = ListeSelection.length;
    var dateDebu = ListeSelection[0][2];
    var dateFin  = ListeSelection[parseInt(listSize)-1][2];

    req = newXMLHttpRequest();
    var handlerFunction = waitCalendrierPersonnelDelete; // on définie la méthode qui gérera la réponse de la requete Ajax
    req.onreadystatechange = handlerFunction;
    req.open("POST", contextPath+"/CalendrierPersonnelSupprimeServlet?dateDebu="+dateDebu+"&dateFin="+dateFin+"&deltaUTC="+deltaUTC+"&codeSite="+encodeURIComponent(codeSite)+"&listePers="+encodeURIComponent(listeRes)+"&type="+encodeURIComponent(type), true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send(null);

}
// Fonction  : waitCalendrierPersonnelDelete
//              (Utilisation de la méthode AJAX)
//       b) Attente de la réponse de la SERVLET
//             Lorsque les 2 condition suivantes sont remplies (readyState==4 et status=200),
//             La fonction qui va traiter le résultat de la requête est appelée
function waitCalendrierPersonnelDelete() {

    if (req.readyState == 4) {

        document.body.style.cursor='default';
        hideObject("calcProcess");

        if (req.status == 200) {

            showCalendrierPersonnelDelete();

        } else {

            alert("Erreur " + req.status + " : Erreur pendant la récupération de la réponse Ajax");
            hideObject("cachForm");

        }
    }
}
// Fonction  : showCalendrierPersonnelDelete
//              (Utilisation de la méthode AJAX)
//       c) Réponse de la SERVLET reçue
//              on recharge le calendrier après modification
function showCalendrierPersonnelDelete() {

    // récupération de l'objet XML
    var xmldoc = req.responseXML;

    //--- récupération de la liste des balises <of>
    var xmlServlet = xmldoc.getElementsByTagName("insertop");
    var xml = xmlServlet[0];

    //--> On recupere la valeur de retour
    var retour  = xml.getElementsByTagName("retour")[0];
    var result  = retour.getAttribute("value");

    hideObject("cachForm");

    //--> Message d'erreur si necessaire
    if(result == "false"){

        alert(document.getElementById("calRes_msg_4").value);

    }else{

        removePreviousZone();
        callCalendrierPersonnel();

    }

}

//--------------------------------------------------------------------
// Fonction  : callCalendrierPersonnelCalcul
//       Suppression d'un Horaire dans le calendrier
//              (Utilisation de la méthode AJAX)
//       a) Appel à la SERVLET
//--------------------------------------------------------------------
function callCalendrierPersonnelCalcul(){

    //--> Récupération des données saisies
    var dateDebu = document.getElementById("idDateDebutCalcul").value;
    var dateFin  = document.getElementById("idDateFinCalcul").value;
    var atel     = document.getElementById("idListeAtelCalePers").value;
    var equi     = document.getElementById("idListeEquiCalePers").value;
    var br       = document.getElementsByName("idPersCalcul");
    var codeSite = document.getElementById("codeSite").value;
    var deltaUTC = document.getElementById("deltaUTC").value;

    //--> Comparaison entre les dates saisies
    if(!compare_dates_cale(dateDebu,dateFin)){
        alert(document.getElementById("calRes_msg_3").value);
        return;
    }

    //---- Mise en place des DIV
    document.body.style.cursor='wait';
    showObject("calcProcess");
    hideObject("calcForm");

    var listeRes = "-";
    var type     = "";
    for (i = 0;i < br.length; i++) {
        if (br[i].checked == true){
            type = br[i].value ;
        }
    }

    //--> Selon le choix de liste d'equipement a renseigne
    //    si liste des dates selectionnée, creation d'un chaine
    //    de caracteres contenant les codes machine
    if (type==1) {

        listeRes = "";
        var prec ="-";

        //--> On parcour la liste des selection pour recupere les code machines
        for (var i=0; i<ListeSelection.length; i++) {
            var ec = ListeSelection[i][3];
            if(prec != ec){
                listeRes = listeRes + ec +"|";
                prec = ec;
            }
        }

    }

    req = newXMLHttpRequest();
    var handlerFunction = waitCalendrierPersonnelCalc; // on définie la méthode qui gérera la réponse de la requete Ajax
    req.onreadystatechange = handlerFunction;
    req.open("POST", contextPath+"/CalendrierPersonnelCalculServlet?atel="+encodeURIComponent(atel)+"&equi="+encodeURIComponent(equi)+"&codeSite="+encodeURIComponent(codeSite)+"&dateDebu="+dateDebu+"&dateFin="+dateFin+"&deltaUTC="+deltaUTC+"&listePers="+encodeURIComponent(listeRes), true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send(null);

}
// Fonction  : waitCalendrierPersonnelCalc
//              (Utilisation de la méthode AJAX)
//       b) Attente de la réponse de la SERVLET
//             Lorsque les 2 condition suivantes sont remplies (readyState==4 et status=200),
//             La fonction qui va traiter le résultat de la requête est appelée
function waitCalendrierPersonnelCalc() {

    if (req.readyState == 4) {

        document.body.style.cursor='default';
        hideObject("calcProcess");

        if (req.status == 200) {

            showCalendrierPersonnelCalc();

        } else {

            alert("Erreur " + req.status + " : Erreur pendant la récupération de la réponse Ajax");
            hideObject("cachForm");

        }
    }
}
// Fonction  : showCalendrierPersonnelCalc
//              (Utilisation de la méthode AJAX)
//       c) Réponse de la SERVLET reçue
//              on recharge le calendrier après modification
function showCalendrierPersonnelCalc() {

    // récupération de l'objet XML
    var xmldoc = req.responseXML;

    //--- récupération de la liste des balises <of>
    var xmlServlet = xmldoc.getElementsByTagName("insertop");
    var xml = xmlServlet[0];

    //--> On recupere la valeur de retour
    var retour  = xml.getElementsByTagName("retour")[0];
    var result  = retour.getAttribute("value");

    hideObject("cachForm");

    //--> Message d'erreur si necessaire
    if(result == "false"){

        alert(document.getElementById("calRes_msg_4").value);

    }else{

        removePreviousZone();
        callCalendrierPersonnel();

    }

}

