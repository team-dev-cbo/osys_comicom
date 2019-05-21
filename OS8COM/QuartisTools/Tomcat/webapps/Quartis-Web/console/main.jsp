<%@ page import="java.util.ResourceBundle"%>
<%@ page import="quartisweb.resources.PropertiesDelegate"%>
<%@ page import="quartisweb.resources.PropertiesManager"%>
<%
        ResourceBundle rb = ResourceBundle.getBundle("quartisweb/resources/private_language");

        PropertiesManager manager = PropertiesDelegate.getPropertiesManager();

        String locale = request.getParameter("locale");
        String quartisToolsServer = request.getParameter("quartistools.server");
        String quartisToolsMemoryPort = request.getParameter("quartistools.memory.port");
        String quartisToolsServerPort = request.getParameter("quartistools.console.port");
        String quartisToolsConsoleWebPort = request.getParameter("quartistools.consoleweb.port");
        String quartisToolsAutoReconnect = request.getParameter("quartistools.auto_reconnect");

        String quartisConsoleServer = request.getParameter("quartisconsole.online.httpServer");
        String quartisConsolePort = request.getParameter("quartisconsole.online.httpPort");
        String quartisConsoleContext = request.getParameter("quartisconsole.online.httpContext");


        String defaultQuartisToolsServer = manager.getProperty("quartistools_server_name", request.getServerName());
        String defaultQuartisToolsMemoryPort = manager.getProperty("quartistools_port_mem", "5050");
        String defaultQuartisToolsServerPort = manager.getProperty("quartistools_port_srv", "5060");
        String defaultQuartisToolsConsoleWebPort = manager.getProperty("quartistools_port_consoleWeb", "5070");
        String defaultQuartisToolsAutoReconnect = manager.getProperty("quartistools_console_autoreconnect", "true");

        String defaultQuartisConsoleServer = manager.getProperty("quartisconsole.online.httpServer", request.getServerName());
        String defaultQuartisConsolePort = manager.getProperty("quartisconsole.online.httpPort", String.valueOf(request.getLocalPort()));
        String defaultQuartisConsoleContext = manager.getProperty("quartisconsole.online.httpContext", request.getContextPath());
