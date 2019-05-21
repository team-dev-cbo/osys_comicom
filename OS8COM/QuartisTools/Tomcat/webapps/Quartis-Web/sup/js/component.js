function clearComponent() {
    var componentDef = document.getElementById('component-def');
    componentDef.style.visibility = 'hidden';

    var component = document.getElementById('component');
    var childs = component.childNodes;
    for(var i=0; i<childs.length; i++) {
        component.removeChild(childs.item(i));
    }
}

function tableClear(id) {
    var url = PREFERENCE_COMPONENT_URL + "&_path=" + PAGE_PATH + "&_component-id=" + id + "&_clear=O";
    sendQuery(url);
}

function tableSave(id) {
    var url = PREFERENCE_COMPONENT_URL + "&_path=" + PAGE_PATH + "&_component-id=" + id;
    var query = tableFormat();
    if(query != "") {
        url = url + query;
        sendQuery(url);
    }
}

function tableExport(id) {
    var url = EXPORT_COMPONENT_URL + "&_path=" + PAGE_PATH + "&_component-id=" + id;
    sendQuery(url);
}

function tableFormat() {
    var url = "";
    var component = document.getElementById('component');
    if(component != null) {
        var inputs = component.getElementsByTagName("input");
        var checked = 0;
        for(var i = 0; i < inputs.length; i++) {
            var ni = inputs[i].getAttribute("id");
            if(inputs[i].type == 'checkbox') {
                url = url + "&_$comp:" + ni + "=" + inputs[i].checked;
                if(inputs[i].checked) {
                    checked++;
                }
            }
            else {
                url = url + "&_$comp:" + ni + "=" + Url.encode(inputs[i].value);
            }
        }
        if(checked == 0) {
            url = "";
            alert('Vous devez sélectionner au moins 1 colonne !');
        }
    }
    return url;
}

function tableCheckAll() {
    var component = document.getElementById('component');
    if(component != null) {
        var inputs = component.getElementsByTagName("input");
        for(var i = 0; i < inputs.length; i++) {
            if(inputs[i].type == 'checkbox') {
                inputs[i].checked = true;
            }
        }
    }
}

function tableComponent(id, attributes) {
    closeAll();

    //    clearComponent();

    processComponentPreference = function() {
        document.location.reload();
    }

    var componentClose = document.getElementById('component-close');
    componentClose.onclick = function() {
        clearComponent();
    };

    var componentClear = document.getElementById('component-clear');
    componentClear.onclick = function() {
        tableClear(id);
    };

    var componentSave = document.getElementById('component-save');
    componentSave.onclick = function() {
        tableSave(id);
    };

//    var componentExport = document.getElementById('component-export');
//    componentExport.onclick = function() {
//        tableExport(id);
//    };

    var componentOther = document.getElementById('component-other');
    componentOther.src = 'images/checkbox.png';
    componentOther.onclick = function() {
        tableCheckAll();
    };

    var component = document.getElementById('component');

    var table = document.createElement('table');
    table.setAttribute('cellpadding', '0');
    table.setAttribute('cellspacing', '0');
    component.appendChild(table);

    for(var i=0; i<attributes.length; i++) {
        var attribute = attributes[i];
        if (attribute.indexOf("CHECKBOX:") == 0) {
            attribute = attribute.substring("CHECKBOX:".length, attribute.length);

            var tab = attribute.split('|');

            var tr = table.insertRow(i);

            var td1 = tr.insertCell(0);

            var input = document.createElement('input');
            input.setAttribute('type', 'checkbox');
            input.setAttribute('id', tab[0] + '-visible');
            td1.appendChild(input);

            var td2 = tr.insertCell(1);

            var span = document.createElement('span');
            span.innerHTML = tab[1];
            td2.appendChild(span);

            var td3 = tr.insertCell(2);

            var width = document.createElement('input');
            width.setAttribute('type', 'text');
            width.setAttribute('id', tab[0] + '-width');
            width.setAttribute('size', '5');
            width.setAttribute('value', tab[3]);
            td3.appendChild(width);
        
            //        div.appendChild(document.createElement('br'));

            if(tab[2] == "O") {
                document.getElementById(tab[0] + '-visible').checked = true;
            } else {
                document.getElementById(tab[0] + '-visible').checked = false;
            }

            if(tab[4] == "O") {
                document.getElementById(tab[0] + '-visible').disabled = false;
            } else {
                document.getElementById(tab[0] + '-visible').disabled = true;
            }
        } else if (attribute.indexOf("LINK:") == 0) {
            attribute = attribute.substring("LINK:".length, attribute.length);

            var tabl = attribute.split('|');

            var trl = table.insertRow(i);

            var tdl1 = trl.insertCell(0);
            tdl1.colSpan="3";

            var a = document.createElement('a');
            a.setAttribute('href', tabl[0]);
            a.setAttribute('target', '_blank;');
            a.innerHTML = tabl[1];
            tdl1.appendChild(a);
        }
    }

    var componentDef = document.getElementById('component-def');
    componentDef.style.visibility = 'visible';
}