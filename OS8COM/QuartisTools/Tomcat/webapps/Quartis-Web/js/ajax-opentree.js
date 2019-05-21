function demandeDonneesXml(path, folder_line_id, imgID) {
    var img = document.getElementById(imgID);
    if (img.getAttribute("deploy")=="false") {
        req = newXMLHttpRequest();	
        var handlerFunction = attenteReponseXml;
        req.onreadystatechange = handlerFunction;
        req.open("POST", "browse.brw?action=opentree&path=" + path + "&folder_line_id=" + folder_line_id, true);
        req.setRequestHeader("Content-Type", 
               "application/x-www-form-urlencoded");
        req.send(null);
        img.src='images/moins.png';
        img.setAttribute("deploy", "true");
        showWaitPanel();
    } else {
        img.src='images/plus.png';
        img.setAttribute("deploy", "false");
        removeLines(folder_line_id);
    }
    
        
    
    
}

function attenteReponseXml() {
    if (req.readyState == 4) {
        hideWaitPanel();
        if (req.status == 200) {
            traitementReponseXml();
        } else {
            alert(req.statusText);
            //alert("Erreur " + req.status + "Erreur pendant la r�cup�ration de la r�ponse Ajax");
        }
    }
}













//--- Fonction  qui traite le r�sultat envoy� sous forme de flux XML
function traitementReponseXml() {
    // r�cup�ration de l'objet XML
    var xmldoc = req.responseXML; 
    
    var xmlFolderLineList = xmldoc.getElementsByTagName("folder_line");    
    if (xmlFolderLineList.length>0) {
        var xmlFolderLine = xmlFolderLineList[0];
        var xmlFolderLineId = xmlFolderLine.getAttribute("id");
        var xmlFolderLineTr = document.getElementById(xmlFolderLineId);
        var xmlFolderLineArb = xmlFolderLineTr.getAttribute("arb");
        if (xmlFolderLineTr!=null){
            var xmlFolderLineIndex = document.getElementById(xmlFolderLineId).rowIndex;
            var xmlFolderList = xmldoc.getElementsByTagName("folder");            
            for (var i=0; i<xmlFolderList.length; i++) {
                var xmlFolder = xmlFolderList[i];               
                var newID =  xmlFolderLineId + "_" + i;                
                
                var tdImage = getImgCell(xmlFolder.getAttribute("path"), newID, xmlFolder.getAttribute("plus"));
                
                 
                var tdLabel = getLabelCell(xmlFolder.getAttribute("path"), xmlFolder.getAttribute("name"), newID, xmlFolder.getAttribute("plus"));
                                
                //var newFolderLine = getFolderLine(parseInt(xmlFolderLineArb)+1);                
                // Garder parseInt(xmlFolderLineIndex) + 1 pour �tre au r�pertoire voulue
                // Ajouter + i pour le mettre en ordre alphab�tique
                var newFolderLine = xmlFolderLineTr.parentNode.insertRow(parseInt(xmlFolderLineIndex) + 1 + i);                                    
                                
                newFolderLine.setAttribute("arb", parseInt(xmlFolderLineArb) + 1);
                newFolderLine.setAttribute("parentID", xmlFolderLineId);
                
                //for (var j=0; j<xmlFolderLineArb; j++) {
                   var tdEmpty = getEmptyCell();
                   newFolderLine.appendChild(tdEmpty);
                //}
                
                var containerCell = getContainerCell();
                containerCell.colSpan = 2;
                var containerTable = getContainerTable();
                //containerTable.border=1;
                var containerTbody = getContainerTbody();
                var containerLine = getContainerLine();
                containerLine.setAttribute("id", newID);
                
                containerLine.appendChild(tdImage);
                containerLine.appendChild(tdLabel);
                containerTbody.appendChild(containerLine);
                containerTable.appendChild(containerTbody);
                containerCell.appendChild(containerTable);
                containerCell.style.width = "100%";
                
                //newFolderLine.appendChild(tdImage);
                //newFolderLine.appendChild(tdLabel);                
                //xmlFolderLineTr.parentNode.appendChild(newFolderLine);
                
                newFolderLine.appendChild(containerCell);                                               
                
            }
        }
            
    } else {
        var xmlErrorList = xmldoc.getElementsByTagName("error");
        if (xmlErrorList.length>0) {
            var xmlError = xmlErrorList[0];
            alert(xmlError.getAttribute("message"));
        }
    }
    //document.getElementById("abcd").innerText=document.body.innerHTML;
}


function getFolderLine(arb) {
    var folderLine = document.createElement("TR");
    //folderLine.setAttribute("id", id);
    folderLine.setAttribute("arb", arb);
    return folderLine;
}

