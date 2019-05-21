<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="t" tagdir="/WEB-INF/tags" %>
<%@ taglib uri="http://java.sun.com/jsf/html" prefix="h" %>
<%@ taglib uri="http://java.sun.com/jsf/core" prefix="f" %>
<%@ taglib uri="http://rcfaces.org/html" prefix="vh"%>


<f:view locale="#{loginManagedBean.locale}">
<!DOCTYPE html>
<html>
    
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=10">
        <link rel="icon" href="images/osys.ico" />
        <link type="text/css" rel="stylesheet" href="css/style.css" />
        <vh:javaScript id="jquery" src="js/jquery-1.11.1.min.js" />
        <vh:javaScript id="base" src="js/base.js" />
        <vh:javaScript id="base-template" src="js/base-template.js" />
        <vh:javaScript id="base-ui-menu" src="js/base-ui-menu.js" />
        <vh:javaScript id="url-extern" src="js/urlExterneSingleton.js" />
        <vh:javaScript id="base-dimensions" src="js/base-dimensions.js" />
        <vh:javaScript id="breadCrumb" src="js/breadCrumb.js" />
        <f:loadBundle basename="quartisweb/resources/private_language" var="language"  />
        <title>Quartis Web</title>
        
    </head>
    <body>
        <!-- To disconnect when the browser window closes :
             cf. http://stackoverflow.com/a/21455923/2112089 -->
        <script type="text/javascript">

            var myEvent = window.attachEvent || window.addEventListener;
            var chkevent = window.attachEvent ? 'onbeforeunload' : 'beforeunload'; /// make IE7, IE8 compitable
            global_deco = false;
            myEvent(chkevent, function(e) { // For >=IE7, Chrome, Firefox
                deconnexion('${user.identifiant}');
            });
            
        </script>
        
        <%-- L'URL pour changer le mot de passe. Variabilisé pour être utilisé à
            deux endroits distincts : dans la JSP et dans le javascript qui 
            redirige vers la page de changement de mot de passe s'il doit être 
            ré-initialisé. --%> 
        <c:set var="urlChgmtMdp" scope="page">
            <c:out value="${basePageData.urlWebApp}/xxx.cas?action=change_pwd&userID=${user.identifiant}" escapeXml="false"/>
        </c:set>
        <c:if test="${basePageData.labelBandeauTerminaux != ''}">
            <div id="alerteConnexion" class="fondue">
                <h:outputFormat value="#{basePageData.labelBandeauTerminaux}" />
                <span class="fermerFondue" onclick="masquerAlerte('alerteConnexion');">&times;</span>
            </div>
        </c:if>
        <c:if test="${basePageData.labelBandeauLicence != ''}">
            <div id="alerteLicence" class="<h:outputFormat value='#{basePageData.classeBandeauLicence}' />">
                <span class="texteAlerteLicence"><h:outputFormat value="#{basePageData.labelBandeauLicence}" /></span>
                <c:if test="${basePageData.classeBandeauLicence == 'fondue'}">
                    <span class="fermerFondue" onclick="masquerAlerte('alerteLicence');">&times;</span>
                </c:if>
                
            </div>
        </c:if>
        <div id="header">
            <div class="bandeauLogo">
                <div class="BoiteLogo">
                    Q
                </div>
                <div class="BandeauLogoTexte">
                    uartis&nbsp;Web&nbsp;${basePageData.labelEnvironnement}
                </div>
            </div>
            <div class="bandeauTitre">
                <div id="bandeauTitreTexte">
                    Standard
                </div>

            </div>
            <div class="bandeauZoneUtilisateur">
                <div class="bandeauZoneUtilisateurTexte">
                    <div class="UserBandeau" >${user.nom} ${user.prenom} </div><span class="bandeauZoneUtilisateurPropre"></span>&nbsp;&nbsp;
                    <h:form id="form1">
                            <h:commandButton styleClass="BoutonLogoutDevant"
                                             id="logoutButton"
                                             value="#{user.nom} #{user.prenom}"
                                             image="images/worker.png"
                                             alt="#{language.changer_utilisateur}"
                                             title="#{language.changer_utilisateur}"
                                             action="#{loginManagedBean.deconnexion}"
                                             onclick = "global_deco = true;" />
                            
                        
                            <c:if test="${!basePageData.connecteParSSO}">
                                <div class="fullwebLink fullwebLinkStyle" data-url="${urlChgmtMdp}" >
                                <h:commandButton styleClass="BoutonPass"
                                                id="passButton"
                                                image="images/keys.png"
                                                value="#{language.changement_mdp}"
                                                alt="#{language.changement_mdp}"
                                                title="#{language.changement_mdp}"
                                                onclick = "" />
                                </div>
                            </c:if>
                                <div class="fullwebLink fullwebLinkStyle" data-url="${basePageData.urlWebApp}/a_propos.jsf">
                                    <h:commandButton styleClass="BoutonAide"
                                                id="helpButton"
                                                image="images/help_earth.png"
                                                value="#{language.apropos}"
                                                alt="#{language.apropos}"
                                                title="#{language.apropos}"
                                                onclick = "" />
                                </div>
                        
                    </h:form>
                        
                </div>
            </div>
        </div>
        <div id="navigationGenerale">
            <div class="imgArbo">
                <span class="fullwebLink fullwebLinkStyle" data-url="${basePageData.urlWebApp}/siteMap.jsf"><img src="images/folder_network.png" alt="Plan" class="bandeauImg"/></span>&nbsp;
            </div>
            <div class="navigationDroite">
                <span class="modulesandFriends">
                    
                    <span class="modules"></span>
                    
                    
                </span>
                &nbsp;&nbsp;&nbsp;
                <c:if test="${fn:length(basePageData.listeSites) gt 1}">
                <div class="listeSites">
                    <h:outputText value="#{language.site}" /> : <select onchange="changerSiteDefaut(this.value);">
                    <c:forEach items="${basePageData.listeSites}" var="site">
                        <option <c:if test="${site.codeSite == basePageData.siteDefaut}">selected="true"</c:if>value="${site.codeSite}">${site.designation}</option>
                    </c:forEach>
                    </select>
                </div>
                </c:if>
            </div>
            <div id="filAriane">
                <div data-url="#" class="fullwebLink fullwebLinkStyle navigation">Accueil</div>
            </div>
        </div>
        
        <table class="tableauCompact tableauLarge">
            <tbody class="tableauCompact tableauLarge">
                <tr class="tableauCompact">
                    <td class="tableauCompact tableauCompactColonneMenu">
                        <div id="menuGeneral"></div>
                    </td>
                    <td class="tableauCompact tableauCompactColonneFrame tableauLarge">
                        
                        <div class="tableauCompact" id="body">
                            <div id="frame" class="tableauCompact">
                                <iframe id="framePrincipale" frameborder="0" height="100%" seamless="seamless" src=""></iframe>
                            </div>
                            <div id="fondChargement" class="classeFondChargement">
                                <img alt="<h:outputText value="#{language.chargement_cours}" />" src="images/loading5.gif" />
                            </div>
                        </div>
                        
                    </td>
                </tr>
            </tbody>
        </table>
                          
        <div id="masque" class="couvertureGrise"></div>
        
        <script>
            <%-- Génération d'objets Javascript à partir des éléments dans la session JSP --%>
            jsonBandeau = {
                <c:forEach items="${basePageData.listeModules}" var="module" varStatus="moduleStatus">
                    "${moduleStatus.index}" : {
                        "id" : "${module.id}",
                        "url" : "${module.url}", 
                        "imageSrc" : "${module.imageSrc}",  
                        "alt" : "${module.alt}"
                    }<c:if test="${!moduleStatus.last}">,</c:if>
                </c:forEach>
            };
            
            jsonMenu = {
                "labelLocal" : "${basePageData.menuAccueil.labelLocal}",
                "categories" : [
                    <c:forEach items="${basePageData.menuAccueil.listeCategory}" var="menuCategory" varStatus="categoryStatus">
                    {
                        "label" : "${menuCategory.label}",
                        "imageSrc" : "${menuCategory.imageSrc}",
                        "moduleId" : "${menuCategory.moduleId}",
                        "listeMenuLink" : [
                            <c:forEach items="${menuCategory.listeMenuLink}" var="menuLink" varStatus="linkStatus">
                            {
                                "id" : "${menuLink.id}",
                                "moduleId" : "${menuLink.moduleId}",
                                "label" : "${menuLink.label}",
                                "imageSrc" : "${menuLink.imgSrc}",
                                "url" : "${menuLink.url}"
                            }<c:if test="${!linkStatus.last}">,</c:if>//fin menuLink
                             
                            </c:forEach>

                        ] //fin listeMenuLink
                    }<c:if test="${!categoryStatus.last}">,</c:if>// fin categorie
                     
                    </c:forEach>
                ] //fin liste categories
            }; //fin jsonMenu
            
            localMessageErreurSite = "<h:outputText value="#{language.messageErreurSite}" />";
            localMessageErreurModule = "<h:outputText value="#{language.messageErreurModule}" />";
            
            webAppUrl = "${basePageData.urlWebApp}";
            
            modifierMdp = ${basePageData.mdpDoitEtreModifie};
    
            globalAccueilLocal = "${basePageData.labelAccueil}";
            
            siteDefaut = "${basePageData.siteDefaut}";
            
            globalUrlAccueil = "${basePageData.urlLogin}";
            
            var urlExterneSpe = "${basePageData.urlExterneSpe}";
            var singletonURL = new UrlExternSingleton(urlExterneSpe);
            singletonURL.getUrlExterne();
            
            var tickDeconnexionSecond = "${basePageData.tickDeconnexionSecond}";
            
            global_startTimeClicSurBouton = new Date().getTime(); 
            
            userID = "${user.identifiant}";
            userDeltaUtc = "${user.deltaUTC}";
            mapFilArianeGlobal = {};
            
            masquerAlerte = function(idCible){
                $( "#" + idCible ).animate({
                    height: "hide"
                  }, 200
                );
            }
            
            $(document).ready(function() {
                
//                parent.terminerMinuteur(TPS_PREM_PAGE);
//                parent.armerMinuteur(TPS_CLIC);
                
                setTimeout(masquerAlerte, 5000);

                globalIndex = 0;
                
//                mapFilArianeGlobal["Accueil"] = {url: globalUrlAccueil, id:''};
                globalFilAriane = null;

                moduleIdActuel = "accueil"; //l'ID du module courant, necéssaire pour le fil
                                            //d'ariane
                globalIdPageDefautModuleCourant = null;

                //création du bandeau
                genererBandeau(jsonBandeau);

                //création du menu
                changerMenu(jsonMenu, true);
                urlPageCourante = globalUrlAccueil;
                idPageCourante = "accueil";
                ajusterHauteurIframe();
                
                // si le mot de passe doit être ré-initialisé, l'utilisateur est
                // redirigé automatiquement
                if(modifierMdp){
                    activerMasque();
                    changerPage("${urlChgmtMdp}");
                } else {
                   changerPage(urlPageCourante, idPageCourante, urlExterneSpe);
                }
                //armement des évènements en cas de clic sur le bandeau ou le menu
                armerDetectionRedimensionnement();
            });
            
        </script>
        <div >
            
            
        </div>
    </body>
</html>
</f:view>