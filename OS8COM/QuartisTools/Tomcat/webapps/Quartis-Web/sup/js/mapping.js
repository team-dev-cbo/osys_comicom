var MAPPING_TIMEOUT = 5;

var secondBeforeToCloseMappingList = 0;
var readyToCloseMappingList = false;

//timerMappingList();
//
//function timerMappingList(id) {
//    if(readyToCloseMappingList) {
//        secondBeforeToCloseMappingList =  secondBeforeToCloseMappingList + 1;
//    }
//    if(secondBeforeToCloseMappingList > MAPPING_TIMEOUT) {
//        closeMappingList(id);
//    }
//    setTimeout("timerMappingList('" + id + "')", 1000);
//}

function showMappingList(id, src) {
        closeAll();

    var div = document.getElementById(id);
//    div.style.right = 45 + div.offsetWidth;
//    div.style.top = src.offsetTop;
    div.style.display = '';
    
    secondBeforeToCloseDynList = 0;
    readyToCloseDynList = true;
}

function closeMappingList(id) {
    var div = document.getElementById(id);
    div.style.display = 'none';

    readyToCloseMappingList = false;
    secondBeforeToCloseMappingList = 0;
}
