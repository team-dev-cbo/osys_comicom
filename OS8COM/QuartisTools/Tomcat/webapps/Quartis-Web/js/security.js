function security() {
    //--- Blocage de la touche backspace, sauf sur les input et textarea
    var body = document.getElementsByTagName("body")[0];
    body.onkeydown = function() {
        var bloc = false;
        if (window.event) {
            if (window.event.keyCode==8) {
                bloc = true;
                if (window.event.srcElement!=null) {
                    var el = window.event.srcElement;
                    if (el.tagName=="INPUT") {
                        if (el.type=="text" || el.type=="password") {
                            bloc = false;
                        }
                        
                    } else if (el.tagName=="TEXTAREA") {
                        //alert(window.event.srcElement.readOnly);
                        if (el.readOnly==true) {
                            bloc = true;
                            //alert(window.event.srcElement.readOnly);
                        } else {
                            bloc = false;
                        }
                    }
                }
            }
        }
        
        if (bloc) {
            window.event.returnValue = false;
            window.event.cancelBubble = true;
            window.event.keyCode = 0;
            return false; 
        }
    }
    
    //--- Blocage du clic droit
    document.oncontextmenu=new Function ("return false");
    
    // Interdiction de la sélection sauf dans les input et textarea
    document.onselectstart = function() {
        var return_value = false;
        if (window.event!=null) {
            if (window.event.srcElement!=null) {
                var tag_name = window.event.srcElement.tagName;
                //--- on ne bloque pas la sélection du contenu des input et textarea
                if (tag_name=="INPUT" || tag_name=="TEXTAREA") {
                    return_value = true;
                }
            }
        }
        return return_value;
    };
}