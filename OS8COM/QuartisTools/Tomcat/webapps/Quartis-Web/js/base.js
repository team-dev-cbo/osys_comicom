/*******************************************
 * FONCTIONS POUR CHANGER DE PAGE
 *******************************************/

/**
 * Réarme les liens (balises <div>) pour qu'ils appellent changerPage ou 
 * changerModule au lieu d'agir directemenht sur l'URL.
 */
function armerLiensPourRedirection(){
    // utilisation de .off() et .on() plutôt que .click()
    // parce que .click() ajoute un handler (une fonction appelée) à chaque clic,
    // ce qui déclenchait l'event plusieurs fois.
    // cf. http://stackoverflow.com/a/20881348/2112089 
    // http://api.jquery.com/on/ et http://api.jquery.com/off/
    var listeLiensFullweb = $( ".fullwebLink" );
    listeLiensFullweb.off('click');
    listeLiensFullweb.on('click', clicSurBoutonFullweb);
}

function clicSurBoutonFullweb(event){
    
    global_startTimeClicSurBouton = new Date().getTime(); 
    
    event.preventDefault();
    effacerMessageErreur();

    // si le mot de passe doit être changé, les boutons sont bloqués
    if(!modifierMdp){
        
        var jqueryTarget = $(event.currentTarget);
        var aLaClasseChangerModule = jqueryTarget.hasClass("changerModule");
        var moduleIdLienNotModuleIdActuel = false;
        //extraction de l'ID du module
        var moduleId = jqueryTarget.data("moduleid");
        if(moduleId){
            moduleIdLienNotModuleIdActuel = moduleId !== moduleIdActuel;
        }
        var changerModule = aLaClasseChangerModule || moduleIdLienNotModuleIdActuel;
        var pageId = jqueryTarget.data("pageid");

        //l'iframe est masquée pour lisser la transition
        afficherFondChargement();

        var urlExteSing = UrlExternSingleton();
        urlExteSing.getUrlExterne();
        var url = jqueryTarget.data("url");

        var accessAllowed = canAccessIFrame();
        if(accessAllowed){
            // pour les supervisuers, on récupère les paramètres qui sont "poussés" par le serveur
            var forwardedParameters = document.getElementById("framePrincipale").contentWindow.forwardedParameters;
            if(forwardedParameters){
                url = url + forwardedParameters;
            }
        }
        

        if(changerModule){
            changerModuleAppelAjax(url, moduleId, userID, pageId);
        } else {
            // récupération du nom du superviseur de niveau 3
            // pour le fil d'ariane
            var labelPage = jqueryTarget.data("label");
            changerPage(url, pageId, labelPage, urlExteSing.getUrlExterne(), globalJsonMenu);
        }
    }
    
}

function effacerMessageErreur(){
    var divMessageErreur = $("div#errorMessage")
    if(divMessageErreur) {
        divMessageErreur.detach();
    }
}

function afficherMessageErreur(erreurMessage){
    
    //pour être sûr de ne pas cumuler les messages d'erreur
    effacerMessageErreur();
    
    var templateErrorMessage = "<div id='errorMessage' align='center' class='messageErreurAjax'>";
    templateErrorMessage += erreurMessage;
    templateErrorMessage += "&nbsp;<span onclick='effacerMessageErreur()' class='croixMessageErreur'>&times;</span></div>";
    var nodeError = $(templateErrorMessage);
    var nodeIframe = $("#framePrincipale");
    nodeError.css('top', nodeIframe.position().top + 'px');
    nodeIframe.before(nodeError); // NB: $(target).before(contentToBeInserted) (says jQuery doc : https://api.jquery.com/before/)
    
}

