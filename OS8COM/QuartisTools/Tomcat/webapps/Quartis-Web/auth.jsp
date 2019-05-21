<%@ taglib uri="http://java.sun.com/jsf/html" prefix="h" %>
<%@ taglib uri="http://java.sun.com/jsf/core" prefix="f" %>
<%@ taglib uri="/WEB-INF/tld/myComponent.tld" prefix="m" %>
<%@ taglib uri="http://rcfaces.org/core" prefix="v"%>
<%@ taglib uri="http://rcfaces.org/html" prefix="vh"%>

<f:view locale="#{authManagedBean.locale}">
    <html style="height: 100%">
        <head>
            <meta http-equiv="X-UA-Compatible" content="IE=11">
            <vh:init id="init_1" />
            
            <link type="text/css" rel="stylesheet" href="css/style.css" />
            <script src="js/jquery-1.11.1.min.js"></script>
            <vh:javaScript src="js/login.js" />
            
            <link rel="shortcut icon" href="/Quartis-Web/images/logo_sedapta_osys.png"/>

            <title>Quartis Web</title>
        </head>
        <body scroll="no" onload="$('#form1\\:auth_button').click()" >
            <h:form id="form1" onsubmit="miseTemps();" style="display:none; visibility: hidden">
                <h:commandLink id="auth_button" action="#{authManagedBean.autoconnect}" value="Authentificate" />
            </h:form>
        </body>
    </html>
</f:view>