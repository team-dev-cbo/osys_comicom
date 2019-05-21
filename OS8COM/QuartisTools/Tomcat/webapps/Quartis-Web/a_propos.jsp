<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsf/core" prefix="f" %>
<%@ taglib uri="http://java.sun.com/jsf/html" prefix="h" %>

<!DOCTYPE html>

<f:view locale="#{aProposManagedBean.locale}">
<html>
    <head>
        <f:loadBundle basename="quartisweb/resources/private_language" var="language" />
        <script src="js/security.js" ></script>
        <link type="text/css" media="screen" rel="stylesheet" href="css/style.css" />
    </head>
    <body onload="security();" style="margin: 0 0 0 0;overflow: hidden;">
        <div class="Apropos-container Apropos">
            <div class="Apropos-titre">
                <p class="Apropos-titre-nom">Quartis Web</p>
                <p><h:outputText value="#{language.aproposNumVersion}" />&nbsp;<h:outputText value="#{aProposManagedBean.version}" /></p>
            </div>
            <div class="Apropos-Texte">
                <div class="Apropos-license-logo">
                        <div>
                            <img src="images/logo_sedapta_osys_no_space.png" alt="Osys Logo"/>
                        </div>
                        <div>
                            License : <br/>
                                <h:outputText value="#{language.aproposInvalide}" rendered="#{!aProposManagedBean.licenceValide}"/>
                                <h:outputText value="#{language.aproposNombreUtilisateurs} #{aProposManagedBean.numUser}" rendered="#{aProposManagedBean.licenceValide}"/><br/>
                                <h:outputText value="#{language.aproposNombreTerminaux} #{aProposManagedBean.numTerminaux}" rendered="#{aProposManagedBean.licenceValide}"/>
                                
                        </div>
                </div>
                <div class="Apropos-adresse">
                    <p>
                        Sedapta-Osys<br/>
                        Parc tertiaire technopolis<br/>
                        Bâtiment N - Rue de Broglie<br/>
                        53810 - Changé-Les-Laval<br/>
                        France<br/>
                        Tél: <h:outputText value="#{language.prefixtel}" /><h:outputText value="#{language.numtel}" /><br/>
                        Fax: <h:outputText value="#{language.prefixtel}" /><h:outputText value="#{language.numfax}" /><br/>
                    </p>
                    <table>
                        <tr>
                            <td><img src="images/globe2.png" alt="Website" width="17" height="17"/></td>
                            <td>&nbsp;<a class="Apropos" href="http://www.sedapta-osys.com/">www.sedapta-osys.com</a></td>
                        </tr>
                        <tr>
                            <td><img src="images/mail.png" alt="E-mail"/></td>
                            <td>&nbsp;<a class="Apropos" href="mailto:hotline@sedapta-osys.com">hotline@sedapta-osys.com</a></td>
                        </tr>
                    </table>

                </div>
            
                
            </div>
            <div class="Apropos-copyright">
                &copy; Copyright 2007-<span id="yearCopyright">2017</span> <h:outputText value="#{language.aproposAllRights}" />
            </div>
        </div>
        <script type="text/javascript">
            var date = new Date();
            var year = date.getFullYear();
            
            spanElement = document.getElementById("yearCopyright");
            spanElement.innerHTML = year;
        </script>
    </body>
</html>
</f:view>
