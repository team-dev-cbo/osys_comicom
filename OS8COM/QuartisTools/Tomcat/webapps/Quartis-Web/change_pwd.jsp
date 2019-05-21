<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsf/html" prefix="h" %>
<%@ taglib uri="http://java.sun.com/jsf/core" prefix="f" %>
<%@ taglib uri="/WEB-INF/tld/myComponent.tld" prefix="m" %>
<%@ taglib uri="http://rcfaces.org/core" prefix="v"%>
<%@ taglib uri="http://rcfaces.org/html" prefix="vh"%>

<f:view locale="#{pwdManagedBean.identifiedUser.locale}">
    <html>
        <head>
            <f:loadBundle basename="quartisweb/resources/private_language" var="language" />
            <vh:init id="init_1" />
            <m:init />
            <link type="text/css" rel="stylesheet" href="css/jquery-ui.min.css" />
            <link type="text/css" rel="stylesheet" href="css/jquery-ui.structure.min.css" />
            <link type="text/css" rel="stylesheet" href="css/style.css" />
            <vh:javaScript src="js/security.js" />
            <vh:javaScript src="js/md5.js" />
            <vh:javaScript src="js/pwd.js" />
            <vh:javaScript src="js/jsencrypt.js" />
            <vh:javaScript src="js/base64.js" />
        </head>
        <body scroll=no 
            style="border:0px none #FFFFFF; background-color: #ffffff;"
            onload="f_focus();security();">
            
            <script type="text/javascript">
                // pour le chiffrement par RSA (cf. pwd.js -> fonction cryptagePassword
                publicKey = "${pwdManagedBean.encodedPublicKey}"; 
            </script>
            
            <c:if test="${pwdManagedBean.connect}">  
                
                <%-- Définition d'informations des contraintes de mot de passe
                    (construits à partir des paramètres de la politique de mot 
                    de passe).
                    NB : c:set est utilisé pour pouvoir ré-exploiter les variables
                    directement dans la page (les messages d'information sont 
                    affichés au chargement) et mis dans un tableau en javascript
                    pour une mise à jour dynamique des messages quand l'utilisateur
                    entre son mot de passe.
                    c:out est utilisé pour son paramètre escapeXml qui, mis à false,
                    permet de ne pas échapper les caractères spéciaux (comme les 
                    accents). c:set force cet échappement or quand les messages
                    sont affichés par le javascript, les caractères échappés 
                    apparaissent (&eacute; au lieu de é).
                    écha
                --%>
                
                <c:set var="infoRenouvellementNOK" scope="page">
                    <c:out value="${language['password.renouvel.nok']}" escapeXml="false"/>
                </c:set>
                <c:set var="infoRenouvellementOK" scope="page">
                    <c:out value="${language['password.renouvel.ok']}" escapeXml="false"/>
                </c:set>
                
                <c:set var="infoNbCharNOK" scope="page">
                    <c:out value="${language['password.char.min.debut.nok']} ${pwdManagedBean.paramMdp.nbCharMin} ${pwdManagedBean.paramMdp.nbCharMin gt 1 ? language['password.char.min.fin.pluriel'] : language['password.char.min.fin.singulier']}" escapeXml="false"/>
                </c:set>
                
                <c:set var="infoNbCharOK" scope="page">
                    <c:out value="${language['password.char.min.debut.ok']} ${pwdManagedBean.paramMdp.nbCharMin} ${pwdManagedBean.paramMdp.nbCharMin gt 1 ? language['password.char.min.fin.pluriel'] : language['password.char.min.fin.singulier']}" escapeXml="false"/>
                </c:set>
                
                <c:set var="infoNbCapsNOK" scope="page">
                    <c:out value="${language['password.caps.min.debut.nok']} ${pwdManagedBean.paramMdp.nbMaj} ${pwdManagedBean.paramMdp.nbMaj gt 1 ? language['password.caps.min.fin.pluriel'] : language['password.caps.min.fin.singulier']}" escapeXml="false"/>
                </c:set>
                <c:set var="infoNbCapsOK" scope="page">
                    <c:out value="${language['password.caps.min.debut.ok']} ${pwdManagedBean.paramMdp.nbMaj} ${pwdManagedBean.paramMdp.nbMaj gt 1 ? language['password.caps.min.fin.pluriel'] : language['password.caps.min.fin.singulier']}" escapeXml="false"/>
                </c:set>
                
                <c:set var="infoNbNumNOK" scope="page">
                    <c:out value="${language['password.num.min.debut.nok']} ${pwdManagedBean.paramMdp.nbChiffres} ${pwdManagedBean.paramMdp.nbChiffres gt 1 ? language['password.num.min.fin.pluriel'] : language['password.num.min.fin.singulier']}" escapeXml="false"/>
                </c:set>
                <c:set var="infoNbNumOK" scope="page">
                    <c:out value="${language['password.num.min.debut.ok']} ${pwdManagedBean.paramMdp.nbChiffres} ${pwdManagedBean.paramMdp.nbChiffres gt 1 ? language['password.num.min.fin.pluriel'] : language['password.num.min.fin.singulier']}" escapeXml="false"/>
                </c:set>
                
                <c:set var="infoNbSpecNOK" scope="page">
                    <c:out value="${language['password.spec.min.debut.nok']} ${pwdManagedBean.paramMdp.nbCharSpec} ${pwdManagedBean.paramMdp.nbCharSpec gt 1 ? language['password.spec.min.fin.pluriel'] : language['password.spec.min.fin.singulier']}" escapeXml="false"/>
                </c:set>
                <c:set var="infoNbSpecOK" scope="page">
                    <c:out value="${language['password.spec.min.debut.ok']} ${pwdManagedBean.paramMdp.nbCharSpec} ${pwdManagedBean.paramMdp.nbCharSpec gt 1 ? language['password.spec.min.fin.pluriel'] : language['password.spec.min.fin.singulier']}" escapeXml="false"/>
                </c:set>
                
                <c:set var="infoConfirmationNOK" value="#{language['password.confirm.nok']}" scope="page" />
                <c:set var="infoConfirmationOK" value="#{language['password.confirm.ok']}" scope="page" />
                
                <div align="left" class="FormChgmtPass">
                    <h:form id="form_pwd" onsubmit="cryptagePassword(); " >

                        <table class="loginTableChgmtPass"><!-- border:1px solid #3877AA; -->
                            <tr>
                                <td colspan="3">
                                    <h:messages id="messages" errorStyle="color:#FF0000; font-weight:bold;" />
                                </td>
                            </tr>
                            <tr>
                                <td valign="middle">
                                    <h:outputText value="#{language.ancien_pwd}"  style="font-weight:bold" />&nbsp;:
                                </td>
                                <td valign="middle">
                                    <h:inputSecret id="ancien_pwd" style="border:1px solid #3872A8" onfocus="this.select()" onkeyup="verifMdPGen();"/>
                                    <h:inputHidden id="ancien_pwd_crypte" value="#{pwdManagedBean.ancienPwd}" />
                                </td>
                                <td>
                                    &nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td valign="middle">
                                    <h:outputText value="#{language.nouveau_pwd}" style="font-weight:bold" />&nbsp;:
                                </td>
                                <td valign="middle">
                                    <h:inputSecret id="nouveau_pwd" style="border:1px solid #3872A8" onfocus="this.select()" onkeyup="verifMdPGen();"/>
                                    <h:inputHidden id="nouveau_pwd_crypte" value="#{pwdManagedBean.nouveauPwd}" />
                                    <h:inputHidden id="nouveau_pwd_rsa" value="#{pwdManagedBean.nouveauPwdRsa}" />
                                </td>
                                <td>
                                    <span id="messageConformiteRenouvellement" class=""></span><br/>
                                    <c:if test="${pwdManagedBean.paramMdp.nbCharMin gt 0}">
                                        <span id="messageConformiteNbChar" class=""></span><br/>
                                    </c:if>
                                    <c:if test="${pwdManagedBean.paramMdp.nbMaj gt 0}">
                                        <span id="messageConformiteNbCaps" class=""></span><br/>
                                    </c:if>
                                    <c:if test="${pwdManagedBean.paramMdp.nbChiffres gt 0}">
                                        <span id="messageConformiteNbNum" class=""></span><br/>
                                    </c:if>
                                    <c:if test="${pwdManagedBean.paramMdp.nbCharSpec gt 0}">
                                        <span id="messageConformiteNbSpec" class=""></span><br/>
                                    </c:if>
                                </td>
                            </tr>
                            <tr>
                                <td valign="middle"><h:outputText  value="#{language.confirmation_pwd}" style="font-weight:bold" />&nbsp;:</td>
                                <td valign="middle">
                                    <h:inputSecret id="conf_nv_pwd" style="border:1px solid #3872A8" onfocus="this.select()" onkeyup="verifMdPGen();"/>
                                    <h:inputHidden id="conf_nv_pwd_crypte" value="#{pwdManagedBean.confNouveauPwd}" />
                                </td>
                                <td>
                                    <span id="messageConformiteConfirmation" class="conformeMdP">${infoConfirmationOK}</span><br/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" align="center">
                                    
                                </td>
                                <td>
                                    <br><br>
                                    <m:shadowPanel width="120px" height="25px">
                                        <h:commandButton id="boutonValider" 
                                                         styleClass="btnOk grise commandButton" 
                                                         action="#{pwdManagedBean.validerPwd}" 
                                                         value="#{language.valider}" 
                                                         onclick="clickSiNonGrise(event);" />
                                    </m:shadowPanel>
                                </td>
                            </tr>
                        </table>

                    </h:form>
                </div>
                    
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
            
            <script type="text/javascript">
                var nbCharMin = <h:outputText value="#{pwdManagedBean.paramMdp.nbCharMin}" />;
                var nbMaj = <h:outputText value="#{pwdManagedBean.paramMdp.nbMaj}" />;
                var nbChiffres = <h:outputText value="#{pwdManagedBean.paramMdp.nbChiffres}" />;
                var nbCharSpec = <h:outputText value="#{pwdManagedBean.paramMdp.nbCharSpec}" />;
                
                var carteMessagesInfo = {
                    'infoRenouvellementNOK' : "${infoRenouvellementNOK}",
                    'infoRenouvellementOK' : "${infoRenouvellementOK}",

                    'infoNbCharNOK' : "${infoNbCharNOK}",
                    'infoNbCharOK' : "${infoNbCharOK}",

                    'infoNbCapsNOK' : "${infoNbCapsNOK}",
                    'infoNbCapsOK' : "${infoNbCapsOK}",

                    'infoNbNumNOK' : "${infoNbNumNOK}",
                    'infoNbNumOK' : "${infoNbNumOK}",

                    'infoNbSpecNOK' : "${infoNbSpecNOK}",
                    'infoNbSpecOK' : "${infoNbSpecOK}",

                    'infoConfirmationNOK' : "${infoConfirmationNOK}",
                    'infoConfirmationOK' : "${infoConfirmationOK}"
                };
                
                verifMdPGen();
                
            </script>
                
        </body>
    </html>
</f:view>