function changerModuleAppelAjax(urlNouvellePage, moduleId, userID, idPage){
    // récupération des données du menu à partir de l'ID
    // => menu/fil d'ariane,  titre
    
    moduleIdActuel = moduleId;
    
    // cf.http://learn.jquery.com/ajax/jquery-ajax-methods/
    var ajaxConfObject = {
        
        //l'URL de la requête
        url: "moduleChange.ajx",
        
        //les données à envoyer (sont converties en une chaîne)
        data: {
            moduleID: moduleId,
            userID: userID
        },
        
        // requête POST ou GET
        type: "GET",
        
        //le type de données attendu
//        dataType : "json",
        
        //la fonction à exécuter en cas de succès
        //le paramètre json correspond à la réponse
        success: function( json ) {
            changerModuleSuccesAjax(urlNouvellePage, moduleId, json, idPage);
        },
        
        //la fonction à exécuter en cas d'échec de la requête
        //la requête, le code de statut et l'erreur sont passées en paramètre
        error: function( requete, statut, erreurLevee ) {
            afficherMessageErreur( localMessageErreurModule );
        }
    };
    
    $.ajax(ajaxConfObject);
}

function changerModuleSuccesAjax (urlNouvellePage, moduleId, reponseAjax, idPage) {
    global_heureReceptionReponse = (new Date()).getTime();
    
    effacerMessageErreur();
    try {
        var jsonModule = $.parseJSON(reponseAjax);
        
        var jsonMenuLocal = jsonModule["menu_gauche"];
    
        var nouveauTitre = jsonMenuLocal["labelLocal"];
        
        var idPageDefaut = jsonModule["idPageDefaut"];
        if(idPage === undefined || idPage === '' || idPage === null){
            idPage = idPageDefaut;
        }
        globalIdPageDefautModuleCourant = idPageDefaut;
        var isMenuAccueil = moduleId === "accueil";

        changerMenu(jsonMenuLocal, isMenuAccueil);
        changerTitre(nouveauTitre);
        var labelPage = null; //labelPage n'est pas nécessaire en cas de changement de module
        
        var endTimeChangementModule = new Date().getTime(); 
        remoteLog(global_startTimeClicSurBouton, endTimeChangementModule, "JS REQUEST Changing menu (from clic to appearance)", moduleId);
                
        changerPage(urlNouvellePage, idPage, labelPage, urlExterneSpe, jsonMenuLocal);
        
    } catch (parseError) {
        //erreur au parsing du JSON
        // -> sûrement parce que la requête a renvoyé la page login.jsp
        // (au format HTML) au lieu du menu attendu
        if(reponseAjax.indexOf("Une erreur est survenue") >= 0 ||
                reponseAjax.indexOf("An error occurred") >= 0 ){
            var iframe = document.getElementById("framePrincipale");
            var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
            innerDoc.getElementsByTagName("body")[0].innerHTML = reponseAjax;
        } else {
            // erreur dans le JSON -> renvoi vers page de connexion
            renvoiVersPageLogin();
        }
    }
}

function renvoiVersPageLogin(){
    // renvoyer vers page de login
    // NB : .sso parce que .jsf lance la reconnexion auto en SSO 
    // -> on se retrouve sur la page d'accueil au lieu de la page de connexion
    var urlLogin = webAppUrl + "/login.sso";
    window.location.replace(urlLogin);
}


/**
 * Change la page à l'intérieur d'un même module : change le contenu de l'iframe
 * et le fil d'ariane.
 * @param stringNouvelleUrl la nouvelle URL vers laquelle doit pointer 
 * framePrincipale
 * @param idPage l'ID de la page
 * @param labelPage le label de la page dans la langue de l'utilisateur
 * @param urlExterneSpe le préfixe des URL spécifiques
 * @param jsonMenu le menu, pour le fil d'Ariane
 * @returns void
 */
