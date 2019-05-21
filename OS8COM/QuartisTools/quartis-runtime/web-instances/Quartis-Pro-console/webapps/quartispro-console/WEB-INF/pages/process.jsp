<%--
    Document   : index
    Created on : 14 févr. 2016, 21:15:32
    Author     : Keloud
--%>

<%@page import="java.util.Properties"%>
<%@page import="com.osys.quartispro.console.Dispatcher"%>
<%@page import="com.osys.quartispro.common.Application"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<% 
    String version = "1.0.4";
%>
<!DOCTYPE html>
<html>

    <title>Console Web</title>
    <meta charset="UTF-8" />
    <meta http-equiv="x-ua-compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">


    <%
        String dispatcherUrl = Dispatcher.getInstance().getUrl();
        String hostname = (String) session.getAttribute("hostname");
        Integer port = (Integer) session.getAttribute("port");
        String token = (String) session.getAttribute("token");
        String user = (String) session.getAttribute("user");
        Boolean mobile = (Boolean) session.getAttribute("mobile");
        String websocket = (String) session.getAttribute("websocket");
        Integer animationSpeed = (Integer) session.getAttribute("animationSpeed");
        if (hostname == null || port == null || token == null || user == null || websocket == null) {
    %>

    <%
        }
        if (mobile == null) {
            mobile = Boolean.FALSE;
        }
    %>
    
    <% 
        String lang = (String) request.getAttribute("lang");
        Properties trad = (Properties) request.getAttribute("trad");
    %>
    
    <!-- Progressive web app support -->
    <link rel="manifest" href="manifest.json">


    <link rel="stylesheet" type="text/css" href="css/animation.css?version=<%= version %>" />
    <link rel="stylesheet" type="text/css" href="css/lib/normalize.min.css?version=<%= version %>" />
    <link rel="stylesheet" type="text/css" href="css/mainframe.css?version=<%= version %>" />
    <link rel="stylesheet" type="text/css" href="css/swappages.css?version=<%= version %>" />
    <link rel="stylesheet" type="text/css" href="css/quartis-manager.css?version=<%= version %>" />
    <link rel="stylesheet" type="text/css" href="css/offline/offline.css?version=<%= version %>" charset="utf-8" />
    <link rel="stylesheet" type="text/css" href="css/offline/offline-language-<%= lang %>.css?version=<%= version %>" charset="utf-8" />

    <%
        Application app = Application.getInstance();
        for (String path : app.getCssRelativePaths()) {
            out.println("<link rel=\"stylesheet\" type=\"text/css\" href=\"load?path=" + path + "?version=" + version + "\" />");
        }
    %>
    <script src="js/lib/jquery-3.3.1.min.js?version=<%= version %>" type="text/javascript"></script>
    <script src="js/lib/bluebird.min.js?version=<%= version %>" type="text/javascript"></script>
    <script src="js/lib/jquery.touchSwipe.min.js?version=<%= version %>" type="text/javascript"></script>
    <script src="js/lib/react.min.js?version=<%= version %>" type="text/javascript"></script>
    <script src="js/lib/react-dom.min.js?version=<%= version %>" type="text/javascript"></script>
    <script src="js/lib/babel.min.js?version=<%= version %>" type="text/javascript" charset="utf-8"></script>
    <script src="js/lib/flux.min.js?version=<%= version %>" type="text/javascript"></script>
    <script src="js/lib/microevent.min.js?version=<%= version %>" type="text/javascript"></script>
    <script src="js/lib/moment-with-locales.min.js?version=<%= version %>" type="text/javascript"></script>
    <script src="js/lib/offline.min.js?version=<%= version %>" charset="utf-8" type="text/javascript"></script>
    <script src="js/mainframe-1.0.0.js?version=<%= version %>" type="text/javascript"></script>
    <script src="js/swappages-1.0.0.js?version=<%= version %>" type="text/javascript"></script>
    <script src="js/quartis-device.js?version=<%= version %>" type="text/javascript"></script>
    <script src="js/quartis-i18n-1.0.0.js?version=<%= version %>" type="text/javascript"></script>
    <script src="js/quartis-app-1.0.0.js?version=<%= version %>" type="text/javascript"></script>
    <script src="js/quartis-query-1.0.0.js?version=<%= version %>" type="text/javascript"></script>
    <script src="js/quartis-manager-1.0.1.js?version=<%= version %>" type="text/javascript"></script>
    <script src="js/quartis-tools-1.0.1.js?version=<%= version %>" type="text/javascript"></script>
    <script type="text/javascript">
        //<!-- Annulation clic droit CJ 06/04-->
        document.oncontextmenu = new Function("return false"); 
    </script>

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

    <style>
        
        .androidMobileClickAnimation {
            opacity: 0.4 !important;
            border: 1px solid rgb(128, 255, 128) !important;
        }
        
        .moveTopToCenter {
            -webkit-animation: moveTopToCenter <%=animationSpeed%>ms ease both;
            animation: moveTopToCenter <%=animationSpeed%>ms ease both;
        }
        
        .moveToTop {
            -webkit-animation: moveToTop <%=animationSpeed%>ms ease both;
            animation: moveToTop <%=animationSpeed%>ms ease both;
        }
        
        @-webkit-keyframes moveTopToCenter {
            from { -webkit-transform: translateY(-100%);  }
            to { -webkit-transform: translateY(0%); }
        }
        @keyframes moveTopToCenter {
            from { -webkit-transform: translateY(-100%); transform: translateY(-100%); }
            to { -webkit-transform: translateY(0%); transform: translateY(0%); }
        }
        
        @-webkit-keyframes moveToTop {
            from { -webkit-transform: translateY(0%);  }
            to { -webkit-transform: translateY(-100%); }
        }
        @keyframes moveToTop {
            from { -webkit-transform: translateY(0%); transform: translateY(0%); }
            to { -webkit-transform: translateY(-100%); transform: translateY(-100%); }
        }
        
        .moveBotToCenter {
            -webkit-animation: moveBotToCenter <%=animationSpeed%>ms ease both;
            animation: moveBotToCenter <%=animationSpeed%>ms ease both;
        }
        
        .moveToBot {
            -webkit-animation: moveToBot <%=animationSpeed%>ms ease both;
            animation: moveToBot <%=animationSpeed%>ms ease both;
        }
        
        @-webkit-keyframes moveBotToCenter {
            from { -webkit-transform: translateY(100%);  }
            to { -webkit-transform: translateY(0%); }
        }
        @keyframes moveBotToCenter {
            from { -webkit-transform: translateY(100%); transform: translateY(100%); }
            to { -webkit-transform: translateY(0%); transform: translateY(0%); }
        }
        
        @-webkit-keyframes moveToBot {
            from { -webkit-transform: translateY(0%);  }
            to { -webkit-transform: translateY(100%); }
        }
        @keyframes moveToBot {
            from { -webkit-transform: translateY(0%); transform: translateY(0%); }
            to { -webkit-transform: translateY(100%); transform: translateY(100%); }
        }
        
        .moveEastToCenter {
            -webkit-animation: moveEastToCenter <%=animationSpeed%>ms ease both;
            animation: moveEastToCenter <%=animationSpeed%>ms ease both;
        }
        
        .MoveToEast {
            -webkit-animation: MoveToEast <%=animationSpeed%>ms ease both;
            animation: MoveToEast <%=animationSpeed%>ms ease both;
        }
        
        @-webkit-keyframes moveEastToCenter {
            from { -webkit-transform: translateX(100%);  }
            to { -webkit-transform: translateX(0%); }
        }
        @keyframes moveEastToCenter {
            from { -webkit-transform: translateX(100%); transform: translateX(100%); }
            to { -webkit-transform: translateX(0%); transform: translateX(0%); }
        }
        
        @-webkit-keyframes MoveToEast {
            from { -webkit-transform: translateX(0%);  }
            to { -webkit-transform: translateX(100%); }
        }
        @keyframes MoveToEast {
            from { -webkit-transform: translateX(0%); transform: translateX(0%); }
            to { -webkit-transform: translateX(100%); transform: translateX(100%); }
        }


    </style>

    <body>            
        <div id="noclick" style="width:100%;height:100%;z-index:10000;position:absolute;display:none;">
        </div>
        <div id="portrait">
            <div id="mainframe">
            </div>

            <div id="logs" class="logs" style="display: none;">
                <a href="#" onclick="clearLogs()">Clear</a> / <a href="#" onclick="hideLogs()">Close</a>
                <br/>
                <div id="messages"></div>
            </div>

            <div id="loading" class="center-div" style="width: 300px; height: 200px">
                <img src="images/loading_xs.gif">
            </div>

            <div id="error-modal" style="overflow: hidden; position: absolute; top: 0px; left: 0px; background-color: #2E2E2E; opacity: 0.8; z-index: 9991;">
            </div>
            <div id="runtime-error" class="center-div" style="width: 300px; height: 200px; border: 1px solid white; color: white; background-color: #292C33; opacity: 1.0; z-index: 9992;">
                <table cellpadding="0" cellspacing="10" style="width: 100%; text-align:center; margin-top: 30px;">
                    <tbody>
                        <tr class="fontN heightS">
                            <td><h3><%= trad.getProperty("runtime.problem")%></h3></td>
                        </tr>
                        <tr class="fontN heightS">
                            <td><span style="font-weight:bold; height: 40px"><%= trad.getProperty("network.advice")%></span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="network-error" class="center-div" style="width: 300px; height: 200px; border: 1px solid white; color: white; background-color: #292C33; opacity: 1.0; z-index: 9992;">
                <table cellpadding="0" cellspacing="10" style="width: 100%; text-align:center; margin-top: 30px;">
                    <tbody>
                        <tr class="fontN heightS">
                            <td><h3><%= trad.getProperty("network.problem")%></h3></td>
                        </tr>
                        <tr class="fontN heightS">
                            <td><span style="font-weight:bold; height: 40px"><%= trad.getProperty("network.advice")%></span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <script>
            // Previous page alert
            if (window.history && history.pushState) {
                addEventListener('load', function() {
                    history.pushState(null, null, null); 
                    addEventListener('popstate', function() {
                        var stayOnPage = confirm("<%= trad.getProperty("event.back")%>");
                        if (!stayOnPage) {
                            history.pushState(null, null, null);
                        } else {
                            history.back();
                        }
                    });    
                });
            }
            
            var mainframe;
            var swappages;   

            $("#error-modal").css("width", $(window).width());
            $("#error-modal").css("height", $(window).height());

            $("#error-modal").hide();
            $("#runtime-error").hide();
            $("#network-error").hide();

            $("#mainframe").css("width", $(window).width());
            $("#mainframe").css("height", $(window).height());

            $("#mainframe").swipe("destroy");

            mainframe = ReactDOM.render(React.createElement(Mainframe, null), document.getElementById('mainframe'));
            swappages = ReactDOM.render(React.createElement(SwapPages, null), mainframe.north()[0]);   
            
            var animationEnabled = false;
            var toIndex = false;
            var lastCheck = 0;
            var animations = [];
            var queue = [];
            var lastNoShowVisible = 0;
            var isAnimationRunning = false;
            var networkProblem = false;
            
            if (<%=animationSpeed%> > 0) {
                animationEnabled = true;
            }

            function center(html) {
                mainframe.center(html);
            }
            function north(html) {
                mainframe.north(html);
            }
            function south(html) {
                mainframe.south(html);
            }
            function east(html) {
                mainframe.east(html);
            }
            function west(html) {
                mainframe.west(html);
            }
            function page1(html) {
                swappages.page1(html);
            }
            function page2(html) {
                swappages.page2(html);
            }
            function page(html, id) {
                swappages.page(html, id);
            }
            
            $Log.level = "DEBUG";

            $Log.onInfo = function (msg) {
                console.log(msg); 
                var messages = document.getElementById('messages');
                messages.innerHTML += ("<br/><font color='black'>INFO: " + msg + "</font>");
            };
            $Log.onWarning = function (msg) {
                console.log(msg);
                var messages = document.getElementById('messages');
                messages.innerHTML += ("<br/><font color='orange'>WARN: " + msg + "</font>");
            };
            $Log.onError = function (msg) {
                console.log(msg);
                var messages = document.getElementById('messages');
                messages.innerHTML += ("<br/><font color='red'><b>ERROR: " + msg + "</b></font>");
            };
            $Log.onDebug = function (msg) {
                console.log(msg);
                var messages = document.getElementById('messages');
                messages.innerHTML += ("<br/><font color='black'><i>DEBUG: " + msg + "</i></font>");
            };

            function toggleLogs() {
                if ($("#logs").css('display') === 'none') {
                    $("#logs").show();
                } else {
                    $("#logs").hide();
                }
            }
            function clearLogs() {
                var messages = document.getElementById('messages');
                messages.innerHTML = "";
            }
            function showLogs() {
                $("#logs").show();
            }
            function hideLogs() {
                $("#logs").hide();
            }

            var quartisManager = new QuartisManager();
            var quartisTools = new QuartisTools("<%=websocket%>", "<%=token%>", "<%= dispatcherUrl %>");

            quartisManager.dispatcherUrl = "<%=dispatcherUrl%>";

            quartisManager.onWidgetRegistered = function (widget) {
                quartisTools.initMemories(widget.memories)
            };
            quartisManager.onConsoleRegistered = function (console) {
                quartisTools.initMemories(console.memories)
            };
            quartisManager.onConsoleUnregistered = function (console) {
                quartisTools.closeConsole(console.group, console.name);
            };

            quartisTools.onConnected = function () {
                $Log.debug("Connected to the server.");
            };
            quartisTools.onDisconnected = function () {
                $Log.debug("Disconnected to the server.");
            };
            quartisTools.onConnectingToQuartisTools = function () {
                $Log.debug("Connecting to Quartis Tools...");
            };
            quartisTools.onConnectedToQuartisTools = function () {
                $Log.debug("Connected to Quartis Tools.");
            };
            quartisTools.onLogingToQuartisTools = function (user) {
                $Log.debug("Loging with " + user.name + " to Quartis Tools...");
            };
            quartisTools.onLogonToQuartisTools = function (user) {

                $("#loading").hide();

                if (quartisManager.user !== null && quartisManager.user.name === user.name) {

                    $Log.warning("User " + user.name + " already logon !");

                    return false;

                } else {

                    $Log.debug(user.name + " logon to Quartis Tools !");

                    quartisManager.login(user);

                    return true;

                }

            };
            quartisTools.onLogoutToQuartisTools = function (user, auto) {

                $("#loading").hide();

                quartisManager.logout();

                if (!auto) {
                    $Log.debug(user.name + " logout to Quartis Tools.");
                    quartisTools.disconnect();
                } else {
                    toIndex = true;
                }
            };
            quartisTools.onDisconnectedToQuartisTools = function (auto) {

                quartisManager.logout();

                if (!auto) {
                    $Log.debug("Disconnected to Quartis Tools.");
                    quartisTools.disconnect();
                } else {
                    toIndex = true;
                }
            };
            quartisTools.onDisconnected = function () {
                $Log.debug("Disconnected to the server.");

                toIndex = true;
            };
            quartisTools.onOpenConsole = function (console) {
                $Log.debug("Opening QuartisTools Console: " + console.group + "/" + console.name + "...");

                quartisManager.loadConsole(null, console.group, console.name);
            };
            quartisTools.onCloseConsole = function (console) {
                $Log.debug("Closing QuartisTools Console: " + console.group + "/" + console.name + "...");

                quartisManager.closeConsole(console.group, console.name);
            };
            quartisTools.onUpdateMemory = function (memory, value) {
                quartisManager.updateMemory(memory, value);
            };


            function getUser() {
                return quartisManager.user;
            }

            function openWindow(group, name, params) {
                if (params !== undefined) {
                    quartisManager.openConsole(group, name, params);
                } else {
                    quartisManager.openConsole(group, name, null);
                }
            }

            function openRelativeWindow(path, group, name, params) {
                if (params !== undefined) {
                    quartisManager.openRelativeConsole(path, group, name, params);
                } else {
                    quartisManager.openRelativeConsole(path, group, name, null);
                }
            }

            function openWindowExt(path, group, name, ext, params) {
                if (params !== undefined) {
                    quartisManager.openExtendedConsole(path, group, name, ext, params);
                } else {
                    quartisManager.openExtendedConsole(path, group, name, ext, null);
                }
            }

            function closeWindow(group, name, callback) {
                quartisManager.closeConsole(group, name, callback);
            }

            function closeWindowExt(group, name, ext, callback) {
                quartisManager.closeExtendedConsole(group, name, ext, callback);
            }

            function executeSCRIPT(script) {
                quartisManager.executeScript(script);
            }

            function readMemory(name) {
                return quartisTools.readMemory(name);
            }

            function writeMemory(name, value) {
                quartisTools.writeMemory(name, value);
            }

            function executeLPX(lpx, params) {
                var str = "";
                if ($.isArray(params)) {
                    for (var i = 0; i < params.length; i++) {
                        if (i !== 0) {
                            str += "|";
                        }
                        str += params[i];
                    }
                }
                quartisTools.executeLpx(lpx, [str]);
            }
            
            function alertQuartisToolsMessage(message) {
                $.get("<%= dispatcherUrl %>/quartispro-tools/logger?message=" + message);
            }
            
            // Manage bar code event from QuartisBrowser for datalogic PDA
            function notifyBarcode(barcode) {
                if (document.activeElement !== undefined && document.activeElement.value !== undefined) {
                    document.activeElement.value = barcode;
                } else {
                    alert('Error cannot retrieve input element');
                }
            }

            function scheduleCheckConnection() {
                var d = new Date();
                if (d.getTime() - lastCheck > 10000) {
                    lastCheck = d.getTime();

                    if (!quartisTools.isConnected()) {
                        quartisTools.connect();
                    } else if (!quartisTools.isLogon()) {
                        quartisTools.connectToQuartisTools();
                    }
                }
            }

            quartisManager.scheduleRefreshData();

            //scheduleCheckConnection();
            
            var pingWS = undefined;
            var wsIsOpen = true;
            var isAlreadyClose = false;
            
            function startPingWS() {
                pingWS = new WebSocket('<%= websocket %>/ping');

                pingWS.onopen = function() {
                    wsIsOpen = true;
                    isAlreadyClose = false;
                }
                pingWS.onmessage = function(e) {
                }
                pingWS.onclose = function() {
                    wsIsOpen = false;
                    if(isAlreadyClose === false) {
                        reconnectWS();
                    }
                    isAlreadyClose = true;
                }
                pingWS.onerror = function(e) {
                    wsIsOpen = false;
                }
            }
            
            function reconnectWS() {
                if (wsIsOpen !== true) {
                    startPingWS();
                    setTimeout(function () {
                        reconnectWS();
                    }, 1000);
                } else {
                    return;
                }
            }
            
            
            function pingWSSend() {
                // Check duration between now and the lasting ping
                if (wsIsOpen) {
                     if (toIndex) {
                         // Reload app after delay of 5 second : be sure that quartis pro auth is up / because we only know that quartis pro tools is up
                        setTimeout(function() { 
                            if (networkProblem === false) {
                                $("#error-modal").hide();
                                $("#runtime-error").hide();
                            }
                    
                            window.location.href = '<%= dispatcherUrl %>/quartispro-auth/index.jsp?lang=' + '<%= lang %>'; 
                        }, 5000);
                    }

                    scheduleCheckConnection();

                    setTimeout(function () {
                        pingWSSend();
                    }, 1000);
                } else {
                    $("#error-modal").show();
                    $("#runtime-error").show();
                    $("#network-error").hide();

                    setTimeout(function () {
                        pingWSSend();
                    }, 1000);
                }
            }
            
            startPingWS();
            pingWSSend();
            
            // Si une fonction Javascript a un problème, il est possible qu'on arrive jamais dans le noShow qui ce lance en callback
            // Permet d'enlever le noShow 
            function checkNoShow(){
                var isVisible = $("#noclick").is(":visible");
                if (isVisible) {
                    lastNoShowVisible++;
                } else {
                    lastNoShowVisible = 0;
                }
                
                if(lastNoShowVisible > 15) {
                    $("#noclick").hide();
                    isAnimationRunning = false;
                }
                
                setTimeout(checkNoShow, 1300); 
            }

            checkNoShow();
            //ping();
            
            // ## OUVERTURE / FERMETURE
            function showPageN(id, cb, animation) {
                hideOtherNorthPage(id);
                $("html").trigger("showPage");
                return animWithParams(['.mainframe-north', '.swap-page' + id], [], 'moveTopToCenter', '.swap-page' + id, cb, true, false, animation);
            }
            
            function showPageDirectly(id) {
                $('.swap-page' + id).show();
            }
            
            function showCenterN(cb) {
                return new Promise(function(resolve, reject) {
                    hideOpacity();
                    $("html").trigger("showCenter");
                    $(".mainframe-center").show();
                    if (cb) {
                      cb(); 
                    }
                    resolve('finished');
                })
            }
            
            function showSouthN(cb) {
                $("html").trigger("showSouth");
                return animWithParams(['.mainframe-south'], [], 'moveBotToCenter', '.mainframe-south', cb, true, true);
            }
            
            function showEastN(cb) {
                $("html").trigger("showEast");
                return animWithParams(['.mainframe-east'], [], 'moveEastToCenter', '.mainframe-east', cb, true, false);   
            }
            
            function hidePageN(id, cb) {
                return animWithParams([], ['.mainframe-north', '.swap-page' + id], 'moveToTop', '.swap-page' + id, cb, false, false);
            }
            
            function hideSouthN(cb) {
                return animWithParams([], ['.mainframe-south'], 'moveToBot', '.mainframe-south', cb, false, true);
            }
            
            function hideEastN(cb) {
                return animWithParams([], ['.mainframe-east'], 'MoveToEast', '.mainframe-east', cb, false, false);
            }
            
            function showOpacity(isSouth) {
                $(".mainframe-center").css({ opacity: 0.2 });
                
                if(isSouth) {
                    $(".mainframe-north").hide();
                }
            }
            
            function hideOpacity(isSouth) {
                $(".mainframe-center").css({ opacity: 1 });

                if (isSouth && $Nav.lastClosedConsole === "footer-page") {
                    $(".mainframe-north").hide();
                } else if(isSouth) {
                    $(".mainframe-north").show();
                }  
            }
            
            function animWithParams(show, hide, className, classToAnim, callback, isOpen, isSouth, animation) {
                return new Promise(function(resolve, reject) {
                    // Show page
                    for (var i = 0; i < show.length; i++) {
                        $(show[i]).show();
                    }
                    
                    // Show opacity
                    if (isOpen) {
                        if (isSouth) {
                            showOpacity(true);
                        } else  {
                            showOpacity();
                        }
                    } else {
                        if (isSouth) {
                             hideOpacity(true);
                        } else  {
                             hideOpacity();
                        }
                    }
                    
                    // If animation are activated and it's it's not page north twice
                    if (!animation && animationEnabled) {
                        // Bind to animation end
                        $(classToAnim).bind("animationend", function() {
                            // Unbind animation
                            $(classToAnim).removeClass(className);
                            $(classToAnim).unbind("animationend");

                            // Execute callback
                            if (callback) {
                              callback(); 
                            }

                            // Hide window
                            for (var i = 0; i < hide.length; i++) {
                                $(hide[i]).hide();
                            }
                            
                            // Say to queue that it is finished
                            resolve('finished');
                        });

                        // Add animation class
                        $(classToAnim).addClass(className);
                    } else {
                        // Execute callback
                        if (callback) {
                          callback(); 
                        }

                        // Hide window
                        for (var i = 0; i < hide.length; i++) {
                            $(hide[i]).hide();
                        }
                        
                        // Say to queue that it is finished
                        resolve('finished');
                    }
                   
                });
            }
            
            function hideOtherNorthPage(id) {
                if (id !== 1) {
                    $(".swap-page1").hide();
                }
                if (id !== 2) {
                    $(".swap-page2").hide();
                }
                if (id !== 3) {
                    $(".swap-page3").hide();
                }
                if (id !== 4) {
                    $(".swap-page4").hide();
                }
                if (id !== 5) {
                    $(".swap-page5").hide();
                }
            }
            
            function launchAnimation(anim) {
                queue.push(anim);
                dequeue();
            }
            
            function dequeue() {
                if (!isAnimationRunning && queue.length > 0) {
                    $("#noclick").show();
                    isAnimationRunning = true;
                    var anim = queue.shift()
                    anim().then(function () {
                        isAnimationRunning = false;
                        $("#noclick").hide();
                        if (queue.length === 0) {
                            return 0;
                        } else {
                            dequeue();
                        }
                    })
                }
            }
            
            // Gestion des "pressure" pour les modats android
            // Le browser ne gère pas bien l'attribut css :active
            // on lance donc l'animation en JS afin que l'utilisateur
            // est un retour visuel
            if (isAndroidMobile()) {
                $(document).on("click",".btn-basic, .widget.active, .tcl-pro-fonctions .svg-container, .widget.clickable",function(e){
                    $(e.target).addClass("androidMobileClickAnimation");
                    setTimeout(function() {
                        $(e.target).removeClass("androidMobileClickAnimation");
                    }, 250);
                });
            }
            
            // Check network availability to restart app when it's okay
            function testOffline() {
                setTimeout(function () {
                    Offline.check();
                    testOffline();
                }, 3000);
            }
            
            testOffline();
            // Show error message
            Offline.on('confirmed-down', function () {
                if (!$("#error-modal").is(":visible")) {
                    networkProblem = true;
                    $("#error-modal").show();
                    $("#network-error").show();
                }
            });
            
            // remvove error message and restart the app
            Offline.on('confirmed-up', function () {
                var networkOldStatus = networkProblem;
                
                networkProblem = false;
                $("#error-modal").hide();
                $("#network-error").hide();
                
                if (networkOldStatus === true) {
                    window.location.href = '<%= dispatcherUrl %>/quartispro-auth/index.jsp?lang=' + '<%= lang %>';
                }
            });
            
        </script>

    </body>
</html>