function getEmptyCell() {
    var emptyCell = document.createElement("TD");
    //emptyCell.style.backgroundImage = "url('images/tree.png')";
    //emptyCell.innerText = ".";
    return emptyCell;
}

function getImgCell(path, folder_line_id, plus) {
    var img = document.createElement("IMG");
    if (plus=="true"){
        img.setAttribute("id", "img_" + folder_line_id);
        img.setAttribute("src", "images/plus.png");
        img.setAttribute("deploy", "false");
        img.setAttribute("p_path", path);
        img.setAttribute("p_folder_line_id", folder_line_id);
        img.onclick = function() {
            demandeDonneesXml(this.getAttribute("p_path"), this.getAttribute("p_folder_line_id"), this.id);
        }
        img.style.cursor = "pointer";
    } else {
        img.setAttribute("src", "images/empty_browse.png");
    }    
        
    
    var imgCell = document.createElement("TD");
    imgCell.setAttribute("valign", "top");
    
    imgCell.style.width = "1px";
    
    
    
    
    imgCell.appendChild(img);
    return imgCell;
}

function getLabelCell(path, name, newID, plus) {
    var labelCell = document.createElement("TD");
    labelCell.style.cursor = "default";
    
    labelCell.style.width = "100%";
    
    
    var imgFolder = document.createElement("IMG");
    imgFolder.setAttribute("src", "images/folder.gif");
    
    var spanLabel = document.createElement("SPAN");
    //spanLabel.appendChild(imgFolder);
    spanLabel.innerText = name;
    //spanLabel.innerHTML += "&nbsp;" + name;
    
    spanLabel.onclick = function() {
        selectFolder(this, path);
    }
    
    if (plus=="true") {
        spanLabel.ondblclick = function() {
            demandeDonneesXml(path, newID, "img_" + newID);
        }
    }   
    
    labelCell.innerHTML = "&nbsp;";
    labelCell.appendChild(imgFolder);
    labelCell.innerHTML += "&nbsp;";
    labelCell.appendChild(spanLabel);
    
    return labelCell;
}


function getContainerTable() {
    var containerTable = document.createElement("TABLE");
    containerTable.cellSpacing = "0";
    containerTable.cellPadding = "0";
    return containerTable;
}

function getContainerTbody() {
    var containerTbody = document.createElement("TBODY");
    return containerTbody;
}

function getContainerCell() {
    var containerCell = document.createElement("TD");
    return containerCell;
}

function getContainerLine() {
    var containerLine = document.createElement("TR");
    return containerLine;
}

function removeLines(parentID) {
    
    var trFolder = document.getElementById(parentID);
    var tBody = trFolder.parentNode;
    var trSubFoldersList = tBody.getElementsByTagName("TR");
    for (var i=0; i<trSubFoldersList.length; i++) {
        if (trSubFoldersList[i].getAttribute("parentID")==parentID) {
            trFolder.parentNode.removeChild(trSubFoldersList[i]);
            i--;
        }
    }
}


var selectedFolderSpan;
function selectFolder(span, path) {
    
    if (selectedFolderSpan!=null) {
        selectedFolderSpan.style.backgroundColor='#FFFFFF';
        selectedFolderSpan.style.color='#000000';
        selectedFolderSpan.style.border='1px solid #FFFFFF';
    }
    
    
    span.style.backgroundColor='#316AC5';
    span.style.color='white';
    span.style.border='1px solid #316AC5';
    selectedFolderSpan = span;
    document.getElementById("input_path_folder").value = path;
    
    
}

function showWaitPanel() {
    var imgWait = document.createElement("IMG");
    imgWait.setAttribute("src", "images/loading5.gif");
    
    var tdWait = document.createElement("TD");
    tdWait.setAttribute("align", "center");
    tdWait.setAttribute("valign", "middle");
    var trWait = document.createElement("TR");
    var tbodyWait = document.createElement("TBODY");
    var tableWait = document.createElement("TABLE");
    
    tdWait.appendChild(imgWait);
    trWait.appendChild(tdWait);
    tbodyWait.appendChild(trWait);
    tableWait.appendChild(tbodyWait);
    tableWait.style.position = "absolute";
    tableWait.style.width = "415px";
    tableWait.style.height = "360px";
    tableWait.style.top = "0";
    tableWait.style.left = "0";
    tableWait.setAttribute("id", "table_wait");
    
    document.getElementById("div_browse").appendChild(tableWait);
    
}

function hideWaitPanel() {
    var tableWait = document.getElementById("table_wait");
    document.getElementById("div_browse").removeChild(tableWait);
}



