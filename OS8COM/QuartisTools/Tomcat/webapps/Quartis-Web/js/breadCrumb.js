/*******************************************
 * OBJET BREAD CRUMB (FIL D'ARIANE
 *******************************************/
/*
 * Pour générer le fil d'Ariane proprement.
 * Rappel : le fil d'Ariane doit pouvoir gérer les cas suivants : 
 *  - si l'utilisateur demande la page d'accueil (générale de QuartisWeb), affichage de : 
 *          => Accueil
 *  - si l'utilisateur demande un module :
 *      -- soit le module a une page d'accueil propre (PAM pour Page d'Accueil du Module), affichage de : 
 *          => Accueil > Nom du module > PAM
 *      -- soit le module n'a pas de PAM (possible en spécifique, CLAL notamment), affichage de : 
 *          => Accueil > Nom du module 
 *  - si l'utilisateur demande une page précise dans un module :
 *      -- soit la page est dans le menu du module (comme les formulaires, les superviseurs de niv. 2 et certains superviseurs de niv. 3), affichage de : 
 *          => Accueil > Nom du module > Page
 *      -- soit la page n'est pas dans le menu du module (comme la plupart des superviseurs de niv. 3), affichage de : 
 *          => Accueil > Nom du module > Page niv. 2 > Page
 * L'idée générale étant de pouvoir revenir en arrière quand, depuis un superviseur de niveau 2, l'utilisateur navigue vers un de niveau 3.
 * 
 * Glossaire : bread crumb (lit. : miette de pain) : un lien avec un label et une URL (qui peut être vide)
 *              trail (lit. : sentier) : la liste des liens
 *             
 */

