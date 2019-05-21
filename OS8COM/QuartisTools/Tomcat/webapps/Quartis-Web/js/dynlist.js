var actualDynList = {};

function showDynList(src, listPath, type, listDynamique, url) {
    actualDynList = src;
    WAITING = true;
    
    url = url + "&_src=" + type + "&_list-id=" + listDynamique + "&_list-path=" + listPath + "&_list-char=%25"
    
    dynlistRequest = newXMLHttpRequest();
    if(dynlistRequest !== null) {
        var dimension = getClientDimensions();
        url = url + "&_clientWidth=" + (dimension[0]+45) + "&_clientHeight=" + dimension[1];
        
        dynlistRequest.onload = function() {
            if(dynlistRequest.responseText && dynlistRequest.responseText.length > 22){
                var dynListTable = dynlistRequest.responseText.replace("[PREFERENCE_DYN_LIST::]", "");
                var div = document.getElementById('dynamic-list');
                div.innerHTML = dynListTable;
                div.style.display = '';
            }
        } 
 
        dynlistRequest.open("POST", url, true);
        dynlistRequest.send(null);
    }

    var div = document.getElementById('dynamic-list');
    div.innerHTML = 'Loading...';
    div.style.left = $("input[name*='" + src.name + "']").offset().left;
    div.style.top = $("input[name*='" + src.name + "']").offset().top + src.offsetHeight + 5;
    
    div.style.display = '';
}

function hideDynList(srcId, value) {
    actualDynList.value = value;
    closeDynList();
}

function closeDynList() {
    var div = document.getElementById('dynamic-list');
    div.innerHTML = 'Loading...';
    div.style.display = 'none';
}

// Close suggest dynamic list when we click outside
document.addEventListener('click', function(e)
{
    var container = $("#dynamic-list");
    if (container !== undefined) {
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            container.hide();
        }
    }
});

$(document).ready(function(){
    $( document ).on( 'focus', ':input', function(){
        $( this ).attr( 'autocomplete', 'off' );
    });
});