function changerPage(stringNouvelleUrl, idPage, labelPage, urlExterneSpe, jsonMenu){
    var isIdPageUndefined = (idPage === null || 
                            idPage === undefined || 
                            typeof idPage === "undefined");
    var isUrlExterne = !isUrlVersProduitOsys(stringNouvelleUrl, urlExterneSpe, webAppUrl);
    var isLienExterneOuSpecial = isIdPageUndefined || isUrlExterne;
    var isLienSpecial = isIdPageUndefined && !isUrlExterne;
    
    //liens externes : vers un site en-dehors de Quartis Web
    //liens spéciaux : lien vers une page de changement de mot de passe, page 
    //"à propos"... Ces liens n'ont pas  besoin de certains traitements des 
    //liens internes normaux
    
    //traitements pour les liens internes :
    if(!isLienExterneOuSpecial){
        
        //stockage de l'URL et de l'ID en mémoire pour recharger la page en cas de 
        //changement de site
        urlPageCourante = stringNouvelleUrl;
        idPageCourante = idPage;
        
        var isAdminFavoris = idPage === "#ADMINFAV";
        if(!isAdminFavoris){
            //changer le fil d'ariane (sauf pour la page d'admin. des favoris
            changerFilAriane(idPage, labelPage, jsonMenu);
        }
        
    } else if(isLienSpecial){
        urlDeRetour = urlActuelleIframe();
        // Modification P.MAHE du 09/04/2015
        // correctif pour que si l'iframe n'est pas encore chargée (ce qui 
        // arrive quand l'utilisateur est redirigé vers la page de modification 
        // de mot de pase), l'urlDeRetour soit l'URL de l'accueil
        if(urlDeRetour === "about:blank"){
            urlDeRetour = globalUrlAccueil;
        }
        
        idDeRetour = idPageCourante;
        //stockage des données dans un div caché pour les retrouver quand 
        //l'utilisateur veut revenir à la page d'où il a cliqué sur le lien
        
        //test si le div existe :
        var divCache = $("div#lienSpecial")[0];
        if(divCache){
            $("div#header").remove("div#lienSpecial");
        }
        
        var template = '<div id="lienSpecial" style="display: none;" ';
        template += 'data-urlderetour="' + urlDeRetour + '" ';
        template += 'data-idderetour="' + idDeRetour + '" ';
        template += 'data-webappurl="' + webAppUrl + '" ';
            
        template += '/>';
        divCache = $(template);
        $("div#header").append(divCache);
    }
    
    if(isUrlExterne){
        window.open(stringNouvelleUrl);
        masquerFondChargement();
    } else {
        changerContenuIframe(stringNouvelleUrl);
    }
}

function isUrlVersProduitOsys(urlAVerifier, urlExterneSpe, localWebAppUrl){
    var urlAVerifierMinuscule = urlAVerifier.toLowerCase();
    var localWebAppUrlMinuscule = localWebAppUrl.toLowerCase();
    var isOsys = chaineCommencePar(urlAVerifierMinuscule, localWebAppUrlMinuscule);
    isOsys = isOsys || (urlAVerifierMinuscule.indexOf("quartis".toLowerCase()) >= 0);
    isOsys = isOsys || (urlAVerifierMinuscule.indexOf("optima".toLowerCase()) >= 0);
    isOsys = isOsys || (urlAVerifierMinuscule.indexOf("ModuleHabilitationsPrima".toLowerCase()) >= 0);
    isOsys = isOsys || (urlAVerifierMinuscule.indexOf(urlExterneSpe) >= 0 && urlExterneSpe.length > 0);
    
    return isOsys;
}

function urlActuelleIframe(){
    var iframe = $( "iframe#framePrincipale").contents().get(0);
    var urlIframe = iframe.location.href;
    return urlIframe;
}

function chaineCommencePar(chaine, sousChaine){
    var indexSousChaine = chaine.indexOf(sousChaine);
    return indexSousChaine === 0;
}