var Trail = (function() {
    // attributs "privés"
    this._breadCrumbList;

    function Trail(){
        this._breadCrumbList = [];
    }

    // constructeur
    // contient l'algo principal de génération du fil d'Ariane :
    //  si idPage == Accueil
    //      on renvoie Accueil
    //  sinon
    //      si idPage est null ou la chaîne vide (dans ce cas on est en changement de module)
    //          si idPageDefautModuleCourant est nul ou la chaîne vide
    //              on renvoie Accueil > Module
    //          sinon 
    //              on renvoie Accueil > Module > Page d'Accueil du Module
    //      sinon (on est en changement de case)
    //          si idPage est dans le menu
    //              on renvoie Accueil > Module > Page
    //          sinon
    //              on récupère les valeurs du fil existant
    //              on met la page demandée en niveau 4 du fil d'Ariane existant
    //              on renvoie le fil d'Ariane
   Trail.prototype.initConstruction = function(idPage, labelPage, ancienFilAriane, menuModuleCourant, idPageDefautModuleCourant, labelAccueil){
//        console.log("Trail.constructor - idPage : " + idPage + 
//                    ", labelPage : " + labelPage +
//                    ", ancienFilAriane : " + ancienFilAriane +
//                    ", menuModuleCourant : " + menuModuleCourant +
//                    ", idPageDefautModuleCourant : " + idPageDefautModuleCourant +
//                    ", labelAccueil : " + labelAccueil);
        var homeCrumb = new BreadCrumb(globalUrlAccueil, labelAccueil);
        this._breadCrumbList[0] = homeCrumb;
        
        if(idPage !== "accueil"){
            // on n'est pas dans la page d'accueil
            
//            var debugString = "Trail.constructor - liste des propriétés de menuModuleCourant : [";
//            for (var propertyName in menuModuleCourant){
//                if(debugString.length > 65){
//                    debugString += ", ";
//                }
//                debugString += propertyName;
//            }
//            debugString += "]";
//            console.log(debugString);
            var moduleCrumb = new BreadCrumb(menuModuleCourant["url"], menuModuleCourant["labelLocal"]);
            this._breadCrumbList[1] = moduleCrumb;
            
            if(idPage === null || idPage === ""){
                // changement de module
                if(idPageDefautModuleCourant !== null && idPageDefautModuleCourant !== ""){
                    // page par défaut
                    var pamCrumb = this.trouverPageDansMenu(idPageDefautModuleCourant, menuModuleCourant);
                    this._breadCrumbList[2] = pamCrumb;
                }
                // sinon : pas de page par défaut => rien à faire
                
            } else {
                // changement de page dans un module
                var pageCrumb = this.trouverPageDansMenu(idPage, menuModuleCourant);
                if(pageCrumb === null){
                    // la page n'est pas dans le menu -> on la met en niveau 4 du fil d'ariane
                    var pagePrecedenteCrumb = ancienFilAriane.getPageNiveau3();
                    var pageCouranteCrumb = new BreadCrumb("", labelPage);
                    this._breadCrumbList[2] = pagePrecedenteCrumb;
                    this._breadCrumbList[3] = pageCouranteCrumb;
                } else {
                    this._breadCrumbList[2] = pageCrumb;
                }
            }
        } 
        // sinon on est dans la page d'accueil => rien à faire
        return this;
    };
    
    // constructeur pour reconstituer un fil d'Ariane à partir des noeuds DOM
    Trail.prototype.initReconstitution = function(noeudPereAncienFilAriane){
        var listeMiettes = noeudPereAncienFilAriane.childNodes;
        
        for(var i = 0; i < listeMiettes.length; i++){
            var mietteCourante = listeMiettes[i];
            var label = mietteCourante.textContent.trim();
            
            if(mietteCourante.nodeType === 3 && label.length > 1){
                
                this._breadCrumbList[this._breadCrumbList.length] = new BreadCrumb("", label);
            } else if(mietteCourante.nodeType !== 3){ // on ignore les noeuds texte de longueur 1, les séparateurs '>'
                
                var url = mietteCourante.getAttribute("data-url");
                this._breadCrumbList[this._breadCrumbList.length] = new BreadCrumb(url, label);
            }
            
        }
        
        return this;
    };
    
    Trail.prototype.getPageNiveau3 = function() {
        return this._breadCrumbList[2];
    };
    
    // Renvoie un BreadCrumb si la page est dans le menu, null sinon
    Trail.prototype.trouverPageDansMenu = function(idPageATrouver, menu) {
        
        var trouve = false;
        var pageTrouvee = null;
        var listeCategories = menu["categories"];
        
        for(var i = 0; i < listeCategories.length && !trouve; i++){
            var categorie = listeCategories[i];
            var listeMenuLink = categorie["listeMenuLink"];
            
            for(var j = 0; j < listeMenuLink.length && !trouve; j++){
                var menuLink = listeMenuLink[j];
                
                if(menuLink["id"] === idPageATrouver){
                    pageTrouvee = new BreadCrumb(menuLink["url"], menuLink["label"]);
                    trouve = true;
                }
            }
        }
        
        return pageTrouvee;
    };

    // Génère les liens et les insère dans le noeud (élément DOM) passé en paramètre
    Trail.prototype.buildTrail = function(nodeTrail) {
        var separateur = " > ";
         
//        console.log("Trail.buildTrail - ajout de " + this._breadCrumbList.length 
//                + " miette(s) au contenu de nodeTrail (vide à ce stade)");
        
        for(var i = 0; i < this._breadCrumbList.length; i++){
            //si le divFilAriane a déjà un (ou plusieurs) enfant(s), on ajoute le 
            //séparateur
            var breadCrumb = this._breadCrumbList[i];
            if(nodeTrail.children().length > 0){
                var separateurElement = document.createTextNode(separateur);
                nodeTrail.append(separateurElement);
            }
            var isLast = i + 1 === this._breadCrumbList.length;
            if (breadCrumb !== undefined) {
                nodeTrail.append(breadCrumb.buildLink(isLast));
            }
        }
    };
    
    Trail.prototype.toString = function(){
        var str_retour = "Trail[";
        for(var i = 0; i < this._breadCrumbList.length; i++){
            if(i > 0){
                str_retour += ", ";
            }
            var currentCrumb = this._breadCrumbList[i];
            str_retour += currentCrumb.toString();
        }
        str_retour += "]";
        return str_retour;
    };
    
    return Trail;
})();


var BreadCrumb = (function() {
    // attributs "privés"
    this._url;
    this._label;

    // constructeur
    function BreadCrumb(url, label){
        this._url = url;
        this._label = label;
    };

    BreadCrumb.prototype.buildLink = function(isLast) {
        // isLast à true si la miette est la dernière du fil d'ariane, 
        // elle ne doit alors pas avoir de lien, seulement du texte mais il faut 
        // conserver l'information de l'URL au cas où le fil d'ariane est 
        // reconstitué
        return creerNodeLienFilAriane(this._label, this._url, isLast);
    };
    
    BreadCrumb.prototype.getUrl = function() {
        return this._url;
    };

    BreadCrumb.prototype.getLabel = function() {
        return this._label;
    };
    
    BreadCrumb.prototype.toString = function(){
        var str_retour = this._label + "(";
//        console.log("BreadCrumb.toString - _label : " + this._label);
        var str_shortened_url = this._url;
//        if(str_shortened_url !== null && str_shortened_url.length > 25){
//            str_shortened_url = this._label.substr(25)
//        }
        str_retour += str_shortened_url;
        str_retour += ")";
        return str_retour;
    };

    return BreadCrumb;
})();