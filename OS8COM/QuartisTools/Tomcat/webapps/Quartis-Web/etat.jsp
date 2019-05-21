<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsf/html" prefix="h" %>
<%@ taglib uri="http://java.sun.com/jsf/core" prefix="f" %>
<%@ taglib uri="/WEB-INF/tld/myComponent.tld" prefix="m" %>
<%@ taglib uri="http://rcfaces.org/core" prefix="v"%>
<%@ taglib uri="http://rcfaces.org/html" prefix="vh"%>

<f:view locale="#{dataEtatManagedBean.identifiedUser.locale}">
    <html style="overflow: hidden">
        <head>
            <meta http-equiv="Content-Type" content="text/html;  charset=UTF-8">
            
            <f:loadBundle basename="quartisweb/resources/private_language" var="language" />
            <vh:init id="init_1" />
            <m:init />
            <link type="text/css" rel="stylesheet" href="css/style.css" />
            <vh:javaScript src="js/etat.js" />
            <vh:javaScript src="js/dimension.js" />
            <vh:javaScript src="js/security.js" />
        </head>

        <body onload="security();initPage();s_init();" scroll="no" style="padding:0;">

            <h:form id="form1" >
                <!-- Barre de droite cf refonte graphique QuartisWeb 2017/12 CJ-->
                <m:shadowPanel id="toolbarShadowPanel" height="40px" width="100%">                       
                        <h:panelGrid id="toolbarMainPanel" width="100%" styleClass="toolbarOnTop" columns="15" rowClasses="top" >
                            <h:panelGrid id="toolbarPanel" columns="15" rowClasses="toolbarElementsHeight" style="float:right; padding-right:32px;">
                                <h:panelGroup id="addFavoriteGroup" rendered="#{!dataEtatManagedBean.inFavorites}">
                                    <h:inputHidden id="favoritePageName" value="#{dataEtatManagedBean.genericHead.colsGroups[0].name}" />
                                    <img id="imgAddFavorite" src="images/keditbookmarks.png" title="${language.ajouter_favoris}" onclick="addToFavorites()" style="cursor:pointer;">
                                </h:panelGroup>
                                <h:panelGroup id="removeFavoriteGroup" rendered="#{dataEtatManagedBean.inFavorites}">
                                    <img id="imgRemoveFavorite" src="images/favorite_remove.png" title="${language.retirer_favoris}" onclick="removeFromFavorites()" style="cursor:pointer;">
                                </h:panelGroup>
                                <v:imageButton imageURL='images/cut.png' toolTipText="#{language.supprimer_critere}" selectionListener="#{dataEtatManagedBean.supprimerTout}"/><br><br>
                            </h:panelGrid>
                        </h:panelGrid>
                    </m:shadowPanel>
                <!-- Tableau recouvrant toute la surface de la page pour empêcher toute action sur celle-ci -->
                <h:panelGrid id="panel_desactiv" style="display:none;background-color:#C0C0C0;filter:'alpha(opacity=40)';-moz-opacity:.30;width:100%;height:100%;position:absolute;z-index:300;top:0px;left:0px;">
                    <h:outputText id="emptyOutputForPanelDesactiv" />
                </h:panelGrid>

                <h:panelGrid columnClasses="textAlignCenter" id="panel_export" style="width:300px;height:100px;background-color:#FFFFFF;border:1px solid #3877AA;display:none;position:absolute;z-index:300;left:226px;top:207px;border-color:blue;" border="5" cellpadding="20" cellspacing="4">
                    <h:outputText value="#{language.chargement_cours}"  style="background-color:#FFFFFF;color:#FF0000;font-weight:bold;font-size:12px;" />
                </h:panelGrid>

                <c:choose>
                    <c:when test="${!dataEtatManagedBean.popupMessage}">
                        <h:messages id="messEtat" style="position:absolute;top:8px;left:300px;z-index:10;width:338px;height:20px;overflow:hidden;" infoStyle="color: #339966;font-weight:bold;" warnStyle="color: #FF6600;font-weight:bold;" errorStyle="color: #FF0000;font-weight:bold;" fatalStyle="color: #FF0000;font-weight:bold;font-size:15px;" />
                    </c:when>
                    <c:when test="${dataEtatManagedBean.popupMessage}">
                        <h:panelGrid id="panel_desactiv_for_popup_message" style="background-color:#C0C0C0;filter:'alpha(opacity=30)';-moz-opacity:.30;opacity:.30;width:100%;height:100%;position:absolute;z-index:300;">
                            <h:outputText id="emptyOutputForPanelDesactivPopupMessage" />
                        </h:panelGrid>

                        <h:panelGrid id="popupTable" style="width:100%;height:100%;position:absolute;z-index:300;top:0px;left:0px;" columnClasses="popupCenter" columns="1">
                            <m:shadowPanel id="shadowPanelForPoupTable" width="400" height="200">
                                <h:panelGrid id="subPopupTable" cellpadding="0" cellspacing="0" style="filter:'alpha(opacity=100)';border:2px solid #3877AA;background-color:#FFFFFF;width:400px;height:200px;" columns="1">
                                    <h:panelGroup id="subPopupTableGroup1" layout="block" style="width:100%;height:100px;overflow:auto;border-top:1px solid #C0C0C0;border-bottom:1px solid #C0C0C0;">
                                        <h:messages id="messAvecPopup" style="z-index:10;width:100%;" infoStyle="color: #339966;font-weight:bold;" warnStyle="color: #FF6600;font-weight:bold;" errorStyle="color: #FF0000;font-weight:bold;" fatalStyle="color: #FF0000;font-weight:bold;font-size:15px;" />
                                    </h:panelGroup>
                                    <h:panelGroup id="subPopupTableGroup2" style="width:100%;text-align:center;">
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

                <h:panelGrid id="mainpanel" columns="2" style="width:99%;height:#{dataEtatManagedBean.dataGridContainerHeight}px;" columnClasses="colTabbedPane,colToolbar">
                    <h:panelGroup id="tabbedPaneMainGroup" style="width:100%;height:#{dataEtatManagedBean.dataGridContainerHeight}px;">
                        <f:verbatim>
                            <div class="ombre_tableau contenu" style="width:100%;height:615px;">
                                <div class="boite contenu" style="width:100%;height:615px;">
                                </f:verbatim>
                                <v:tabbedPane id="tabbedpane_1" width="99%" height="#{dataEtatManagedBean.dataGridContainerHeight}px" value="#{dataEtatManagedBean.selectedPane}">
                                    <v:tab value="PANEL_CRITERE" id="panel_critere" imageURL="images/application_view_columns.png" text="#{language.critere}" width="100%" height="#{dataEtatManagedBean.dataGridContainerHeight}px" verticalAlignment="top">
                                        <h:panelGrid columns="1" style="height:100%;width:100%;" cellpadding="0"cellspacing="0" rowClasses="top,textAlignCenter">
                                            <h:panelGroup id="panelGroupFormTabOverflow" styleClass="panelFormEtat" layout="block" style="overflow:auto;height:#{dataEtatManagedBean.dataGridContainerHeight-25}px;width:100%;border-bottom:1px solid #C0C0C0;">
                                                <div class="DivFormRech">
                                                    <!-- *********************************************************************** -->
                                                    <h:outputText value="*" style="color:#FF0000;cursor:default;" />
                                                    <h:outputText value=" = #{language.critere_obligatoire}"style="cursor:default;" />
                                                    <!-- *********************************************************************** -->
                                                </div>
                                                <c:forEach items="#{dataEtatManagedBean.genericHead.colsGroups}" var="colGroup">
                                                    <m:shadowPanel width="100%">
                                                        <m:taskPanel myid="form_#{colGroup.id}" value="#{colGroup.name}" icon_url="#{colGroup.image}" width="100%" height="#{colGroup.formHeight}">
                                                            <h:dataTable value="#{colGroup.genericColumnList}" var="col">
                                                                <h:column>
                                                                    <h:panelGrid rendered="#{col.formVisible}" columns="7" style="#{col.gr.position};top:#{col.gr.y};left:#{col.gr.x};margin:0 0 0 5;"> 

                                                                        <h:outputText value="#{col.labelLong}" rendered="#{col.gr.labelRenderered}" style="display:block;width:#{col.widthLabelLong}px;cursor:default;text-align:right;" />
                                                                        <f:verbatim rendered="#{col.gr.labelRenderered}"><span style="cursor:default;">&nbsp;:&nbsp;</span></f:verbatim>      

                                                                            <!-- type texte -->
                                                                        <h:inputText id="texte_etat" style="border:1px solid #7F9DB9;width:#{col.gr.textRenderer.size};" value="#{col.formInputValue}" rendered="#{col.gr.textRenderered}" onkeydown="cancelEnterKey()" maxlength="#{col.gr.textRenderer.maxLength}" >
                                                                            <!--< f : validator validatorId="notEmpty" />-->
                                                                        </h:inputText>

                                                                        <!-- type liste -->
                                                                        <h:selectOneListbox id="liste_etat" style="border:1px solid #7F9DB9;width:#{col.gr.listRenderer.largeur};" value="#{col.formInputValue}" rendered="#{col.gr.listRenderered}" size="1" >
                                                                            <f:selectItems value="#{col.gr.listRenderer.items}" />
                                                                        </h:selectOneListbox>

                                                                        <!-- type liste entrée -->
                                                                        <v:suggestTextEntry  id="liste_entree_etat"  autoCompletion="true" 
                                                                                             value="#{col.formInputValue}"
                                                                                             rendered="#{col.gr.listTextEntryRenderered}" 
                                                                                             suggestionMinChars="#{col.gr.listTextEntryRenderer.nbCarMin}"
                                                                                             keyDownListener="cancelEnterKey()"
                                                                                             >
                                                                            <f:selectItems value="#{col.gr.listTextEntryRenderer.items}" />
                                                                        </v:suggestTextEntry>

                                                                        <!-- type liste dynamique -->
                                                                        <h:panelGroup rendered="#{col.gr.suggestRenderered}">
                                                                            <h:inputHidden value="#{col.formInputValue}" />
                                                                            <m:suggestText realValue="#{col.formInputValue}" value="#{col.displayValue}" width="#{col.gr.suggestRenderer.width}" minChars="#{col.gr.suggestRenderer.minChars}" maxResult="#{col.gr.suggestRenderer.maxResult}" valeurHorsListe="#{col.gr.suggestRenderer.valeurHorsListe}" xmlAffichageSource="#{col.gr.suggestRenderer.xmlAffichageSourceEscapeHTML}" />
                                                                        </h:panelGroup>

                                                                        <!-- type liste saisie multiple  -->
                                                                        <h:selectManyListbox id="liste_multiple_etat"   
                                                                                             style="border:1px solid #7F9DB9;"
                                                                                             size="#{col.gr.manyListRenderer.size}"
                                                                                             rendered="#{col.gr.manyListRenderered}" 
                                                                                             value="#{col.lstItemSelected}">
                                                                            <f:selectItems  value="#{col.gr.manyListRenderer.items}" />
                                                                        </h:selectManyListbox>
                                                                        <h:panelGroup>  
                                                                            <!-- type date -->
                                                                            <v:dateEntry id="date_etat" dateFormat="dd/MM/yyyy"  value="#{col.formInputValue}" rendered="#{col.gr.dateRenderered}" autoCompletion="true" keyDownListener="cancelEnterKey()" width="80px" />                            
                                                                            <v:dateChooser for="date_etat" rendered="#{col.gr.dateRenderered}" />

                                                                            <!-- type heure -->
                                                                            <h:inputText id="heure_etat" value="#{col.formInputValueHeure}" rendered="#{col.gr.heureRenderered}" onkeydown="cancelEnterKey()" size="6">
                                                                                <f:convertDateTime pattern="HH:mm:ss" />
                                                                            </h:inputText> 
                                                                        </h:panelGroup>  

                                                                        <!-- type check -->
                                                                        <h:selectBooleanCheckbox id="boolean_etat" value="#{col.formInputValue}" rendered="#{col.gr.checkRenderered}" />

                                                                        <!-- type radio -->
                                                                        <h:selectOneRadio id="radio_etat" style="width:160px;" value="#{col.formInputValue}" rendered="#{col.gr.radioRenderered}" > <!-- border:1px solid #7F9DB9 -->
                                                                            <f:selectItems value="#{col.gr.listRenderer.items}" />
                                                                        </h:selectOneRadio>

                                                                        <h:inputTextarea id="textarea_etat" value="#{col.formInputValue}" 
                                                                                         rendered="#{col.gr.textareaRenderered}" 
                                                                                         cols="#{col.gr.textareaRenderer.cols}" 
                                                                                         rows="#{col.gr.textareaRenderer.rows}" 
                                                                                         style="border:1px solid #7F9DB9;width:#{col.gr.textareaRenderer.largeur};" />

                                                                        <v:spinner id="spinner_etat" value="#{col.formInputValue}" rendered="#{col.gr.spinnerRenderered}" minimum="#{col.gr.spinnerRenderer.minValue}" maximum="#{col.gr.spinnerRenderer.maxValue}" columnNumber="4" step="#{col.gr.spinnerRenderer.step}" keyDownListener="cancelEnterKey()" />

                                                                        <h:commandButton  styleClass="btnExport" 
                                                                                          id="bouton_etat" 
                                                                                          actionListener="#{dataEtatManagedBean.showEtat}" 
                                                                                          value="#{col.label}" 
                                                                                          rendered="#{col.gr.buttonRenderered}" 
                                                                                          style="#{col.gr.buttonRenderer.style};width:#{col.gr.buttonRenderer.largeur}px;"                                                                                                                      title="#{col.labelLong}" 
                                                                                          onclick="showExportPanel()" />

                                                                        <h:outputText id="saisieObligatoire_etat" value="#{col.gr.texteSaisieObligatoire}" rendered="#{col.gr.saisieObligatoire}" style="text-align:center;color:#FF0000;width:3px"/>  

                                                                        <h:outputText id="commentaire_etat" value="#{col.commentaire}" style="text-align:lef;font-weight:bold;color:#00AA00;width:#{col.width}px;cursor:default;" rendered="#{col.commVisible}" />                                                                                                                                                                                    

                                                                        <v:comboGrid    id="comboGrid_etat"  
                                                                                        toolTipText=""
                                                                                        width="#{col.gr.comboGridRenderer.largeur}" 
                                                                                        popupWidth="#{col.gr.comboGridRenderer.popupWidth}" 
                                                                                        popupHeight="#{col.gr.comboGridRenderer.popupHeight}"  
                                                                                        var="row"
                                                                                        rows="#{col.gr.comboGridRenderer.rowsMax}"
                                                                                        valueFormat="{key} - {label}" 
                                                                                        valueColumnId="key" 
                                                                                        selectedValue="#{col.formInputValue}" 
                                                                                        rendered="#{col.gr.combogridRenderered}"
                                                                                        value="#{col.gr.comboGridRenderer}"> 
                                                                            <v:comboColumn  
                                                                                id="key"
                                                                                text="clé"
                                                                                resizable="true"
                                                                                width="#{col.gr.comboGridRenderer.largeurColumnCle}"
                                                                                minWidth="60"
                                                                                maxWidth="300"
                                                                                sortListener="alpha"
                                                                                styleClass="header1"
                                                                                value="#{row.value}" />
                                                                            <v:comboColumn  
                                                                                id="label"
                                                                                text="Nom"
                                                                                resizable="true"
                                                                                width="#{col.gr.comboGridRenderer.largeurColumnLabel}"
                                                                                sortListener="alpha"
                                                                                value="#{row.label}" />
                                                                        </v:comboGrid>
                                                                    </h:panelGrid>
                                                                </h:column>
                                                            </h:dataTable>
                                                        </m:taskPanel>
                                                    </m:shadowPanel>
                                                </c:forEach>
                                            </h:panelGroup>
                                        </h:panelGrid>
                                    </v:tab>
                                    <v:tab value="PANEL_ETAT" id="panel_etat" imageURL="images/image.png" text="#{language.etat_general}" width="100%" height="#{dataEtatManagedBean.dataGridContainerHeight}px" rendered="#{dataEtatManagedBean.etatTabVisible}" >
                                        <iframe src="${dataEtatManagedBean.url_etat}"  width="100%" height="100%" name="iframe_etat"  ></iframe>
                                    </v:tab>
                                </v:tabbedPane>
                                <f:verbatim>
                                </div>
                            </div>
                        </f:verbatim>                            
                    </h:panelGroup>
                </h:panelGrid>
                <h:inputHidden id="webContainerWidth" value="#{dataEtatManagedBean.webContainerWidthString}" />
                <h:inputHidden id="webContainerHeight" value="#{dataEtatManagedBean.webContainerHeightString}" />
            </h:form>
        </body>
    </html>
</f:view>