function changerMenu(mapMenu, isMenuAccueil){

    //le div contenant le menu
    var divMenu = $( "div#menuGeneral" );
    
    divMenu.empty();
    var listeCategories = mapMenu["categories"];
    
    //boucle sur les éléments de la map
    for (var i = 0; i < listeCategories.length; i++) {
        
        var jsonCategorie = listeCategories[i];
        
        var templateCategorie = creerTemplateCategorie(jsonCategorie, i, isMenuAccueil);
        var nodeCategorie = $(templateCategorie);
        
        divMenu.append(nodeCategorie);
    }
    globalJsonMenu = mapMenu;
}

function changerTitre(nouveauTitre){
    //récupération du div contenant le titre
    var divBandeauTitre = document.getElementById('bandeauTitreTexte');
    //remplacement du titre actuel
    divBandeauTitre.childNodes[0].nodeValue = nouveauTitre;
}

/**
 * Change le contenu de l'iframe framePrincipale
 * @param {type} stringNouvelleUrl
 * @returns void
 */
function changerContenuIframe(stringNouvelleUrl){
    
    //sauvegarde de l'adresse pour recharger la page au redimensionnement
    urlDeRetour = stringNouvelleUrl;
        
    //si l'URL pointe sur un formulaire ou un etat (xxx.cas) 
    //ou un superviseur (sup-run)
    //il faut récupérer la taille de la fenêtre
    var dimensionsAjoutes = dimensionsPourUrl(stringNouvelleUrl);
    if(dimensionsAjoutes){
        stringNouvelleUrl += dimensionsAjoutes;
    }
    var iframejQuery = $( "iframe#framePrincipale" );
    
    var iframe = document.getElementById('framePrincipale');
    if(stringNouvelleUrl.indexOf("quartistools-web") > -1){
        iframejQuery.show();
    }
    
    iframe.src = stringNouvelleUrl;
    
    iframejQuery.off('load');
    iframejQuery.on('load', function(){
        iframejQuery.hide();
        var iframe = $( "iframe#framePrincipale" );
        var accessAllowed = canAccessIFrame();
        if(accessAllowed) {
            
            var loginBody = $("body.loginBody", iframe.contents());
            if(loginBody.length > 0){
                //redirection vers la page de login
                renvoiVersPageLogin();
            } else {
                masquerFondChargement();   
            }
        } else {
            masquerFondChargement();
        }
        var endTimeChangementClic = new Date().getTime();
        remoteLog(global_startTimeClicSurBouton, endTimeChangementClic, "JS REQUEST Loading (from clic to appearance)", stringNouvelleUrl);
    });
    
    armerLiensPourRedirection();
}

function afficherFondChargement(){
    var iframejQuery = $( "iframe#framePrincipale" );
    var iframeHeight = iframejQuery.height();
    var iframeWidth = iframejQuery.width();
    iframejQuery.hide();

    var imageChargement = $( "#fondChargement" );
    imageChargement.height(iframeHeight);
    imageChargement.width(iframeWidth);
    imageChargement.show(); 
}

function masquerFondChargement(){
    var iframejQuery = $( "iframe#framePrincipale" );
    var imageChargement = $( "#fondChargement" );
    imageChargement.hide();
    iframejQuery.show(); 
}

/**
 * Remplace le fil d'ariane actuel avec celui généré à partir de la map 
 * mapFilAriane.
 * @param idPage l'ID de la page
 * @param labelPage le label (localisé) de la page
 * @param menu le menu au format JSON
 * @returns void
 */
function changerFilAriane(idPage, labelPage, menu){

    // récupération des données pour générer le fil d'Ariane
    var ancienFilAriane = globalFilAriane;
    var idPageDefautModuleCourant = globalIdPageDefautModuleCourant;
    var labelAccueil = globalAccueilLocal;
    
    // génération du fil d'Ariane
    var filAriane = new Trail().initConstruction(idPage, labelPage, ancienFilAriane, menu, idPageDefautModuleCourant, labelAccueil);
    
    // sauvegarde
    globalFilAriane = filAriane;
    
    // affichage sur la page
    var divFilAriane = $("div#filAriane");
    divFilAriane.empty();
    filAriane.buildTrail(divFilAriane);
}

