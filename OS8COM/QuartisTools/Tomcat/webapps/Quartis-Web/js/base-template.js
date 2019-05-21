function creerTemplateCategorie(jsonCategorie, indexCategorie, isMenuAccueil){
    
    //est-ce qu'on est dans la categorie favoris ?
    var isCategorieFavoris = "favoris" === jsonCategorie["moduleId"];
    var isCategoriesModules = "modules" === jsonCategorie["moduleId"];
    var isCategorieHorloge = jsonCategorie["imageSrc"] === "logo_bodet_48x17.png";
    
    var template = '';
    
    if (!isCategorieHorloge) {
        //le template dans laquelle la chaîne HTML est assemblée
        //le div principal englobant les deux autres
        template = '<div class="menuContainer">'; 

        //le div avec les l'image et le label de la catégorie
        template += '<div class="menuTitre ';
        var classeCategorieOuverteFermee = 'collapsed';
        if(isCategorieFavoris || isCategoriesModules || !isCategorieHorloge){
            classeCategorieOuverteFermee = 'expanded'; //seule ces catégories sont 
                                                        //étendues à la création
                                                        //du menu
        }
        template += classeCategorieOuverteFermee + '" ';
        template += 'id="Categorie' + indexCategorie + 'MenuTitre" ';
        template += 'onclick="collapse(\'Categorie' + indexCategorie + '\')"';
        template += 'onmouseover="menuHover(\'Categorie' + indexCategorie + '\')"';
        template += 'onmouseout="menuHover(\'Categorie' + indexCategorie + '\')"';
        template += 'title="' + jsonCategorie["label"] + '" ';
        template += '>';

        //préparation pour l'image :
        var labelComplet = ' ' + jsonCategorie["label"] + ' ';

        //l'img (inexistante pour le menu Modules de l'accueil)
        if(jsonCategorie["imageSrc"]){
            if (!isCategorieHorloge) {
                template += '<img ';
                template += 'src="images/' + jsonCategorie["imageSrc"] + '" ';
                template += 'alt="' + jsonCategorie["label"] + '" ';
                template += 'class="menuImg" ';

                if(!isCategorieHorloge){
                    //le logo Bodet (dans le menu d'accueil, categorie "Horloge" a un 
                    //traitement préférentiel : la largeur de l'image est respectée
                    //les autres ont leur largeur fixée à 17
                    template += 'width="17" ';
                }
                template += 'height="17" >';
            }

            //le label
            template += labelComplet;

            //fin de l'img
            template += '</img>';
        } else {
            //seulement le label
            template += labelComplet;
        }


        //fin du deuxième div
        template += '</div>';

        //le div avec les liens
        template += '<div class="menuSlider opened';

        //classe supplémentaire pour l'horologe bodet
        if(isCategorieHorloge){
            template += ' contenantHorloge';
        }
        template += '" '; 
        template += 'id="Categorie' + indexCategorie + 'Slider" ';
        //Seules la categorie favoris et la categories des modules (sur la page 
        //d'accueil) sont ouvertes à la création du menu
        if(!isCategorieFavoris && !isCategoriesModules && !isCategorieHorloge){
            template += 'style="display:none;"';
        }
        template += '>';


        //cas général : 
        if(!isCategorieHorloge){
            //l'ul pour lister les liens
            template += '<ul class="menuContent">';

            //boucle sur les liens
            var listeLiens = jsonCategorie["listeMenuLink"];
            for(var i = 0; i < listeLiens.length; i++){
                var templateLien = creerTemplateLienMenu(listeLiens[i], isMenuAccueil, isCategorieFavoris);
                template += templateLien;
            }

            //fin de l'ul
            template += '</ul>';
        } else {
            //cas spécifique :
            //l'horloge Bodet

            var appliFlash = '';

            //si l'application est en français
            if(jsonCategorie["label"] === "Horloge"){
                appliFlash = 'anim';
            } else {
                appliFlash = 'horlogeuk';
            }

            template += '<object width="150" height="150" data="flash/';
            template += appliFlash;
            template += '.swf"><param name="wmode" value="opaque"></object>';
        }


        //fin du troisième div
        template += '</div>';

        //fin du premier div
        template += '</div>';

        //séparateur entre chaque catégorie
        template += '<br/>';
    }
    
    return template;
}