%>
<html>
    <head>
        <title>MainPage</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <script type="text/javascript" src="quartistools.js"></script>
    </head>
    <body scroll="no" style="margin:0 0 0 0;padding:0 0 0 0;border:0px none #FFFFFF; background-image:url('images/degrade.png'); background-repeat: repeat-x;">

        <div id="connected" style="visibility: hidden">
            <img src="images/new_logo_moyen.gif"/>
            <br/>
            <font style="color: blue; font-weight:bold; font-size:14px; cursor: pointer" onclick="disconnect()">
                <u><i><%= rb.getString("main.disconnect")%></i></u>
            </font>
            <br/>
            <br/>
            <font style="color: blue; font-size:14px; cursor: pointer" onclick="disconnect()">
                <%= rb.getString("main.list_messages")%>
            </font>
            <div style="overflow: auto; width: 100%; height: 100%">
                <table id="message" cellpadding="0" cellspacing="0">
                </table>
            </div>
        </div>

        <div id="login_frame" style="visibility: hidden; overflow: hidden; position: absolute;  border: 1px solid black">
            <table style="width:472px; height:236px; background-image:url('images/odeosys_filigrane2.gif'); background-repeat:no-repeat; background-position:center right;" cellpadding="0" cellspacing="0">
                <tr>
                    <td>
                        <img src="images/new_logo_moyen.gif"/>
                    </td>
                    <td align="right" style="vertical-align: top">
                        <font style="color: blue; font-size:12px; cursor: pointer" onclick="showParameters()">
                            <u><i><%= rb.getString("parameters.link")%></i></u>
                        </font>
                    </td>
                </tr>
                <tr>
                    <td style="width:50%">
                        <font id="login_message" style="color:#FF0000;font-weight:bold;"></font>
                    </td>
                    <td align="center">
                        <table cellpadding="0" cellspacing="0">
                            <tr>
                                <td>
                                    <font style="font-weight:bold; font-size:14px;">
                                        <%= rb.getString("login.user")%>
                                    </font>
                                </td>
                                <td>
                                    <input type="text" id="login" value="" style="border:1px solid #3872A8;width:140px;" onfocus="this.select()" onKeyPress="keyEvent('login', event)"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <font style="font-weight:bold; font-size:14px;">
                                        <%= rb.getString("login.password")%>
                                    </font>
                                </td>
                                <td>
                                    <input type="password" id="password" value="" style="border:1px solid #3872A8;width:140px;" onfocus="this.select()" onKeyPress="keyEvent('login', event)"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <font style="font-size:12px;">
                                        <input type="checkbox" id="autologin" onfocus="this.select()">
                                            <%= rb.getString("login.autologin")%>
                                        </input>
                                    </font>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" align="center">
                                    <input type="button" value="<%= rb.getString("login.connect")%>" style="font-weight:bold; font-size:12px; border:1px solid #3872A8; background-color:#FFFFFF; width:100px; height:22px;" onfocus="this.select()" onclick="submitLogin()" onKeyPress="keyEvent('login', event)"/>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>

        <div id="parameters_frame" style="visibility: hidden; overflow: hidden; position: absolute;  border: 1px solid black">
            <table style="width:540px; height:246px; background-image:url('images/odeosys_filigrane2.gif'); background-repeat:no-repeat; background-position:center right;" cellpadding="0" cellspacing="0">
                <tr>
                    <td style="vertical-align: top">
                        <img src="images/new_logo_moyen.gif"/>
                    </td>
                    <td>
                        <table cellpadding="0" cellspacing="0">
                            <tr>
                                <td>
                                    <font style="font-weight:bold; font-size:14px;">
                                        <u><i><%= rb.getString("parameters.quartis_tools")%></i></u>
                                    </font>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <font style="font-size:14px;">
                                        <%= rb.getString("parameters.quartis_tools.server")%>
                                    </font>
                                </td>
                                <td>
                                    <input type="text" id="quartis_tools_server" value="<%= quartisToolsServer%>" default="<%= defaultQuartisToolsServer%>" style="border:1px solid #3872A8;width:140px;" onfocus="this.select()" onKeyPress="keyEvent('parameters', event)"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <font style="font-size:14px;">
                                        <%= rb.getString("parameters.quartis_tools.server_port")%>
                                    </font>
                                </td>
                                <td>
                                    <input type="text" id="quartis_tools_server_port" value="<%= quartisToolsServerPort%>" default="<%= defaultQuartisToolsServerPort%>" style="border:1px solid #3872A8;width:140px;" onfocus="this.select()" onKeyPress="keyEvent('parameters', event)"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <font style="font-size:14px;">
                                        <%= rb.getString("parameters.quartis_tools.memory_port")%>
                                    </font>
                                </td>
                                <td>
                                    <input type="text" id="quartis_tools_memory_port" value="<%= quartisToolsMemoryPort%>" default="<%= defaultQuartisToolsMemoryPort%>" style="border:1px solid #3872A8;width:140px;" onfocus="this.select()" onKeyPress="keyEvent('parameters', event)"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <font style="font-size:14px;">
                                        <%= rb.getString("parameters.quartis_tools.console_web_port")%>
                                    </font>
                                </td>
                                <td>
                                    <input type="text" id="quartis_tools_console_web_port" value="<%= quartisToolsConsoleWebPort%>" default="<%= defaultQuartisToolsConsoleWebPort%>" style="border:1px solid #3872A8;width:140px;" onfocus="this.select()" onKeyPress="keyEvent('parameters', event)"/>
                                </td>
                            </tr>
                            <!--tr>
                                <td colspan="2">
                                    <font style="font-size:12px;">
                                        <input type="checkbox" id="quartis_tools_autoreconnect"  default="<%= defaultQuartisToolsAutoReconnect%>" onfocus="this.select()">
                                            <%= rb.getString("parameters.quartis_tools.auto_reconnect")%>
                                        </input>
                                    </font>
                                </td>
                            </tr-->
                            <tr>
                                <td>
                                    <font style="font-weight:bold; font-size:14px;">
                                        <u><i><%= rb.getString("parameters.quartis_console")%></i></u>
                                    </font>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <font style="font-size:14px;">
                                        <%= rb.getString("parameters.quartis_console.server")%>
                                    </font>
                                </td>
                                <td>
                                    <input type="text" id="quartis_console_server" value="<%= quartisConsoleServer%>" default="<%= defaultQuartisConsoleServer%>" style="border:1px solid #3872A8;width:140px;" onfocus="this.select()" onKeyPress="keyEvent('parameters', event)"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <font style="font-size:14px;">
                                        <%= rb.getString("parameters.quartis_console.port")%>
                                    </font>
                                </td>
                                <td>
                                    <input type="text" id="quartis_console_port" value="<%= quartisConsolePort%>" default="<%= defaultQuartisConsolePort%>" style="border:1px solid #3872A8;width:140px;" onfocus="this.select()" onKeyPress="keyEvent('parameters', event)"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <font style="font-size:14px;">
                                        <%= rb.getString("parameters.quartis_console.context")%>
                                    </font>
                                </td>
                                <td>
                                    <input type="text" id="quartis_console_context" value="<%= quartisConsoleContext%>" default="<%= defaultQuartisConsoleContext%>" style="border:1px solid #3872A8;width:140px;" onfocus="this.select()" onKeyPress="keyEvent('parameters', event)"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" align="left">
                                    <font style="color: blue; font-size:12px; cursor: pointer" onclick="defaultParameters()">
                                        <u>
                                            <i>
                                                <%= rb.getString("parameters.default")%>
                                            </i>
                                        </u>
                                    </font>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td align="center">
                                    <input type="button" value="<%= rb.getString("parameters.save")%>" style="font-weight:bold; font-size:12px; border:1px solid #3872A8; background-color:#FFFFFF; width:100px; height:22px;" onfocus="this.select()" onclick="submitParameters()" onKeyPress="keyEvent('parameters', event)"/>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </body>
    <script language="javascript">
        <% if (Boolean.parseBoolean(quartisToolsAutoReconnect)) {%>
            //document.getElementById('quartis_tools_autoreconnect').checked = true;
       <% }%>

           document.body.onresize = function() {
               resizeLogin();
               resizeParameters();
           };

           function resizeLogin() {
               var dims = getBodyDimensions();
               var login_frame = document.getElementById('login_frame');
               login_frame.style.left = (dims[0] - 472) / 2;
               login_frame.style.top = (dims[1] - 236) / 2;
           }
           resizeLogin();

           function resizeParameters() {
               var dims = getBodyDimensions();
               var parameters_frame = document.getElementById('parameters_frame');
               parameters_frame.style.left = (dims[0] - 540) / 2;
               parameters_frame.style.top = (dims[1] - 246) / 2;
           }
           resizeParameters();

           function showParameters() {
               document.getElementById('parameters_frame').style.visibility = 'visible';
               document.getElementById('login_frame').style.visibility = 'hidden';
           }

           function hideParameters() {
               document.getElementById('parameters_frame').style.visibility = 'hidden';
               document.getElementById('login_frame').style.visibility = 'visible';
           }

           function submitLogin() {
               var user = document.getElementById('login');
               var password = document.getElementById('password');
               var autologin = document.getElementById('autologin');

               var cmd = 'command://connect&amp;' + encodeURIComponent(user.value) + '&amp;' + encodeURIComponent(password.value);
               if(autologin.checked) {
                   cmd += '&amp;O';
               } else {
                   cmd += '&amp;N';
               }
               window.location = cmd;
           }

           function submitParameters() {
               var quartis_tools_server = document.getElementById('quartis_tools_server');
               var quartis_tools_server_port = document.getElementById('quartis_tools_server_port');
               var quartis_tools_memory_port = document.getElementById('quartis_tools_memory_port');
               var quartis_tools_console_web_port = document.getElementById('quartis_tools_console_web_port');
               //var quartis_tools_autoreconnect = document.getElementById('quartis_tools_autoreconnect');

               var quartis_console_server = document.getElementById('quartis_console_server');
               var quartis_console_port = document.getElementById('quartis_console_port');
               var quartis_console_context = document.getElementById('quartis_console_context');

               var cmd = 'command://parameters&amp;'
                   + encodeURIComponent(quartis_tools_server.value)
                   + '&amp;' + encodeURIComponent(quartis_tools_server_port.value)
                   + '&amp;' + encodeURIComponent(quartis_tools_memory_port.value)
                   + '&amp;' + encodeURIComponent(quartis_tools_console_web_port.value)
                   + '&amp;' + encodeURIComponent(quartis_console_server.value)
                   + '&amp;' + encodeURIComponent(quartis_console_port.value)
                   + '&amp;' + encodeURIComponent(quartis_console_context.value);
               //if(quartis_tools_autoreconnect.checked) {
               //    cmd += '&amp;O';
               //} else {
               //    cmd += '&amp;N';
               //}
               window.location = cmd;

               hideParameters();
           }

           function defaultParameters() {
               var quartis_tools_server = document.getElementById('quartis_tools_server');
               quartis_tools_server.value = quartis_tools_server.getAttribute('default');
               var quartis_tools_server_port = document.getElementById('quartis_tools_server_port');
               quartis_tools_server_port.value = quartis_tools_server_port.getAttribute('default');
               var quartis_tools_memory_port = document.getElementById('quartis_tools_memory_port');
               quartis_tools_memory_port.value = quartis_tools_memory_port.getAttribute('default');
               var quartis_tools_console_web_port = document.getElementById('quartis_tools_console_web_port');
               quartis_tools_console_web_port.value = quartis_tools_console_web_port.getAttribute('default');
               //var quartis_tools_autoreconnect = document.getElementById('quartis_tools_autoreconnect');
               //quartis_tools_autoreconnect.checked = quartis_tools_autoreconnect.getAttribute('default');

               var quartis_console_server = document.getElementById('quartis_console_server');
               quartis_console_server.value = quartis_console_server.getAttribute('default');
               var quartis_console_port = document.getElementById('quartis_console_port');
               quartis_console_port.value = quartis_console_port.getAttribute('default');
               var quartis_console_context = document.getElementById('quartis_console_context');
               quartis_console_context.value = quartis_console_context.getAttribute('default');
           }

           function getBodyDimensions() {
               var dimension = new Array();
               if (document.body) {
                   dimension[0] = (document.body.clientWidth);
                   dimension[1] = (document.body.clientHeight);
               } else {
                   dimension[0] = (window.innerWidth);
                   dimension[1] = (window.innerHeight);
               }
               return dimension;
           }

           updateMemory = function (memory, value) {
               message('Mise ? jour de la m?moire ' + memory + ' : ' + value, 'blue');
           }

           updateMemoryIndex = function (memory, value, index) {
               message('Mise ? jour de la m?moire ' + memory + '[' + index + '] : ' + value, 'blue');
           }

           function disconnect() {
               var command = 'command://' + encodeURIComponent('disconnect');
               window.location = command;
           }

           function keyEvent(key, event) {
               var keyPress;
               if(!event) {
                   event = window.event;
               }
               if(event.keyCode) {
                   keyPress = event.keyCode
               } else if(event.which) {
                   keyPress = event.which;
               }
               switch (key) {
                   case "login" :
                       if (keyPress == 13) {
                           submitLogin();
                       }
                       break;
                   case "parameters" :
                       if (keyPress == 13) {
                           submitParameters();
                       }
                       break;
               }
           }

           function connected() {
               document.getElementById('connected').style.visibility = 'visible';
               document.getElementById('login_frame').style.visibility = 'hidden';
           }

           function disconnected() {
               document.getElementById('connected').style.visibility = 'hidden';
               document.getElementById('login_frame').style.visibility = 'visible';
           }

           function login_message(message, color) {
               var m = document.getElementById('login_message');
               m.style.color = color;
               m.innerHTML = message;
           }

           function message(message, color) {
               var date = new Date();
               var hours = date.getHours();
               var mins = date.getMinutes();
               var secs = date.getSeconds();
               var millis = date.getMilliseconds();

               var mess = hours + ':' + mins + ':' + secs + '.' + millis + ' : ' + message;

               var font = document.createElement('font');
               font.style.color = color;
               font.innerHTML = mess;

               var table = document.getElementById('message');

               if(table.rows.length > 10) {
                   table.deleteRow(0);
               }

               var row = table.insertRow(table.rows.length);
               var cell = row.insertCell(0);
               cell.appendChild(font);
           }
           
           //window.location = 'command://loaded';
    </script>
</html>