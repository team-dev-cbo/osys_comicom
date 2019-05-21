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
            <c:if test="${!userManagedBean.popupMessage}">
                <h:messages id="mess" style="padding-right:20px;background-color:#FFFFFF;border:1px solid #C0C0C0;position:absolute;top:8px;left:380px;z-index:10;width:338px;height:20px;overflow:hidden;" infoStyle="color: #339966;font-weight:bold;" warnStyle="color: #FF6600;font-weight:bold;" errorStyle="color: #FF0000;font-weight:bold;" fatalStyle="color: #FF0000;font-weight:bold;font-size:15px;" />
                <img src="images/down_arrow1.png" style="background-color:#FFFFFF;position:absolute;top:14px;left:749px;z-index:10;width:11px;height:6px;cursor:pointer;" onclick="resizeMessagesPanel(this)" onload="if(document.getElementById('mess')==null) this.style.display='none'">
            </c:if>

            <!-- popup pour messages bloquants -->
            <c:if test="${userManagedBean.popupMessage}">
                <table id="panel_desactiv_for_popup_message" style="background-color:#C0C0C0;filter:'alpha(opacity=30)';-moz-opacity:.30;opacity:.30;width:100%;height:100%;position:absolute;z-index:300;">
                    <tr><td></td></tr>
                </table>

                <table id="popupTable" style="width:100%;height:100%;position:absolute;z-index:300;">
                    <tr>
                        <td align="center" valign="middle">
                            <m:shadowPanel width="400" height="200">
                                <table cellspacing="0" cellpadding="0" style="filter:'alpha(opacity=100)';border:1px solid #3877AA;background-color:#FFFFFF;width:400px;height:200px;">
                                    <tr>
                                        <td>
                                            <div style="width:100%;height:100px;overflow:auto;border-top:1px solid #C0C0C0;border-bottom:1px solid #C0C0C0;">
                                                <h:messages id="mess1" style="z-index:10;width:100%;" infoStyle="color: #339966;font-weight:bold;" warnStyle="color: #FF6600;font-weight:bold;" errorStyle="color: #FF0000;font-weight:bold;" fatalStyle="color: #FF0000;font-weight:bold;font-size:15px;" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center">
                                            <m:shadowPanel width="120" height="25">
                                                <input type="button" class="commandButton btnOk btnOkAdminUsers" value="OK" onclick="hidePopupMessage()">
                                            </m:shadowPanel>
                                        </td>
                                    </tr>
                                </table>
                            </m:shadowPanel>
                        </td>
                    </tr>
                </table>
            </c:if>

            <!-- Tableau qui, lorsqu'on l'affiche prend toute la surface de la fenêtre et donc désactive la page -->
            <table id="panel_desactiv" style="background-color:#C0C0C0;filter:'alpha(opacity=30)';-moz-opacity:.30;opacity:.30;width:100%;height:99%;display:none;position:absolute;z-index:300;">
                <tr><td></td></tr>
            </table>


            <h:form id="form1" onsubmit="cryptPassword();">
                                   
                  <h:panelGrid id="toolbarMainPanel" width="100%" styleClass="toolbarOnTopAdmin" columns="15" rowClasses="top" >
                    <h:panelGrid id="toolbarPanel" columns="15" rowClasses="toolbarElementsHeight" style="height:40px;float:right; padding-right:32px;line-height: 1px;">
                        <c:if test="${userManagedBean.insertRendered}"> 
                            <v:imageButton  imageURL="images/edit.gif" selectionListener="#{userManagedBean.resetFormAction}" toolTipText="#{language.nouveau}" /><br><br>
                        </c:if> 

                        <c:if test="${userManagedBean.updateRendered}"> 
                            <v:imageButton imageURL="images/update.gif" selectionListener="#{userManagedBean.selectLineAction}" toolTipText="#{language.modifier_ligne_select}" /><br><br>
                        </c:if> 

                        <c:if test="${userManagedBean.deleteRendered}">
                            <img src='images/bin.gif' style="cursor:pointer;" onclick="showDeletePanel()" title="${language.supprimer_ligne_select}"><br><br>
                        </c:if>
                    </h:panelGrid>
                </h:panelGrid>

                <!-- Tableau de confirmation de la suppression -->
                <h:panelGrid id="panel_delete" style="display:none;position:absolute;z-index:300;left:226px;top:207px;">
                    <m:shadowPanel width="300" height="100">
                        <table style="border:1px solid #3877AA;width:300px;height:100px;">
                            <tr>
                                <td colspan="2" align="center">
                                    <h:outputText value="#{language.confirm_suppr}" />
                                </td>
                            </tr>
                            <tr>
                                <td align="center">
                                    <m:shadowPanel width="120px" height="25px">
                                        <input type="button" onclick="hideDeletePanel()" value="${language.annuler}" class="commandButton btnCancel">
                                    </m:shadowPanel>
                                </td>
                                <td align="center">
                                    <m:shadowPanel width="120px" height="25px">
                                        <h:commandButton actionListener="#{userManagedBean.deleteUserAction}" value="#{language.ok}" styleClass="commandButton btnOk btnOkAdminUsers" />
                                    </m:shadowPanel>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <img id="img_load_import" src="images/loading4.gif" style="display:none;">
                                </td>
                            </tr>
                        </table>
                    </m:shadowPanel>
                </h:panelGrid>


                <h:inputHidden value="#{userManagedBean.create}" />

                <c:choose>
                    <c:when test="${userManagedBean.userValide==true}">
                        <h:panelGrid columns="2" styleClass="panelAdminUsers">
                            <h:panelGroup>
                                <!--div id="container" class="ombre_tableau contenu" width="752" height="615"-->
                                <div id="container" class="ombre_tableau contenu" width="950" height="${userManagedBean.dataGridContainerHeight}px">
                                    <!--div class="boite contenu" width="752" height="615"-->
                                    <div class="boite contenu" width="752" height="${userManagedBean.dataGridContainerHeight}px">
                                        <v:tabbedPane id="tabbedpane_1" styleClass="tabbedPane2" width="752" height="#{userManagedBean.dataGridContainerHeight}px" value="#{userManagedBean.selectedTab}">
                                            <v:tab id="tab_1" value="TAB1" imageURL="images/display.png" text="#{language.utilisateurs}" width="746" height="#{userManagedBean.dataGridContainerHeight}px" accessKey="l" >

                                                <v:lineBreak />

                                                <h:panelGroup style="width:100%;padding-left: 5px;">
                                                    <!--  Tableau de la liste des favoris -->
                                                    <!--m:shadowPanel width="735" height="502" style="padding: 0 0 0 5;"-->
                                                    <c:if test="${userManagedBean.updateRendered}">
                                                        <v:dataGrid
                                                            id="datagrid_1"
                                                            styleClass="dataGrid1"
                                                            binding="#{userManagedBean.dataGrid}"
                                                            selectedValues="#{userManagedBean.indexesModel}"
                                                            doubleClickListener="#{userManagedBean.selectLineAction}"
                                                            value="#{userManagedBean.userList}"
                                                            border="true"
                                                            width="740"
                                                            height="#{userManagedBean.dataGridHeight}"
                                                            rows="#{userManagedBean.dataGridRowsPerPage}"
                                                            selectable="true"
                                                            selectionCardinality="*"
                                                            clientSelectionFullState="twoways"
                                                            var="user">
                                                            <v:dataColumn
                                                                value="#{user.identifiant}"
                                                                text="#{language.login}"
                                                                resizable="true"
                                                                sortListener="alpha"
                                                                width="180" />
                                                            <v:dataColumn
                                                                value="#{user.nom}"
                                                                text="#{language.nom}"
                                                                resizable="true"
                                                                sortListener="alpha"
                                                                width="276" />
                                                            <v:dataColumn
                                                                value="#{user.prenom}"
                                                                text="#{language.prenom}"
                                                                resizable="true"
                                                                sortListener="alpha"
                                                                width="280" />
                                                        </v:dataGrid>
                                                    </c:if>
                                                    <c:if test="${!userManagedBean.updateRendered}">
                                                        <v:dataGrid
                                                            id="datagrid_1"
                                                            binding="#{userManagedBean.dataGrid}"
                                                            selectedValues="#{userManagedBean.indexesModel}"
                                                            value="#{userManagedBean.userList}"
                                                            border="true"
                                                            width="740"
                                                            height="#{userManagedBean.dataGridHeight}"
                                                            rows="#{userManagedBean.dataGridRowsPerPage}"
                                                            selectable="true"
                                                            selectionCardinality="*"
                                                            clientSelectionFullState="twoways"
                                                            var="user">
                                                            <v:dataColumn
                                                                value="#{user.identifiant}"
                                                                text="#{language.login}"
                                                                resizable="true"
                                                                sortListener="alpha"
                                                                width="180" />
                                                            <v:dataColumn
                                                                value="#{user.nom}"
                                                                text="#{language.nom}"
                                                                resizable="true"
                                                                sortListener="alpha"
                                                                width="276" />
                                                            <v:dataColumn
                                                                value="#{user.prenom}"
                                                                text="#{language.prenom}"
                                                                resizable="true"
                                                                sortListener="alpha"
                                                                width="280" />
                                                        </v:dataGrid>
                                                    </c:if>

                                                    <!--/m:shadowPanel-->
                                                    <!-- clientSelectionFullState="twoways" -->
                                                    <!-- Pager du tableau -->
                                                    <v:pager id="pager_1" for="datagrid_1" width="740" styleClass="pager"
                                                             message="#{language.component_pager_message}"
                                                             manyResultsMessage="#{language.component_pager_manyResultsMessage}"
                                                             noPagedMessage="#{language.component_pager_noPagedMessage}"
                                                             oneResultMessage="#{language.component_pager_oneResultMessage}"
                                                             zeroResultMessage="#{language.component_pager_zeroResultMessage}"
                                                             />

                                                </h:panelGroup>
                                            </v:tab>
                                            <c:if test="${userManagedBean.formTabVisible}">
                                                <v:tab id="tab_2" value="TAB2" imageURL="images/form.png" text="#{language.formulaire}" width="746" height="700" accessKey="f">

                                                    <table style="height:100%;width:100%" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td valign="top">
                                                                <div style="overflow:auto;height:580px;width:100%;border-bottom:1px solid #C0C0C0;">
                                                                    <table style="width:100%;">
                                                                        <tr>
                                                                            <td align="center" style="padding:4 10 4 4">

                                                                                <m:shadowPanel width="100%">
                                                                                    <m:taskPanel myid="form_task_global" value="#{language.infos_globales}" icon_url="images/form.png" width="100%" height="160">

                                                                                        <c:if test="${userManagedBean.create}">
                                                                                            <h:panelGrid columns="2" styleClass="deuxColonnesDeLarge">
                                                                                                <h:panelGrid columns="3" styleClass="troisColonnesDeLarge">
                                                                                                    <!-- ligne 1 -->
                                                                                                    <h:outputText value="#{language.login}" styleClass="labelAdminUsers"/>
                                                                                                    <h:outputText value=" : "/>
                                                                                                    <h:inputText value="#{userManagedBean.formUser.identifiant}" styleClass="champAdminUsers champBordure" />

                                                                                                    <h:outputText value="#{language.profil}" styleClass="labelAdminUsers"/>
                                                                                                    <h:outputText value=" : "/>
                                                                                                    <h:selectOneListbox size="1" value="#{userManagedBean.formUser.codeProfil}" styleClass="champAdminUsers champBordure">
                                                                                                        <f:selectItem itemValue="" itemLabel="" />
                                                                                                        <f:selectItems value="#{userManagedBean.selectItemProfilList}" />
                                                                                                    </h:selectOneListbox>

                                                                                                    <h:outputText value="#{language.nom}" styleClass="labelAdminUsers"/>
                                                                                                    <h:outputText value=" : "/>
                                                                                                    <h:inputText value="#{userManagedBean.formUser.nom}" styleClass="champAdminUsers champBordure" />

                                                                                                    <h:outputText value="#{language.prenom}" styleClass="labelAdminUsers"/>
                                                                                                    <h:outputText value=" : "/>
                                                                                                    <h:inputText value="#{userManagedBean.formUser.prenom}" styleClass="champAdminUsers champBordure" />

                                                                                                    <h:panelGroup style="display:none;">
                                                                                                        <h:inputSecret id="saisie_password" styleClass="champBordure" />
                                                                                                        <h:inputHidden id="password" value="#{userManagedBean.formUser.mdp}" />
                                                                                                    </h:panelGroup>


                                                                                                </h:panelGrid>
                                                                                                <h:panelGrid columns="3" styleClass="troisColonnesDeLarge">
                                                                                                    <h:outputText value="#{language.site}" styleClass="carreAdminUsers"/>
                                                                                                    <h:outputText value=" : "/>
                                                                                                    <h:selectManyListbox size="5" style="width:160px;text-align:left;" value="#{userManagedBean.selectItemUserCodeSiteList}">
                                                                                                        <f:selectItems value="#{userManagedBean.selectItemSiteList}" />
                                                                                                    </h:selectManyListbox>

                                                                                                </h:panelGrid>
                                                                                            </h:panelGrid>

                                                                                        </c:if>

                                                                                        <c:if test="${!userManagedBean.create}">

                                                                                            <h:panelGrid columns="2" styleClass="deuxColonnesDeLarge">
                                                                                                <h:panelGrid columns="3" styleClass="troisColonnesDeLarge">
                                                                                                    <!-- ligne 1 -->
                                                                                                    <h:outputText value="#{language.login}" styleClass="labelAdminUsers"/>
                                                                                                    <h:outputText value=" : "/>
                                                                                                    <h:inputText value="#{userManagedBean.formUser.identifiant}" styleClass="champAdminUsers champBordure" />

                                                                                                    <h:outputText value="#{language.profil}" styleClass="labelAdminUsers"/>
                                                                                                    <h:outputText value=" : "/>
                                                                                                    <h:selectOneListbox size="1" value="#{userManagedBean.formUser.codeProfil}" styleClass="champAdminUsers champBordure">
                                                                                                        <f:selectItem itemValue="" itemLabel="" />
                                                                                                        <f:selectItems value="#{userManagedBean.selectItemProfilList}" />
                                                                                                    </h:selectOneListbox>

                                                                                                    <h:outputText value="#{language.nom}" styleClass="labelAdminUsers"/>
                                                                                                    <h:outputText value=" : "/>
                                                                                                    <h:inputText value="#{userManagedBean.formUser.nom}" styleClass="champAdminUsers champBordure" />

                                                                                                    <h:outputText value="#{language.prenom}" styleClass="labelAdminUsers"/>
                                                                                                    <h:outputText value=" : "/>
                                                                                                    <h:inputText value="#{userManagedBean.formUser.prenom}" styleClass="champAdminUsers champBordure" />

                                                                                                    <h:panelGroup style="display:none;">
                                                                                                        <h:inputSecret id="saisie_password" styleClass="champBordure" />
                                                                                                        <h:inputHidden id="password" value="#{userManagedBean.formUser.mdp}" />
                                                                                                    </h:panelGroup>


                                                                                                </h:panelGrid>
                                                                                                <h:panelGrid columns="3" styleClass="troisColonnesDeLarge">
                                                                                                    <h:outputText value="#{language.site}" styleClass="carreAdminUsers"/>
                                                                                                    <h:outputText value=" : "/>
                                                                                                    <h:selectManyListbox size="4" style="width:160px;text-align:left;" value="#{userManagedBean.selectItemUserCodeSiteList}">
                                                                                                        <f:selectItems value="#{userManagedBean.selectItemSiteList}" />
                                                                                                    </h:selectManyListbox>
                                                                                                    <h:outputText value="#{language.reset_mot_passe}" styleClass="carreAdminUsers"/>
                                                                                                    <h:outputText value=":"/>
                                                                                                    <h:panelGroup>
                                                                                                        <h:selectBooleanCheckbox id="check_password" value="#{userManagedBean.changePassword}" />
                                                                                                        <h:inputHidden value="#{userManagedBean.formUser.mdp}" />
                                                                                                        <h:inputHidden id="emptypassword" value="#{userManagedBean.emptymdp}" />
                                                                                                        <b><h:outputText value="#{language.password_reset_sso_warning}" rendered="#{userManagedBean.connexionSSOActivee}" /></b>
                                                                                                    </h:panelGroup>
                                                                                                </h:panelGrid>
                                                                                            </h:panelGrid>

                                                                                        </c:if>

                                                                                    </m:taskPanel>
                                                                                </m:shadowPanel>

                                                                        <%-- Modification P.MAHE du 17/08/2016 :
                                                                             Suppression des informations liées à QTools
                                                                                <m:shadowPanel width="100%">
                                                                                    <m:taskPanel myid="form_task_qtools" value="Quartis Tools" icon_url="images/form.png" width="100%" height="70px;">
                                                                                        <h:panelGrid columns="6" style="width:600px;text-align:left;">
                                                                                            <h:outputText value="#{language.login}" styleClass="labelAdminUsers"/>
                                                                                            <h:outputText value=" : "/>
                                                                                            <h:inputText value="#{userManagedBean.formUser.identQtools}" styleClass="champAdminUsers champBordure" />

                                                                                            <h:outputText value="#{language.password}" styleClass="labelAdminUsers"/>
                                                                                            <h:outputText value=" : "/>
                                                                                            <h:inputText value="#{userManagedBean.formUser.mdpQtools}" styleClass="champAdminUsers champBordure" />
                                                                                        </h:panelGrid>
                                                                                    </m:taskPanel>
                                                                                </m:shadowPanel>
                                                                        --%>
                                                                        
                                                                                <m:shadowPanel width="100%">
                                                                                    <m:taskPanel myid="form_task_locale" value="#{language.langue}" icon_url="images/form.png" width="100%" height="70px;">
                                                                                        <h:panelGrid columns="3"  style="width:310px;text-align:left;">
                                                                                            <h:outputText value="#{language.langue}" styleClass="labelAdminUsers"/>
                                                                                            <h:outputText value=" : "/>
                                                                                            <h:selectOneListbox  converter="LocaleConverter" size="1" value="#{userManagedBean.formUser.locale}" style="border:1px solid #7F9DB9;width:210px;text-align:left;" >
                                                                                                <f:selectItems value="#{userManagedBean.selectItemLocaleList}" />
                                                                                                <!--f:selectItem itemValue="en_US" itemLabel="English" /-->
                                                                                                <!--f:selectItem itemValue="fr_FR" itemLabel="Français"/-->
                                                                                                <!--f:selectItem itemValue="de_DE" itemLabel="Deustch" /-->
                                                                                                <!--f:selectItem itemValue="es_ES" itemLabel="Español" /-->
                                                                                                <!--f:selectItem itemValue="nl_NL" itemLabel="Nederlands" /-->
                                                                                                <!--f:selectItem itemValue="pt" itemLabel="Português" /-->
                                                                                                <!--f:selectItem itemValue="br" itemLabel="Português brasileiro" /-->
                                                                                                <!--f:selectItem itemValue="zh_CN" itemLabel="??" /-->
                                                                                            </h:selectOneListbox>
                                                                                        </h:panelGrid>
                                                                                    </m:taskPanel>
                                                                                </m:shadowPanel>




                                                                                <m:shadowPanel width="100%">
                                                                                    <m:taskPanel myid="form_task_parameter" value="#{language.supervisor_restriction}" icon_url="images/form.png" width="100%" height="160">

                                                                                        <h:commandLink actionListener="#{userManagedBean.resetRestrictionParameters}" value="#{language.supervisor_restriction_delete}"/>
                                                                                        <br/>
                                                                                        <h:dataTable id="form_restrictions" var="restriction" value="#{userManagedBean.restrictionParameters}" >
                                                                                            <h:column >
                                                                                                <f:facet name="header">
                                                                                                    <h:outputText value="#{language.supervisor_restriction_parameter}" styleClass="labelAdminUsers"/>
                                                                                                </f:facet>
                                                                                                <h:outputText value="#{restriction.label}" styleClass="labelAdminUsers"/>
                                                                                            </h:column>

                                                                                            <h:column>
                                                                                                <f:facet name="header">
                                                                                                    <h:outputText value="#{language.supervisor_restriction_values}" style="width:180px;text-align:right;"/>
                                                                                                </f:facet> 
                                                                                                <h:inputText value="#{restriction.values}" style="width:180px;text-align:left;"/>
                                                                                            </h:column>
                                                                                        </h:dataTable>
                                                                                    </m:taskPanel>
                                                                                </m:shadowPanel>

                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="right" class="btnBottomAdmin">
                                                                <m:shadowPanel width="120px" height="25px">
                                                                    <h:commandButton styleClass="commandButton btnOk btnOkAdminUsers" actionListener="#{userManagedBean.saveUserAction}" value="#{language.enregistrer}"/>
                                                                </m:shadowPanel>
                                                            </td>
                                                        </tr>
                                                    </table>

                                                </v:tab>
                                            </c:if>



                                        </v:tabbedPane>
                                    </div>
                                </div>
                            </h:panelGroup>
                        </h:panelGrid>
                    </c:when>
                    <c:when test="${userManagedBean.userValide==false}">
                        <f:verbatim>
                            <table style="width: 752;height: 615;">
                                <tr>
                                    <td style="text-align: center;vertical-align:center;color:#FF0000;font-size:12px;font-weight:bold;">
                                        <h:outputText value="#{language.session_expire}" />
                                    </td>
                                </tr>
                            </table>
                        </f:verbatim> 
                    </c:when>
                </c:choose>



                <h:inputHidden id="webContainerWidth" value="#{userManagedBean.webContainerWidthString}" />
                <h:inputHidden id="webContainerHeight" value="#{userManagedBean.webContainerHeightString}" />

            </h:form>  
        </div>
        </body>
    </html>
</f:view>