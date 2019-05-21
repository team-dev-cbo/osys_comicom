<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsf/html" prefix="h" %>
<%@ taglib uri="http://java.sun.com/jsf/core" prefix="f" %>
<%@ taglib uri="/WEB-INF/tld/myComponent.tld" prefix="m" %>
<%@ taglib uri="http://rcfaces.org/core" prefix="v"%>
<%@ taglib uri="http://rcfaces.org/html" prefix="vh"%>

<f:view locale="#{profilManagedBean.identifiedUser.locale}">
    <html>
        <head>
            <f:loadBundle basename="quartisweb/resources/private_language" var="language" />
            <vh:init id="init_1" />
            <m:init />
            <link type="text/css" media="screen" rel="stylesheet" href="css/style.css" />
            <vh:javaScript src="js/security.js" />
            <vh:javaScript src="js/md5.js" />
            <vh:javaScript src="js/admin_profils.js" />
        </head>

        <body onload="initPage();">

            <div class="adminProfil">
                        
            <c:if test="${!profilManagedBean.popupMessage}">
                <h:messages id="mess" style="padding-right: 20px; background-color: #FFFFFF; border: 1px solid #C0C0C0; position: absolute; top: 8px; left: 380px; z-index: 10; width: 338px; height: 20px; overflow: hidden;" infoStyle="color: #339966;font-weight:bold;" warnStyle="color: #FF6600;font-weight:bold;" errorStyle="color: #FF0000;font-weight:bold;" fatalStyle="color: #FF0000;font-weight:bold;font-size:15px;" />
                <img src="images/down_arrow1.png" style="background-color: #FFFFFF; position: absolute; top: 14px; left: 749px; z-index: 10; width: 11px; height: 6px; cursor: pointer;" onclick="resizeMessagesPanel(this)" onload="if(document.getElementById('mess')==null) this.style.display='none'">
            </c:if>

            <!-- popup pour messages bloquants -->
            <c:if test="${profilManagedBean.popupMessage}">
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
                                                <input type="button" class="commandButton btnOk" value="OK" onclick="hidePopupMessage()">
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
            <table id="panel_desactiv" style="background-color:#C0C0C0;filter:'alpha(opacity=30)';-moz-opacity:.30;opacity:.30;width:90%;height:90%;display:none;position:absolute;z-index:300;">
                <tr><td></td></tr>
            </table>

            <h:form id="form1" onsubmit="cryptPassword();">                    
                  <h:panelGrid id="toolbarMainPanel" width="100%" styleClass="toolbarOnTopAdmin" columns="15" rowClasses="top" >
                    <h:panelGrid id="toolbarPanel" columns="15" rowClasses="toolbarElementsHeight" style="float:right; padding-right:32px;line-height: 2px;">
                        <c:if test="${profilManagedBean.insertRendered}"> 
                            <v:imageButton  imageURL="images/edit.gif" selectionListener="#{profilManagedBean.resetFormAction}" toolTipText="#{language.nouveau}" /><br><br>
                        </c:if> 

                        <c:if test="${profilManagedBean.updateRendered}"> 
                            <v:imageButton imageURL="images/update.gif" selectionListener="#{profilManagedBean.selectLineAction}" toolTipText="#{language.modifier_ligne_select}" /><br><br>
                        </c:if> 

                        <c:if test="${profilManagedBean.deleteRendered}">
                            <img src="images/bin.gif" style="cursor:pointer;display:inherit;" onclick="showDeletePanel()" title="${language.supprimer_ligne_select}"><br><br>
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
                                        <h:commandButton actionListener="#{profilManagedBean.deleteProfilAction}" value="#{language.ok}" styleClass="commandButton btnOk"/>
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

                <h:inputHidden value="#{profilManagedBean.create}" />

                <c:choose>
                    <c:when test="${profilManagedBean.userValide==true}">
                        <table class="tabAdminProfil">
                            <tr class="tabAdminProfilTd1">
                                <td>
                                    <div id="container" class="ombre_tableau contenu" width="950" height="${profilManagedBean.dataGridContainerHeight}px">    
                                        <div id="containerBis" class="boite contenu" width="752" height="${profilManagedBean.dataGridContainerHeight}px">
                                            <v:tabbedPane id="tabbedpane_1" width="752" styleClass="tabbedPane1" height="#{profilManagedBean.dataGridContainerHeight}px" value="#{profilManagedBean.selectedTab}">
                                                <v:tab id="tab_1" value="TAB1" imageURL="images/display.png" text="#{language.profils}" width="752" height="#{profilManagedBean.dataGridContainerHeight}px" accessKey="l">

                                                    <v:lineBreak />

                                                    <h:panelGroup style="width:100%;padding-left: 5px;">
                                                        <!--  Tableau de la liste des favoris -->
                                                        
                                                        <c:if test="${profilManagedBean.updateRendered}">
                                                            <v:dataGrid
                                                                id="datagrid_1"
                                                                binding="#{profilManagedBean.dataGrid}"
                                                                selectedValues="#{profilManagedBean.indexesModel}"
                                                                doubleClickListener="#{profilManagedBean.selectLineAction}"
                                                                value="#{profilManagedBean.profilList}"
                                                                border="true"
                                                                styleClass="dataGrid1"
                                                                width="735"
                                                                height="#{profilManagedBean.dataGridHeight}"
                                                                rows="#{profilManagedBean.dataGridRowsPerPage}"
                                                                selectable="true"
                                                                selectionCardinality="*"
                                                                clientSelectionFullState="twoways"
                                                                var="profil">
                                                                <v:dataColumn
                                                                    value="#{profil.code}"
                                                                    text="#{language.code}"
                                                                    resizable="true"
                                                                    sortListener="alpha"
                                                                    width="300" />
                                                                <v:dataColumn
                                                                    value="#{profil.designation}"
                                                                    text="#{language.designation}"
                                                                    resizable="true"
                                                                    sortListener="alpha"
                                                                    width="430" />
                                                            </v:dataGrid>
                                                        </c:if>
                                                        <c:if test="${!profilManagedBean.updateRendered}">
                                                            <v:dataGrid
                                                                id="datagrid_1"
                                                                binding="#{profilManagedBean.dataGrid}"
                                                                selectedValues="#{profilManagedBean.indexesModel}"
                                                                value="#{profilManagedBean.profilList}"
                                                                border="true"
                                                                width="735"
                                                                height="#{profilManagedBean.dataGridHeight}"
                                                                rows="#{profilManagedBean.dataGridRowsPerPage}"
                                                                selectable="true"
                                                                selectionCardinality="*"
                                                                clientSelectionFullState="twoways"
                                                                var="profil">
                                                                <v:dataColumn
                                                                    value="#{profil.code}"
                                                                    text="#{language.code}"
                                                                    resizable="true"
                                                                    sortListener="alpha"
                                                                    width="300" />
                                                                <v:dataColumn
                                                                    value="#{profil.designation}"
                                                                    text="#{language.designation}"
                                                                    resizable="true"
                                                                    sortListener="alpha"
                                                                    width="430" />
                                                            </v:dataGrid>
                                                        </c:if>

                                                        <!-- Pager du tableau -->
                                                        <v:pager id="pager_1" for="datagrid_1" width="735" styleClass="pager"
                                                                 message="#{language.component_pager_message}"
                                                                 manyResultsMessage="#{language.component_pager_manyResultsMessage}"
                                                                 noPagedMessage="#{language.component_pager_noPagedMessage}"
                                                                 oneResultMessage="#{language.component_pager_oneResultMessage}"
                                                                 zeroResultMessage="#{language.component_pager_zeroResultMessage}"
                                                                 />

                                                    </h:panelGroup>
                                                </v:tab>
                                                <c:if test="${profilManagedBean.formTabVisible}">
                                                    <v:tab id="tab_2" value="TAB2" imageURL="images/form.png" text="#{language.formulaire}" width="752" height="580" accessKey="f">

                                                        <table style="height:100%;width:100%" cellspacing="0" cellpadding="0">
                                                            <tr id="trDataGridHeight" height="${profilManagedBean.dataGridHeight}">
                                                                <td valign="top">
                                                                    <div  styleClass="tab2" style="overflow:auto;height:100%;width:100%;border-bottom:1px solid #C0C0C0;">
                                                                        <table style="width:100%">
                                                                            <tr>
                                                                                <td align="center" style="padding:4 10 4 4">

                                                                                    <m:shadowPanel width="100%">
                                                                                        <m:taskPanel myid="form_task_global" value="#{language.infos_globales}" icon_url="images/form.png" width="100%" height="96px">

                                                                                            <h:panelGrid columns="3" style="width:360px">

                                                                                                <!-- ligne 1 -->
                                                                                                <h:outputText value="#{language.code}" style="width:140px;text-align:right;"/>
                                                                                                <h:outputText value=" : "/>

                                                                                                <c:if test="${profilManagedBean.create}">
                                                                                                    <h:inputText value="#{profilManagedBean.formProfil.code}" />
                                                                                                </c:if>
                                                                                                <c:if test="${!profilManagedBean.create}">
                                                                                                    <h:panelGroup>
                                                                                                        <h:inputHidden value="#{profilManagedBean.formProfil.code}" />
                                                                                                        <h:outputText value="#{profilManagedBean.formProfil.code}" />
                                                                                                    </h:panelGroup>
                                                                                                </c:if>

                                                                                                <!-- ligne 2 -->
                                                                                                <h:outputText value="#{language.designation}" style="width:140px;text-align:right;"/>
                                                                                                <h:outputText value=" : "/>
                                                                                                <h:inputText value="#{profilManagedBean.formProfil.designation}" />

                                                                                            </h:panelGrid>


                                                                                        </m:taskPanel>
                                                                                    </m:shadowPanel>

                                                                                    <m:shadowPanel width="100%">
                                                                                        <m:taskPanel myid="form_task_droits" value="#{language.droits_lies_profil}" icon_url="images/form.png" width="100%" height="360px">
                                                                                            
                                                                                            <div id="div_liste_droits" style="height:410px;border:1px solid #C0C0C0;overflow:auto;margin:0 5 0 5;">
                                                                                                <h:dataTable width="100%" 
                                                                                                             value="#{profilManagedBean.droitList}" 
                                                                                                             var="droit" 
                                                                                                             headerClass="profilDroitsTableHeader" 
                                                                                                             columnClasses="profilDroitsTableColumn, profilDroitsTableColumn, profilDroitsTableColumnCheck, profilDroitsTableColumnCheck, profilDroitsTableColumnCheck, profilDroitsTableColumnCheck" 
                                                                                                             style="border-collapse: collapse;">
                                                                                                    <h:column>
                                                                                                        <f:facet name="header">
                                                                                                            <h:outputText value="#{language.module}" />
                                                                                                        </f:facet>
                                                                                                        <h:outputText value="#{droit.moduleName}" />
                                                                                                    </h:column>
                                                                                                    <h:column>
                                                                                                        <f:facet name="header">
                                                                                                            <h:outputText value="#{language.page}" />
                                                                                                        </f:facet>
                                                                                                        <h:outputText value="#{droit.pageName}" />
                                                                                                    </h:column>
                                                                                                    <h:column>
                                                                                                        <f:facet name="header">
                                                                                                            <h:panelGroup>
                                                                                                                <h:outputText value="#{language.lecture}" />
                                                                                                                <v:lineBreak />
                                                                                                                <h:selectBooleanCheckbox id="checkReadGlobal" onclick="checkAllowReadGlobal(this)" value="false" />
                                                                                                            </h:panelGroup>
                                                                                                        </f:facet>
                                                                                                        <h:selectBooleanCheckbox id="checkRead" value="#{droit.allowedRead}" onclick="checkAllowRead(this)"  />
                                                                                                    </h:column>
                                                                                                    <h:column>
                                                                                                        <f:facet name="header">
                                                                                                            <h:panelGroup>
                                                                                                                <h:outputText value="#{language.creation}" />
                                                                                                                <v:lineBreak />
                                                                                                                <h:selectBooleanCheckbox id="checkInsertGlobal" onclick="checkAllowInsertGlobal(this)" value="false" />
                                                                                                            </h:panelGroup>
                                                                                                        </f:facet>
                                                                                                        <h:selectBooleanCheckbox id="checkInsert" value="#{droit.allowedInsert}" onclick="checkAllowInsert(this)" />
                                                                                                    </h:column>
                                                                                                    <h:column>
                                                                                                        <f:facet name="header">
                                                                                                            <h:panelGroup>
                                                                                                                <h:outputText value="#{language.modification}" />
                                                                                                                <v:lineBreak />
                                                                                                                <h:selectBooleanCheckbox id="checkUpdateGlobal" onclick="checkAllowUpdateGlobal(this)" value="false" />
                                                                                                            </h:panelGroup>
                                                                                                        </f:facet>
                                                                                                        <h:selectBooleanCheckbox id="checkUpdate" value="#{droit.allowedUpdate}" onclick="checkAllowUpdate(this)" />
                                                                                                    </h:column>
                                                                                                    <h:column>
                                                                                                        <f:facet name="header">
                                                                                                            <h:panelGroup>
                                                                                                                <h:outputText value="#{language.suppression}" />
                                                                                                                <v:lineBreak />
                                                                                                                <h:selectBooleanCheckbox id="checkDeleteGlobal" onclick="checkAllowDeleteGlobal(this)" value="false" />
                                                                                                            </h:panelGroup>
                                                                                                        </f:facet>
                                                                                                        <h:selectBooleanCheckbox id="checkDelete" value="#{droit.allowedDelete}" onclick="checkAllowDelete(this)" />
                                                                                                    </h:column>
                                                                                                </h:dataTable>
                                                                                            </div>

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
                                                                    <m:shadowPanel width="120px" height="25px" style="position: inherit">
                                                                        <h:commandButton styleClass="commandButton btnOk" actionListener="#{profilManagedBean.saveProfilAction}" value="#{language.enregistrer}"  />
                                                                    </m:shadowPanel>
                                                                </td>
                                                            </tr>
                                                        </table>

                                                    </v:tab>
                                                </c:if>

                                            </v:tabbedPane>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </c:when>
                    <c:when test="${profilManagedBean.userValide==false}">
                        <f:verbatim>
                            <table style="width: 752px;height: 615px;">
                                <tr>
                                    <td style="text-align: center;vertical-align:center;color:#FF0000;font-size:12px;font-weight:bold;">
                                        <h:outputText value="#{language.session_expire}" />
                                    </td>
                                </tr>
                            </table>
                        </f:verbatim>
                    </c:when>
                </c:choose>

                <h:inputHidden id="webContainerWidth" value="#{profilManagedBean.webContainerWidthString}" />
                <h:inputHidden id="webContainerHeight" value="#{profilManagedBean.webContainerHeightString}" />

            </h:form>  
            </div>  
            
        </body>
    </html>
</f:view>