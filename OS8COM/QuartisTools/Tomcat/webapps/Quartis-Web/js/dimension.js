
/**
 * Fonction générale pour que les pages dans l'iframe récupèrent les dimensions 
 * de l'iframe.
 * @returns {Array}
 */
function getClientDimensions() {
    var dimension = new Array();
    
    dimension[0] = window.innerWidth ? window.innerWidth : (document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth);
    if(!dimension[0]){
        var frame = parent.document.getElementById('framePrincipale');
        dimension[0] = frame.clientWidth;
    }
    dimension[1] = window.innerHeight ? window.innerHeight : (document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight);
    if(!dimension[1]){
        var frame = parent.document.getElementById('framePrincipale');
        dimension[1] = frame.clientHeight;
    }
        
    var toolbar = document.getElementById('toolbar');
    if(toolbar !== null && toolbar.style.visibility === 'visible') {
        var toolbarOffset = toolbar.offsetLeft;
        // Modification P.MAHE du 04/03/2015
        // Ajustement du calcul pour prendre en compte la marge autour de la toolbar
        if(toolbarOffset > 0){
            dimension[0] = toolbarOffset - 20; //-20 pour prendre en compte 10 px de chaque côté de la toolbar

        } else if(TOOLBAR_VISIBILITY === 'visible') {
            dimension[0] = dimension[0] - 62; // la largeur de la toolbar (42px) et 10 px de chaque côte,
        }
    } 
    
    return dimension;
}