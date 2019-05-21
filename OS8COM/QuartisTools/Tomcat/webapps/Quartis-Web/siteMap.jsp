<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsf/html" prefix="h"%>    
<%@ taglib uri="http://java.sun.com/jsf/core" prefix="f"%>    
<%@ taglib uri="http://rcfaces.org/html" prefix="vh"%>
<!DOCTYPE html>

<f:view locale="#{siteMapManagedBean.user.locale}">
    <html>
        <head>
            <vh:init id="init_1" literalLocale="#{siteMapManagedBean.user.locale}"/>
            <meta charset="UTF-8" />
            <link type="text/css" rel="stylesheet" href="css/style.css" />
            <script src="js/jquery-1.11.1.min.js"></script>
        </head>
        <body>
            <script>
                var userID = "${siteMapManagedBean.user.identifiant}";
                
                webAppUrl = "${webAppUrl}";
                
                moduleIdActuel = "accueil";
                
                $(document).ready(function() {
                    $( "div.titreBranche" ).off().on('click', function( event ) {
                        event.preventDefault();
                        var clickedElement = $(this);
                        var brancheId = clickedElement.data("brancheid");
                        $("ul[data-brancheid='" + brancheId + "']").toggleClass('site-map-hidden');
                    });
                    
                    $( "div.titreModule" ).off().on('click', function( event ) {
                        event.preventDefault();
                        var clickedElement = $(this);
                        var brancheId = clickedElement.data("brancheid");
                        var moduleId = clickedElement.data("moduleid");
                        $("ul[data-brancheid='" + brancheId + "'][data-moduleid='" + moduleId + "']").toggleClass('site-map-hidden');
                        
                    });
                    /*
                    parent.armerLiensPourRedirection(true);
                    
                    var elem = document.getElementById("module-1-page-1");
                    alert(elem);
                    var handlerData = jQuery._data( elem, "events" );
                    alert(handlerData);
                    */
                   $( "div.fullwebLink" ).off().on('click', function( event ) {
                        event.preventDefault();
                        var clickedElement = $(this);
                        var url = clickedElement.data("url");
                        var moduleId = clickedElement.data("moduleid");
                        var idPage = clickedElement.data("pageid");
                        
                        parent.changerModuleAppelAjax(url, moduleId, userID, idPage);
                    });
                   
                });
            </script>
            
            
            <div class="listePage">
                <div class="TitreSoft">Arborescence Quartis Web</div>
                <div class="LiensArbo">
                    <c:forEach items="${siteMapManagedBean.arbre}" var="branche" varStatus="brancheStatus" >
                        <div class="titreListePage">
                            <div class="site-map-page titreBranche" data-brancheid="<c:out value="${brancheStatus.count}" />" >
                                <c:out value="${branche.labelBranche}" />
                            </div>
                            <ul class="site-map-ul-modules listeModules site-map-hidden" data-brancheid="<c:out value="${brancheStatus.count}" />">

                                <c:forEach items="${branche.listeModules}" var="module" varStatus="moduleStatus">
                                    <li class="site-map-li-gen site-map-li<c:if test="${moduleStatus.last}">-fin</c:if>">
                                        <div class="site-map-page titreModule" 
                                             data-brancheid="<c:out value="${brancheStatus.count}" />"
                                             data-moduleid="<c:out value="${moduleStatus.count}" />">
                                            <img src="images/<c:out value="${module.imageSrc}" />"/>
                                            &nbsp;<c:out value="${module.label}" />
                                        </div>
                                        <ul class="site-map-li-gen site-map-ul-pages" 
                                            data-moduleid="<c:out value="${moduleStatus.count}" />"
                                            data-brancheid="<c:out value="${brancheStatus.count}" />">

                                            <c:forEach items="${module.listeMenuLink}" var="page" varStatus="pageStatus">
                                                <li id="pageFormulaire<c:out value="${pageStatus.count}" />" 
                                                    class="site-map-li-gen site-map-li<c:if test="${pageStatus.last}">-fin</c:if>">
                                                    <div 
                                                        id="module-<c:out value="${moduleStatus.count}" />-page-<c:out value="${pageStatus.count}" />"
                                                        class="fullwebLink fullwebLinkStyle changerModule menuLink" 
                                                        data-url="<c:out value="${page.url}" />" 
                                                        data-moduleid="<c:out value="${module.moduleId}" />"
                                                        data-pageid="<c:out value="${page.id}" />">
                                                        <c:out value="${page.label}" />
                                                    </div>
                                                </li>
                                            </c:forEach>

                                        </ul>
                                    </li>
                                </c:forEach>

                            </ul>
                        </div>
                    </c:forEach>
                </div>    
            </div>
        </body>
    </html>
</f:view>
    