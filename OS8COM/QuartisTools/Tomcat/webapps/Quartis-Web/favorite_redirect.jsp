<%
String action = (String)request.getAttribute("action");
String userID = (String)request.getAttribute("userID");
String moduleID = (String)request.getAttribute("moduleID");
String pageID = (String)request.getAttribute("pageID");
String type = (String)request.getAttribute("type");
String path = (String)request.getAttribute("path");
%>

<html>
    <head></head>
    <body onload="form1.submit()">
        <form name="form1" action="xxx.cas">
            <input type="hidden" name="action" value="<%=action%>">
            <input type="hidden" name="userID" value="<%=userID%>">
            <input type="hidden" name="moduleID" value="<%=moduleID%>">
            <input type="hidden" name="pageID" value="<%=pageID%>">
            <input type="hidden" name="type" value="<%=type%>">
            <!-- 
            L'envoi de ce paramètre dans l'URL permet au WebBrowser et donc à l'application
            cliente Swing de détecter l'ajout/Suppresion de favoris et donc de mettre à jour
            sa propre interface.
            -->
            <input type="hidden" name="majFavorisSwing" value="OK">
        </form>
    </body>
</html>