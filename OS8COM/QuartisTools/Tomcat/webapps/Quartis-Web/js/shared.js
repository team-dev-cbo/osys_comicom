function getLeft(elmt) {
	return elmt.offsetLeft;
}

function getTop(elmt) {
	return elmt.offsetTop;
}

function getRight(elmt) {
	//return elmt.getBoundingClientRect().right;
        return elmt.offsetLeft + elmt.offsetWidth;
}

function getBottom(elmt) {
	//return elmt.getBoundingClientRect().bottom;
        return elmt.offsetTop + elmt.offsetHeight;
}


var initial_element_x;
var initial_element_y;
var initial_event_x;
var initial_event_y;

function move_element(element) {
    var x = mouse_x;
    var y = mouse_y;

    element.style.top = y + initial_element_y - initial_event_y;
    element.style.left = x + initial_element_x - initial_event_x;

    
}

function start_move(element) {
    initial_element_x = getLeft(element);
    initial_element_y = getTop(element);
    initial_event_x = mouse_x;
    initial_event_y = mouse_y;
    div_move = document.createElement("DIV");
    div_move.id = "move_" + element.id;
    div_move.className = "move";
    div_move.style.top = getTop(element);
    div_move.style.left = getLeft(element);
    div_move.style.width = getRight(element) - getLeft(element);
    div_move.style.height = getBottom(element) - getTop(element);
    document.body.onmousemove = function() {
         move_element(div_move);
    }
    document.body.appendChild(div_move);
}


function end_move() {
    if (div_move!=null) {
        document.body.removeChild(div_move);
        div_move = null;
        document.body.onmousemove = null;
    }
}






var mouse_x;
var mouse_y;
function init_mouse_position(){

	mouse_x = 0;

	mouse_y = 0;

	document.onmousemove = mouse_position;


}

function mouse_position(evt){
	if(!evt) evt = window.event;	
	mouse_x = evt.clientX;
        mouse_y = evt.clientY;
}



var initial_element_width;
var initial_element_height;

function start_resize(element) {
    initial_element_width = element.offsetWidth;
    initial_element_height = element.offsetHeight;
    initial_event_x = mouse_x;
    initial_event_y = mouse_y;

    document.body.style.cursor = "SE-resize";

    document.body.onmousemove = function() {
         resize_element(element);
    }
}

function resize_element(element) {
    var x = mouse_x;
    var y = mouse_y;

    var new_width = x + initial_element_width - initial_event_x;
    var new_height = y + initial_element_height - initial_event_y;

    if (new_height>0) {
        element.style.height = new_height;
        element.parentNode.style.height = element.offsetHeight;
        element.parentNode.parentNode.style.height = element.offsetHeight;
    }
    
    if (new_width>0) {
        element.style.width = new_width;
        element.parentNode.style.width = element.offsetWidth;
        element.parentNode.parentNode.style.width = element.offsetWidth;
    }
document.getElementById("abcd").value = element.offsetWidth + " - " + element.offsetHeight;
}

function end_resize() {
    document.body.onmousemove = null;
    document.body.style.cursor = "default";
}