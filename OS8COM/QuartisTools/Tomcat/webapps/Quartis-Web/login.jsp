<%@ taglib uri="http://java.sun.com/jsf/html" prefix="h" %>
<%@ taglib uri="http://java.sun.com/jsf/core" prefix="f" %>
<%@ taglib uri="/WEB-INF/tld/myComponent.tld" prefix="m" %>
<%@ taglib uri="http://rcfaces.org/core" prefix="v"%>
<%@ taglib uri="http://rcfaces.org/html" prefix="vh"%>

<f:view locale="#{loginManagedBean.locale}">
    <html style="height: 100%">
        <head>
            <meta http-equiv="X-UA-Compatible" content="IE=10">
            <link rel="icon" href="images/osys.ico" />
            <f:loadBundle basename="quartisweb/resources/private_language" var="language" />
            <vh:init id="init_1" />
            <m:init />
            <link type="text/css" rel="stylesheet" href="css/style.css" />
            <script src="js/jquery-1.11.1.min.js"></script>
            <vh:javaScript src="js/security.js" />
            <vh:javaScript src="js/md5.js" />
            <vh:javaScript src="js/login.js" />
            <vh:javaScript src="js/jsencrypt.js" />
            <vh:javaScript src="js/base64.js" />
            
            <title>Quartis Web</title>
        </head>
        <body scroll="no" class="loginBody ${loginManagedBean.loginClass}" onload="document.getElementById('form1:login').focus();security();" >
            <script type="text/javascript">
                publicKey = "${loginManagedBean.encodedPublicKey}";
            </script>
            <h:form id="form1" onsubmit="cryptPassword()" styleClass="loginForm">
                <table class="loginTableStructure">
                    <colgroup>
                        <col width="33%" />
                        <col width="33%" />
                        <col width="33%" />
                    </colgroup>
                    <tr class="loginTr">
                        <!-- -->
                        <td><!-- --></td>
                        <td><!-- --></td>
                        <td><!-- --></td>
                    </tr>
                    <tr class="loginTr">
                        <!-- -->
                        <td><!-- --></td>
                        <td>
                            <table class="loginTable" cellpadding="0" cellspacing="0">

                                <tr>
                                    <td>
                                        <img src="images/logo_sedapta_osys.png">
                                    </td>
                                    <td class="loginTd" align="center">

                                    </td>
                                </tr>
                                <tr>
                                    <td style="width:50%">
                                        <h:messages id="general_message" errorClass="loginErrorMessage" />
                                        <div class="loginErrorMessage" style="">
                                            ${message}
                                        </div>
                                    </td>
                                    <td align="center">
                                        
                                        <div class="${messageGrave}">
                                            <h:panelGrid cellpadding="0" cellspacing="0" columns="3" style="text-align:right;">
                                                <h:outputText value="#{language.login}" style="font-weight:bold;" />
                                                <h:outputText value=" : "/>
                                                <h:inputText id="login" style="border:1px solid #3872A8;width:140px;" value="#{loginManagedBean.login}" onfocus="this.select()" />

                                                <h:outputText value="#{language.password}" style="font-weight:bold;" />
                                                <h:outputText value=" : "/>
                                                <h:panelGroup>
                                                    <h:inputSecret id="saisie_password" style="border:1px solid #3872A8;width:140px; margin-top: 5px;" onfocus="this.select()" />
                                                    <h:inputHidden id="passwordQuartis" value="#{loginManagedBean.passwordQuartis}" />
                                                    <h:inputHidden id="passwordLdap" value="#{loginManagedBean.passwordLdap}" />
                                                </h:panelGroup>

                                                <h:panelGroup />
                                                <h:panelGroup />

                                                <h:commandButton id="login_button" 
                                                                 action="#{loginManagedBean.authenticate}" 
                                                                 value="#{language.login_connect}" 
                                                                 style="font-weight:bold; font-size:11px; border:1px solid #3872A8; background-color:#FFFFFF; width:120px; height:25px; margin-top: 9px;" />

                                            </h:panelGrid>
                                         </div>

                                        

                                    </td>

                                </tr>
                            </table>
                            
                        </td>
                        <td><!-- --></td>
                    </tr>
                    <tr class="loginTr">
                        <!-- -->
                        <td><!-- --></td>
                        <td><!-- --></td>
                        <td><!-- --></td>
                    </tr>
                    
                </table>
                
            </h:form>
        </body>
    </html>
</f:view>