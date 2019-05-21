function task_pane_display(task_pane_id) {
    var table_task_pane = document.getElementById('table_task_pane_' + task_pane_id);
    var td_task_pane = document.getElementById('td_task_pane_' + task_pane_id);
    var img_task_pane = document.getElementById('img_task_pane_' + task_pane_id);
    if (table_task_pane!=null && td_task_pane!=null && img_task_pane!=null) {
        var prefParameterValue;
        if (td_task_pane.style.display=='none') {
            table_task_pane.style.height = table_task_pane.getAttribute('real_height');
            img_task_pane.src='images/reduce.gif';
            td_task_pane.style.display='inline';
            //--- Les 2 lignes suivantes résolvent le bug IE 6 et 7 qui fait que lorsque que l'on masque le panel et qu'on le réaffiche, 
            //--- certaines zones de saisie disparaissent. Si on enlève la première des 2 lignes suivantes, le bug ne se produit 
            //--- pas au premier masquage du panel mais se produit les fois suivantes. A bas Internet Explorer.
            td_task_pane.style.filter='alpha(opacity=99)';
            td_task_pane.style.filter='alpha(opacity=100)';
            prefParameterValue = true;
        } else {
            table_task_pane.setAttribute('real_height', table_task_pane.style.height);
            table_task_pane.style.height = '0';
            td_task_pane.style.display = 'none';
            img_task_pane.src = 'images/extend.gif';
            prefParameterValue = false;
        }
        
        //--- Sauvegarde de l'état du taskpane dans les préférences de l'utilisateur
        saveTpState(task_pane_id, prefParameterValue);
        
    }
}
    
function task_pane_title_color(tr, color) {
    var tdList = tr.getElementsByTagName("TD");
    for (var i=0; i<tdList.length; i++) {
        tdList[i].style.color= color;
    }
}

function saveTpState(task_pane_id, parameterValue) {
    req = newXMLHttpRequest();
    req.onreadystatechange = saveTpStateWait;

    req.open("POST", "xxx.cas?action=save_parameter" + 
                            "&parameterName=" + task_pane_id + "_visible" +
                            "&parameterValue=" + parameterValue);
    req.setRequestHeader("Content-Type", 
           "application/xml");
    req.send(null);
}

function saveTpStateWait() {
    if (req.readyState == 4) {
        if (req.status != 200) {
            alert("Erreur " + req.status + "Erreur pendant la sauvegarde de l'état du panel dans les préférences.");
        }
    }
}

function saveTpStateResponse() {

}