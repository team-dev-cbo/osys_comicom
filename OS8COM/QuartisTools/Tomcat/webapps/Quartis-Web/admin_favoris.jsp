<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsf/html" prefix="h" %>
<%@ taglib uri="http://java.sun.com/jsf/core" prefix="f" %>
<%@ taglib uri="/WEB-INF/tld/myComponent.tld" prefix="m" %>
<%@ taglib uri="http://rcfaces.org/core" prefix="v"%>
<%@ taglib uri="http://rcfaces.org/html" prefix="vh"%>

<f:view locale="#{favoriteManagedBean.identifiedUser.locale}">
    <html>
        <head>
            <f:loadBundle basename="quartisweb/resources/private_language" var="language" />
            <vh:init id="init_1" />
            <m:init />
            <link type="text/css" media="screen" rel="stylesheet" href="css/style.css" />
            <vh:javaScript src="js/security.js" />
            <vh:javaScript src="js/admin_favoris.js" />
        </head>

        <body onload="initPage();security();" style="padding:0;margin:0 0 0 0;border:0px none #FFFFFF;-moz-box-sizing:border-box;box-sizing:border-box;overflow:hidden;">

            <h:messages id="mess" style="padding-right:20px;background-color:#FFFFFF;border:1px solid #C0C0C0;position:absolute;top:8px;left:380px;z-index:10;width:338px;height:20px;overflow:hidden;" infoStyle="color: #339966;font-weight:bold;" warnStyle="color: #FF6600;font-weight:bold;" errorStyle="color: #FF0000;font-weight:bold;" fatalStyle="color: #FF0000;font-weight:bold;font-size:15px;" />
            <img src="images/down_arrow1.png" style="background-color:#FFFFFF;position:absolute;top:14px;left:739px;z-index:10;width:11px;height:6px;cursor:pointer;" onclick="resizeMessagesPanel(this)" onload="if(document.getElementById('mess')==null) this.style.display='none'">

            <h:form id="formFavoris">
                <m:shadowPanel id="toolbarShadowPanel" height="40px" width="100%">                       
                          <h:panelGrid id="toolbarMainPanel" width="100%" styleClass="toolbarOnTop" columns="15" rowClasses="top" >
                            <h:panelGrid id="toolbarPanel" columns="15" rowClasses="toolbarElementsHeight" style="float:right; padding-right:32px;">
                                <v:imageButton  imageURL="images/edit.gif" selectionListener="#{favoriteManagedBean.resetForm}" toolTipText="#{language.nouveau}" /><br><br>
                                <v:imageButton imageURL="images/bin.gif" selectionListener="#{favoriteManagedBean.supprimer}" toolTipText="#{language.supprimer_ligne_select}" /><br><br>
                            </h:panelGrid>
                        </h:panelGrid>
                    </m:shadowPanel>

                <c:choose>
                    <c:when test="${favoriteManagedBean.userValide==true}">
                        <h:panelGrid columns="2">
                            <h:panelGroup>
                                <div id="container" class="ombre_tableau" style="width:100%;height:${favoriteManagedBean.dataGridContainerHeight}px;">
                                    <div class="boite contenu" style="width:100%;height:${favoriteManagedBean.dataGridContainerHeight}px;">
                                        <v:tabbedPane width="100%" height="#{formulairesManagedBean.dataGridContainerHeight}px" value="#{favoriteManagedBean.selectedTab}">
                                            <v:tab id="TAB1" value="TAB1" imageURL="images/display.png" text="#{favoriteManagedBean.user.prenom} #{favoriteManagedBean.user.nom} : #{language.liste_favoris} ">
                                                <h:panelGrid columns="1">

                                                    <!--  Tableau de la liste des favoris -->
                                                    <m:shadowPanel width="100%">
                                                        <v:dataGrid 
                                                            id="datagrid_1" 
                                                            binding="#{favoriteManagedBean.dataGrid}"
                                                            selectedValues="#{favoriteManagedBean.indexesModel}"
                                                            value="#{favoriteManagedBean.favoriteList}"
                                                            preferences="#{favoriteManagedBean.dataGridPreferences}"
                                                            border="true"
                                                            width="#{favoriteManagedBean.dataGridWidth}"
                                                            height="#{favoriteManagedBean.dataGridHeight}"
                                                            rows="#{favoriteManagedBean.dataGridRowsPerPage}"
                                                            selectable="true"
                                                            selectionCardinality="*"
                                                            clientSelectionFullState="twoways"
                                                            var="favori">
                                                            <v:dataColumn
                                                                value="#{favori.label}"
                                                                text="#{language.libelle}"
                                                                resizable="true"
                                                                sortListener="alpha"
                                                                width="150" />
                                                            <v:dataColumn
                                                                value="#{favori.type}"
                                                                text="#{language.type}"
                                                                resizable="true"
                                                                sortListener="alpha"
                                                                width="346" />
                                                            <v:dataColumn
                                                                value="#{favori.global == true ? 'Global' : 'Module'}"
                                                                text="#{language.visibilite}"
                                                                resizable="true"
                                                                sortListener="alpha"
                                                                width="240" />
                                                        </v:dataGrid>
                                                    </m:shadowPanel>

                                                    <!-- Pager du tableau -->
                                                    <v:pager id="pager_1" for="datagrid_1" width="550" styleClass="pager"
                                                             message="#{language.component_pager_message}"
                                                             manyResultsMessage="#{language.component_pager_manyResultsMessage}"
                                                             noPagedMessage="#{language.component_pager_noPagedMessage}"
                                                             oneResultMessage="#{language.component_pager_oneResultMessage}"
                                                             zeroResultMessage="#{language.component_pager_zeroResultMessage}"
                                                             />



                                                </h:panelGrid>

                                            </v:tab>
                                            <c:if test="${favoriteManagedBean.formTabVisible}">
                                                <v:tab id="TAB2" value="TAB2" imageURL="images/form.png" text="#{language.formulaire}">
                                                    <h:panelGrid columns="1">
                                                        <h:panelGroup>
                                                            <m:shadowPanel>
                                                                <m:taskPanel width="740" height="150" icon_url="images/form.png" value="#{language.formulaire}">

                                                                    <h:panelGrid columns="1">

                                                                        <h:panelGroup>
                                                                            <f:verbatim>
                                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                            </f:verbatim>
                                                                            <h:selectBooleanCheckbox id="ckeckGlobal" onclick="checkGlobalCheck(this)" value="#{favoriteManagedBean.checkGlobal}" />
                                                                            <h:outputText value=" Global" />
                                                                        </h:panelGroup>

                                                                                <br>

                                                                        <h:panelGrid columns="2">

                                                                            <h:selectOneRadio value="#{favoriteManagedBean.radioValue}" id="modulePageRadio" onclick="modulePageRadioCheck()" >
                                                                                <f:selectItem itemValue="modulePage"/>
                                                                            </h:selectOneRadio>                                                                                                                                         
                                                                            <h:panelGrid columns="3">
                                                                                <h:outputText value="#{language.module}" style="width:90px;text-align:right;"/>
                                                                                <h:outputText value=":" />
                                                                                <v:combo id="comboModule" value="#{favoriteManagedBean.formModuleID}" selectionListener="#{favoriteManagedBean.selectModule}" width="400px;">
                                                                                    <f:selectItem itemValue="" itemLabel="#{language.select_module}" />
                                                                                    <f:selectItems value="#{favoriteManagedBean.moduleSelectItemList}" />
                                                                                </v:combo>
                                                                           
                                                                                <h:outputText value="#{language.page}" style="width:90px;text-align:right;"/>
                                                                                <h:outputText value=":" />
                                                                                <v:combo id="comboPage" value="#{favoriteManagedBean.formPageID}" width="400px;" >
                                                                                    <f:selectItem itemValue="" itemLabel="#{language.select_page}" />
                                                                                    <f:selectItems value="#{favoriteManagedBean.pageSelectItemList}" />
                                                                                </v:combo>
                                                                            </h:panelGrid>                                                                




                                                                            <h:outputText />
                                                                            <h:outputText value="OU" style="font-weight:bold; font-size:13px;" />


                                                                            <h:selectOneRadio id="webPageRadio" onclick="webPageRadioCheck()" >
                                                                                <f:selectItem />
                                                                            </h:selectOneRadio>
                                                                            <h:panelGrid columns="4">
                                                                                <h:outputText value="URL" style="width:90px;text-align:right;"/>
                                                                                <h:outputText value=" : " />
                                                                                <h:outputText value="http://" />
                                                                                <h:inputText id="webPageInput" value="#{favoriteManagedBean.formWebExternalPage}" style="width:400px;" />

                                                                                <h:outputText value="#{language.libelle}" style="width:90px;text-align:right;"/>
                                                                                <h:outputText value=" : " />
                                                                                <h:outputText />
                                                                                <h:inputText id="webPageInputLabel" value="#{favoriteManagedBean.formWebExternalPageLabel}" style="width:200px;" />

                                                                            </h:panelGrid>

                                                                        </h:panelGrid>

                                                                       
                                                                    </h:panelGrid>

                                                                </m:taskPanel>
                                                            </m:shadowPanel>
                                                        </h:panelGroup>
                                                        <h:panelGroup style="width:100%;text-align:right;">
                                                            <m:shadowPanel width="120px" height="25px">
                                                                <h:commandButton styleClass="commandButton btnOk" action="#{favoriteManagedBean.saveFavorite}" value="#{language.enregistrer}" />
                                                            </m:shadowPanel>
                                                        </h:panelGroup>
                                                    </h:panelGrid>

                                                </v:tab>
                                            </c:if>

                                        </v:tabbedPane>
                                    </div>
                                </div>
                            </h:panelGroup>

                        </h:panelGrid>
                    </c:when>
                    <c:when test="${favoriteManagedBean.userValide==false}">
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
            </h:form>
        </body>
    </html>
</f:view>