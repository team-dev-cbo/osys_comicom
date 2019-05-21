<%@page import="quartisweb.utils.constantes.Constantes"%>
<%@page import="java.util.Properties"%>
<%@page import="quartisweb.resources.PropertiesDelegate"%>
<%@page import="quartisweb.i18n.WebRessources"%>

<%
String forward = request.getParameter("forward");

if (forward==null || "".equals(forward)) {
    forward = "auth.sso";
}
%>

<html>
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=10">
        <link rel="icon" href="images/osys.ico" />
        <title>Quartis Web</title>
    </head>
    <body onload="form1.submit()">
        <form name="form1" action="<%=forward%>" method="post"></form>
    </body>
</html>