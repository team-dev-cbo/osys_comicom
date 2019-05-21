<%@ page import="java.util.ResourceBundle"%>
<%@ page import="quartisweb.resources.PropertiesDelegate"%>
<%@ page import="quartisweb.resources.PropertiesManager"%>
<%
            ResourceBundle rb = ResourceBundle.getBundle("quartisweb/resources/private_language");

            PropertiesManager manager = PropertiesDelegate.getPropertiesManager();

            String quartisToolsServer = manager.getProperty("quartistools_server_name", request.getServerName());
            String quartisToolsServerPort = manager.getProperty("quartistools_port_srv", "5060");

            String run = request.getParameter("run");
            run = run == null || run.isEmpty() ? "console" : run;
%>
<html>
    <head>
        <title>MainPage</title>
    </head>
    <body scroll="no" style="margin:0 0 0 0;padding:0 0 0 0;border:0px none #FFFFFF; background-image:url('images/degrade.png'); background-repeat: repeat-x;">

        <form id="form" action="xxx.cas?action=jnlp&src=portail&run=<%=run%>&mode=connect" method="POST">
            <div id="login_frame" style="visibility: visible; overflow: hidden; position: absolute;  border: 1px solid black">
                <table style="width:572px; height:336px; background-image:url('images/odeosys_filigrane2.gif'); background-repeat:no-repeat; background-position:center right;" cellpadding="0" cellspacing="0">
                    <tr>
                        <td colspan="2">
                            <img src="images/new_logo_moyen.gif"/>
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
                                        <font style="font-size:14px;">
                                            <%= rb.getString("parameters.quartis_tools.server")%>
                                        </font>
                                    </td>
                                    <td>
                                        <input type="text" id="quartis_tools_server"  name="quartistools.server" value="<%= quartisToolsServer%>" style="border:1px solid #3872A8;width:140px;" onfocus="this.select()" onKeyPress="keyEvent('parameters', event)"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <font style="font-size:14px;">
                                            <%= rb.getString("parameters.quartis_tools.server_port")%>
                                        </font>
                                    </td>
                                    <td>
                                        <input type="text" id="quartis_tools_server_port"  name="quartistools.port" value="<%= quartisToolsServerPort%>" style="border:1px solid #3872A8;width:140px;" onfocus="this.select()" onKeyPress="keyEvent('parameters', event)"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <font style="font-weight:bold; font-size:14px;">
                                            <%= rb.getString("login.user")%>
                                        </font>
                                    </td>
                                    <td>
                                        <input type="text" id="login" name="quartistools.user.login" value="" style="border:1px solid #3872A8;width:140px;" onfocus="this.select()" onKeyPress="keyEvent('login', event)"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <font style="font-weight:bold; font-size:14px;">
                                            <%= rb.getString("login.password")%>
                                        </font>
                                    </td>
                                    <td>
                                        <input type="password" id="password" name="quartistools.user.password" value="" style="border:1px solid #3872A8;width:140px;" onfocus="this.select()" onKeyPress="keyEvent('login', event)"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" align="center">
                                        <input type="button" value="<%= rb.getString("login.connect")%>" style="font-weight:bold; font-size:12px; border:1px solid #3872A8; background-color:#FFFFFF; width:100px; height:22px;" onfocus="this.select()" onKeyPress="keyEvent('login', event)" onclick="submitLogin()"/>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
        </form>
    </body>
    <script language="javascript">

        document.body.onresize = function() {
            resizeLogin();
        };

        function resizeLogin() {
            var dims = getBodyDimensions();
            var login_frame = document.getElementById('login_frame');
            login_frame.style.left = (dims[0] - 572) / 2;
            login_frame.style.top = (dims[1] - 336) / 2;
        }
        resizeLogin();

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
            }
        }



        function submitLogin() {
            var expire = new Date(3010,12,24);
            document.cookie = "server=" + document.getElementById('quartis_tools_server').value + ";expires=" + expire.toUTCString();
            document.cookie ="port=" + document.getElementById('quartis_tools_server_port').value + ";expires=" + expire.toUTCString();
            document.cookie = "login=" + document.getElementById('login').value + ";expires=" + expire.toUTCString();
            document.cookie ="password=" + document.getElementById('password').value + ";expires=" + expire.toUTCString();

            document.getElementById('form').submit();
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

        function findCookieValue( text ) {
            var table = document.cookie.split(/;/);
            var value="";
            for (i=0;i<table.length;i++){
                if(table[i].indexOf(text)!= -1) {
                    value = table[i].substring(Number(text.length + table[i].indexOf( text )), table[i].length);
                }
            }
            return value;
        }

        if (document.cookie.length > 0) {
            var server = findCookieValue("server=");
            var port = findCookieValue("port=");
            var login = findCookieValue("login=");
            var password = findCookieValue("password=");

            if(server != "") {
                document.getElementById('quartis_tools_server').value = server;
            }
            if(port != "") {
                document.getElementById('quartis_tools_server_port').value = port;
            }
            document.getElementById('login').value = login;
            document.getElementById('password').value = password;
        }

        //window.location = 'command://loaded';
    </script>
</html>