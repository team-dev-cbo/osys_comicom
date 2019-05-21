<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsf/html" prefix="h" %>
<%@ taglib uri="http://java.sun.com/jsf/core" prefix="f" %>
<%@ taglib uri="/WEB-INF/tld/myComponent.tld" prefix="m" %>
<%@ taglib uri="http://rcfaces.org/core" prefix="v"%>
<%@ taglib uri="http://rcfaces.org/html" prefix="vh"%>

<f:view locale="#{userManagedBean.identifiedUser.locale}">
    <html>
        <head>
            <f:loadBundle basename="quartisweb/resources/private_language" var="language" />

            <vh:init id="init_1" />
            <m:init />
            <link type="text/css" rel="stylesheet" href="css/style.css" />
            <vh:javaScript src="js/security.js" />
            <vh:javaScript src="js/md5.js" />
            <vh:javaScript src="js/admin_users.js" />
        </head>

        <body onload="initPage();" style="-moz-box-sizing:border-box; box-sizing:border-box;">
            <div class="adminUsers">
            <h:form id="formUserConnected">
                
                <div class="container">
                    <div class="content">
                        <h2> <h:outputText value="#{language.listusers_list}"/> </h2>
                        <table class="sedaptaTable">
                            <tr class="tableHeader">
                                <th style="width:30%"><h:outputText value="#{language.listusers_login}"/></th>
                                <th style="width:40%"><h:outputText value="#{language.listusers_ip}"/></th>
                                <th style="width:30%"><h:outputText value="#{language.listusers_action}"/></th>
                            </tr>
                            <c:forEach var="userConnect" items="${connectedUsersManagedBean.listUsers}">
                                <tr onclick="selectUser(this)">
                                    <td>${userConnect.login}</td>
                                    <td>${userConnect.ip}</td>
                                    <td>
                                        <h:commandButton id="deleteSelectedUser" 
                                            actionListener="#{connectedUsersManagedBean.disconnectUser}"
                                            value="#{language.listusers_disconnect}" 
                                            styleClass="commandButton btnCancel">
                                            <f:attribute name="userAttribute" value="#{userConnect.login}" />
                                        </h:commandButton> 
                                    </td>
                                </tr>           
                            </c:forEach>
                                
                            <h:inputText styleClass="hidden" id="loginSelectedInput" value="#{connectedUsersManagedBean.selectedUser}" />
                        </table>
                        
                        <div class="alert ${connectedUsersManagedBean.classInfoMessage}">
                            <h:outputText value="#{connectedUsersManagedBean.infoMessage}" />
                        </div>
                    </div>
                </div>
                <h:inputHidden id="webContainerWidth" value="#{userManagedBean.webContainerWidthString}" />
                <h:inputHidden id="webContainerHeight" value="#{userManagedBean.webContainerHeightString}" />
            </h:form>  
        </div>
        </body>
        <script>
            function selectUser(elema) {
                var login = elema.children[0].innerText;
                var hiddenInput = document.getElementById("formUserConnected:loginSelectedInput");
                hiddenInput.value = login;
            }
        </script>
    </html>
</f:view>