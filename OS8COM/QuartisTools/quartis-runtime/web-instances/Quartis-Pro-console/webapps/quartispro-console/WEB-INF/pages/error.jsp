<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Console Error</title>
        <script src="js/lib/jquery-3.3.1.min.js" type="text/javascript"></script>
        <script src="js/quartis-i18n.js" type="text/javascript"></script>
        <style>
            .center-div
            {
                position: absolute;
                margin: auto;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
            }
        </style>
    </head>
    
    <%
        String error = (String) request.getAttribute("error");
        if(error == null || error.isEmpty())
            error = "ERROR UNKNOWN";
    %>
    
    <body>
        <h1>Error</h1>
        <br/>
        <%= error %>
        <br/>
        <a href="index.jsp">Login</a>
    </body>
</html>
