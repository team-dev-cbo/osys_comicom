<%--
    Document   : grid-editor
    Created on : 28 mai 2016, 11:51:54
    Author     : Keloud
--%>

<%@page import="java.util.Properties"%>
<%@page import="com.osys.quartispro.common.Application"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="org.json.simple.JSONArray"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<% 
    String version = "1.0.4.1";
%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Grid Editor</title>

        <link rel="stylesheet" type="text/css" href="css/animation.css?version=<%= version %>" />
        <link rel="stylesheet" type="text/css" href="css/lib/bootstrap.min.css?version=<%= version %>" />
        <link rel="stylesheet" type="text/css" href="css/lib/normalize.min.css?version=<%= version %>" />
        <link rel="stylesheet" type="text/css" href="css/mainframe.css?version=<%= version %>" />
        <link rel="stylesheet" type="text/css" href="css/swappages.css?version=<%= version %>" />
        <link rel="stylesheet" type="text/css" href="css/quartis-manager.css?version=<%= version %>" />
        <link rel="stylesheet" type="text/css" href="css/lib/spectrum.min.css?version=<%= version %>" />

        <%
            Application app = Application.getInstance();
            for (String path : app.getCssRelativePaths()) {
                out.println("<link rel=\"stylesheet\" type=\"text/css\" href=\"load?path=" + path + "?version=" + version + "\" />");
            }
        %>

        <style>
            body {
                margin: 0;
                background-color: white;
                color: black; }

            .mainframe {
                position: relative;
                overflow: hidden;
                width: 100%;
                height: 100%;
            }
            .mainframe-tabs {
                overflow: hidden;
                width: 100%;
                height: 100%;
            }
            .mainframe-tabs-H {
                overflow: hidden;
                position: relative;
                float: left;
            }
            .mainframe-tab-H {
                overflow: hidden;
                position: relative;
                float: left;
            }


            .toolbar {
                overflow:hidden;
                margin: 20px 20px 10px 20px; }

            .toolbar-board {
                overflow:hidden;
                margin: 10px 20px 10px 20px;
                display: table; }

            .toolbar-board > * {
                display: table-cell; }

            .toolbar-board > *:last-child {
                text-align: right; }

            .grid-modal {
                overflow: hidden;
                position: absolute;
                top: 0px;
                left: 0px;
                width:100%;
                height:100%;
                background-color: #2E2E2E;
                opacity: 0.8;
                z-index: 1; }

            .dialog {
                width: 800px;
                height: 600px;
                opacity: 1.0;
                z-index: 3; }
            
            .responsiveDialog {
                display: none;
                width: 800px;
                opacity: 1.0;
                z-index: 4;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }

            .alert-dialog {
                display: none;
                position: absolute;
                width: 300px;
                line-height: 25px;
                height: 60px;
                top: 10px;
                right: 10px;
                opacity: 1.0;
                z-index: 5;
                text-align: center;
                color: white;
                background-color: white;
                border: 1px solid white; }

            #consoles {
                overflow:hidden;
                margin: 20px 20px 20px 20px; }

            #editor {
                overflow:hidden; }

            #designation {
                overflow:auto;
                margin: 0px 20px 0px 20px;
                height: 60px }

            #workspace {
                overflow:hidden;
                margin: 10px 20px 0px 20px;
                border: 1px solid #2D3039; }

            #board {
                overflow:auto;
                margin: 0px 20px 10px 20px;
                color: #FFFFFF;
                font-size: 15px; }

            #header {
                border: 1px solid #ccc;
            }

            .selected {
                border: 2px solid red !important;
                z-index: 2;
            }

            .gridcell {
                position: absolute;
                overflow: hidden;
                box-sizing: border-box;
            }

            .panel-heading span
            {
                margin-top: -26px;
                font-size: 15px;
                margin-right: -12px;
            }
            .clickable {
                background: rgba(0, 0, 0, 0.15);
                display: inline-block;
                border-radius: 4px;
                cursor: pointer;
            }

            .slide .carousel-indicators {
                display: none;
            }
            
            #loader {
                position: absolute;
                z-index: 6;
                width: 100%;
                height: 100%;
                background-color: white;
                display: block;
            }
            
            .sp-replacer {
                width: 100%;
            }
            
            .sp-dd {
                float: right;
            }
            
            #dashboard .gridcell {
                border: 1px solid rgb(97, 207, 119);
            }
        </style>

        <script src="js/lib/jquery-3.3.1.min.js?version=<%= version %>" type="text/javascript"></script>
        <script src="js/lib/interact.min.js?version=<%= version %>" type="text/javascript"></script>
        <script src="js/lib/react.min.js?version=<%= version %>" type="text/javascript"></script>
        <script src="js/lib/react-dom.min.js?version=<%= version %>" type="text/javascript"></script>
        <script src="js/lib/flux.min.js?version=<%= version %>" type="text/javascript"></script>
        <script src="js/lib/microevent.min.js?version=<%= version %>" type="text/javascript"></script>
        <script src="js/lib/moment-with-locales.min.js?version=<%= version %>" type="text/javascript"></script>
        <script src="js/lib/spectrum.min.js?version=<%= version %>" type="text/javascript"></script>
        <script src="js/lib/bootstrap.min.js?version=<%= version %>" type="text/javascript"></script>
        <script src="js/mainframe-1.0.0.js?version=<%= version %>" type="text/javascript"></script>
        <script src="js/swappages-1.0.0.js?version=<%= version %>" type="text/javascript"></script>
        <script src="js/quartis-i18n-1.0.0.js?version=<%= version %>" type="text/javascript"></script>
        <script src="js/quartis-app-1.0.0.js?version=<%= version %>" type="text/javascript"></script>
        <script src="js/quartis-query-1.0.0.js?version=<%= version %>" type="text/javascript"></script>
        <script src="js/quartis-manager-grid-1.0.1.js?version=<%= version %>" type="text/javascript"></script>

        <%
            for (String path : app.getJsRelativePaths()) {
                out.println("<script type=\"text/javascript\" src=\"load?path=" + path + "?version=" + version + "\"></script>");
            }
        %>

        <%
            for (String path : app.getComponentsRelativePaths()) {
                out.println("<script type=\"text/javascript\" src=\"load?path=" + path + "?version=" + version + "\"></script>");
            }
        %>

        <%
            String lang = "en";
            Properties trad = (Properties) request.getAttribute("trad");
        %>

    </head>
    <body>
        <div id="loader"></div>
        <div id="mainframe">
            <div class="mainframe-tabs">
                <div class="mainframe-tabs-H">

                    <div id="list" class="mainframe-tab-H">
                        <div class="toolbar">
                            <b><span style="font-size: 18px"><%= trad.getProperty("grid.list.console")%>:</span></b>
                        </div>
                        <div id="consoles">
                        </div>

                    </div>

                    <div id="editor" class="mainframe-tab-H">

                        <div class="toolbar">
                            <span id="btnClosePage" class="glyphicon glyphicon-arrow-left" onclick="showList()"></span>
                            <b><span id="gridTitle" style="margin-left: 20px; font-size: 18px"/></b>
                        </div>
                        
                        <div id="workspace">

                            <div id="toolbar-board" class="toolbar-board">
                                <div>
                                    <span><%= trad.getProperty("grid.label.widget")%>:</span>
                                    <span id="btnListWidget" class="glyphicon glyphicon-plus" onclick="showWidgetsDialog()"></span>
                                    <span id="btnEditWidget" class="glyphicon glyphicon-pencil" onclick="showWidgetParams()"></span>
                                    <span id="btnRemoveWidget" class="glyphicon glyphicon-trash" onclick="removeWidget()"></span>
                                    <span id="btnSavePage" style="margin-left: 10px" class="glyphicon glyphicon-floppy-disk" onclick="saveGrid()"></span>
                                </div>
                                <div>
                                    <span id="updateWidgetCellInfos" style="margin-right: 20px; display: none">
                                        X : <input type="text" style="width: 50px;" id="cellInfoX" /> -
                                        Y : <input type="text" style="width: 50px;" id="cellInfoY" /> -
                                        W : <input type="text" style="width: 50px;" id="cellInfoW" /> -
                                        H : <input type="text" style="width: 50px;" id="cellInfoH" />
                                    </span>
                                    <span id="activateGrid" style="margin-right: 20px">
                                        <input type="checkbox" id="checkCell" /> <%= trad.getProperty("grid.label.show.grid")%>
                                    </span>
                                    <span id="gridCellInfos" style="margin-right: 20px"></span>
                                    <span id="btnClear" class="glyphicon glyphicon-erase" onclick="clearGrid()"></span>
                                    <span id="gridResolution" style="margin-left: 10px"></span>
                                </div>
                            </div>

                            <div id="board">
                                <div id="dashboard" class="console">
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div id="modalDialog" class="grid-modal"></div>

        <div id="consoleDialog" class="responsiveDialog">

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title"><%= trad.getProperty("grid.label.console")%>:</h3>
                    <span class="pull-right clickable glyphicon glyphicon-remove" onclick="hideDialogs();"></span>
                </div>
                <div class="panel-body">
                    <form id="formConsole" class="form-horizontal" role="form">
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="consoleCode"><%= trad.getProperty("grid.label.code")%>:</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="consoleCode" onchange="updateNameNewConsole()" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="consoleGroup"><%= trad.getProperty("grid.label.group")%>:</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="consoleGroup" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="consoleName"><%= trad.getProperty("grid.label.name")%>:</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="consoleName" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="consoleDesignation"><%= trad.getProperty("grid.label.designation")%>:</label>
                            <div class="col-sm-10">
                                <textarea class="form-control" id="consoleDesignation" rows="3"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="consoleResolution"><%= trad.getProperty("grid.label.resolution")%></label>
                            <div class="col-sm-10">
                                <select class="form-control" id="consoleResolution"></select>
                            </div>
                        </div>
                        <div class="form-group" style="display:none">
                            <label class="control-label col-sm-2" for="consoleOldResolution"><span class="label-oldresolution"></span></label>
                            <div class="col-sm-10">
                                <input class="form-control" id="consoleOldResolution" />
                            </div>
                        </div>
                    </form>
                </div>
                <div class="panel-body">
                    <button type="button" id="btnSave" class="btn btn-default" onclick="saveConsole(false)">
                        <span class="glyphicon glyphicon-floppy-disk"></span>
                        <span><%= trad.getProperty("grid.label.save")%></span>
                    </button>
                    <button type="button" id="btnDuplicate" class="btn btn-default" onclick="saveConsole(true)">
                        <span class="glyphicon glyphicon-duplicate"></span>
                        <span><%= trad.getProperty("grid.label.duplicate")%></span>
                    </button>
                </div>
            </div>

        </div>

        <div id="parametersDialog" class="responsiveDialog">

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title"><%= trad.getProperty("grid.label.parameters")%></h3>
                    <span class="pull-right clickable glyphicon glyphicon-remove" onclick="hideDialogs();"></span>
                </div>
                <div class="panel-body">
                    <form id="parameters" class="form-horizontal" role="form">
                    </form>
                </div>
            </div>

        </div>

        <div id="widgetsDialog" class="responsiveDialog">

            <div class="panel panel-default">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-md-6">
                            <h3 class="panel-title"><%= trad.getProperty("grid.label.widget.list")%></h3>
                        </div>
                        <div class="col-md-6" style="text-align: center">
                            <label><input id="checkboxDevMode" type="checkbox" value=""><%= trad.getProperty("grid.label.developermode") %></label>
                        </div>
                        <span class="pull-right clickable glyphicon glyphicon-remove" onclick="hideDialogs();"></span>
                    </div>
                </div>
                <div class="panel-body">
                    <div style="overflow-x: hidden; overflow-y: scroll;">
                        <div id="categories" class="list-group">
                        </div>
                    </div>
                </div>
            </div>

        </div>
                    
        <div id="deleteConfirmDialog" class="responsiveDialog">

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title"><%= trad.getProperty("grid.label.delete.confirm.title")%></h3>
                    <span class="pull-right clickable glyphicon glyphicon-remove" onclick="hideDialogs();"></span>
                </div>
                <div class="panel-body">
                    <%= trad.getProperty("grid.label.delete.confirm.text")%> <span id="selectedConsoleToDelete"></span> ?
                </div>
                <div class="panel-footer">
                    <div class="row no-margin">
                        <div class="col-sm-4 col-sm-offset-1">
                            <button class="btn btn-default" onclick="hideDialogs();"><%= trad.getProperty("form.button.cancel")%></button>
                        </div>
                        <div class="col-sm-4 col-sm-offset-1">
                            <button class="btn btn-danger" onclick="removeConsole(selectedConsole)"><%= trad.getProperty("form.button.delete")%></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div id="saveDialog" class="alert-dialog">

        </div>

        <script type="text/javascript" id="code">
            var inc = 0;
            var srcGroup = "";
            var srcName = "";
            var activateGrid = false;
            var lang = getParameterByName('_i18n');
            var selectedWidget = undefined;
            var isSwapping = false;
            var selectedConsole = "";
            
            // Dimension var
            var width = $(window).width();	
            var height = $(window).height();

            var workspaceHeight = height - 80; // Include header height and margin
            var workspaceWidth = width - 50; // Margin

            var boardWidth = width - 100; // include header height + toolbar height
            var boardHeight = height - 125; // include header height + toolbar height
            
            var ratio = 1;

            var quartisManager = new QuartisManagerGrid("<%= lang%>");
            if (lang !== undefined) {
                quartisManager = new QuartisManagerGrid(lang);
            }

           quartisManager.language = lang;

            loadConsolesWithTrad();
            quartisManager.loadResolutions();
            quartisManager.loadCategories('<%= trad.getProperty("grid.label.add")%>');
            
            function loadConsolesWithTrad() {
                quartisManager.loadConsoles('<%= trad.getProperty("grid.label.code")%>', '<%= trad.getProperty("grid.label.group")%>', '<%= trad.getProperty("grid.label.name")%>', 
                '<%= trad.getProperty("grid.label.designation")%>', '<%= trad.getProperty("grid.label.resolution")%>');   
            }

            function hideDialogs() {
                $("#modalDialog").hide();
                $("#consoleDialog").hide();
                $("#widgetsDialog").hide();
                $("#parametersDialog").hide();
                $("#saveDialog").hide();
                $("#deleteConfirmDialog").hide();
                $("#saveMessage").html("-");
                $("#selectedConsoleToDelete").text("");
            }

            function showConsoleDialog() {
                $("#modalDialog").show();
                $("#consoleDialog").show();
                $("#widgetsDialog").hide();
                $("#parametersDialog").hide();
                $("#saveDialog").hide();
                $("#deleteConfirmDialog").hide();
                $("#saveMessage").html("-");
            }

            function showWidgetsDialog() {
                $("#modalDialog").show();
                $("#consoleDialog").hide();
                $("#widgetsDialog").show();
                $("#parametersDialog").hide();
                $("#saveDialog").hide();
                $("#deleteConfirmDialog").hide();
                $("#saveMessage").html("-");
                
                checkDevMode();
            }

            function showParametersDialog() {
                $("#modalDialog").show();
                $("#consoleDialog").hide();
                $("#widgetsDialog").hide();
                $("#parametersDialog").show();
                $("#saveDialog").hide();
                $("#deleteConfirmDialog").hide();
                $("#saveMessage").html("-");
            }
            
            function showDeleteConfirmDialog(console) {
                selectedConsole = console;
                $("#selectedConsoleToDelete").text(console);
                $("#modalDialog").hide();
                $("#consoleDialog").hide();
                $("#widgetsDialog").hide();
                $("#parametersDialog").hide();
                $("#saveDialog").hide();
                $("#deleteConfirmDialog").show();
                $("#saveMessage").html("-");
            }

            function load(){
		hideDialogs();

                $("#btnEditWidget").hide();
                $("#btnRemoveWidget").hide();
                
                $("#mainframe").css("width", width);
                $("#mainframe").css("height", height);

                $(".mainframe-tabs-H").css("min-width", width * 2);
                $(".mainframe-tabs-H").css("height", height);

                $("#list").css("width", width);
                $("#list").css("height", height);

                $("#editor").css("width", width - 20); // 20 : margin
                $("#editor").css("height", height - 20); // 20 : margin

                $("#workspace").css("width", workspaceWidth);
                $("#workspace").css("height", workspaceHeight);

                $("#toolbar-board").css("width", workspaceWidth - 30);

                $("#board").css("width", boardWidth);
                $("#board").css("height", boardHeight);
                
                var widgetDialogHeight = $("#modalDialog").height();
                if (widgetDialogHeight > 900) {
                    widgetDialogHeight = 900;
                }
                $(".responsiveDialog").css("max-height",widgetDialogHeight);
                $("#widgetsDialog .panel-body div").css("max-height",widgetDialogHeight - 100);

                interact('.selected')
                    .draggable({
                        snap: {
                            targets: [
                              interact.createSnapGrid({ x: quartisManager.gridStep, y: quartisManager.gridStep })
                            ],
                            range: Infinity,
                            relativePoints: [ { x: 0, y: 0 } ]
                          },
                        onmove: dragMoveListener
                    })
                    .resizable({
                        snap: {
                            targets: [
                              interact.createSnapGrid({ x: quartisManager.gridStep, y: quartisManager.gridStep })
                            ],
                            range: Infinity,
                            relativePoints: [ { x: 0, y: 0 } ]
                          },
                        preserveAspectRatio: false,
                        edges: { left: true, right: true, bottom: true, top: true }
                    })
                    .on('resizemove', function (event) {
                        var target = event.target,
                        x = (parseFloat(target.getAttribute('data-x')) || 0),
                        y = (parseFloat(target.getAttribute('data-y')) || 0);

                        // update the element's style
                        target.style.width  = event.rect.width + 'px';
                        target.style.height = event.rect.height + 'px';

                        // translate when resizing from top or left edges
                        x += findGridSnap(event.deltaRect.left);
                        y += findGridSnap(event.deltaRect.top);

                        target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px,' + y + 'px)';

                        target.setAttribute('data-x', x);
                        target.setAttribute('data-y', y);
                        //target.textContent = Math.round(event.rect.width) + '×' + Math.round(event.rect.height);

                        $(target).width(findGridSnap($(target).width()));
                        $(target).height(findGridSnap($(target).height()));

                        var position = $(target).position();
                        $("#gridCellInfos").html("x:" + position.left + ", y:" + position.top + " [" + $(target).width() + ", " + $(target).height() + "]");
                    })
                    .on(['resizeend'], function (event) {
                        var target = event.target;

                        $(target).width(findGridSnap($(target).width()));
                        $(target).height(findGridSnap($(target).height()));

                        var ref = $(target).attr('ref');
                        var w = quartisManager.grid.findWidgetById(ref);
                        if(w !== null) {
                            var position = $(target).position();
                            w.x = position.left;
                            w.y = position.top;
                            w.width = $(target).width();
                            w.height = $(target).height();

                            $("#gridCellInfos").html("x:" + position.left + ", y:" + position.top + " [" + $(target).width() + ", " + $(target).height() + "]");
                            reloadWidget(w);
                        }
                    })
                    .on(['dragend'], function (event) {
                        var target = event.target;

                        var ref = $(target).attr('ref');
                        var w = quartisManager.grid.findWidgetById(ref);
                        if(w !== null) {
                            var position = $(target).position();
                            w.x = position.left;
                            w.y = position.top;

                            $("#gridCellInfos").html("x:" + position.left + ", y:" + position.top + " [" + $(target).width() + ", " + $(target).height() + "]");
                        }
                    });
                    
                    $("#loader").hide();
            }
            
            $(function () {
                // Modification P.MAHE du 06/09/2017
                // Appel de la fonction de mise en place de la page
                // après un décalage d'1 milliseconde pour permettre
                // à Quartis-Web d'afficher l'iframe proprement et 
                // d'obtenir les bonnes dimensions (sinon la page apparaît 
                // blanche).
                var timeOut = 500;
		setTimeout(load, timeOut);
                
                $('#checkboxDevMode').change(function() {
                    checkDevMode();
                });
            });
            
            function checkDevMode() {
                var checkboxDevMode = $("#checkboxDevMode");

                if (checkboxDevMode !== undefined && checkboxDevMode.length === 1) {
                    checkboxDevMode = checkboxDevMode[0];
                }
                
                var devModeCategory = findDevModeCategory();
                if (devModeCategory !== null) {
                    if (checkboxDevMode.checked) {
                        devModeCategory.style.display = 'block';
                    } else {
                        devModeCategory.style.display = 'none';
                    }
                }
            }
            
            function findDevModeCategory() {
                var devModeCategory = null;
                
                var categories = $("#categories").children();
                if (categories !== undefined && categories.length > 0) {
                    for (var i = 0; i < categories.length; i++) {
                        if (categories[i].innerHTML !== undefined && categories[i].innerHTML.indexOf('WGT_BoutonCustom') > -1) {
                            devModeCategory = categories[i];
                        }
                    }
                }
                
                return devModeCategory;
            }

            function dragMoveListener (event) {
                var target = event.target;
                var dx = findGridSnap(event.dx);
                var dy = findGridSnap(event.dy);

                // keep the dragged position in the data-x/data-y attributes
                var x = (parseFloat(target.getAttribute('data-x')) || 0) + dx;
                var y = (parseFloat(target.getAttribute('data-y')) || 0) + dy;

                // translate the element
                target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

                // update the posiion attributes
                target.setAttribute('data-x', x);
                target.setAttribute('data-y', y);

                var position = $(target).position();
                $("#gridCellInfos").html("x:" + position.left + ", y:" + position.top + " [" + $(target).width() + ", " + $(target).height() + "]");
           }

            $(document).on("click", ".gridcell", function () {
                selectWidget(this);
                $("#updateWidgetCellInfos").show();
            });

            $(document).on("click", "#checkCell", function () {
                activateGrid = !activateGrid;
                if (activateGrid) {
                    $("#dashboard").addClass("grid");
                } else {
                    $("#dashboard").removeClass("grid");
                }
            });

            $(document).on("change", "#cellInfoX", function() {
                var newValue = $("#cellInfoX").val();
                updateWidgetPosition("X", newValue);
            });

            $(document).on("change", "#cellInfoY", function() {
                var newValue = $("#cellInfoY").val();
                updateWidgetPosition("Y", newValue);
            });

            $(document).on("change", "#cellInfoW", function() {
                var newValue = $("#cellInfoW").val();
                updateWidgetPosition("W", newValue);
            });

           $(document).on("change", "#cellInfoH", function() {
                var newValue = $("#cellInfoH").val();
                updateWidgetPosition("H", newValue);
            });

            function updateWidgetPosition(pos, newValue) {
                newValue = Number(newValue);
                
                if (selectedWidget !== undefined) {
                    var widegtID = selectedWidget.id;
                    var w = quartisManager.grid.findWidgetById(widegtID.replace("_cell", ""));

                    if (pos === "X") {
                        $("#" + widegtID).css('left', newValue + 'px');
                        w.x = newValue;
                    } else if (pos === "Y") {
                        $("#" + widegtID).css('top', newValue + 'px');
                        w.y = newValue;
                    } else if (pos === "W") {
                        $("#" + widegtID).css('width', newValue + 'px');
                        w.width = newValue;
                    } else if (pos === "H") {
                        $("#" + widegtID).css('height', newValue + 'px');
                        w.height = newValue;
                    }
                    reloadWidget(w);
                }
            }

            function showList() {
                hideDialogs();

                quartisManager.grid = null;

                swipeToList();
            }

            function showGrid(code) {
                hideDialogs();

                var console = quartisManager.findConsoleByCode(code);
                if(console !== null) {
                    quartisManager.grid = new Grid(console);

                    updateGrid();
                    swipeToGrid();
                }
            }

            function updateGrid() {

                clearGrid();

                $("#gridTitle").html(quartisManager.grid.console.group + " / " + quartisManager.grid.console.name);
                $("#gridDesignation").html(quartisManager.grid.console.designation);
                $("#gridResolution").html(quartisManager.grid.console.resolution['designation']);
                
                var totalWidth = quartisManager.grid.console.resolution['width'];
                var totalHeight = quartisManager.grid.console.resolution['height'] - 50;
                
                var ratioTemp = 1;
                
                if (totalHeight > boardHeight) {
                    ratioTemp = boardHeight / totalHeight;
                }
                if (totalWidth > boardWidth && ((boardWidth / totalWidth) < ratioTemp)) {
                    ratioTemp = boardWidth / totalWidth;
                }
                
                ratio = ratioTemp;
                quartisManagerWidth = totalWidth * ratio;
                quartisManagerHeight = totalHeight * ratio;
                
                $("#dashboard").css("width", quartisManagerWidth);
                $("#dashboard").css("height", quartisManagerHeight);
                
                quartisManager.grid.width = quartisManagerWidth;
                quartisManager.grid.height = quartisManagerHeight;

                loadGrid();
            }

            function clearGrid() {

                $("#dashboard").html("");

                $('.btnWidget').each(function (index) {
                    $(this).show();
                });

                $("#btnEditWidget").hide();
                $("#btnRemoveWidget").hide();

                quartisManager.grid.widgets = [];
            }

            function hideGrid() {
                hideDialogs();

                quartisManager.grid = null;

                swipeToList();
            }

            function swipeToGrid() {
                var $tabs = $('.mainframe-tabs-H');
                if (!isSwapping) {
                    isSwapping = true;
                    $tabs.animate({'left': '-=' + $("#list").width() + 'px'}, 400, function () {
                        isSwapping = false;
                    });
                }
            }

            function swipeToList() {
                var $tabs = $('.mainframe-tabs-H');
                $tabs.animate({'left': '+=' + $("#list").width() + 'px'}, 400, function () {
                });
            }

            function showWidgetParams() {
                showParametersDialog();

                if(quartisManager.grid === null)
                    return;

                $('.selected').each(function (index) {
                    var ref = $(this).attr("ref");
                    var defaultWidgets = quartisManager.widgets;
                    var widget = quartisManager.grid.findWidgetById(ref);
                    var refresh = widget['refresh'];
                    var openForm = widget['openForm'];
                    var params = widget['parameters'];
                    var defaultWidget = "";

                    // Récupération du paramètre
                    for (var i = 0; i < defaultWidgets.length; i++) {
                        if (getWidgetID(ref) === defaultWidgets[i].id) {
                            defaultWidget = defaultWidgets[i];
                        }
                    }

                    if (refresh === null || refresh === undefined) {
                        refresh = -1;
                    }
                    if (openForm === null || openForm === undefined) {
                        openForm = false;
                    }

                    var html = "";

                    html += "<div class=\"form-group\">"
                            + " <label class=\"control-label col-sm-2\" for=\"refresh\"><%= trad.getProperty("grid.label.refresh")%></label>"
                            + " <div class=\"col-sm-10\">"
                            + "   <input type=\"number\" class=\"form-control\" id=\"refresh\" value=\"" + refresh + "\" />"
                            + " </div>"
                            + "</div>";
                    //html += "<div class=\"form-group\">"
                    //        + " <label class=\"control-label col-sm-2\" for=\"showOpenForm\">Enable Form:</label>"
                    //        + " <div class=\"col-sm-10\">"
                    //        + "   <input type=\"text\" class=\"form-control\" id=\"showOpenForm\" value=\"" + openForm + "\" />"
                    //        + " </div>"
                    //        + "</div>";
                    
                    var colorValue = "";
                    for (var i = 0; i < params.length; i++) {
                        var param = params[i];
                        var defaultParam = defaultWidget.parameters[i];
                        
                        var style = defaultParam['editable'] ? "" : "style=\"display: none\"";
                        if (param['values'] !== undefined && param['values'].length > 0) {
                            html += "<div class=\"form-group\" " + style + ">"
                                    + " <label class=\"control-label col-sm-2\" for=\"" + param['name'] + "\">" + param['label'] + ":</label>"
                                    + " <div class=\"col-sm-10\">"
                                    + "   <select class=\"form-control\" id=\"" + param['name'] + "\" value=\"" + param['value'] + "\" >";
                            var options = param['values'].split('|');
                            for (var c = 0; c < options.length; c++) {
                                if (options[c] === param['value']) {
                                    html += "      <option value=\"" + options[c] + "\" selected=\"selected\">" + options[c] + " </option>";
                                } else {
                                    html += "      <option value=\"" + options[c] + "\">" + options[c] + " </option>";
                                }
                            }
                            html += "   </select>"
                                    + " </div>"
                                    + "</div>";
                        } else if (param['name'] === 'color') {
                            html += "<div class=\"form-group\" " + style + ">"
                                    + " <label class=\"control-label col-sm-2\" for=\"" + param['name'] + "\">" + param['label'] + ":</label>"
                                    + " <div class=\"col-sm-10\">"
                                    + "     <input type='text' id=\"" + param['name'] + "\" value=\"" + param['value'] + "\" />"
                                    + " </div>"
                                    + "</div>";
                            colorValue = param['value'];
                        } else {
                            html += "<div class=\"form-group\" " + style + ">"
                                    + " <label class=\"control-label col-sm-2\" for=\"" + param['name'] + "\">" + param['label'] + ":</label>"
                                    + " <div class=\"col-sm-10\">"
                                    + "   <input type=\"text\" class=\"form-control\" id=\"" + param['name'] + "\" value=\"" + param['value'] + "\" />"
                                    + " </div>"
                                    + "</div>";
                        }
                    }
                    html += "<div class=\"form-group\">"
                            + " <div class=\"col-sm-offset-2 col-sm-10\">"
                            + "  <button type=\"button\" class=\"btn btn-default\" onclick=\"submitWidgetParams('" + ref + "')\"><%= trad.getProperty("grid.label.save")%></button>"
                            + " </div>"
                            + "</div>";
                    $("#parameters").html(html);
                    
                    $("#color").spectrum({
                        preferredFormat: "hex",
                        showInput: true,
                        color: colorValue
                    });
                }); 
            }

            function submitWidgetParams(ref) {
                if(quartisManager.grid === null)
                    return;

                var widget = quartisManager.grid.findWidgetById(ref);
                widget['refresh'] = $("#refresh").val();

                var params = widget['parameters'];
                for (var i = 0; i < params.length; i++) {
                    var param = params[i];
                    param['value'] = $("#" + param['name']).val();
                }

                reloadWidget(widget);

                hideDialogs();
            }

            function reloadWidget(widget) {
                var id = widget['id'];
                var group = widget['group'];
                var name = widget['name'];
                var width = widget['width'];
                var height = widget['height'];
                var params = widget['parameters'];

                var div = " <div class='widget'>"
                            + "  <div id='" + id + "' style='width:100%;height:100%;'>Loading...</div>"
                            + "  <div id='" + id + "_title' class='widget-title'></div>"
                            + " </div>";
                $("#" + id + "_cell").html(div);
                quartisManager.loadWidget(id, group, name, width, height, params);
                fillCellInfoXY(widget['x'], widget['y'], width, height);
            }

            function selectWidget(obj) {

                unselectWidgets();
                var position = $(obj).position();
                var width = $(obj).width();
                var height = $(obj).height();
                $("#gridCellInfos").html("x:" + position.left + ", y:" + position.top + " [w:" + width + ", h:" + height + "]");
                fillCellInfoXY(Number(position.left).toFixed(2), Number(position.top).toFixed(2), width, height);

                $(obj).addClass("selected");
                $("#btnEditWidget").show();
                $("#btnRemoveWidget").show();

                selectedWidget = obj;
                if (obj[0] !== undefined && obj[0].id !== undefined) {
                    selectedWidget = obj[0];
                }

            }

            function unselectWidgets() {
                $('.selected').each(function (index) {
                    $(this).removeClass("selected");
                });
                $("#btnEditWidget").hide();
                $("#btnRemoveWidget").hide();

                $("#gridCellInfos").html("");
                selectedWidget = undefined;
            }

            function fillCellInfoXY(left, top, width, height) {
                $("#cellInfoX").val(left);
                $("#cellInfoY").val(top);
                $("#cellInfoW").val(width);
                $("#cellInfoH").val(height);
            }

            function addWidget(id) {
                hideDialogs();
                
                var widget = quartisManager.findWidgetById(id);
                
                if (widget !== null) {
                    var group = widget['group'];
                    var name = widget['name'];
                    var width = widget['width'];
                    var height = widget['height'];
                    var onClick = widget['onClick'];
                    var params = widget['parameters'];
                    var refresh = widget['refresh'];
                    
                    if (id === "WGT_BoutonCustom") {
                        id = generateWidgetBoutonID(id);
                    }

                    loadWidget(id, group, name, quartisManager.gridStep, quartisManager.gridStep, width, height, onClick, refresh, params);
                }
            }

            function loadWidget(id, group, name, x, y, width, height, onClick, refresh, params) {
                
                hideDialogs();

                if(quartisManager.grid === null)
                    return;

                var widget = quartisManager.findWidgetById(getWidgetID(id));
                if (widget !== null) {
                    var div = "<div id='" + id + "_cell' title='" + widget.description + "' class='gridcell' onclick='selectWidget(this);' oncontextmenu='javascript:onLeftClickGridCell(this);return false;'>"
                            + "</div>";

                    var html = $("#dashboard").html();
                    html += div;
                    $("#dashboard").html(html);

                    var $widget = $("#" + id + "_cell");
                    $widget.attr("ref", id);
                    $widget.css("left", x);
                    $widget.css("top", y);
                    $widget.width(width);
                    $widget.height(height);
                    
                    // Blocage de tout les boutons sauf le générique si déja utilisé
                    if (id !== "WGT_BoutonCustom") {
                        $("#btn" + id).hide();
                    }

                    quartisManager.grid.widgets.push(
                        {
                            id: id,
                            group: group,
                            name: name,
                            x: x,
                            y: y,
                            width: width,
                            height: height,
                            onClick: onClick,
                            refresh: refresh,
                            parameters: params
                        }
                    );

                    var w = quartisManager.grid.findWidgetById(id);
                    w.id = id;
                    
                    reloadWidget(w);
                }
            }

            function onLeftClickGridCell(event) {
                if (event.id !== undefined) {
                    $("#" + event.id.replace("_cell", "")).click();
                    showWidgetParams();
                }
            }

            function removeWidget() {
                hideDialogs();

                if(quartisManager.grid === null)
                    return;

                $('.selected').each(function (index) {
                    var ref = $(this).attr("ref");

                    var widget = quartisManager.grid.findWidgetById(ref);
                    if(widget !== null) {
                        var index = quartisManager.grid.widgets.indexOf(widget);
                        quartisManager.grid.widgets.splice(index, 1);
                    }

                    $("#btn" + ref).show();

                    $(this).removeClass("selected");
                    $(this).remove();
                });

                unselectWidgets();
            }

            function newConsole() {
                $("#consoleCode").prop('readonly', false);
                $("#consoleGroup").prop('readonly', false);
                $("#consoleName").prop('readonly', false);
                $("#consoleCode").val("");
                $("#consoleGroup").val("");
                $("#consoleName").val("");
                $("#consoleDesignation").val("");
                $("#consoleResolution").val(quartisManager.resolutions[0]['code']);
                $('#btnSave').show();
                $('#btnDuplicate').hide();
                showConsoleDialog();
            }

            function editConsole(code) {
                var console = quartisManager.findConsoleByCode(code);
                if(console !== null) {
                    $("#consoleCode").prop('readonly', true);
                    $("#consoleGroup").prop('readonly', true);
                    $("#consoleName").prop('readonly', true);
                    $("#consoleCode").val(console.code);
                    $("#consoleGroup").val(console.group);
                    $("#consoleName").val(console.name);
                    $("#consoleDesignation").val(console.designation);
                    $("#consoleResolution").val(console.resolution['code']);
                    $('#btnSave').show();
                    $('#btnDuplicate').hide();
                    showConsoleDialog();
                }
            }

            function copyConsole(code) {
                var console = quartisManager.findConsoleByCode(code);
                if(console !== null) {
                    srcGroup = console.group;
                    srcName = console.name;

                    var name = console.code + "(" + (inc++) + ")";
                    $("#consoleCode").prop('readonly', false);
                    $("#consoleGroup").prop('readonly', false);
                    $("#consoleName").prop('readonly', false);
                    $("#consoleCode").val(console.code);
                    $("#consoleGroup").val(console.group);
                    $("#consoleName").val(name);
                    $("#consoleDesignation").val(console.designation);
                    $("#consoleResolution").val(console.resolution['code']);
                    $("#consoleOldResolution").val(console.resolution['code']);
                    $('#btnSave').hide();
                    $('#btnDuplicate').show();
                    showConsoleDialog();
                }
            }

            function openConsole(code) {
                showGrid(code);
            }

            function removeConsole(code) {
                var console = quartisManager.findConsoleByCode(code);
                if(console !== null) {
                    $.ajax({
                        url: "editor",
                        type: 'post',
                        data: {
                            action: "remove-console",
                            lang: quartisManager.language,
                            code: console.code,
                            group: console.group,
                            name: console.name
                        },
                        async: true,
                        crossDomain: true,
                        success: function (data, status) {
                            $("#saveDialog").css("background-color", "green");
                            $("#saveDialog").css("color", "white");
                            $("#saveDialog").html("<%= trad.getProperty("grid.label.delete.console")%>");
                            $("#saveDialog").show();
                            $("#selectedConsoleToDelete").text("");
                            $("#deleteConfirmDialog").hide();
                            setTimeout(function() {
                                hideDialogs();
                                loadConsolesWithTrad();
                            }, 3000);
                        },
                        error: function (data, status, error) {
                            $("#saveDialog").css("background-color", "red");
                            $("#saveDialog").css("color", "white");
                            $("#saveDialog").html("<%= trad.getProperty("grid.label.delete.fail.console")%>");
                            $("#saveDialog").show();
                            setTimeout(function() {
                                $("#saveDialog").hide();
                                $("#saveMessage").html("-");
                            }, 3000);
                        }
                    });
                }
            }

            function saveConsole(duplicate) {
                $.ajax({
                    url: "editor",
                    type: 'post',
                    data: {
                        action: duplicate ? "duplicate-console" : "save-console",
                        lang: quartisManager.language,
                        code: $("#consoleCode").val(),
                        srcGroup: srcGroup,
                        srcName: srcName,
                        group: $("#consoleGroup").val(),
                        name: $("#consoleName").val(),
                        designation: $("#consoleDesignation").val(),
                        resolution: $("#consoleResolution").val(),
                        oldResolution: $("#consoleOldResolution").val()
                    },
                    async: true,
                    crossDomain: true,
                    success: function (data, status) {
                        hideDialogs();
                        srcGroup = "";
                        srcName = "";
                        loadConsolesWithTrad();

                        $("#saveDialog").css("background-color", "green");
                        $("#saveDialog").css("color", "white");
                        $("#saveDialog").html(duplicate ? "<%= trad.getProperty("grid.label.duplicate.console")%>" : "<%= trad.getProperty("grid.label.save.console")%>");
                        $("#saveDialog").show();
                        setTimeout(function() {
                            $("#saveDialog").hide();
                            $("#saveMessage").html("-");
                        }, 3000);
                    },
                    error: function (data, status, error) {
                            $("#saveDialog").css("background-color", "red");
                            $("#saveDialog").css("color", "white");
                            if (data.responseText !== undefined && data.responseText === "error.status.code.length.max.20") {
                                $("#saveDialog").html("<%= trad.getProperty("error.status.code.length.max.20")%>");
                            } else if (data.responseText !== undefined && data.responseText === "error.status.code.length.min.1") {
                                $("#saveDialog").html("<%= trad.getProperty("error.status.code.length.min.1")%>");
                            } else if (data.responseText !== undefined && data.responseText === "error.status.name.length.min.1") {
                                $("#saveDialog").html("<%= trad.getProperty("error.status.name.length.min.1")%>");
                            }
                            else {
                                $("#saveDialog").html(duplicate ? "<%= trad.getProperty("grid.label.duplicate.fail.console")%>" : "<%= trad.getProperty("grid.label.save.fail.console")%>");
                            }
                            $("#saveDialog").show();
                            setTimeout(function() {
                                $("#saveDialog").hide();
                                $("#saveMessage").html("-");
                            }, 3000);
                    }
                });
            }

            function loadGrid() {                               
                if(quartisManager.grid !== null) {
                    var console = quartisManager.grid.console;
                    $.ajax({
                        url: "editor",
                        type: 'post',
                        data: {action: "load-page", lang: quartisManager.language, group: console.group, name: console.name},
                        dataType: 'json',
                        async: true,
                        crossDomain: true,
                        success: function (data, status) {
                            if(data !== null) {
                                for(var i=0; i<data['widgets'].length; i++) {
                                    var widget = data['widgets'][i];
                                    var id = widget['id'];
                                    var group = widget['group'];
                                    var name = widget['name'];
                                    var x = widget['x'];
                                    var y = widget['y'];
                                    var width = widget['width'];
                                    var height = widget['height'];
                                    var onClick = widget['onClick'];
                                    var params = widget['parameters'];
                                    var refresh = widget['refresh'];
                                    
                                    x = Number((x * ratio).toFixed(2));
                                    y = Number((y * ratio).toFixed(2));
                                    width = Number((width * ratio).toFixed(2));
                                    height = Number((height * ratio).toFixed(2));
                                    
                                    x = Number(x.toFixed(2));
                                    y = Number(y.toFixed(2));
                                    width = Number(width.toFixed(2));
                                    height = Number(height.toFixed(2));
                                   
                                    loadWidget(id, group, name, x, y, width, height, onClick, refresh, params)
                                }
                            }
                        },
                        error: function (data, status, error) {
                        }
                    });
                }
            }

            function saveGrid() {
                var dataGrid = JSON.parse(quartisManager.grid.serialize());
                
                dataGrid.width = dataGrid.width / ratio;
                dataGrid.height = dataGrid.height / ratio;
                for (var i = 0; i < dataGrid.widgets.length; i++) {
                    var widget = dataGrid.widgets[i];
                    widget.x = widget.x / ratio;
                    widget.y = widget.y / ratio;
                    widget.width = widget.width / ratio;
                    widget.height = widget.height / ratio;
                }
                
                if(quartisManager.grid !== null) {
                    $.ajax({
                        url: "editor",
                        type: 'post',
                        data: {
                            action: "save-page",
                            lang: quartisManager.language,
                            content: JSON.stringify(dataGrid)
                        },
                        async: true,
                        crossDomain: true,
                        success: function (data, status) {
                            $("#saveDialog").css("background-color", "green");
                            $("#saveDialog").css("color", "white");
                            $("#saveDialog").html("<%= trad.getProperty("grid.label.save.widgets")%>");
                            $("#saveDialog").show();
                            setTimeout(function() {
                                $("#saveDialog").hide();
                                $("#saveDialog").html("-");
                            }, 3000);
                        },
                        error: function (data, status, error) {
                            $("#saveDialog").css("background-color", "red");
                            $("#saveDialog").css("color", "white");
                            $("#saveDialog").html("<%= trad.getProperty("grid.label.save.fail.widgets")%>");
                            $("#saveDialog").show();
                            setTimeout(function() {
                                $("#saveDialog").hide();
                                $("#saveDialog").html("-");
                            }, 3000);
                        }
                    });
                }
            }

            function findGridMin(x) {
                var min = 0;
                for(var i=0;i<1000; i++) {
                    if(min + quartisManager.gridStep > Math.abs(x)) {
                        break;
                    } else {
                        min += quartisManager.gridStep;
                    }
                }
                min = x < 0 ? -1 * min : min;
                return min;
            }
            function findGridMax(x) {
                var max = 0;
                for(var i=0;i<1000; i++) {
                    max += quartisManager.gridStep;
                    if(max >= Math.abs(x)) {
                        break;
                    }
                }
                max = x < 0 ? -1 * max : max;
                return max;
            }
            function findGridSnap(x) {
                var min = findGridMin(x);
                var max = findGridMax(x);
                if(Math.abs(x - min) > Math.abs(x - max)) {
                    return max;
                } else {
                    return min;
                }
            }

            function getParameterByName(name, url) {
                if (!url) {
                  url = window.location.href;
                }
                name = name.replace(/[\[\]]/g, "\\$&");
                var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                    results = regex.exec(url);
                if (!results) return null;
                if (!results[2]) return '';
                return decodeURIComponent(results[2].replace(/\+/g, " "));
            }

            function updateNameNewConsole() {
                var consoleCode = $("#consoleCode");
                var consoleName = $("#consoleName");

                if (consoleCode !== undefined && consoleName !== undefined) {
                    var codeValue = consoleCode.val();
                    var nameValue = consoleName.val();

                    if (codeValue.length > 0 && nameValue.length === 0) {
                        consoleName.val(codeValue);
                    }
                }
            }
            
            function generateUID() {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                for (var i = 0; i < 6; i++)
                  text += possible.charAt(Math.floor(Math.random() * possible.length));

                return text;
              }

            
            function generateWidgetBoutonID(id) {
                return id + "_" + generateUID();
            }
            
            function getWidgetID(id) {
                var result = id;
                
                if (id.indexOf('WGT_BoutonCustom') > -1) {
                    result = "";
                    var splittedID = id.split('_');
                    for (var i = 0; i <= splittedID.length; i++) {
                        if (i !== 2 && splittedID[i] !== undefined) {
                            if (result.length === 0) {
                                result += splittedID[i];
                            } else {
                                result += "_" + splittedID[i];
                            }
                        }
                    }
                }
                
                return result;
            }
            
            function isIE() {
                ua = navigator.userAgent;
                /* MSIE used to detect old browsers and Trident used to newer ones*/
                var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

                return is_ie; 
            }


            $('html').bind('keydown', function(e)
            {
                if(e.keyCode == 9 && isIE())
                {
                    return false;
                }
            });
            
        </script>
    </body>
</html>