// cf. http://stackoverflow.com/a/12381504/2112089
function canAccessIFrame() {
    var iframe = document.getElementById('framePrincipale');
    var html = null;
    try { 
      // deal with older browsers
      var doc = iframe.contentDocument || iframe.contentWindow.document;
      html = doc.body.innerHTML;
    } catch(err){
      // do nothing
    }

    return(html !== null);
}

function extractionMapFilAriane(idPage){
    
    var mapFilAriane = {};
    mapFilAriane[globalAccueilLocal] = {url: globalUrlAccueil, id: ''};
    
    if(idPage !== 'accueil'){
        var jsonModule = jsonBandeau[moduleIdActuel];
        if (jsonModule !== null) {
            var moduleLabel = jsonModule["alt"];
            var moduleUrl = jsonModule["url"];
        }
        var idPageDefautmodule = idPage;
        mapFilAriane[moduleLabel] = {url: moduleUrl, id: idPageDefautmodule};

        //recherche de la page dans jsonMenu
        ///bouchon pour éviter les erreurs
        var jsonPage = {
            'label' : "",
            'url' : "",
            'id' : ""
        };

        var pageLabel = "";
        var pageUrl = "";
        var pageTrouvee = false;
        for(var i = 0; i < globalJsonMenu["categories"].length; i++){
            var jsonCategorie = globalJsonMenu["categories"][i];
            var listeMenuLink = jsonCategorie["listeMenuLink"];
            for(var j = 0; j < listeMenuLink.length; j++){
                var jsonMenuLink = listeMenuLink[j];
                if(jsonMenuLink["id"] === idPage){
                    jsonPage = jsonMenuLink;
                    pageTrouvee = true;
                    break;
                }
            }
            if(pageTrouvee){
                break;
            }
        }
        if(pageTrouvee){
            //si la page a été trouvée, on l'ajoute au fil d'ariane
            //NB : une page non trouvée peut provenir d'un module sans page par 
            //défaut, dans ce cas, il n'y a que 2 éléments au fil d'ariane
            pageLabel = jsonPage["label"];
            mapFilAriane[pageLabel] = {url: pageUrl, id: ''};
        }
    }
    
    return mapFilAriane;
}

/*******************************************
 * FONCTIONS POUR CHANGER DE SITE
 *******************************************/
/**
 * 
 * @param {type} nouveauSiteDefaut
 * @returns {undefined}
 */
function changerSiteDefaut(nouveauSiteDefaut) {
    
    siteDefaut = nouveauSiteDefaut;
    afficherFondChargement();
    changerSiteAppelAjax(nouveauSiteDefaut);
}

function changerSiteAppelAjax(nouveauSiteDefaut){

    var urlRechargementPage = urlPageCourante;
    var dimensionsAjoutes = dimensionsPourUrl(urlRechargementPage);
    if(dimensionsAjoutes){
        urlRechargementPage += dimensionsAjoutes;
    }
    
    //cf.http://learn.jquery.com/ajax/jquery-ajax-methods/
    var ajaxConfObject = {
        //l'URL de la requête
        url: "save_default_site.ajx",
        
        //les données à envoyer (sont converties en une chaîne)
        data: {
            CodeSite: nouveauSiteDefaut,
            userID: userID,
            _deltaUTC: userDeltaUtc,
            moduleID: moduleIdActuel,
            baseUrl: urlRechargementPage
        },
        
        // requête POST ou GET
        type: "POST",
        
        //le type de données attendu
        dataType : "html",
        
        //la fonction à exécuter en cas de succès
        //le paramètre json correspond à la réponse
        success: function( json ) {
            changerSiteSuccesAjax(json);
        },
        
        //la fonction à exécuter en cas d'échec de la requête
        //la requête, le code de statut et l'erreur sont passées en paramètre
        error: function( requete, statut, erreurLevee ) {
            masquerFondChargement();
            afficherMessageErreur( localMessageErreurSite );
        }
    };
    
    $.ajax(ajaxConfObject);
}


