<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsf/html" prefix="h" %>
<%@ taglib uri="http://java.sun.com/jsf/core" prefix="f" %>
<%@ taglib uri="/WEB-INF/tld/myComponent.tld" prefix="m" %>

<f:view>
    <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <f:loadBundle basename="quartisweb/resources/private_language" var="language" />
            <m:init />
            <link type="text/css" rel="stylesheet" href="css/style.css" />
            <script src="js/jquery-1.11.1.min.js"></script>
            <script src="js/base.js" ></script>
        </head>
        <body scroll=no 
              style="border:0px none #FFFFFF;background-repeat: repeat-x;" >
            <script>
        
                var divCache = $("div#lienSpecial", parent.document);
                urlDeRetour = divCache.data('urlderetour');
                idDeRetour = divCache.data('idderetour');
                webAppUrl = divCache.data('webappurl');
                
                // Débloquage des boutons
                parent.desactiverMasque();
                
            </script>
            <c:if test="${pwdManagedBean.connect}">
                <table cellpadding="0" cellspacing="0">
                    <tr>
                        <td align="center" valign="middle">
                            <h:form>
                                <table id="valid_pwd" style="width:400px;height:200px;" >
                                    <tr>
                                        <td align="center">
                                            <table>
                                                <tr>
                                                    <td align="center" valign="middle">
                                                        <h:outputText  value="#{language.change_pwd_ok}" style="color:#3877AA;font-family: 'Arial'; font-weight:bold;font-size:16px;font-style:italic;" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center">
                                                        <br /><br />
                                                        <m:shadowPanel width="120px" height="25px">
                                                          <input type="button" value="${language.ok}" class="commandButton btnOk" onclick="parent.changerPage(urlDeRetour, idDeRetour);">
                                                        </m:shadowPanel>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </h:form>
                        </td>
                    </tr>
                </table>
            </c:if>
            <c:if test="${!pwdManagedBean.connect}">
                <table style="width:100%;height:100%;">
                    <tr>
                        <td align="center" style="font-size:12px;color:#FF0000;font-weight:bold;">
                            <h:outputText value="#{language.session_expire}" />
                        </td>
                    </tr>
                </table>
            </c:if>
        </body>
    </html>
</f:view>
