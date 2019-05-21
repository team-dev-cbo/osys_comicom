<%@ page language="java" %>
<%
String message = (String)request.getAttribute("message");
%>
<html>
    <head></head>
    <body scroll=no style="padding:0 5 0 5;border:0px none #FFFFFF">
        <table style="width: 752;height: 615;">
            <tr>
                <td style="text-align: center;vertical-align:center;color:#FF0000;font-size:12px;font-weight:bold;font-family:'Arial';">
                    <%=message%>
                </td>
            </tr>
        </table>
    </body>
</html>