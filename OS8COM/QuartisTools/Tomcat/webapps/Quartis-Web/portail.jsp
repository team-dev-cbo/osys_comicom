<%@ page import="java.util.ResourceBundle"%>
<%
        ResourceBundle rb = ResourceBundle.getBundle("quartisweb/resources/private_language");
%>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    </head>
    <body>
        <form name="form1" action="xxx.cas?action=jnlp" method="post">
            <table width="100%" height="100%">
                <!--<tr>
                    <td width="100%" align="center" valign="bottom">
                        <table>
                            <tr>
                                <td><img src="images/console96x96.png"/></td>
                                <td>
                                    <font style="color: blue; font-size:14px; cursor: pointer" onclick="consoleConnect()">
                                        <u><i><%= rb.getString("portail.console")%></i></u>
                                    </font>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>-->
                <tr>
                    <td width="100%" align="center" valign="middle">
                        <table>
                            <tr>
                                <td><img src="images/client96x96.png" onclick="launchClient32()"/></td>
                                <td>
                                    <font style="color: blue; font-size:14px; cursor: pointer" onclick="launchClient32()">
                                        <u><i><%= rb.getString("portail.client")%> (32 bits)</i></u>
                                    </font>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td width="100%" align="center" valign="top">
                        <table>
                            <tr>
                                <td><img src="images/client96x96.png" onclick="launchClient64()"/></td>
                                <td>
                                    <font style="color: blue; font-size:14px; cursor: pointer" onclick="launchClient64()">
                                        <u><i><%= rb.getString("portail.client")%> (64 bits)</i></u>
                                    </font>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </form>
    </body>
    <script type="text/javascript">
        function launchClient32() {
            form1.action = "xxx.cas?action=jnlp&src=portail&run=client&cpu=32bits";
            form1.submit();
        }
        function launchClient64() {
            form1.action = "xxx.cas?action=jnlp&src=portail&run=client&cpu=64bits";
            form1.submit();
        }
        function consoleConnect() {
            form1.action = "console-connect.jsp?run=console";
            form1.submit();
        }
        function ideConnect() {
            form1.action = "xxx.cas?action=jnlp&src=portail&run=ide";
            form1.submit();
        }
        function consoleJConnect() {
            //form1.action = "xxx.cas?action=jnlp&src=portail&run=consolej";
            form1.action = "console-connect.jsp?run=consolej";
            form1.submit();
        }
        //function consoleFXConnect() {
            //form1.action = "xxx.cas?action=jnlp&src=portail&run=consolefx";
        //    form1.action = "console-connect.jsp?run=consolefx";
        //    form1.submit();
        //}
    </script>
</html>