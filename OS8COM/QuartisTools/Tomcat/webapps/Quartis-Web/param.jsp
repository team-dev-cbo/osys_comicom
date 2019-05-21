<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsf/html" prefix="h" %>
<%@ taglib uri="http://java.sun.com/jsf/core" prefix="f" %>
<%@ taglib uri="/WEB-INF/tld/myComponent.tld" prefix="m" %>
<%@ taglib uri="http://rcfaces.org/core" prefix="v"%>
<%@ taglib uri="http://rcfaces.org/html" prefix="vh"%>

<f:view locale="#{paramManagedBean.identifiedUser.locale}">
    <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <f:loadBundle basename="quartisweb/resources/private_language" var="language" />
            <vh:init id="init_1" />
            <m:init />
            <link type="text/css" rel="stylesheet" href="css/style.css" />
            <vh:javaScript src="js/param.js" />
            <vh:javaScript src="js/security.js" />
            <vh:javaScript src="js/ajax-init.js" />
            <vh:javaScript src="js/ajax-dbconnection.js" />
        </head>
        <body style="overflow-y: hidden;">
            
            <f:verbatim>
                <span id="span_browse">

                </span>
            </f:verbatim>
                
            
            <c:if test="${paramManagedBean.connect}">  
                <!-- messages simples -->
                <c:if test="${!paramManagedBean.popupMessage}">
                    <h:messages id="messOK" style="position:absolute;top:8px;left:300px;z-index:10;width:338px;height:20px;overflow:hidden;" infoStyle="color: #339966;font-weight:bold;" warnStyle="color: #FF6600;font-weight:bold;" errorStyle="color: #FF0000;font-weight:bold;" fatalStyle="color: #FF0000;font-weight:bold;font-size:15px;" />
                </c:if>
                
                <!-- popup pour messages bloquants -->
                <c:if test="${paramManagedBean.popupMessage}">
                    <table id="panel_desactiv_for_popup_message" style="background-color:#C0C0C0;filter:'alpha(opacity=30)';-moz-opacity:.30;opacity:.30;width:100%;height:100%;position:absolute;z-index:300;">
                        <tr><td></td></tr>
                    </table>
                    
                    <table id="popupTable" style="width:100%;height:100%;position:absolute;z-index:300;" >
                        <tr>
                            <td align="center" valign="middle">
                                <m:shadowPanel width="400" height="200">
                                    <table cellspacing="0" cellpadding="0" style="filter:'alpha(opacity=100)';border:1px solid #3877AA;background-color:#FFFFFF;width:400px;height:200px;">
                                        <tr>
                                            <td>
                                                <div style="display:block;width:400px;height:100px;overflow:auto;border-top:1px solid #C0C0C0;border-bottom:1px solid #C0C0C0;">
                                                    <h:messages id="mess" style="z-index:10;" infoStyle="color: #339966;font-weight:bold;" warnStyle="color: #FF6600;font-weight:bold;" errorStyle="color: #FF0000;font-weight:bold;" fatalStyle="color: #FF0000;font-weight:bold;font-size:15px;" />
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
                
               
                
                <h:panelGrid columns="1" id="testConnectDesactiv" style="display:none;background-color:#C0C0C0;filter:'alpha(opacity=30)';-moz-opacity:.30;opacity:.30;width:100%;height:100%;position:absolute;z-index:300;">
                    <h:outputText/>
                </h:panelGrid>
                <h:panelGrid  id="testConnectTable" columns="1" style="display:none;text-align:center;width:100%;height:100%;position:absolute;z-index:300;" >
                    <m:shadowPanel width="400" height="100">
                        <h:panelGrid style="text-align:center;filter:'alpha(opacity=100)';border:3px solid #3877AA;background-color:#FFFFFF;width:400px;height:100px;">
                            <h:panelGrid columns="2">
                                <img id="testConnectImage" src="images/button_ok.png">
                                <h:outputText id="testConnectMessage" value="" style="font-weight:bold;" />
                            </h:panelGrid>
                            
                            <m:shadowPanel width="120" height="25">
                                <input type="button" class="commandButton btnOk" value="OK" onclick="hideTestConnect()" style="font-weight:bold;"><!-- style="background-image:url(images/button_ok.png)" -->
                            </m:shadowPanel>
                        </h:panelGrid>
                    </m:shadowPanel>
                </h:panelGrid>




               <h:form id="param">
                    <div id="paramContent">
                        <div id="container" class="ombre_tableau">
                            <div class="boite">
                                <v:tabbedPane id="tabbedpane_1" styleClass="tabbedPane3" width="100%" height="100%" value="1">
                                    <v:tab id="tab_1" value="TAB1" imageURL="images/agt_update-product.png" text="#{language.parametrage}" width="100%" height="100%" accessKey="l">
                                        <table style="height:100%;width:100%;" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td valign="top" class="contentOmbre">
                                                    <div style="overflow:auto;height:515px;width:100%;border-bottom:1px solid #C0C0C0;" class="contentOmbreDiv">
                                                        <v:lineBreak />
                                                     
                                                        <div id="paramTop">
                                                            <m:shadowPanel width="100%"  style="padding:0 0 0 5;">
                                                                <m:taskPanel myid="param_quartis" icon_url="images/qt.png" value="#{language.quartistools}" width="100%" height="130">
                                                                    <h:panelGrid columns="2" columnClasses="top,top" >
                                                                        <h:panelGroup>
                                                                            <h:panelGrid style="margin:0 0 0 5;" columns="2" >
                                                                                <h:outputText value="#{language.nom_srv_quartis}:" styleClass="textAlignRight textAlignSpan"/>
                                                                                <h:inputText id="serveur" style="border:1px solid #7F9DB9;" value="#{paramManagedBean.paramQuartis.nomSrv}" rendered="#{paramManagedBean.updateRendered}" />
                                                                                <h:outputText styleClass="outputParam" value="#{paramManagedBean.paramQuartis.nomSrv}" rendered="#{!paramManagedBean.updateRendered}" />

                                                                                <h:outputText value="#{language.port_srv_quartis}:" styleClass="textAlignRight textAlignSpan"/>
                                                                                <h:inputText id="port_srv" style="border:1px solid #7F9DB9;" value="#{paramManagedBean.paramQuartis.portSrv}" rendered="#{paramManagedBean.updateRendered}" />
                                                                                <h:outputText styleClass="outputParam" value="#{paramManagedBean.paramQuartis.portSrv}" rendered="#{!paramManagedBean.updateRendered}" />

                                                                                <h:outputText value="#{language.port_mem_quartis}:" styleClass="textAlignRight textAlignSpan"/>
                                                                                <h:inputText id="portMem" style="border:1px solid #7F9DB9;" value="#{paramManagedBean.paramQuartis.portMem}" rendered="#{paramManagedBean.updateRendered}" />
                                                                                <h:outputText styleClass="outputParam" value="#{paramManagedBean.paramQuartis.portMem}" rendered="#{!paramManagedBean.updateRendered}" />
                                                                            </h:panelGrid>
                                                                        </h:panelGroup>
                                                                        <h:panelGroup>
                                                                            <h:panelGrid style="margin:0 0 0 5;" columns="2" >
                                                                                <h:outputText value="#{language.port_console_web_quartis}:" styleClass="textAlignRight textAlignSpan"/>
                                                                                <h:inputText id="portConsoleWeb" style="border:1px solid #7F9DB9;" value="#{paramManagedBean.paramQuartis.portConsoleWeb}" rendered="#{paramManagedBean.updateRendered}"  />
                                                                                <h:outputText styleClass="outputParam" value="#{paramManagedBean.paramQuartis.portConsoleWeb}" rendered="#{!paramManagedBean.updateRendered}" />

                                                                                <h:outputText value="#{language.port_web_quartis_tools}:" styleClass="textAlignRight textAlignSpan"/>
                                                                                <h:inputText id="portToolsWeb" style="border:1px solid #7F9DB9;" value="#{paramManagedBean.paramQuartis.portSrvWeb}" rendered="#{paramManagedBean.updateRendered}"  />
                                                                                <h:outputText styleClass="outputParam" value="#{paramManagedBean.paramQuartis.portSrvWeb}" rendered="#{!paramManagedBean.updateRendered}" />

                                                                                <h:outputText value="#{language.reboot}:" styleClass="textAlignRight textAlignSpan"/>
                                                                                <h:panelGroup>
                                                                                    <h:inputText id="reboot" styleClass="inputSecond" style="border:1px solid #7F9DB9;width:30px;" value="#{paramManagedBean.paramQuartis.reboot}" rendered="#{paramManagedBean.updateRendered}" />
                                                                                    <h:outputText styleClass="outputParam" value="#{paramManagedBean.paramQuartis.reboot}" rendered="#{!paramManagedBean.updateRendered}" />
                                                                                    <h:outputText value=" #{language.secondes}" />
                                                                                </h:panelGroup>                                                                            
                                                                            </h:panelGrid>   
                                                                        </h:panelGroup>
                                                                    </h:panelGrid>
                                                                </m:taskPanel>
                                                            </m:shadowPanel>   
                                                        </div>
                                                        
                                                        <div id="paramMid">
                                                            <m:shadowPanel width="100%"  style="padding:0 0 0 5;"> 
                                                                <m:taskPanel myid="param_application" icon_url="images/open.png" value="#{language.application}" width="100%" height="70">
                                                                    <h:panelGrid style="margin:0 0 10 5;" columns="4"> <!-- n padding:0 0 0 5;" -->
                                                                        <h:outputLabel value="#{language.repertoire_application}:" style="width:140px;text-align:right;" for="application"/>
                                                                        
                                                                        <c:if test="${paramManagedBean.updateRendered}">
                                                                            <h:inputText id="application" style="border:1px solid #7F9DB9;width:300px;" value="#{paramManagedBean.paramAppli.path}" />
                                                                            <input type="button" value="${language.parcourir}" class="commandButton" onclick="openBrowse()">
                                                                        </c:if>

                                                                        <h:outputText styleClass="outputParam" value="#{paramManagedBean.paramAppli.path}" rendered="#{!paramManagedBean.updateRendered}" />

                                                                    </h:panelGrid>
                                                                </m:taskPanel>
                                                            </m:shadowPanel>  
                                                        </div>
                                                        
                                                        <c:if test="${paramManagedBean.identifiedUser.identifiant == 'admin'}">
                                                            <div id="paramForm">
                                                                <m:shadowPanel width="100%"  style="padding:0 0 0 5;"> 
                                                                    <m:taskPanel myid="param_application" icon_url="images/open.png" value="#{language.reinit_preferences_formulaire}" width="100%" height="70">
                                                                        <h:panelGrid style="margin:0 0 10 5;" columns="4"> <!-- n padding:0 0 0 5;" -->
                                                                            <h:outputLabel value="#{language.form_name}:" style="width:140px;text-align:right;" for="application"/>

                                                                            <h:inputText id="formName" style="border:1px solid #7F9DB9;width:300px;" value="#{paramManagedBean.formPreferencesName}" />

                                                                            <h:commandButton styleClass="commandButton" 
                                                                                actionListener="#{paramManagedBean.reinitFormPreferences}" 
                                                                                value="#{language.reinit}" />

                                                                        </h:panelGrid>
                                                                    </m:taskPanel>
                                                                </m:shadowPanel>  
                                                            </div>
                                                        </c:if>
                                                        
                                                        <div id="paramBot">
                                                            <m:shadowPanel width="100%"  style="padding:0 0 0 5;">
                                                                <m:taskPanel myid="param_quartis" icon_url="images/unlock.png" value="#{language.password_politique}" width="100%" height="130">
                                                                    <table>
                                                                        <colgroup>
                                                                            <col style="width: 20%" />
                                                                            <col style="width: 10%" />
                                                                            <col style="width: 20%" />
                                                                            <col style="width: 05%" />
                                                                            <col style="width: 35%" />
                                                                        </colgroup>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td colspan="5"><b><h:outputText value="#{language.password_sso_warning}" rendered="#{paramManagedBean.connexionSSOActivee}" /></b></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td class="textAlignRight"><h:outputText value="#{language.password_param_date_expiration}" style="width:140px;text-align:right;"/></td>
                                                                                <td class="textAlignLeft">
                                                                                    <h:inputText 
                                                                                        id="dateExpi" 
                                                                                        styleClass="inputSecond" 
                                                                                        style="width: 45px;" 
                                                                                        value="#{paramManagedBean.paramMdp.dureeValidite}" 
                                                                                        rendered="#{paramManagedBean.updateRendered}" />
                                                                                    <h:outputText styleClass="outputParam" value="#{paramManagedBean.paramMdp.dureeValidite}" rendered="#{!paramManagedBean.updateRendered}" />
                                                                                    <h:outputText value=" #{language.password_param_jours}" />
                                                                                </td>
                                                                                <td colspan="3"><h:outputText value="#{language.password_tip_date_expiration}" /></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td class="textAlignRight">
                                                                                    <h:outputLabel value="#{language.password_param_char_min}" style="width:140px;text-align:right;" for="charMin"/>
                                                                                </td>
                                                                                <td class="textAlignLeft">
                                                                                    <h:inputText 
                                                                                        id="charMin" 
                                                                                        style="width: 45px;" 
                                                                                        value="#{paramManagedBean.paramMdp.nbCharMin}" 
                                                                                        rendered="#{paramManagedBean.updateRendered}" />
                                                                                    <h:outputText styleClass="outputParam" value="#{paramManagedBean.paramMdp.nbCharMin}" rendered="#{!paramManagedBean.updateRendered}" />
                                                                                </td>
                                                                                <td class="textAlignRight">
                                                                                    <h:outputLabel value="#{language.password_param_caps_min}" style="width:140px;text-align:right;" for="nbMaj"/>
                                                                                </td>
                                                                                <td class="textAlignLeft">
                                                                                    <h:inputText 
                                                                                        id="nbMaj" 
                                                                                        style="width: 45px;" 
                                                                                        value="#{paramManagedBean.paramMdp.nbMaj}" 
                                                                                        rendered="#{paramManagedBean.updateRendered}" />
                                                                                    <h:outputText styleClass="outputParam" value="#{paramManagedBean.paramMdp.nbMaj}" rendered="#{!paramManagedBean.updateRendered}" />
                                                                                </td>
                                                                                <td>&nbsp;</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td class="textAlignRight">
                                                                                    <h:outputLabel value="#{language.password_param_num_min}" style="width:140px;text-align:right;" for="nbChiffres"/>
                                                                                </td>
                                                                                <td class="textAlignLeft">
                                                                                    <h:inputText 
                                                                                        id="nbChiffres" 
                                                                                        style="width: 45px;" 
                                                                                        value="#{paramManagedBean.paramMdp.nbChiffres}" 
                                                                                        rendered="#{paramManagedBean.updateRendered}"  />
                                                                                    <h:outputText styleClass="outputParam" value="#{paramManagedBean.paramMdp.nbChiffres}" rendered="#{!paramManagedBean.updateRendered}" />
                                                                                </td>
                                                                                <td class="textAlignRight">
                                                                                    <h:outputLabel value="#{language.password_param_spec_min}" style="width:140px;text-align:right;" for="nbCharSpec"/>
                                                                                </td>
                                                                                <td class="textAlignLeft">
                                                                                    <h:inputText 
                                                                                        id="nbCharSpec" 
                                                                                        style="width: 45px;" 
                                                                                        value="#{paramManagedBean.paramMdp.nbCharSpec}" 
                                                                                        rendered="#{paramManagedBean.updateRendered}"  />
                                                                                    <h:outputText styleClass="outputParam" value="#{paramManagedBean.paramMdp.nbCharSpec}" rendered="#{!paramManagedBean.updateRendered}" />
                                                                                </td>
                                                                                <td>
                                                                                    <h:outputText value="#{language.password_tip_spec} #{language.password_tip_spec_list}" />
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </m:taskPanel>
                                                            </m:shadowPanel>   
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr style="height:1px;">
                                            <td style="padding:4 4 4 4;"> <!-- n align="right" -->
                                                <c:if test="${paramManagedBean.updateRendered}">
                                                    <div class="centerBtnParam">
                                                        <m:shadowPanel width="120px" height="25px">
                                                            <h:commandButton styleClass="commandButton btnOk" 
                                                                             actionListener="#{paramManagedBean.saveParam}" 
                                                                             value="#{language.enregistrer}" />
                                                        </m:shadowPanel>
                                                    </div>
                                                </c:if>

                                            </td>
                                            <tr>
                                        </table>       
                                    </v:tab>
                                </v:tabbedPane>
                            </div>
                        </div>
                    </div>
                </h:form>
            </c:if>
            <c:if test="${!paramManagedBean.connect}">
                <f:verbatim>
                    <table style="width: 752;">
                        <tr>
                            <td style="text-align: center;vertical-align:center;color:#FF0000;font-size:12px;font-weight:bold;">
                                <h:outputText value="#{language.session_expire}" />
                            </td>
                        </tr>
                    </table>
                </f:verbatim>
            </c:if>
        </body>
    </html>
</f:view>
