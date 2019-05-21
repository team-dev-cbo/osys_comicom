/*
 * Created by O.BATTAIL
 * Compatibilité IE 7, FIREFOX 3
 */


/* 
 * Resize one object to Full Screen
 */
function resizeObjectFullScreen(object) {

    var objectWidth = 0, objectHeight = 0;

    if( typeof( window.innerWidth ) == 'number' ) {
        //Non-IE
        objectWidth = window.innerWidth;
        objectHeight = window.innerHeight;
    } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
        //IE 6+ in 'standards compliant mode'
        objectWidth = document.documentElement.clientWidth;
        objectHeight = document.documentElement.clientHeight;
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
        //IE 4 compatible
        objectWidth = document.body.clientWidth;
        objectHeight = document.body.clientHeight;
    }
    document.getElementById(object).style.height = objectHeight;
    document.getElementById(object).style.width = objectWidth;

}

/*
 * Center one object on the middle of the active Screen
 */
function centerObject(object) {

    var objectWidth = 0, objectHeight = 0;
    objectWidth = document.getElementById(object).offsetWidth;
    objectHeight = document.getElementById(object).offsetHeight;

    var screenWidth = 0, screenHeight = 0;
    if( typeof( window.innerWidth ) == 'number' ) {
        //Non-IE
        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;
    } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
        //IE 6+ in 'standards compliant mode'
        screenWidth = document.documentElement.clientWidth;
        screenHeight = document.documentElement.clientHeight;
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
        //IE 4 compatible
        screenWidth = document.body.clientWidth;
        screenHeight = document.body.clientHeight;
    }

    var objectTop = (screenHeight/2) - (objectHeight/2);
    var objectLeft = (screenWidth/2) - (objectWidth/2);
    if (objectTop <0){ objectTop =0;}
    if (objectLeft <0){ objectLeft =0;}
    document.getElementById(object).style.top  = objectTop + "px";
    document.getElementById(object).style.left = objectLeft + "px";

}

/*
 * Make an object visible
 */
function showObject(object) {

    document.getElementById(object).style.visibility="visible";

}

/*
 * Hide one Object
 */
function hideObject(object) {

    document.getElementById(object).style.visibility="hidden";

}

/*
 * Set the opacity of one object
 */
function  setObjectOpacity(object, opacity)
{
        el = document.getElementById(object);
        el.style["filter"] = "alpha(opacity="+opacity+")";
        el.style["-moz-opacity"] = opacity/100;
        el.style["-khtml-opacity"] = opacity/100;
        el.style["opacity"] = opacity/100;
        return true;
}