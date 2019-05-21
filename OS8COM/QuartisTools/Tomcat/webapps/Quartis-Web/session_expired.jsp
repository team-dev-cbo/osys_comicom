<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsf/html" prefix="h" %>
<%@ taglib uri="http://java.sun.com/jsf/core" prefix="f" %>
<%@ taglib uri="/WEB-INF/tld/myComponent.tld" prefix="m" %>
<%@ taglib uri="http://rcfaces.org/core" prefix="v"%>
<%@ taglib uri="http://rcfaces.org/html" prefix="vh"%>

<%--@page contentType="text/html" pageEncoding="UTF-8"--%>

<f:view>
    <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <f:loadBundle basename="quartisweb/resources/private_language" var="language" />
            <link type="text/css" rel="stylesheet" href="css/style.css" />
        </head>
        <body scroll=no style="padding:0 5 0 5;border:0px none #FFFFFF">
            <table style="width: 100%;height: 120;">
                <tr>
                    <td style="text-align: center;vertical-align:center;color:#FF0000;font-size:12px;font-weight:bold;font-family:'Arial';">
                        <h:outputText value="#{language.erreur_session_expiree}" />
                        <br/>
                        <br/>
                        <m:shadowPanel width="120px" height="25px">
                            <input type="button" onclick="window.location ='command://logout'" value="${language.erreur_session_deconnexion}" class="commandButton">
                        </m:shadowPanel>
                    </td>
                </tr>
            </table>
        </body>
    </html>
</f:view>