function creerTemplateLienMenu(jsonModule, isMenuAccueil, isCategorieFavoris){
    var templateLien = '<li class="menuLink">';
    
    
    //l'a
    templateLien += '<div ';
    
    var isAdminFavoris = "#ADMINFAV" === jsonModule["id"];
    
    if(!isAdminFavoris && (isCategorieFavoris || isMenuAccueil)){
        //si on est dans la catégorie favori (sauf pour la page d'administration
        // des favoris) ou dans le menu d'accueil, on note  l'ID du module dans 
        // un attribut data HTML5 
        //(cf. http://stackoverflow.com/a/7582507/2112089)
        
        //sauf s'il est vide ou vaut '-', dans ce cas, le lien est vers une page externe
        if(jsonModule["moduleId"] && jsonModule["moduleId"] !== '' && jsonModule["moduleId"] !== '-' ){
            templateLien += 'data-moduleid="' + jsonModule["moduleId"] + '" ';
        }
        
    }
    
    if(!isMenuAccueil || isCategorieFavoris){
        //l'ID de la page est stocké dans un attribut data HTML5 
        //(cf. http://stackoverflow.com/a/7582507/2112089)
        //pour tous les menus sauf le menu des modules (en page d'accueil)
        templateLien += 'data-pageid="' + jsonModule["id"] +'" ';
    }
    // ajout du menu = true pour specifier qu'on vient d'un menu
    templateLien += 'data-url="' + jsonModule["url"] + '" ';
    var classeCss = 'fullwebLink fullwebLinkStyle menuLink'; //La classe CSS du lien
    if(!isAdminFavoris && (isCategorieFavoris || isMenuAccueil)){ 
        //si on est dans le cas du menu de la page d'accueil, les liens doivent 
        //appartenir à la classe CSS 'changerModule' pour qu'ils appellent la 
        //bonne fonction (cf. armerLiensPourRedirection)
        
        //sauf si l'ID module est vide ou vaut '-', dans ce cas, le lien est vers une page externe
        if(jsonModule["moduleId"] && jsonModule["moduleId"] !== '' && jsonModule["moduleId"] !== '-' ){
            classeCss += ' changerModule';
        }
    }
    templateLien += 'class="' + classeCss +'" ';
    templateLien += 'title="' +  jsonModule["label"] + '"';
    templateLien += '>';
    
    //l'img    
    templateLien += '<img ';
    templateLien += 'src="images/' + jsonModule["imageSrc"] + '" ';
    templateLien += 'alt="' + jsonModule["label"] + '" ';
    templateLien += 'class="menuImg"';
    templateLien += '/>';
    
    
    //le label
    templateLien += jsonModule["label"];
    
    //fin du a 
    templateLien += '</div>';
    
    //fin du li
    templateLien += '</li>';
    
    return templateLien;
}

function creerNodeLienFilAriane(stringLabel, stringUrl, isLast){

    var nodeRetour = null;
    
    var template = '';
    var classeDeLien = '';
    var moduleId = '';
    var attributUrl = '';
    var pageId = globalIdPageDefautModuleCourant;
    
    if(stringLabel === globalAccueilLocal){
        classeDeLien = 'changerModule ';
        moduleId = 'data-moduleid="accueil" ';
        pageId = '';
    } 
    //si l'URL n'est pas vide, on crée un lien
    if(!isLast){
        classeDeLien = 'fullwebLink fullwebLinkStyle menuLink ';
    }
    
    if(stringUrl){
        attributUrl += 'data-url="' + stringUrl + '" ';
    }
    
    template = '<span ' + attributUrl + 'data-pageid="' + pageId + '" ' + moduleId + 'class="' + classeDeLien + 'navigation">' + stringLabel + '</div>';
    //creation de l'élément DOM avec jQuery (cf. http://stackoverflow.com/a/759921/2112089)
    nodeRetour = $(template);
    
    return nodeRetour;
}

/*******************************************
 * FONCTIONS POUR CREER BANDEAU
 *******************************************/

/**
 * Crée le bandeau à partir des infos déposés en json dans la jsp
 * @param {type} jsonBandeau
 * @returns {undefined}
 */
function genererBandeau(jsonBandeau){
    //le div qui contient le bandeau
    var spanBandeau = $("span.modules");
    
    //le séparateur qui s'insère entre chaque lien image
    var separateur = " ";
    
    spanBandeau.empty();
    
    var biggestIndex = getBiggestIndex(jsonBandeau);
    
    //boucle sur les éléments de la map
    for (var i = 0; i <= biggestIndex; i++) {
        
        var jsonVal = jsonBandeau[i];
        
        var nodeLien = creerLienBandeau(jsonVal);
        //si le divBandeau a déjà un (ou plusieurs) enfant(s), on ajoute le 
        //séparateur
        if(spanBandeau.children().length > 0){
            spanBandeau.append(document.createTextNode(separateur));
        }
        spanBandeau.append(nodeLien);
    }
}

function getBiggestIndex(object){
    var biggest = 0;
    for(var key in object){
        var intKey = Number(key);
        if(!isNaN(intKey) && intKey > biggest){
            biggest = intKey;
        }
    }
    return biggest;
}

/**
 * Crée un lien pour le bandeau : balise <div> contenant une balise <img>
 * @param {type} jsonVal
 * @returns {$}
 */
function creerLienBandeau(jsonVal){
    //création du template avec le début de la balise <div>
    //l'ID du module est stocké dans un attribut data HTML5 
    //(cf. http://stackoverflow.com/a/7582507/2112089)
    var template = '<div data-moduleid="' + jsonVal["id"] + '"';
    template += 'class="fullwebLink fullwebLinkStyle changerModule" data-url="';
    
    template += jsonVal["url"] + '">';
    
    //le template pour l'image est généré dans une fonction spécifique
    var templateImage = generationTemplateImageBandeau(jsonVal);
    //concaténation du template de l'image au template du lien
    template += templateImage;
    //fermeture de la balise <div>
    template += '</div>';
    //création du noeud
    var nodeLien = $(template);
    return nodeLien;
}

/**
 * Crée le template d'une balise <img> pour le bandeau
 * @param {type} jsonVal
 * @returns {undefined}
 */
function generationTemplateImageBandeau(jsonVal) {
    var template = '<img src="images/optima/';
    template += jsonVal["imageSrc"];
    template += '" alt="';
    template += jsonVal["alt"];
    template += '" title="';
    template += jsonVal["alt"];
    template += '" class="bandeauImg changerModule" />';
    
    return template;
}

