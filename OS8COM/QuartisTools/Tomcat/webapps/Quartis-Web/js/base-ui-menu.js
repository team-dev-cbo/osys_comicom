/*******************************************
 * FONCTIONS POUR UI DU MENU
 *******************************************/
/**
 * 
 * @param {type} nomModule
 * @returns {undefined}
 */
function collapse(nomModule) {
    var idSliderElement = nomModule + 'Slider';
    var slider = $('#' + idSliderElement);
    
    //au premier appel, on affiche simplement l'élément (qui était masqué)
    if(slider.is(":hidden")){
        
        slider.animate({height: "toggle"}, 200);
    } else {
        slider.animate({height: "toggle"}, 200);
    }
    var titre = $('#' + nomModule + 'MenuTitre');
    // L'appel à la fonction collapse a toujours lieu alors que la 
    // souris est au-dessus du menu, ne sont gérées que les classes 
    // hoveredCollapse et hoveredExpanded (la fonction menuHover se 
    // charge des transitions vers expanded et collapsed, 
    // respectivement).
    titre.toggleClass('hoveredCollapsed');
    titre.toggleClass('hoveredExpanded');

}

/**
 * 
 * @param {type} nomModule
 * @returns {undefined}
 */
function menuHover(nomModule) {
    var idMenuTitreElement = nomModule + 'MenuTitre';
    var menuTitreElement = $('#'+idMenuTitreElement);
            
    // Cette fonction est appelée aussi bien quand la souris arrive sur 
    // le menu que quand elle en repart. Donc on teste si le menu est 
    // étendu ou rétracté en vérifiant la présence de hoveredCollapsed 
    // ou de collapsed parmi les classes du menu.

    if(menuTitreElement.hasClass('hoveredCollapsed') 
            || menuTitreElement.hasClass('collapsed')){

        menuTitreElement.toggleClass('hoveredCollapsed');
        menuTitreElement.toggleClass('collapsed');
    } else {
        menuTitreElement.toggleClass('hoveredExpanded');
        menuTitreElement.toggleClass('expanded');
    }
}