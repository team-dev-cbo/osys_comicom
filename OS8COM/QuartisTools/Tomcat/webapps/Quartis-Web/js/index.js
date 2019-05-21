var div_move;

function move_toolbar() {
    end_move();
    var toolbar = document.getElementById("toolbar");
    start_move(toolbar);
}

function move_titledPanel(titled_panel_id) {
    end_move();
    var titled_panel = document.getElementById(titled_panel_id);
    start_move(titled_panel);
}

function resize(element_id) {
    end_resize();
    var element = document.getElementById(element_id);
    start_resize(element);
}


function init() {
    init_mouse_position();
    document.onmouseup = function() {
        end_move();
        end_resize();
    }
}



function conteneur_toolbar_over(sens) {
    if (div_move!=null) {
        if (sens=="horizontal") {
            div_move.style.width = "585px";
            div_move.style.height = "24px";
        } else if (sens=="vertical") {
            div_move.style.width = "24px";
            div_move.style.height = "585px";
        }
    }
}

function conteneur_toolbar_up(conteneur) {
    var toolbar_conteneur = document.getElementById("toolbar").parentElement;
    alert(toolbar_conteneur.className);
}