function changerSiteSuccesAjax (reponseAjax) {
    effacerMessageErreur();
    try {
        var jsonParse = $.parseJSON(reponseAjax);
        
        // affichage de l'erreur le cas échéant
        var messageDErreur = jsonParse["error"];
        if(messageDErreur){
            afficherMessageErreur( messageDErreur );
        }
        
        // changement du menu des modules (sinon il ne prend pas en compte le 
        // changement de site et on se retrouve dans le mauvais site si on 
        // change de module)
        var jsonMenuModule = jsonParse["menu_modules"];
        genererBandeau(jsonMenuModule);
        
        //le menu de gauche est à une profondeur supplémentaire
        var jsonMenuLocal = jsonParse["menu_gauche"]["menu_gauche"];
        
        var isMenuAccueil = moduleIdActuel === "accueil";

        changerMenu(jsonMenuLocal, isMenuAccueil);
        
        var nouvelleUrl = jsonParse["url"];
        changerContenuIframe(nouvelleUrl, false);
        
    } catch (parseError) {
        //erreur au parsing du JSON
        // -> sûrement parce que la requête a renvoyé un message d'erreur plutôt 
        // que du JSON
        
        if(reponseAjax.indexOf("RETRY") >= 0){
            // si on a perdu les paramètres, on renvoie la même demande
            changerSiteDefaut(siteDefaut);
        } else if(reponseAjax.indexOf("Une erreur est survenue") >= 0 ||
                reponseAjax.indexOf("An error occurred") >= 0 ){
            
            var iframe = document.getElementById("framePrincipale");
            var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
            innerDoc.getElementsByTagName("body")[0].innerHTML = reponseAjax;
            masquerFondChargement();
        } else {
            // erreur dans le JSON -> renvoi vers page de connexion
            renvoiVersPageLogin();
        }
    }
}

function armerDetectionRedimensionnement(){
    $( window ).resize(function() {
        ajusterHauteurIframe();
    });
}

function activerMasque(){
    var masque = $("#masque");
    var header = $("#header");
    var headerPos = header.position();
    
    var masqueTop = headerPos.top + header.height();
    var masqueLeft = headerPos.left;
    
    masque.css("top", masqueTop);
    
    masque.css("left", masqueLeft);
    
    masque.css("visibility", "visible");
}

function desactiverMasque(){
    modifierMdp = false;
    $("#masque").hide();
}

function armerMinuteur(nomMinuteur){
    if(console){
        if(console.time){
            console.time(nomMinuteur);
        }
    }
}

function terminerMinuteur(nomMinuteur){
    if(console){
        if(console.timeEnd){
            console.timeEnd(nomMinuteur);
        }
    }
}

/*******************************************
 * FONCTIONS POUR LA DECONNEXION
 *******************************************/
function deconnexion(user){
    if(!global_deco){ // si le bouton deconnexion a déjà été cliqué, on ne fait rien
        $.get('xxx.cas?action=deconnexion&userID=' + user, function(data, status){});
    }
}

function remoteLog(startTime, endTime, message, url){
    var ajaxConfObject = {
        //l'URL de la requête
        url: "remoteLog.ajx",
        
        //les données à envoyer (sont converties en une chaîne)
        data: {
            startTime: startTime,
            endTime: endTime,
            mess: message,
            url: url
        },
        
        // requête POST ou GET
        type: "POST",
        
        //le type de données attendu
//        dataType : "json",
        
        //la fonction à exécuter en cas de succès
        //le paramètre json correspond à la réponse
        success: function( json ) {
        },
        
        //la fonction à exécuter en cas d'échec de la requête
        //la requête, le code de statut et l'erreur sont passées en paramètre
        error: function( requete, statut, erreurLevee ) {
        }
    };
    
    $.ajax(ajaxConfObject);
}