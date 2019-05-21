<%-- 
    Document   : formulaire
    Created on : 1 juil. 2008, 10:04:54
    Author     : guerineau
--%>

<%@ page contentType="text/html; charset=UTF-8" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsf/html" prefix="h" %>
<%@ taglib uri="http://java.sun.com/jsf/core" prefix="f" %>
<%@ taglib uri="/WEB-INF/tld/myComponent.tld" prefix="m" %>
<%@ taglib uri="http://rcfaces.org/core" prefix="v"%> 
<%@ taglib uri="http://rcfaces.org/html" prefix="vh"%>

<%--@page contentType="text/html" pageEncoding="UTF-8"--%>

<f:view locale="#{formulairesManagedBean.connectedUser.locale}">
    <html>
        <head>
            <f:loadBundle basename="quartisweb/resources/private_language" var="language" />

            <vh:init id="init_1" literalLocale="#{formulairesManagedBean.locale}"/>

            <m:init/>
            <link type="text/css" rel="stylesheet" href="css/style.css" />
            <vh:javaScript id="tableaujs" src="js/formulaire.js" />
            <vh:javaScript id="dimensionjs" src="js/dimension.js" />
            <vh:javaScript id="securityjs" src="js/security.js" />
            <vh:javaScript id="jquery" src="js/jquery-1.11.1.min.js" />
            
        </head>
        <body onload="initPage();s_init();" style="overflow:hidden;border:0px none #FFFFFF;">
            <!-- security(); -->

            <h:form id="form1" onkeypress="if(event.keyCode == 13) { if(document.activeElement.type == 'text') { onMouseEnter(); return false;}}">
                <!-- Barre de droite (cf refonte QuartisWeb 2017/12 CJ) -->
                <m:shadowPanel id="toolbarShadowPanel" height="40px" width="100%">
                                <h:panelGrid id="toolbarMainPanel" width="100%" styleClass="toolbarOnTop" columns="15" rowClasses="top" >
                                    <h:panelGrid id="toolbarPanel" columns="15" rowClasses="toolbarElementsHeight" style="float:right; padding-right:32px; padding-top:2px;">
                                        <!--img id="imgBack" src="images/edit.gif" toolTipText="Retour" onclick="history.back()" /-->
                                        <v:imageButton id="imgInsert" 
                                                       imageURL="images/edit.gif" 
                                                       toolTipText="#{language.nouveau}" 
                                                       rendered="#{formulairesManagedBean.insertRendered}" 
                                                       actionListener="#{formulairesManagedBean.resetData}" />
                                        <v:imageButton id="imgUpdate" 
                                                       imageURL="images/update.gif" 
                                                       toolTipText="#{language.modifier_ligne_select}" 
                                                       rendered="#{formulairesManagedBean.updateRendered}" 
                                                       actionListener="#{formulairesManagedBean.selectData}" />
                                        <v:imageButton id="imgDelete" 
                                                       imageURL="images/bin.gif" 
                                                       actionListener="showDeletePanel('suppadmin')" 
                                                       toolTipText="#{language.supprimer_ligne_select}" 
                                                       rendered="#{formulairesManagedBean.deleteRendered && formulairesManagedBean.genericHead.nomChampSupp!=''}" />

                                        <v:imageButton id="imgPhysDelete" 
                                                       imageURL="images/redbin.gif" 
                                                       actionListener="showDeletePanel('supp')" 
                                                       toolTipText="#{language.supprimer_definitivement_ligne}" 
                                                       rendered="#{formulairesManagedBean.deletePhysRendered || formulairesManagedBean.genericHead.nomChampSupp==''}" />
                                        <v:imageButton id="imgRestore" 
                                                       imageURL="images/reload.gif" 
                                                       actionListener="showDeletePanel('rest')" 
                                                       toolTipText="#{language.restaurer_ligne_select}" 
                                                       rendered="#{formulairesManagedBean.restoreRendered}" />
                                        <h:panelGroup id="hrGroup1" 
                                                      rendered="#{formulairesManagedBean.insertRendered || 
                                                                  formulairesManagedBean.updateRendered || 
                                                                  formulairesManagedBean.deleteRendered || 
                                                                  formulairesManagedBean.deletePhysRendered || 
                                                                  formulairesManagedBean.restoreRendered}">
                                        </h:panelGroup>
                                        <v:imageButton id="imgExport" 
                                                       imageURL="images/export.gif" 
                                                       actionListener="showExportPanel()" 
                                                       toolTipText="#{language.exporter_les_donnees}" />
                                        <v:imageButton id="imgImport" 
                                                       imageURL="images/import.gif" 
                                                       actionListener="#{formulairesManagedBean.activateImport}" 
                                                       toolTipText="#{language.importer_des_donnees}" 
                                                       rendered="#{formulairesManagedBean.insertRendered || formulairesManagedBean.updateRendered}" />
                                        <h:panelGroup id="addFavoriteGroup" rendered="#{!formulairesManagedBean.inFavorites}">
                                            <h:inputHidden id="favoritePageName" value="#{formulairesManagedBean.genericHead.colsGroups[0].name}" />
                                            <img id="imgAddFavorite" 
                                                 src="images/keditbookmarks.png" 
                                                 title="${language.ajouter_favoris}" 
                                                 onclick="addToFavorites()" 
                                                 style="cursor:pointer;">
                  
                                        </h:panelGroup>
                                        <h:panelGroup id="removeFavoriteGroup" rendered="#{formulairesManagedBean.inFavorites}">
                                            <img id="imgRemoveFavorite" 
                                                 src="images/favorite_remove.png" 
                                                 title="${language.retirer_favoris}" 
                                                 onclick="removeFromFavorites()" 
                                                 style="cursor:pointer;">
                                        </h:panelGroup>
                                        <%--
                                        <v:imageButton id="imgSavePref" 
                                                        imageURL="images/filesave.png" 
                                                        toolTipText="#{language.sauv_pref}" 
                                                        actionListener="#{formulairesManagedBean.saveData}" />
                                        --%>
                                    </h:panelGrid>
                                </h:panelGrid>
                </m:shadowPanel>
                                            
                <h:inputText id="selectedTab" value="#{formulairesManagedBean.selectedPane}" style="display:none"/>
                
                <!-- pour le choix de couleur (rempli par JavaScript) -->
                <h:panelGroup id="color_picker_container">

                </h:panelGroup>

                <!-- Tableau recouvrant toute la surface de la page pour empêcher toute action sur celle-ci -->
                <h:panelGrid id="panel_desactiv" 
                             styleClass="prendToutePlace" 
                             style="display:none;background-color:#C0C0C0;filter:'alpha(opacity=40)';-moz-opacity:.30;position:absolute;z-index:300;top:0px;left:0px;">
                    <h:outputText id="emptyOutputForPanelDesactiv" />
                </h:panelGrid>

                <!-- Tableau de saisie des langues -->
                <h:panelGrid id="panel_multi_lang" 
                             styleClass="prendToutePlace"
                             style="display:#{formulairesManagedBean.popupDataLang};position:absolute;z-index:300;top:20px;left:20px;border:1px;animation: fadein 1s;-webkit-animation: fadein 1s;" 
                             columnClasses="popupCenter" 
                             columns="1">
                    <m:shadowPanel id="shadowPanelForMultiLang" width="740" height="240" >
                        <h:panelGroup id="panel_multi_group1" styleClass="panelGroup">
                            <h:panelGrid id="panel_multi_grid1" columns="1" styleClass="panelMultiGrid">
                                <h:outputText id="panel_multi_lang_title" styleClass="popupTextTitle" value="#{language.panelMultiLangTitle}" />
                            </h:panelGrid >
                            <h:panelGrid id="panel_multi_grid11" columns="3" styleClass="panelGroup infoSuppr">
                                <h:outputText id="panelKeyRef" 
                                              value="#{language.panelMultiLangKeyRef}" 
                                              styleClass="popupTextBold" 
                                              style="display:block;width:200px;cursor:default;text-align=right;" />
                                <h:outputText id="panelKeyRefSep" style="display:block;width:4px;cursor:default;text-align=right;" value=" : " />
                                <h:outputText id="valueKeyRef" style="display:block;width:500px;cursor:default;text-align=left;" value="#{formulairesManagedBean.multiLangKey}"/>
                                <h:inputHidden id="valueKeyRefHidden" value="#{formulairesManagedBean.multiLangKey}"/>
                                <h:inputHidden id="valueKeyIndexRefHidden"  value="#{formulairesManagedBean.multiLangIndex}"/>
                            </h:panelGrid >
                        </h:panelGroup>
                        <h:panelGroup id="panel_multi_group2" styleClass="panelGroup">
                            <h:panelGrid id="panel_multi_grid2" border="0" columns="2" styleClass="panelMultiGrid">
                                <h:outputText id="label_lang1" styleClass="popupTextBold labelLang" style="" value="#{language.panelMultiLangEN}" />
                                <h:inputText id="value_Lang1" styleClass="inputLang" value="#{formulairesManagedBean.multiLangDataValueEN}" />
                                
                                <h:outputText id="label_lang2" styleClass="popupTextBold labelLang" value="#{language.panelMultiLangFR}" />
                                <h:inputText id="value_Lang2" styleClass="inputLang" value="#{formulairesManagedBean.multiLangDataValueFR}" />
                                
                                <h:outputText id="label_lang3" styleClass="popupTextBold labelLang" value="#{language.panelMultiLangZH}" />
                                <h:inputText id="value_Lang3" styleClass="inputLang" value="#{formulairesManagedBean.multiLangDataValueZH}" />
                                
                                <h:outputText id="label_lang4" styleClass="popupTextBold labelLang" value="#{language.panelMultiLangES}" />
                                <h:inputText id="value_Lang4" styleClass="inputLang" value="#{formulairesManagedBean.multiLangDataValueES}" />
                                
                                <h:outputText id="label_lang5" styleClass="popupTextBold labelLang" value="#{language.panelMultiLangDE}" />
                                <h:inputText id="value_Lang5" styleClass="inputLang" value="#{formulairesManagedBean.multiLangDataValueDE}" />
                                
                                <h:outputText id="label_lang6" styleClass="popupTextBold labelLang" value="#{language.panelMultiLangNL}" />
                                <h:inputText id="value_Lang6" styleClass="inputLang" value="#{formulairesManagedBean.multiLangDataValueNL}" />
                            </h:panelGrid>
                        </h:panelGroup>
                        <h:panelGroup id="panel_multi_group3" styleClass="panelGroup">
                            <h:panelGrid id="panel_multi_grid3" columns="2" styleClass="panelMultiGrid popUpExportBtn">
                                    <input type="button" 
                                           onclick="hideMultiLangPanel()" 
                                           value="${language.annuler}" 
                                           class="commandButton btnCancel" />
                                    <h:commandButton id="panel_valider_multi_lang" 
                                                     actionListener="#{formulairesManagedBean.saveDataLangValues}" 
                                                     value="#{language.ok}" 
                                                     styleClass="commandButton btnOk" />
                            </h:panelGrid>
                        </h:panelGroup>
                    </m:shadowPanel>
                </h:panelGrid>

                <!-- Tableau de confirmation de la suppression -->
                <h:panelGrid id="panel_delete" columnClasses="popupCenter" columns="1" styleClass="panelGrid">
                    <m:shadowPanel id="shadowPanelForDeletePanel" width="300" height="100" style="">
                        <h:panelGrid id="panel_deleteGrid" columns="1" styleClass="formPanelStyle" style="border:2px solid #3877AA;width:300px;height:100px; top: 100px; right:100px;"> 
                            <h:panelGroup id="panel_delete_group1" styleClass="panelGroup">
                                <h:outputText id="conf_supp" value="#{language.confirm_suppr}" />
                                <h:outputText id="conf_restore" value="#{language.confirm_restore}" />
                            </h:panelGroup>
                            <h:panelGroup>
                                <h:panelGrid id="panel_info_suppr_admin" columns="2" styleClass="panelGroup infoSuppr">
                                    <h:panelGroup>
                                        <f:verbatim>
                                            <h:graphicImage value="images/info.gif" />
                                        </f:verbatim>
                                    </h:panelGroup>
                                    <h:panelGroup>
                                        <h:outputText style="font-style:italic;" value="#{language.message_suppr_admin}" />
                                    </h:panelGroup>
                                </h:panelGrid>
                                <h:panelGrid id="panel_info_suppr_def" columns="2" styleClass="panelGroup infoSuppr">
                                    <h:panelGroup>
                                        <f:verbatim>
                                            <h:graphicImage value="images/info.gif" />
                                        </f:verbatim>
                                    </h:panelGroup>
                                    <h:panelGroup>
                                        <h:outputText style="font-style:italic;color:#FF0000;" value="#{language.message_suppr_def}" />
                                    </h:panelGroup>
                                </h:panelGrid>
                            </h:panelGroup>
                            <h:panelGroup id="panel_delete_group2" styleClass="panelGroup">
                                <h:panelGrid id="panel_delete_group2_panelgrid1" styleClass="popUpDeleteBtn" columns="2">                                     
                                    <m:shadowPanel id="shadowPanelForDeletePanelCancelButton" width="120px" height="25px">
                                        <input type="button" 
                                               onclick="hideDeletePanel()" 
                                               value="${language.annuler}" 
                                               class="commandButton btnCancel" />
                                    </m:shadowPanel>
                                    <m:shadowPanel id="shadowPanelForDeletePanelCommandButton" width="120px" height="25px">
                                        <h:commandButton id="panel_supp_admin" 
                                                         actionListener="#{formulairesManagedBean.deleteData}" 
                                                         value="#{language.ok}" 
                                                         styleClass="commandButton btnOk" />
                                        
                                        <h:commandButton id="panel_supp_definitif" 
                                                         actionListener="#{formulairesManagedBean.physicalDeleteData}" 
                                                         value="#{language.ok}" 
                                                         styleClass="commandButton btnOk" />
                                        
                                        <h:commandButton id="panel_restaurer" 
                                                         actionListener="#{formulairesManagedBean.restoreData}" 
                                                         value="#{language.ok}" 
                                                         styleClass="commandButton btnOk" />
                                    </m:shadowPanel>
                                </h:panelGrid>
                            </h:panelGroup>
                        </h:panelGrid>
                    </m:shadowPanel>
                </h:panelGrid>

                <!-- Messages d'erreur, affichage différent selon type de message (popup bloquante pour message d'erreur ou simple cadre de message pour un message d'information) -->
                <c:choose>
                    <c:when test="${!formulairesManagedBean.popupMessage}">
                        <h:messages id="messSansPopup" 
                                    style="padding-right:20px;background-color:#FFFFFF;border:1px solid #C0C0C0;position:absolute;top:9px;left:100px;z-index:10;width:420px;height:20px;overflow:hidden;" 
                                    infoStyle="color: #339966;font-weight:bold;" 
                                    warnStyle="color: #FF6600;font-weight:bold;" 
                                    errorStyle="color: #FF0000;font-weight:bold;" 
                                    fatalStyle="color: #FF0000;font-weight:bold;font-size:15px;" />
                        <f:verbatim>
                            <img src="images/down_arrow1.png" 
                                 style="background-color:#FFFFFF;position:absolute;top:14px;left:565px;z-index:10;width:11px;height:6px;cursor:pointer;" 
                                 onclick="resizeMessagesPanel(this)" 
                                 onload="if(document.getElementById('form1:messSansPopup')==null) this.style.display='none'">
                        </f:verbatim>
                    </c:when>
                    <c:when test="${formulairesManagedBean.popupMessage}">

                        <h:panelGrid id="panel_desactiv_for_popup_message" 
                                     styleClass="prendToutePlace" 
                                     style="background-color:#C0C0C0;filter:'alpha(opacity=30)';-moz-opacity:.30;position:absolute;z-index:300;top:0px;left:0px;">
                            <h:outputText id="emptyOutputForPanelDesactivPopupMessage" />
                        </h:panelGrid>

                        <h:panelGrid id="popupTable" styleClass="prendToutePlace" style="position:absolute;z-index:300;top:0px;left:0px;" columnClasses="popupCenter" columns="1">
                            <m:shadowPanel id="shadowPanelForPoupTable" width="400" height="200">
                                <h:panelGrid id="subPopupTable" 
                                             cellpadding="0" 
                                             cellspacing="0" 
                                             style="filter:'alpha(opacity=100)';border:2px solid #3877AA;background-color:#FFFFFF;width:400px;height:200px;" 
                                             styleClass="formPanelStyle" 
                                             columns="1">
                                    <h:panelGroup id="subPopupTableGroup1" 
                                                  layout="block" 
                                                  style="width:100%;height:100px;overflow:auto;border-top:1px solid #C0C0C0;border-bottom:1px solid #C0C0C0;">
                                        <h:messages id="messAvecPopup" 
                                                    style="z-index:10;width:100%;" 
                                                    infoStyle="color: #339966;font-weight:bold;" 
                                                    warnStyle="color: #FF6600;font-weight:bold;" 
                                                    errorStyle="color: #FF0000;font-weight:bold;" 
                                                    fatalStyle="color: #FF0000;font-weight:bold;font-size:15px;" />
                                    </h:panelGroup>
                                    <h:panelGroup id="subPopupTableGroup2" styleClass="panelGroup">
                                        <m:shadowPanel width="120" height="25">
                                            <f:verbatim>
                                                <input type="button" 
                                                       class="commandButton btnOk" 
                                                       value="OK" 
                                                       onclick="hidePopupMessage()" />
                                            </f:verbatim>
                                        </m:shadowPanel>
                                    </h:panelGroup>
                                </h:panelGrid>
                            </m:shadowPanel>
                        </h:panelGrid>
                    </c:when>
                </c:choose>

                <!-- Tableau de configuration de l'export -->
                <h:panelGrid id="exportPanel" 
                             styleClass="prendToutePlace panelGrid" 
                             columnClasses="popupCenter"
                             columns="1">
                    <m:shadowPanel id="exportShadowPanel" width="300" height="100" style="">
                        <h:panelGrid id="exportPanelGrid" columns="1" styleClass="formPanelStyle" style="border:2px solid #3877AA;width:300px;height:100px;">
                            <h:panelGroup id="exportPanelGroup1" styleClass="panelGroup">
                                <h:panelGrid id="panelGridExportParams" columns="2" styleClass="popUpTab">
                                    <h:outputLabel styleClass="popUpTabLab" for="check_entete_import" value="#{language.export_entetes}" style="cursor:pointer;" />
                                    <h:selectBooleanCheckbox id="check_entete_import" styleClass="popUpTabInput" value="#{formulairesManagedBean.exportEntete}" />
                                    <h:outputText styleClass="popUpTabLab" value="#{language.separateur}" />
                                    <h:inputText size="5" 
                                                 styleClass="popUpTabInput" 
                                                 onkeydown="cancelEnterKey()" 
                                                 maxlength="3" 
                                                 value="#{formulairesManagedBean.exportSeparator}" 
                                                 style="font-family:Arial;" />
                                </h:panelGrid>
                            </h:panelGroup>
                            <h:panelGroup id="exportPanelGroup2" styleClass="panelGroup">
                                <h:panelGrid id="panelGridExportActions" styleClass="popUpExportBtn" columns="2">
                                    <m:shadowPanel id="panelGridExportActionsShadowPanel2" width="120px" height="25px">
                                        <input type="button" 
                                               onclick="hideExportPanel()" 
                                               value="${language.annuler}" 
                                               class="commandButton btnCancel" />
                                    </m:shadowPanel>
                                    <m:shadowPanel id="panelGridExportActionsShadowPanel1" width="120px" height="25px">
                                        <h:commandButton id="commandButtonDoExport" 
                                                         actionListener="#{formulairesManagedBean.doExport}" 
                                                         value="#{language.exporter}" 
                                                         styleClass="commandButton btnExport" />
                                    </m:shadowPanel>                                    
                                </h:panelGrid>
                            </h:panelGroup>
                            <%--
                            <h:panelGroup id="exportPanelGroup3" styleClass="panelGroup">
                                <img src="images/doc_excel.gif">
                                    <f:subview id="subview_csv">
                                        <h:commandLink id="commandLinkDoExportCsv" 
                                                       actionListener="#{formulairesManagedBean.doExportCsv}" 
                                                       value="#{language.exporter_csv}" 
                                                       style="font-weight:normal !important;font-size:12px !important;" />
                                    </f:subview>                                    
                            </h:panelGroup>
                            --%>
                        </h:panelGrid>
                    </m:shadowPanel>
            </h:panelGrid>


                <!-- Champ caché recevent le contenu de l'import -->
                <h:inputHidden id="hidden_import" value="#{formulairesManagedBean.importStream}" />
                <!-- Tableau de confirmation de l'import -->
                <h:panelGrid id="importPanel" columnClasses="popupCenter" columns="1" styleClass="panelGrid">
                    <m:shadowPanel id="importPanelShadow" width="300" height="100">
                        <h:panelGrid id="importPanelGrid" columns="1" styleClass="formPanelStyle" style="border:2px solid #3877AA;width:300px;height:100px;">
                            <h:panelGroup id="importPanelGroup1" styleClass="panelGroup">
                                <h:panelGrid id="importPanelGroup1Panel1" columns="2">
                                    <h:outputText id="outputSeparateur" value="#{language.separateur}" />
                                    <h:inputText id="inputSeparateur" 
                                                 size="5" 
                                                 onkeydown="cancelEnterKey()" 
                                                 maxlength="3" 
                                                 value="#{formulairesManagedBean.importSeparator}" 
                                                 style="font-family:Arial;" />
                                </h:panelGrid>
                            </h:panelGroup>
                            <h:panelGroup id="importPanelGroup2" styleClass="panelGroup">
                                <h:panelGrid id="importPanelGroup2Panel1" columns="2" styleClass="popUpExportBtn">                                   
                                    <m:shadowPanel id="cancelImportCommandButtonShadow" width="120px" height="25px">
                                        <input type="button" 
                                               onclick="hideImportPanel()" 
                                               value="${language.annuler}" 
                                               class="commandButton btnCancel" />
                                    </m:shadowPanel>
                                    <m:shadowPanel id="doImportCommandButtonShadow" width="120px" height="25px">
                                        <h:commandButton id="doImportCommandButton" 
                                                         actionListener="#{formulairesManagedBean.doImport}" 
                                                         onclick="document.getElementById('img_load_import').style.display='inline'; document.getElementById('img_load_import').style.width='295'; document.getElementById('img_load_import').style.left='25'" 
                                                         value="#{language.importer}" 
                                                         styleClass="commandButton btnImport" />
                                    </m:shadowPanel>
                                </h:panelGrid>
                            </h:panelGroup>
                            <h:panelGroup id="importPanelGroup3" styleClass="panelGroup">
                                <img id="img_load_import" src="images/loading4.gif" style="display:none;">
                            </h:panelGroup>
                        </h:panelGrid>
                    </m:shadowPanel>
                </h:panelGrid>

                <%-- Tableau de paramétrage du tableau --%>
                <h:panelGrid id="paramTabPanel" columnClasses="popupCenter" columns="1" styleClass="panelGrid">
                    <m:shadowPanel id="idParamPanel" style="width:500px; height:300px;">
                        <h:panelGrid id="div_colonnes" columns="1" styleClass="formPanelStyle prendToutePlace" style="border:2px solid #3877AA;">
                            <h:panelGroup id="idPanelGroupParam1" styleClass="panelGroup">
                                <h:outputText value="#{language.param_tableau}" styleClass="favoriteTitle" />
                            </h:panelGroup>

                            <h:panelGroup id="idPanelGroupParam2" layout="block" style="width:100%;height:250px;overflow:auto;border:1px solid #C0C0C0;">
                                <h:dataTable id="paramTabDataTable" 
                                             columnClasses="alphaColumns" 
                                             value="#{formulairesManagedBean.genericHead.allCols}" 
                                             var="col" 
                                             width="100%" 
                                             cellpadding="0" 
                                             cellspacing="0">
                                    <h:column>
                                        <f:facet name="header">
                                            <h:outputText value="#{language.champs}" style="border-bottom:1px solid #3877AA;width:100%;height:20px;text-align:left;" />
                                        </f:facet>
                                        <h:outputText value="#{col.label}" />
                                    </h:column>
                                    <h:column>
                                        <f:facet name="header">
                                            <h:commandLink disabled="true" 
                                                           value="#{language.visible}" 
                                                           onclick="checkAllColumnsVisible();return false;" 
                                                           style="border-bottom:1px solid #3877AA;width:100%;height:20px;text-align:left;cursor:pointer;text-decoration:underline;" />
                                            <%--
                                            <h:panelGrid columnClasses="minimalWith, maximalWith" 
                                                         columns="2" 
                                                         cellspacing="0" 
                                                         cellpadding="0" 
                                                         style="border-bottom:1px solid #3877AA;width:100%;">
                                                <h:outputText value="#{language.visible}" style="height:19px;text-align:left;font-weight:bold;" />
                                                <h:selectBooleanCheckbox  style="height:19px;text-align:left;" onclick="checkAllColumnsVisible(this)" />
                                            </h:panelGrid>
                                            --%>
                                        </f:facet>
                                        <!-- v :image imageURL=" # { col.imageSelect}" /-->
                                        <h:selectBooleanCheckbox value="#{col.tabVisible}" id="vcheck" />
                                    </h:column>
                                    <h:column>
                                        <f:facet name="header">
                                            <h:outputText value="#{language.largeur}" style="border-bottom:1px solid #3877AA;width:100%;height:20px;text-align:left;" />
                                        </f:facet>
                                        <h:inputText value="#{col.width}" style="width:50px;text-align:right;" />
                                        <h:outputText value=" pixels" />
                                        <%--
                                        <h:selectOneRadio value="#{col.alpha}" layout="pageDirection" id="radio_alpha" onclick="testradio(this)">
                                            <f:selectItem itemValue="#{col.id}" />
                                        </h:selectOneRadio>
                                        --%>
                                    </h:column>
                                </h:dataTable>
                            </h:panelGroup>
                            <h:panelGroup id="idPanelGroupParam3" styleClass="panelGroup">
                                <h:outputLabel value="#{language.colonne_filtre_alpha}" />
                                <h:selectOneListbox id="selectColumnAlphaSearch" size="1" value="#{formulairesManagedBean.genericSearch.idColumnAlphaSearch}">
                                    <f:selectItems value="#{formulairesManagedBean.genericHead.colsItemList}" />
                                </h:selectOneListbox>                                
                            </h:panelGroup>
                            <f:verbatim>
                                <hr style="display:block;height: 1px;margin: 0;_margin: -5px 0;padding: 0;">
                            </f:verbatim>

                            <h:panelGroup id="idPanelGroupParam4" styleClass="panelGroup">
                                <h:panelGrid id="idPanelGridParamUndoValid" columns="2" styleClass="popUpExportBtn">
                                    <m:shadowPanel id="cancelTabParm" width="120" height="25">
                                        <input type="button" 
                                               value="${language.annuler}" 
                                               class="commandButton btnCancel" 
                                               onclick="hideColumnChooser();" />
                                    </m:shadowPanel>
                                    <m:shadowPanel id="validTabParm" width="120" height="25">
                                        <h:commandButton id="panel_valider_param" 
                                                         value="#{language.enregistrer}" 
                                                         styleClass="commandButton btnOk" 
                                                         actionListener="#{formulairesManagedBean.saveDataGridParameters}" />
                                    </m:shadowPanel>
                                </h:panelGrid>

                            </h:panelGroup>
                        </h:panelGrid>
                    </m:shadowPanel>
                    <%--
                    <h:panelGroup style="width:65px;" />
                    --%>
                </h:panelGrid>

                <c:choose>
                    <c:when test="${formulairesManagedBean.connectedUser==null}">
                        <h:outputText id="outputDisconnect" value="non connecté" />
                    </c:when>
                    <c:when test="${formulairesManagedBean.connectedUser!=null}">
                        <h:panelGrid id="mainpanel" 
                                     columns="2" 
                                     style="width:100%;height:#{formulairesManagedBean.dataGridContainerHeight}px;" 
                                     columnClasses="colTabbedPane,colToolbar">
                            
                            <h:panelGroup id="tabbedPaneMainGroup" style="width:100%;height:#{formulairesManagedBean.dataGridContainerHeight}px;">

                                <f:verbatim>
                                    <div id="container" class="ombre_tableau" style="/*width:100%;*/height:${formulairesManagedBean.dataGridContainerHeight}px;">
                                        
                                        </f:verbatim>    
                                        <v:tabbedPane id="tabbedPane1" 
                                                      styleClass="tabbedPane1" 
                                                      value="#{formulairesManagedBean.selectedPane}" 
                                                      width="100%" 
                                                      height="#{formulairesManagedBean.dataGridContainerHeight}px">

                                            <v:tab id="tab1" 
                                                   text="#{formulairesManagedBean.genericHead.colsGroups[0].name}" 
                                                   value="tab1" 
                                                   width="100%" 
                                                   height="#{formulairesManagedBean.dataGridContainerHeight}px" 
                                                   imageURL="images/display.png" >
                                                <h:panelGrid columns="2" style="width:100%;" cellpadding="0" cellspacing="0">
                                                    <h:panelGrid id="dataGridPagerPanel" columns="1" style="width:100%;" cellpadding="0" cellspacing="0">

                                                        <h:panelGroup id="enteteDataGridGroup" style="width:100%;">
                                                            <h:panelGrid id="enteteDataGridGroupPanelGrid" 
                                                                         columns="2" 
                                                                         style="width:100%; margin-bottom:5px;" 
                                                                         columnClasses="maximalWith maximalHeight" 
                                                                         cellpadding="0" 
                                                                         cellspacing="0">
                                                                <!-- Dans le cas d'un sous-formulaire, ici on affiche la valeur des clés primaires du formulaire parent -->
                                                                <h:panelGroup id="enteteDataGridGroupPanelGridGroup1" style="width:100%;">
                                                                    <c:forEach items="${formulairesManagedBean.keyFilter.parentKeysList}" var="sTab">                                                                         
                                                                        &nbsp;${sTab[2]}&nbsp;:&nbsp;${sTab[1]}&nbsp;
                                                                    </c:forEach>
                                                                </h:panelGroup>

                                                                <h:panelGroup id="enteteDataGridGroupPanelGridGroup2" style="text-align:right;padding-right:6px;"><!-- nico width:300px; -->
                                                                    <h:outputText rendered="#{formulairesManagedBean.lineWarning}" 
                                                                                  value="(#{language.formMaxRow}:#{formulairesManagedBean.rowMax})"/>
                                                                    <img src="images/tab_edit.gif" 
                                                                         onclick="showColumnChooser()" 
                                                                         style="cursor:pointer;" 
                                                                         title="${language.param_tableau}">
                                                                    <%--
                                                                <h:outputLink id="linkColumns" onclick="showColumnChooser()" value="#">

                                                                            <h:outputText value="#{language.colonnes}" styleClass="columnsOutputText" />
                                                                            <f:verbatim>
                                                                                &nbsp;<img src="images/down_arrow.png" style="border: 0px solid transparent">
                                                                            </f:verbatim>
                                                                    </h:outputLink>
                                                                    --%>

                                                                </h:panelGroup>
                                                            </h:panelGrid>
                                                        </h:panelGroup>
                                                        <h:panelGroup id="dataGridGroup" style="width:100%;/*padding-left: 5px;*/">
                                                            <div class="contentForPager">
                                                                <m:shadowPanel width="695" height="535">   
                                                                    <v:dataGrid id="dataGrid1"
                                                                                styleClass="dataGrid dataGrid1"
                                                                                binding="#{formulairesManagedBean.dataGrid}"
                                                                                value="#{formulairesManagedBean.genericRecordList}"
                                                                                rowValueColumnId="dataIndice"
                                                                                border="true"
                                                                                width="#{formulairesManagedBean.dataGridWidth}"
                                                                                height="#{formulairesManagedBean.dataGridHeight}"
                                                                                doubleClickListener="#{formulairesManagedBean.selectData}"
                                                                                clientSelectionFullState="twoways"
                                                                                rows="#{formulairesManagedBean.dataGridRowsPerPage}"
                                                                                selectable="true"
                                                                                selectionCardinality="*"
                                                                                preferences="#{formulairesManagedBean.dataGridPref}"
                                                                                var="genericData">
                                                                    </v:dataGrid>
                                                                    <v:pager    id="pager1" 
                                                                                for="dataGrid1" 
                                                                                width="100%" 
                                                                                styleClass="pager"
                                                                                message="#{language.component_pager_message}"
                                                                                manyResultsMessage="#{language.component_pager_manyResultsMessage}"
                                                                                noPagedMessage="#{language.component_pager_noPagedMessage}"
                                                                                oneResultMessage="#{language.component_pager_oneResultMessage}"
                                                                                zeroResultMessage="#{language.component_pager_zeroResultMessage}"
                                                                     />

                                                                </m:shadowPanel>
                                                            </div>
                                                        </h:panelGroup>
     
                                                    </h:panelGrid>
                                                    <h:panelGroup style="width:1px;">

                                                        <h:panelGrid columns="1" cellpadding="0" cellspacing="0" columnClasses="textAlignCenter" style="width: 100%;">                                                            
                                                            <div class="arrowPadding">
                                                                <img src="images/up_grey_arrow.png" 
                                                                     onmouseover="startScroll('form1:div_alpha', '-');this.src='images/up_arrow.png'" 
                                                                     onmouseout="stopScroll();this.src='images/up_grey_arrow.png'">
                                                            </div>
                                                            <h:panelGroup id="div_alpha" 
                                                                          styleClass="div_alpha" 
                                                                          layout="block" 
                                                                          style="overflow:hidden; height:#{formulairesManagedBean.divAlphaHeight}px; margin: 5 0 5 0;">
                                                                <h:dataTable value="#{formulairesManagedBean.alphaFilterList}" 
                                                                             var="alphaFilter" 
                                                                             columnClasses="letterCells" 
                                                                             cellpadding="0" 
                                                                             cellspacing="0">
                                                                    <h:column>                                         
                                                                        <h:commandLink value="#{alphaFilter.character}" 
                                                                                       actionListener="#{formulairesManagedBean.alphaFilterAction}" 
                                                                                       styleClass="#{alphaFilter.styleClass}">
                                                                            <f:param name="alphaSearchParam" value="#{alphaFilter.character}" />
                                                                        </h:commandLink>                              
                                                                    </h:column>
                                                                </h:dataTable>
                                                            </h:panelGroup>
                                                            <div class="arrowPadding2">
                                                                <img src="images/down_grey_arrow.png" 
                                                                     onmouseover="startScroll('form1:div_alpha', '+');this.src='images/down_arrow.png'" 
                                                                     onmouseout="stopScroll();this.src='images/down_grey_arrow.png'">
                                                            </div>
                                                        </h:panelGrid>
                                                    </h:panelGroup>    
                                                            
                                                </h:panelGrid>

                                            </v:tab>
                                                                    
                                            <script>
                                                //Modification P.MAHE du 26/11/2014
                                                //script pour masquer le premier li (ID = form1:dataGrid1::dataTable:columnHeader:1) du dataGrid
                                                //(voir les lignes 361 et autour). Je ne sais pas à quoi il sert mais il brise l'alignement 
                                                //entre les colonnes et les headers. Vu le HTML rendu avec width: 1px et width: 0px pour ses 
                                                //fils (deux div imbriqués) et que le contenu n'est que &nbsp;, il ne devrait pas s'afficher.
                                                //C'est chose faite avec ce script inspiré de : http://stackoverflow.com/a/15642741/2112089
                                                $("li.f_grid_tcell").each(function() { //on parcourt les <li>
                                                    var liJelement = $(this); 
                                                    var divJelement = $(this).children().first(); //le premier <div>
                                                    var divJelement = divJelement.children().first(); //le second <div>, qui contient le texte
                                                    var divJelementHtml = divJelement.html(); 
                                                    var trimmedDivJelementHtml = $.trim(divJelementHtml); // suppression des espaces en début et fin de chaîne
                                                    trimmedDivJelementHtml = trimmedDivJelementHtml.replace("&nbsp;", "")   // suppression du &nbsp; qui est là parce que sinon la 
                                                                                                                            // colonne serait vide (et donc ne s'afficherait pas, 
                                                                                                                            // ce qui nous simplifierait bien trop la tâche
                                                    if(!trimmedDivJelementHtml) { //si le texte est vide (il ne contenait que des espaces et/ou &nbsp;
                                                        liJelement.hide(); //on cache le <li>
                                                    }
                                                });

                                            </script>

                                            <v:tab id="tab2" 
                                                   value="tab2" 
                                                   width="100%" 
                                                   height="#{formulairesManagedBean.dataGridContainerHeight}px" 
                                                   imageURL="images/search.png" 
                                                   text="#{language.recherche}" >

                                                <h:panelGrid columns="1" 
                                                             styleClass="prendToutePlace"
                                                             cellpadding="0"
                                                             cellspacing="0" 
                                                             rowClasses="top,textAlignCenter,textAlignRight">
                                                    <h:panelGroup layout="block" 
                                                                  styleClass="tabFormPanel" 
                                                                  style="overflow:auto;height:#{formulairesManagedBean.rechercheHeight}px;width:100%;border-bottom:1px solid #C0C0C0;">
                                                        <h:panelGrid style="width:100%;" columns="1" rowClasses="textAlignCenter formContenuDiv">
                                                            <div class="DivFormRech">
                                                                <c:if test="${formulairesManagedBean.genericSearch.testSaisieOgligatoireFiltersNonVide}">
                                                                    <h:outputText style="color:#FF0000;" value="#{language.filtre_obligatoire}" />
                                                                </c:if>

                                                                <h:outputText value="#{language.message_recherche_relative}" style="cursor:default;" />
                                                            </div>
                                                            
                                                            <h:dataTable value="#{formulairesManagedBean.genericSearch.genericFilterGroupList}" var="gfg" style="width:100%;">
                                                                <h:column>
                                                                    <m:shadowPanel width="100%"> 
                                                                        <m:taskPanel collapse="false" 
                                                                                     myid="search_#{gfg.id}" 
                                                                                     value="#{gfg.name}" 
                                                                                     icon_url="#{gfg.image}" 
                                                                                     width="100%" 
                                                                                     height="#{gfg.searchHeight}">
                                                                            <h:dataTable value="#{gfg.genericFilterList}" var="gf">

                                                                                <h:column>
                                                                                    <h:panelGrid rendered="#{gf.visible}" 
                                                                                                 columns="6" 
                                                                                                 style="#{gf.gr_filter.position};top:#{gf.gr_filter.y};left:#{gf.gr_filter.x};margin:0 0 0 10;">
                                                                                        <!-- affWidthLabelLong=false => LargeurLabelLong propre a la colonne -->
                                                                                        <h:outputText id="labelLong"
                                                                                                      value="#{gf.labelLong}"
                                                                                                      style="display:block;width:#{gf.widthLabelLong}px;cursor:default;text-align:right;"
                                                                                                      rendered="#{!gf.gr_filter.affWidthLabelLong}"/>
                                                                                        <!-- affWidthLabelLong=true => LargeurLabelLong propre a la balise recherche -->
                                                                                        <h:outputText id="labelLong1"
                                                                                                      value="#{gf.labelLong}"
                                                                                                      style="display:block;width:#{gf.gr_filter.widthLabelLong}px;cursor:default;text-align:right;"
                                                                                                      rendered="#{gf.gr_filter.affWidthLabelLong}"/>
                                                                                        <%--   <h:outputText id="labelLong" 
                                                                                                                value="#{gf.labelLong}" 
                                                                                                                style="display:block;width:#{gf.widthLabelLong}px;cursor:default;" /> --%>
                                                                                        <f:verbatim>
                                                                                            <span class="spanTabParamStock" style="cursor:default;">&nbsp;:&nbsp;</span>
                                                                                        </f:verbatim>

                                                                                        <!-- type texte -->
                                                                                        <h:inputText id="texteFilter" 
                                                                                                     value="#{gf.value}" 
                                                                                                     style="width:#{gf.gr_filter.textRenderer.size}px;" 
                                                                                                     rendered="#{gf.gr_filter.textRenderered}" 
                                                                                                     maxlength="#{gf.gr_filter.textRenderer.maxLength}" />

                                                                                        <!-- type liste -->
                                                                                        <h:selectOneListbox id="listeFilter" 
                                                                                                            value="#{gf.value}" 
                                                                                                            style="width:#{gf.gr_filter.listRenderer.largeur};" 
                                                                                                            rendered="#{gf.gr_filter.listRenderered}" 
                                                                                                            size="1" >
                                                                                            <f:selectItems value="#{gf.gr_filter.listRenderer.items}" />
                                                                                        </h:selectOneListbox>

                                                                                        <!-- type période -->
                                                                                        <h:panelGroup>
                                                                                            <h:panelGrid columns="10">
                                                                                                <!-- mot "de" en langue française -->
                                                                                                <h:outputText id="Periode1" 
                                                                                                              value="#{language.composent_periode_mot_de}" 
                                                                                                              rendered="#{gf.gr_filter.periode}" 
                                                                                                              style="color:#FF0000;" />      
                                                                                                <!-- zone saisie début -->
                                                                                                <h:inputText id="Periode2" 
                                                                                                             value="#{gf.value}" 
                                                                                                             rendered="#{gf.gr_filter.periodeRenderered}" />      
                                                                                                <!-- type date début -->
                                                                                                <v:dateEntry id="PeriodeDate2" 
                                                                                                             dateFormat="dd/MM/yyyy" 
                                                                                                             value="#{gf.value}" 
                                                                                                             rendered="#{gf.gr_filter.periodeDateRenderered}" 
                                                                                                             autoCompletion="true" 
                                                                                                             width="80px" />
                                                                                                <v:dateChooser id="PeriodeChooser2" 
                                                                                                               for="PeriodeDate2" 
                                                                                                               rendered="#{gf.gr_filter.periodeDateRenderered}" />
                                                                                                <!-- type heure début-->
                                                                                                <h:inputText id="PeriodeHeure2" 
                                                                                                             value="#{gf.gr_filter.periodeRenderer.valueDebut}" 
                                                                                                             rendered="#{gf.gr_filter.periodeHeureRenderered}" 
                                                                                                             size="6" > 
                                                                                                    <f:convertDateTime pattern="HH:mm:ss" />
                                                                                                </h:inputText>
                                                                                                <!-- mot "à" en langue française -->
                                                                                                <h:outputText id="Periode3" 
                                                                                                              value="#{language.composent_periode_mot_a}" 
                                                                                                              rendered="#{gf.gr_filter.periode}" 
                                                                                                              style="color:#FF0000;" />      
                                                                                                <!-- zone saisie fin -->
                                                                                                <h:inputText id="Periode4" 
                                                                                                             value="#{gf.value2}" 
                                                                                                             rendered="#{gf.gr_filter.periodeRenderered}" />      
                                                                                                <!-- type date fin -->
                                                                                                <v:dateEntry id="PeriodeDate4" 
                                                                                                             dateFormat="dd/MM/yyyy" 
                                                                                                             value="#{gf.value2}" 
                                                                                                             rendered="#{gf.gr_filter.periodeDateRenderered}" 
                                                                                                             autoCompletion="true" width="80px" />
                                                                                                <v:dateChooser id="PeriodeChooser4" 
                                                                                                               for="PeriodeDate4" 
                                                                                                               rendered="#{gf.gr_filter.periodeDateRenderered}" />
                                                                                                <!-- type heure fin -->
                                                                                                <h:inputText id="PeriodeHeure4" 
                                                                                                             value="#{gf.gr_filter.periodeRenderer.valueFin}" 
                                                                                                             rendered="#{gf.gr_filter.periodeHeureRenderered}" 
                                                                                                             size="6" >
                                                                                                    <f:convertDateTime pattern="HH:mm:ss" />
                                                                                                </h:inputText>
                                                                                            </h:panelGrid>

                                                                                        </h:panelGroup>  

                                                                                        <h:panelGroup>  
                                                                                            <!-- type date -->
                                                                                            <v:dateEntry id="dateFilter1" 
                                                                                                         dateFormat="dd/MM/yyyy" 
                                                                                                         value="#{gf.value}" 
                                                                                                         rendered="#{gf.gr_filter.dateRenderered}" 
                                                                                                         autoCompletion="true" 
                                                                                                         width="80px" /> 
                                                                                            <v:dateChooser for="dateFilter1" rendered="#{gf.gr_filter.dateRenderered}" />
                                                                                            <!-- type heure -->
                                                                                            <h:inputText id="heureFilter1" 
                                                                                                         value="#{gf.value2}" 
                                                                                                         rendered="#{gf.gr_filter.heureRenderered}" 
                                                                                                         size="6" >
                                                                                                <f:convertDateTime pattern="HH:mm:ss" />
                                                                                            </h:inputText>
                                                                                        </h:panelGroup>

                                                                                        <h:outputText id="Filter" 
                                                                                                      value="#{gf.gr_filter.texteSaisieObligatoire}" 
                                                                                                      rendered="#{gf.gr_filter.saisieObligatoire}" 
                                                                                                      style="color:#FF0000"/>  
                                                                                    </h:panelGrid>
                                                                                </h:column>
                                                                            </h:dataTable>
                                                                        </m:taskPanel>
                                                                    </m:shadowPanel>

                                                                </h:column>

                                                            </h:dataTable>

                                                        </h:panelGrid>
                                                    </h:panelGroup>
                                                    <h:panelGroup style="width:100%;">
                                                        <h:panelGrid columns="2" style="width:100%;margin-top: 20px;">
                                                            <h:panelGroup style="width:100%;">
                                                                <m:shadowPanel width="200px" height="25px">
                                                                    <v:button actionListener="#{formulairesManagedBean.resetFilterAction}" 
                                                                              text="#{language.annuler_la_recherche}" 
                                                                              styleClass="commandButton restSearchButton commandButtonLarge" />
                                                                </m:shadowPanel>
                                                            </h:panelGroup>
                                                            <h:panelGroup style="width:100%;text-align:right;">
                                                                <m:shadowPanel width="200px" height="25px">

                                                                    <h:commandButton id="searchButton" actionListener="#{formulairesManagedBean.fieldFilterAction}" 
                                                                                     value="#{language.lancer_la_recherche}" 
                                                                                     styleClass="commandButton commandButtonLarge" />
                                                                </m:shadowPanel>
                                                            </h:panelGroup>
                                                        </h:panelGrid>
                                                    </h:panelGroup>
                                                </h:panelGrid>

                                            </v:tab>

                                            <c:if test="${formulairesManagedBean.formTabVisible}">
                                                <v:tab id="tab3" 
                                                       value="tab3" 
                                                       width="100%" 
                                                       height="#{formulairesManagedBean.dataGridContainerHeight}px" 
                                                       imageURL="images/form.png" 
                                                       text="#{language.formulaire}" >
                                                    <h:panelGrid columns="1" 
                                                                 styleClass="prendToutePlace"
                                                                 cellpadding="0" 
                                                                 cellspacing="0" 
                                                                 rowClasses="top,textAlignCenter">
                                                        <h:panelGroup id="panelGroupFormTabOverflow" 
                                                                      styleClass="panelGroupFormTabOverflow" 
                                                                      layout="block" 
                                                                      style="overflow:auto;height:#{formulairesManagedBean.rechercheHeight}px;width:100%;border-bottom:1px solid #C0C0C0;">

                                                            <h:panelGrid  style="width:100%;" styleClass="test1" columns="1" rowClasses="textAlignCenter formContenuDiv formTesti">
                                                                <div class="">
                                                                    <h:panelGroup>
                                                                        <h:outputText value="*" style="color:#FF0000;cursor:default;" />  
                                                                        <h:outputText value=" = #{language.champ_obligatoire}" style="cursor:default;" />
                                                                    </h:panelGroup>
                                                                </div>
                                                                
                                                                <h:dataTable id="mytable1" value="#{formulairesManagedBean.genericHead.colsGroups}" var="colGroup" style="width:100%;">
                                                                    <h:column>  
                                                                        <m:shadowPanel  width="100%">
                                                                            <m:taskPanel myid="form_#{colGroup.id}" 
                                                                                         value="#{colGroup.name}" 
                                                                                         icon_url="#{colGroup.image}" 
                                                                                         width="100%" 
                                                                                         height="#{colGroup.formHeight}">
                                                                                <h:dataTable id="mytable2" 
                                                                                             value="#{colGroup.genericColumnList}" 
                                                                                             var="col" 
                                                                                             binding="#{formulairesManagedBean.dataTableComponent}" >
                                                                                    <h:column>
                                                                                        <h:panelGrid rendered="#{col.formVisible}" 
                                                                                                     columns="5" 
                                                                                                     style="#{col.gr.position};top:#{col.gr.y};left:#{col.gr.x};margin:0 0 0 10;">

                                                                                            <h:panelGroup>          
                                                                                                <!-- affWidthLabelLong=false => LargeurLabelLong propre a la colonne -->
                                                                                                <h:outputText value="#{col.labelLong}"
                                                                                                              style="display:block;width:#{col.widthLabelLong}px;cursor:default;text-align:right;"
                                                                                                              rendered="#{!col.gr.affWidthLabelLong}"/>
                                                                                                <!-- affWidthLabelLong=true => LargeurLabelLong propre a la balise affichage  -->
                                                                                                <h:outputText value="#{col.labelLong}"
                                                                                                              style="display:block;width:#{col.gr.widthLabelLong}px;cursor:default;text-align:right;"
                                                                                                              rendered="#{col.gr.affWidthLabelLong}"/>
                                                                                                <%--   <h:outputText value="#{col.labelLong}" 
                                                                                                                    style="display:block;width:#{col.widthLabelLong}px;cursor:default;" />   --%>
                                                                                                <!-- *********************** -->
                                                                                                <h:inputHidden value="#{col.display}" />
                                                                                                <!-- *********************** -->
                                                                                            </h:panelGroup>

                                                                                            <f:verbatim><span style="cursor:default;">&nbsp;:&nbsp;</span></f:verbatim>

                                                                                            <h:outputText value="#{col.formInputValue}" 
                                                                                                          rendered="#{(col.primaryKey || col.primaryKeySite ) && 
                                                                                                                      col.display=='none' && 
                                                                                                                      !col.gr.dateRenderered && 
                                                                                                                      !col.gr.heureRenderered }" 
                                                                                                          style="width:100%;color:green;font-weight:bold;font-size:12px;" />
                                                                                            <h:outputText value="#{col.formInputValueDateString}" 
                                                                                                          rendered="#{(col.primaryKey || col.primaryKeySite )&& 
                                                                                                                      col.display=='none' && 
                                                                                                                      col.gr.dateRenderered }" 
                                                                                                          style="width:100%;color:green;font-weight:bold;font-size:12px;" />
                                                                                            <h:outputText value="#{col.formInputValueDateString}" 
                                                                                                          rendered="#{(col.primaryKey || col.primaryKeySite )&& 
                                                                                                                      col.display=='none' && 
                                                                                                                      !col.gr.dateRenderered && 
                                                                                                                      col.gr.heureRenderered}" 
                                                                                                          style="width:100%;color:green;font-weight:bold;font-size:12px;" />


                                                                                            <h:panelGroup style="display:#{col.display};">

                                                                                                <!-- type texte -->
                                                                                                <h:inputText style="width:#{col.gr.textRenderer.size};" 
                                                                                                             id="texte1" value="#{col.formInputValue}" 
                                                                                                             rendered="#{col.gr.textRenderered}" 
                                                                                                             onkeydown="cancelEnterKey()" 
                                                                                                             maxlength="#{col.gr.textRenderer.maxLength}" > 
                                                                                                    <!--< f : validator validatorId="notEmpty" />-->
                                                                                                </h:inputText>



                                                                                                <!-- type liste -->
                                                                                                <h:selectOneListbox style="width:#{col.gr.listRenderer.largeur};" 
                                                                                                                    id="liste1" value="#{col.formInputValue}" 
                                                                                                                    rendered="#{col.gr.listRenderered}" 
                                                                                                                    size="1" > 
                                                                                                    <f:selectItems value="#{col.gr.listRenderer.items}" />
                                                                                                </h:selectOneListbox>

                                                                                                <h:panelGroup>
                                                                                                    <!-- type date -->
                                                                                                    <v:dateEntry id="date1" 
                                                                                                                 dateFormat="dd/MM/yyyy" 
                                                                                                                 value="#{col.formInputValue}" 
                                                                                                                 rendered="#{col.gr.dateRenderered}" 
                                                                                                                 autoCompletion="true" 
                                                                                                                 keyDownListener="cancelEnterKey()" 
                                                                                                                 width="80px" />
                                                                                                    <v:dateChooser for="date1" rendered="#{col.gr.dateRenderered}" />

                                                                                                    <!-- type heure -->
                                                                                                    <h:inputText id="heure1" value="#{col.formInputValueHeure}" 
                                                                                                                 rendered="#{col.gr.heureRenderered}" 
                                                                                                                 onkeydown="cancelEnterKey()" 
                                                                                                                 size="6"> 
                                                                                                        <f:convertDateTime pattern="HH:mm:ss" />
                                                                                                    </h:inputText>
                                                                                                </h:panelGroup>

                                                                                                <!-- type check -->
                                                                                                <h:selectBooleanCheckbox  id="boolean1" 
                                                                                                                          value="#{col.formInputValue}" 
                                                                                                                          rendered="#{col.gr.checkRenderered}" />


                                                                                                <!-- type radio -->
                                                                                                <h:selectOneRadio style="width:110px;" 
                                                                                                                  id="radio1" 
                                                                                                                  value="#{col.formInputValue}" 
                                                                                                                  rendered="#{col.gr.radioRenderered}" >
                                                                                                    <f:selectItems value="#{col.gr.listRenderer.items}" />
                                                                                                </h:selectOneRadio>

                                                                                                <h:inputTextarea style="width:#{col.gr.textareaRenderer.largeur};" 
                                                                                                                 id="textarea1" value="#{col.formInputValue}" 
                                                                                                                 rendered="#{col.gr.textareaRenderered}" 
                                                                                                                 cols="#{col.gr.textareaRenderer.cols}" 
                                                                                                                 rows="#{col.gr.textareaRenderer.rows}" /> 

                                                                                                <h:panelGroup>
                                                                                                    <v:spinner id="spinner1" 
                                                                                                               value="#{col.formInputValue}" 
                                                                                                               rendered="#{col.gr.spinnerRenderered}" 
                                                                                                               minimum="#{col.gr.spinnerRenderer.minValue}" 
                                                                                                               maximum="#{col.gr.spinnerRenderer.maxValue}" 
                                                                                                               columnNumber="4" step="#{col.gr.spinnerRenderer.step}" 
                                                                                                               keyDownListener="cancelEnterKey()" />
                                                                                                </h:panelGroup>

                                                                                                <h:inputSecret id="password1" 
                                                                                                               value="#{col.formInputValue}" 
                                                                                                               rendered="#{col.gr.passwordRenderered}"
                                                                                                               style="width:#{col.gr.passwordRenderer.size}" 
                                                                                                               onkeydown="cancelEnterKey()"
                                                                                                               maxlength="#{col.gr.passwordRenderer.maxLength}" />

                                                                                                <h:panelGroup rendered="#{col.gr.suggestRenderered}">
                                                                                                    <h:inputHidden value="#{col.formInputValue}" />
                                                                                                    <m:suggestText realValue="#{col.formInputValue}" 
                                                                                                                   value="#{col.displayValue}" 
                                                                                                                   width="#{col.gr.suggestRenderer.width}" 
                                                                                                                   minChars="#{col.gr.suggestRenderer.minChars}" 
                                                                                                                   maxResult="#{col.gr.suggestRenderer.maxResult}" 
                                                                                                                   xmlAffichageSource="#{col.gr.suggestRenderer.xmlAffichageSourceEscapeHTML}" />
                                                                                                </h:panelGroup>

                                                                                                <!-- type texte Lang -->
                                                                                                <h:panelGroup rendered="#{col.gr.textLangRenderered}">
                                                                                                    <h:panelGrid columns="4" 
                                                                                                                 columnClasses="verticalAlignMiddle" 
                                                                                                                 cellspacing="0" 
                                                                                                                 cellpadding="0">
                                                                                                        <h:inputText style="width:#{col.gr.textLangRenderer.size};" 
                                                                                                                     id="textLang1" value="#{col.formInputValue}" 
                                                                                                                     onkeydown="cancelEnterKey()" 
                                                                                                                     maxlength="#{col.gr.textLangRenderer.maxLength}" /> 
                                                                                                        <h:outputText value="  "/>
                                                                                                        <h:inputHidden id="keyLang" value="#{col.keyDataLang}" />
                                                                                                        <v:imageButton imageURL="images/globe2.png" 
                                                                                                                       actionListener="#{formulairesManagedBean.selectDataLang}" />
                                                                                                    </h:panelGrid>
                                                                                                </h:panelGroup>

                                                                                                <!-- type couleur -->
                                                                                                <h:panelGroup rendered="#{col.gr.colorRenderered}" styleClass="compColorPicker">
                                                                                                    <h:panelGrid columns="3" 
                                                                                                                 columnClasses="verticalAlignMiddle" 
                                                                                                                 cellspacing="0" 
                                                                                                                 cellpadding="0">
                                                                                                        <h:inputText style="width:#{col.gr.textRenderer.size};" 
                                                                                                                     id="color1" value="#{col.formInputValue}" 
                                                                                                                     onkeydown="cancelEnterKey()" 
                                                                                                                     maxlength="#{col.gr.colorRenderer.maxLength}" /> 
                                                                                                        <h:outputText value="  "/>
                                                                                                        <v:imageButton imageURL="images/color_picker_img.gif" 
                                                                                                                       actionListener="showColorPanel(this)" 
                                                                                                                       backgroundColor="#{col.formInputValue}" />
                                                                                                    </h:panelGrid>
                                                                                                </h:panelGroup>
                                                                                            </h:panelGroup>                                                                                            
                                                                                            <!-- ajout du caractère '*' pour indiquer que c'est une clé -->
                                                                                            <h:outputText id="cle" 
                                                                                                          style="color:#FF0000;cursor:default;"
                                                                                                          value="#{col.gr.texteSaisieObligatoire}"
                                                                                                          rendered="#{col.gr.saisieObligatoire}" />
                                                                                        </h:panelGrid>                                                                                        
                                                                                    </h:column>
                                                                                </h:dataTable>
                                                                            </m:taskPanel>
                                                                        </m:shadowPanel>                                                                        
                                                                    </h:column>
                                                                </h:dataTable>
                                                            </h:panelGrid>
                                                        </h:panelGroup>
                                                        <h:panelGroup>
                                                            <div id="groupeBtnCommandLink">
                                                                <h:panelGrid columns="5" styleClass="gridBtnCommandLink">
                                                                    <c:forEach items="#{formulairesManagedBean.genericHead.xmlPagesDepends}" var="pageDepends">                                                     
                                                                            <m:shadowPanel width="180" height="24">
                                                                                <h:outputLink value="#{Constantes.FORMULAIRE_PAGE}" 
                                                                                              styleClass="commandLink btnOther" 
                                                                                              onclick="encodeURLLink()">
                                                                                    <h:outputText value="#{pageDepends.label}" />
                                                                                    <f:param name="moduleID" value="#{pageDepends.moduleID}" />
                                                                                    <f:param name="pageID" value="#{pageDepends.pageID}" />
                                                                                    <f:param name="webContainerHeight" value="#{formulairesManagedBean.webContainerHeightString}" />
                                                                                    <f:param name="webContainerWidth" value="#{formulairesManagedBean.webContainerWidthString}" />
                                                                                    <!--
                                                                                        Si à l'avenir on souhaite ajouter le sous-formulaire au fil d'ariane Swing, 
                                                                                        mettre le paramètres "subform" en dernier at ajouter un paramètre arianetext
                                                                                        correspond au libellé du lien dans l'interface Swing.
                                                                                    -->
                                                                                    <!--f:param name="subform" value="OK" /-->
                                                                                    <c:forEach items="#{formulairesManagedBean.genericHead.colsGroups}" var="colGroup">
                                                                                        <c:forEach items="#{colGroup.genericColumnList}" var="col">
                                                                                            <c:if test="${col.primaryKey && !col.primaryKeySite}">
                                                                                                <f:param name="key_#{col.field}" 
                                                                                                         value="#{col.field}|#{col.formInputValue}|#{col.labelLong}" />
                                                                                            </c:if>
                                                                                        </c:forEach>
                                                                                    </c:forEach>
                                                                                    <f:param name="arianetext" value="#{pageDepends.label}" />
                                                                                    <f:param name="subform" value="OK" />
                                                                                </h:outputLink>
                                                                            </m:shadowPanel>
                                                                    </c:forEach>                                     
                                                                </h:panelGrid>
                                                            </div>
                                                        </h:panelGroup>
                                                        <h:panelGroup style="width:100%">
                                                            <div id="divMarginBtn">
                                                               <!-- <h:panelGrid columns="2" style="width:100%;" columnClasses="textAlignRight">-->
                                                                   <div style="display:inline-block;width:50%;">
                                                                        <!--<m:shadowPanel width="120px" height="25px">-->
                                                                            <v:button styleClass="commandButton restSearchButton btnCancel btnCancelLeft" 
                                                                                      actionListener="#{formulairesManagedBean.cancel}" 
                                                                                      text="#{language.annuler}" />
                                                                       <!-- </m:shadowPanel> -->
                                                                   </div>
                                                                   <div style="display:inline-block;vertical-align:top;width:49%;text-align:right;">
                                                                        <!--<m:shadowPanel width="120px" height="25px"> -->
                                                                            <h:commandButton id="validateButton"
                                                                                             disabled="#{formulairesManagedBean.disableForm}" 
                                                                                             actionListener="#{formulairesManagedBean.updateData}"
                                                                                                styleClass="commandButton commandButtonFavoris btnOk btnOkRight"
                                                                                            value="#{language.enregistrer}" >
                                                                                
                                                                            </h:commandButton>
                                                                       <!-- </m:shadowPanel> -->
                                                                   </div>
                                                                <!--</h:panelGrid>-->
                                                            </div>
                                                        </h:panelGroup>
                                                    </h:panelGrid>

                                                </v:tab>
                                            </c:if>

                                            <c:if test="${formulairesManagedBean.exportTabVisible}">
                                                <v:tab id="tab4" 
                                                       value="tab4" 
                                                       width="100%" 
                                                       height="#{formulairesManagedBean.dataGridContainerHeight}px" 
                                                       imageURL="images/export.gif" text="#{language.export}">
                                                    <h:inputTextarea id="textarea_export" 
                                                                     value="#{formulairesManagedBean.exportStream}" 
                                                                     style="width:100%;height:#{formulairesManagedBean.dataGridContainerHeight-25}px;" />
                                                </v:tab>
                                            </c:if>

                                            <c:if test="${formulairesManagedBean.importTabVisible}">
                                                <v:tab id="tab5" 
                                                       value="tab5" 
                                                       width="100%" 
                                                       height="#{formulairesManagedBean.dataGridContainerHeight}px" 
                                                       imageURL="images/import.gif" 
                                                       text="#{language.import}">
                                                    <h:panelGrid columns="1" styleClass="prendToutePlace" rowClasses=",,maximalWith maximalHeight">
                                                        <h:outputText value="#{language.nom_colonnes}" style="color:green;font-weight:bold;text-decoration: underline" />
                                                        <h:panelGroup>
                                                            <c:forEach items="#{formulairesManagedBean.genericHead.colsGroups}" var="colGroup">                                                                      
                                                                <c:forEach items="#{colGroup.genericColumnList}" var="col">  
                                                                    <h:outputText value="#{col.field}" style="font-weight:bold" />
                                                                    <h:outputText value=" ; " />
                                                                </c:forEach>  
                                                            </c:forEach>
                                                        </h:panelGroup>

                                                        <h:panelGroup>
                                                            <h:inputTextarea id="textarea_import" 
                                                                             value="#{formulairesManagedBean.messImport}"
                                                                             styleClass="prendToutePlace"
                                                                             onfocus="importFocus(this)" 
                                                                             onblur="importBlur(this)"/>                                                                
                                                        </h:panelGroup>

                                                        <h:panelGroup>
                                                            <div id="divMarginBtn">
                                                                <h:panelGrid columns="2" style="width:100%;" columnClasses="textAlignRight">
                                                                    <m:shadowPanel width="120px" height="25px">
                                                                        <v:button styleClass="commandButton restSearchButton btnCancel"
                                                                                  actionListener="#{formulairesManagedBean.cancel}" 
                                                                                  text="#{language.annuler}" />
                                                                    </m:shadowPanel>
                                                                    <m:shadowPanel width="120px" height="25px">
                                                                        <input type="button" 
                                                                               onclick="showImportPanel()" 
                                                                               value="${language.valider}" 
                                                                               class="commandButton btnOk" 
                                                                               style="background-image:url(images/button_ok.png)">
                                                                    </m:shadowPanel>
                                                                </h:panelGrid>
                                                            </div>
                                                        </h:panelGroup>

                                                    </h:panelGrid>

                                                </v:tab>
                                            </c:if>
                                        </v:tabbedPane>
                                        <f:verbatim>
                                  </div>
                                    </div>
                                </f:verbatim>

                            </h:panelGroup>

                            
                        </h:panelGrid>
                    </c:when>
                </c:choose>

                <h:inputHidden id="webContainerWidth" value="#{formulairesManagedBean.webContainerWidthString}" />
                <h:inputHidden id="webContainerHeight" value="#{formulairesManagedBean.webContainerHeightString}" />

            </h:form>            
        </body>
    </html>
</f:view>