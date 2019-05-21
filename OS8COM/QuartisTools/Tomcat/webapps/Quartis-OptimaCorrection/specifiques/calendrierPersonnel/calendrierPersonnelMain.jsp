<%-- 
    Document   : calendrierPersonnel
    Created on : 7 mai 2010, 15:02:57
    Author     : petitot
    Modified   : 1 june 2010
    Author     : Petitot, Battail
--%>

<%@page import="java.util.HashMap"%>
<%@page import="java.util.HashMap"%>
<%@page import="fr.osys.quartis.multilanguage.manager.MultiLanguageManager"%>
<%@page import="fr.osys.quartis.multilanguage.manager.WebRessources"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.Locale"%>
<%@page import="java.util.ResourceBundle"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>

<%@page import="commun.beans.Atelier"%>
<%@page import="commun.beans.Equipe"%>
<%@page import="commun.beans.HorairePersonnel"%>
<%@page import="commun.resources.Constants"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">

<%
    HttpSession idSess = request.getSession();
//idSess.setAttribute("idLocale", new Locale("en"));
//idSess.setAttribute("codeSite", "LAV");
    Locale idLoca = (Locale) idSess.getAttribute("idLocale");

//idLoca = new Locale("fr");
//idLoca = new Locale("de");
//idLoca = Locale.GERMAN;
    String baseNameForBundle = "/specifiques/calendrier/resources/language";
    ResourceBundle rb = ResourceBundle.getBundle(baseNameForBundle, idLoca);
    //Si RessourceBundle ne trouve pas la langue de idLoca, il renvoi la langue par defaut de la JVM installee : on force l anglais par defaut
    if (!idLoca.getLanguage().equals(rb.getLocale().getLanguage())) {
        //rb = ResourceBundle.getBundle(baseNameForBundle, Locale.ENGLISH);
        rb = ResourceBundle.getBundle(baseNameForBundle, Constants.DEFAULT_LOCALE);
    }

    List listAtelier = (List) idSess.getAttribute("listAtelier");
    List listEquipe = (List) idSess.getAttribute("listEquipe");
    String dateJour = (String) idSess.getAttribute("date");
    List listHoraire = (List) idSess.getAttribute("listHoraire");
    String codeSite = (String) idSess.getAttribute("codeSite");
    Boolean kelioMode = (Boolean) idSess.getAttribute("kelioMode");
    String deltaUTC = (String) idSess.getAttribute("deltaUTC");

//codeSite = "LAV";
    WebRessources webRessources = new WebRessources(request.getServerName(), String.valueOf(request.getServerPort()));
    //WebRessources webRessources = new WebRessources("4122B", "8383");
    //WebRessources webRessources = new WebRessources("2991B", "8384");
    MultiLanguageManager.INSTANCE.setSite(codeSite);
    MultiLanguageManager.INSTANCE.setLocale(idLoca);
    MultiLanguageManager.INSTANCE.setWebRessources(webRessources);

    //--> Recuperation des designations du contexte ATELIER_DESI_ATEL
    HashMap<String, String> hashMapValueAtelier = MultiLanguageManager.INSTANCE.getContextValueLanguage("ATELIER_DESI_ATEL");

    //--> Recuperation des designations du contexte EQUIPE_DESI_EQUI
    HashMap<String, String> hashMapValueEquipe = MultiLanguageManager.INSTANCE.getContextValueLanguage("EQUIPE_DESI_EQUI");

    //--> Recuperation des designations du contexte HORAIRE_PERSONNEL_DESI_HORA_PERS
    HashMap<String, String> hashMapValueHorairePers = MultiLanguageManager.INSTANCE.getContextValueLanguage("HORAIRE_PERSONNEL_DESI_HORA_PERS");

%>

<html xml:lang="fr" lang="fr">

    <head>

        <title>OPTIMA WEB (c)OSYS 2010</title>

        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>

        <!-- Mémorisation du ContextPath pour les Javascript et URL AJAX en particulier -->
        <script type="text/javascript">
            var contextPath = "<%=request.getContextPath()%>";
        </script>

        <!-- Initialisation de la méthode AJAX -->
        <script type="text/javascript" src="<%=request.getContextPath()%>/javascript/ajax/ajax-init.js"></script>

        <!-- Fonction de controles des dates -->
        <script type="text/javascript" src="<%=request.getContextPath()%>/javascript/fonctions/calendrierFonctions.js"></script>
        <script type="text/javascript" src="<%=request.getContextPath()%>/javascript/graphiques/windowAdjustment.js"></script>

        <!-- Objet Calendrier -->
        <link rel="stylesheet" type="text/css" media="all" href="<%=request.getContextPath()%>/javascript/calendrier/css/calendar.css"/>
        <script type="text/javascript" src="<%=request.getContextPath()%>/javascript/calendrier/calendar.js"></script>
        <script type="text/javascript" src="<%=request.getContextPath()%>/javascript/calendrier/calendar-setup.js"></script>
        <script type="text/javascript" src="<%=request.getContextPath()%>/javascript/calendrier/lang/calendar-en.js"></script> <!-- Charger le calendrier anglais en 1er (celui par defaut) -->
        <script type="text/javascript" src="<%=request.getContextPath()%>/javascript/calendrier/lang/calendar-<%=(MultiLanguageManager.INSTANCE.getLocale()).toLowerCase()%>.js"></script> <!-- Charger le calendrier de la langue si inexistant il n est pas charge et on a celui par defaut) -->

        <!--MultiLanguageManager.INSTANCE.set-->

        <!-- Gestion du Menu Contextuel -->
        <script type="text/javascript" src="<%=request.getContextPath()%>/javascript/menuContextuel/menuContextuel.js"></script>
        <link rel="stylesheet" type="text/css" media="all" href="<%=request.getContextPath()%>/javascript/menuContextuel/css/style.css"/>

        <!-- Gestion des données  -->
        <link rel="stylesheet" type="text/css" media="all" href="<%=request.getContextPath()%>/specifiques/calendrierPersonnel/css/style.css"/>
        <script type="text/javascript" src="<%=request.getContextPath()%>/specifiques/calendrierPersonnel/javascript/calendrierPersonnelMain.js"></script>

    </head>

    <body onload="callCalendrierPersonnel();"
          dir="#LANG_DIR" 
          style="-moz-user-select:none;">

        <input type="hidden" id="codeSite" value="<%=codeSite%>" />
        <input type="hidden" id="deltaUTC" value="<%=deltaUTC%>" />

        <%--
        ***************************************************************************************************
              DIV CONTENANT LE FORMULAIRE D'AJOUT
        ***************************************************************************************************
        --%>
        <div id="cachForm" class="cachForm">
        </div>

        <%--
        ***************************************************************************************************
              DIV CONTENANT LE FORMULAIRE D'AJOUT
        ***************************************************************************************************
        --%>
        <div id="addForm" class="inputForm">
            <table border="0" cellpadding="0" cellspacing="0" width="98%" align="center">
                <tr>
                    <td class="inputFormTitle" colspan="2"><%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_AJOUT_HORAIRE_L")%></td>
                </tr>
                <tr>
                    <td width="100%" colspan="2">
                        <table border="0" style="border: 1px solid #878282;" cellpadding="0" cellspacing="2px" width="100%">
                            <tr>
                                <td class="inputText" width="30%"><%=rb.getString("O_STANDARD_PARAM_HORAIRE_L")%>&nbsp;:&nbsp;</td>
                                <td>
                                    <select name="listeAjoutHoraire" id="idListeAjoutHoraire" style="width: 250px;" size="1">
                                        <option value="-" selected="true">---</option>
                                        <%
                                            HorairePersonnel h = new HorairePersonnel();
                                            for (int i = 0; i < listHoraire.size(); i++) {
                                                h = (HorairePersonnel) listHoraire.get(i);
                                        %>
                                        <option value='<%=h.getCodeHora()%>'>
                                            <!--=h.getCodeHora() + " - " + h.getDesiHora()-->
                                            <!--=h.getCodeHora() + " - " + hashMapValueHorairePers.get(h.getDesiHora())!=null?hashMapValueHorairePers.get(h.getDesiHora()):h.getDesiHora()-->
                                            <!--=h.getCodeHora() + " - " + (hashMapValueHorairePers.get(h.getDesiHora())!=null?hashMapValueHorairePers.get(h.getDesiHora()):h.getDesiHora())-->
                                            <%=h.getCodeHoraSite() + " - " + (((hashMapValueHorairePers.get(h.getDesiHora()) != null) && (hashMapValueHorairePers.get(h.getDesiHora()) != "null")) ? hashMapValueHorairePers.get(h.getDesiHora()) : h.getDesiHora())%>
                                        </option>
                                        <%}%>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td class="inputText"><input name="idPersAjout" id="idPersAjout1" value="1" type="radio" checked="checked"/></td>
                                <td class="commentText"><%=rb.getString("O_CALENDRIER_PERSONNEL_PARAM_PERSONNEL_SELECTIONNE_LL")%></td>
                            </tr>
                            <tr>
                                <td class="inputText"><input name="idPersAjout" id="idPersAjout2" value="2" type="radio"/></td>
                                <td class="commentText"><%=rb.getString("O_CALENDRIER_PERSONNEL_PARAM_PERSONNEL_TOUS_LL")%></td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <table cellspacing="0" cellpadding="0" style="border-collapse: collapse">
                                        <tr>
                                            <td class="inputText" width="30%"><%=rb.getString("O_STANDARD_PARAM_DATE_DU_L")%>&nbsp;:&nbsp;</td>
                                            <td><input type="text" id="idDateDebutAjout"  readonly="readonly" size="9"/></td>
                                            <td><img src="specifiques/calendrierEquipement/images/cal.jpeg" alt="+" id="btnDateDebutAjout" style="cursor: pointer;" title=""/></td>
                                            <td class="inputText" width="30%"><%=rb.getString("O_STANDARD_PARAM_DATE_AU_L")%>&nbsp;:&nbsp;</td>
                                            <td><input type="text" id="idDateFinAjout"  readonly="readonly" size="9"/></td>
                                            <td><img src="specifiques/calendrierEquipement/images/cal.jpeg" alt="+" id="btnDateFinAjout" style="cursor: pointer;" title=""/></td>
                                        </tr>
                                    </table>
                                    <script type="text/javascript">
                                        Calendar.setup({
                                            inputField: "idDateDebutAjout", // id of the input field
                                            ifFormat: "%d/%m/%Y", // format of the input field
                                            showsTime: false, // will display a time selector
                                            timeFormat: "24",
                                            button: "btnDateDebutAjout", // trigger for the calendar (button ID)
                                            singleClick: true, // double-click mode
                                            step: 1                // show all years in drop-down boxes (instead of every other year as default)
                                        });
                                        Calendar.setup({
                                            inputField: "idDateFinAjout", // id of the input field
                                            ifFormat: "%d/%m/%Y", // format of the input field
                                            showsTime: false, // will display a time selector
                                            timeFormat: "24",
                                            button: "btnDateFinAjout", // trigger for the calendar (button ID)
                                            singleClick: true, // double-click mode
                                            step: 1                // show all years in drop-down boxes (instead of every other year as default)
                                        });
                                    </script>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td width="50%" align="center" height="40px">
                        <input style="cursor:pointer; width: 90px; height: 26px;" value="<%=rb.getString("O_STANDARD_BOUTON_ENREGISTRER_L")%>" type="button" onClick ="callCalendrierPersonnelAdd();
                                document.getElementById('idListeAjoutHoraire').style.visibility = 'hidden';" />
                    </td>
                    <td width="50%" align="center">
                        <input style="cursor:pointer; width: 90px; height: 26px;" value="<%=rb.getString("O_STANDARD_BOUTON_ANNULER_L")%>" type="button" onClick = "closeForm('addForm');
                                document.getElementById('idListeAjoutHoraire').style.visibility = 'hidden';" />
                    </td>
                </tr>
            </table>
        </div>

        <%--
        ***************************************************************************************************
              DIV CONTENANT LE FORMULAIRE DE SUPPRESSION
        ***************************************************************************************************
        --%>
        <div id="deleteForm" class="inputForm">
            <table border="0" cellpadding="0" cellspacing="0" width="98%" align="center">
                <tr>
                    <td class="inputFormTitle" colspan="2"><%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_SUPPRESSION_HORAIRE_L")%></td>
                </tr>
                <tr>
                    <td width="100%" colspan="2">
                        <table border="0" style="border: 1px solid #878282;" cellpadding="0" cellspacing="2px" width="100%">
                            <tr>
                                <td class="inputText" width="30%"><input name="idPersDelete" id="idPersDelete1" value="1" type="radio" checked="checked"></td>
                                <td class="commentText"><%=rb.getString("O_CALENDRIER_PERSONNEL_PARAM_PLAGE_SELECTIONNE_LL")%></td>
                            </tr>
                            <tr>
                                <td class="inputText"><input name="idPersDelete" id="idPersDelete2" value="2" type="radio"></td>
                                <td class="commentText"><%=rb.getString("O_CALENDRIER_PERSONNEL_PARAM_PLAGE_COMPLETE_LL")%></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td width="50%" align="center" height="40px">
                        <input style="cursor:pointer; width: 90px; height: 26px;" value="<%=rb.getString("O_STANDARD_BOUTON_ENREGISTRER_L")%>" type="button" onClick ="callCalendrierPersonnelDelete();" />
                    </td>
                    <td width="50%" align="center">
                        <input style="cursor:pointer; width: 90px; height: 26px;" value="<%=rb.getString("O_STANDARD_BOUTON_ANNULER_L")%>" type="button" onClick = "closeForm('deleteForm');" />
                    </td>
                </tr>
            </table>
        </div>

        <%--
        ***************************************************************************************************
              DIV CONTENANT LE FORMULAIRE DE CALCUL DU CALENDRIER DES EQUIPEMENTS SELECTIONNES
        ***************************************************************************************************
        --%>
        <div id="calcForm" class="inputForm">
            <table border="0" cellpadding="0" cellspacing="0" width="98%" align="center">
                <tr>
                    <td class="inputFormTitle" colspan="2"><%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_CALCUL_OUVERTURE_L")%></td>
                </tr>
                <tr>
                    <td width="100%" colspan="2">
                        <table border="0" style="border: 1px solid #878282;" cellpadding="0" cellspacing="2px" width="100%">
                            <tr>
                                <td class="inputText" width="30%"><input name="idPersCalcul" id="idPersCalcul1" value="1" type="radio" checked="checked"/></td>
                                <td class="commentText"><%=rb.getString("O_CALENDRIER_PERSONNEL_PARAM_PERSONNEL_SELECTIONNE_LL")%></td>
                            </tr>
                            <tr>
                                <td class="inputText"><input name="idPersCalcul" id="idPersCalcul2" value="2" type="radio"/></td>
                                <td class="commentText"><%=rb.getString("O_CALENDRIER_PERSONNEL_PARAM_PERSONNEL_TOUS_LL")%></td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <table cellspacing="0" cellpadding="0" style="border-collapse: collapse">
                                        <tr>
                                            <td class="inputText" width="30%"><%=rb.getString("O_STANDARD_PARAM_DATE_DU_L")%>&nbsp;:&nbsp;</td>
                                            <td><input type="text" id="idDateDebutCalcul"  readonly="readonly" size="9"/></td>
                                            <td><img src="specifiques/calendrierEquipement/images/cal.jpeg" alt="+" id="btnDateDebutCalcul" style="cursor: pointer;" title=""/></td>
                                            <td class="inputText" width="30%"><%=rb.getString("O_STANDARD_PARAM_DATE_AU_L")%>&nbsp;:&nbsp;</td>
                                            <td><input type="text" id="idDateFinCalcul"  readonly="readonly" size="9"/></td>
                                            <td><img src="specifiques/calendrierEquipement/images/cal.jpeg" alt="+" id="btnDateFinCalcul" style="cursor: pointer;" title=""/></td>
                                        </tr>
                                    </table>
                                    <script type="text/javascript">
                                        Calendar.setup({
                                            inputField: "idDateDebutCalcul", // id of the input field
                                            ifFormat: "%d/%m/%Y", // format of the input field
                                            showsTime: false, // will display a time selector
                                            timeFormat: "24",
                                            button: "btnDateDebutCalcul", // trigger for the calendar (button ID)
                                            singleClick: true, // double-click mode
                                            step: 1                // show all years in drop-down boxes (instead of every other year as default)
                                        });
                                        Calendar.setup({
                                            inputField: "idDateFinCalcul", // id of the input field
                                            ifFormat: "%d/%m/%Y", // format of the input field
                                            showsTime: false, // will display a time selector
                                            timeFormat: "24",
                                            button: "btnDateFinCalcul", // trigger for the calendar (button ID)
                                            singleClick: true, // double-click mode
                                            step: 1                // show all years in drop-down boxes (instead of every other year as default)
                                        });
                                    </script>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td width="50%" align="center" height="40px">
                        <input style="cursor:pointer; width: 90px; height: 26px;" value="<%=rb.getString("O_STANDARD_BOUTON_ENREGISTRER_L")%>" type="button" onClick ="callCalendrierPersonnelCalcul();" />
                    </td>
                    <td width="50%" align="center">
                        <input style="cursor:pointer; width: 90px; height: 26px;" value="<%=rb.getString("O_STANDARD_BOUTON_ANNULER_L")%>" type="button" onClick = "closeForm('calcForm');" />
                    </td>
                </tr>
            </table>
        </div>

        <%--
        ***************************************************************************************************
              DIV CONTENANT LE MESSAGE DE CHARGEMENT DES DONNEES
        ***************************************************************************************************
        --%>
        <div id="dataOnLoad" class="popUp">
            <br><%=rb.getString("O_STANDARD_MSG_CHARGEMENT_DONNEES_LL")%>
        </div>

        <%--
        ***************************************************************************************************
              DIV CONTENANT LE MESSAGE DE CALCUL DU CALENDRIER EN COURS
        ***************************************************************************************************
        --%>
        <div id="calcProcess" class="popUp">
            <br><div id="p1"><%=rb.getString("O_STANDARD_MSG_CALCUL_DONNEES_LL")%></div>
        </div>

        <%--
        ***************************************************************************************************
              DIV CONTENANT LE MENU CONTEXTUEL ACCESSIBLES PAR CLIC DROIT DANS LE TABLEAU
        ***************************************************************************************************
        --%>
        <% if (kelioMode == true) {%>
        <div id="ie5menu" class="menuclickdroit" onmouseover="highlightie5(event, '#3872A8', '#FFFFFF');" onmouseout="lowlightie5(event, '', '#000000');" onclick="jumptoie5(event);" style="display:block; visibility:hidden;">
            <div class="menuitems" onclick="selectDisplayMode(1);" title='<%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_AFFICHE_HORAIRE_LL")%>'><%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_AFFICHE_HORAIRE_L")%></div>
            <div class="menuitems" onclick="selectDisplayMode(2);" title='<%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_AFFICHE_EQUIPE_LL")%>'><%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_AFFICHE_EQUIPE_L")%></div>
            <div class="menuitems" onclick="selectDisplayMode(3);" title='<%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_AFFICHE_PRESENCE_LL")%>'><%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_AFFICHE_PRESENCE_L")%></div>
            <div class="menuitems" onclick="selectDisplayMode(4);" title='<%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_AFFICHE_CALCULE_LL")%>'><%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_AFFICHE_CALCULE_L")%></div>
        </div>
        <%
        } else {
        %>
        <div id="ie5menu" class="menuclickdroit" onmouseover="highlightie5(event, '#3872A8', '#FFFFFF');" onmouseout="lowlightie5(event, '', '#000000');" onclick="jumptoie5(event);" style="display:block; visibility:hidden;">
            <div class="menuitems" onclick="openAddForm();" title='<%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_AJOUT_HORAIRE_LL")%>'><%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_AJOUT_HORAIRE_L")%></div>
            <div class="menuitems" onclick="openDeleteForm();" title='<%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_SUPPRESSION_HORAIRE_LL")%>'><%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_SUPPRESSION_HORAIRE_L")%></div>
            <hr/>
            <div class="menuitems" onclick="openCalcForm();" title='<%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_CALCUL_OUVERTURE_LL")%>'><%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_CALCUL_OUVERTURE_L")%></div>
            <hr/>
            <div class="menuitems" onclick="selectDisplayMode(1);" title='<%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_AFFICHE_HORAIRE_LL")%>'><%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_AFFICHE_HORAIRE_L")%></div>
            <div class="menuitems" onclick="selectDisplayMode(2);" title='<%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_AFFICHE_EQUIPE_LL")%>'><%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_AFFICHE_EQUIPE_L")%></div>
            <div class="menuitems" onclick="selectDisplayMode(3);" title='<%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_AFFICHE_PRESENCE_LL")%>'><%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_AFFICHE_PRESENCE_L")%></div>
            <div class="menuitems" onclick="selectDisplayMode(4);" title='<%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_AFFICHE_CALCULE_LL")%>'><%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_AFFICHE_CALCULE_L")%></div>
            <hr/>
            <div class="menuitems" onclick="selectDisplayDefault();" title='<%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_AFFICHE_DEFAUT_LL")%>'><%=rb.getString("O_CALENDRIER_PERSONNEL_MENU_AFFICHE_DEFAUT_L")%></div>
        </div>
        <%
            }
        %>
        <script type="text/javascript">
            //--> Gestion du menu contextuel
            menuobj = document.getElementById("ie5menu");
            MCenable = true;
        </script>

        <%--
        ***************************************************************************************************
              Procédure de centrage automatique des DIV
        ***************************************************************************************************
        --%>
        <script type="Text/JavaScript">
            window.onresize=function() {
            centerObject("dataOnLoad");
            centerObject("calcProcess");
            centerObject("addForm");
            centerObject("deleteForm");
            centerObject("calcForm");
            }
            centerObject("dataOnLoad");
            centerObject("calcProcess");
            centerObject("addForm");
            centerObject("deleteForm");
            centerObject("calcForm");
            setObjectOpacity("cachForm",50);
            document.body.oncontextmenu = function(){return false;}
            document.body.ondragstart = function(){return false;}
            document.body.onselectstart = function(){return false;}
        </script>

        <INPUT type="hidden" id="idModeAffichage" value="1">
        <INPUT type="hidden" id="idDefautAffichage" value="1">

        <%--
        ***************************************************************************************************
              CRITERES DE RECHERCHE
        ***************************************************************************************************
        --%>
        <table style="width:100%;" border="0" cellpadding="0" cellspacing="0">
            <tr>
                <td class="inputText"><%=rb.getString("O_STANDARD_PARAM_DATE_CALENDRIER_L")%>&nbsp;:&nbsp;</td>
                <td style="text-align: left;">
                    <table cellspacing="0" cellpadding="0" style="border-collapse: collapse"><tr>
                            <td><input type="text" name="dateCalePers" id="idDateCalePers" value='<%=dateJour%>'  size="10"/></td>
                            <td><img src="specifiques/calendrierPersonnel/images/cal.jpeg" id="btnDateCalePers" alt="+" style="cursor: pointer;" title=""/></td>
                    </table>

                    <script type="text/javascript">
                        Calendar.setup({
                            inputField: "idDateCalePers", // id of the input field
                            ifFormat: "%d/%m/%Y", // format of the input field
                            showsTime: false, // will display a time selector
                            timeFormat: "24",
                            button: "btnDateCalePers", // trigger for the calendar (button ID)
                            singleClick: true, // double-click mode
                            step: 1                // show all years in drop-down boxes (instead of every other year as default)
                        });
                    </script>
                </td>

                <td style="text-align: right; font-family: tahoma; font-weight: bold; font-size : 12px; color: rgb(51,51,51);"><%=rb.getString("O_STANDARD_PARAM_ATELIER_L")%>&nbsp;:&nbsp;</td>
                <td style="text-align: left;">
                    <select name="idListeAtelCalePers" id="idListeAtelCalePers" style="width: 200px;" size="1" >
                        <option value="-" selected="true">---</option>
                        <%
                            Atelier atel = new Atelier();
                            for (int i = 0; i < listAtelier.size(); i++) {
                                atel = (Atelier) listAtelier.get(i);
                        %><option value='<%=atel.getCodeAtel()%>'  title='<%=atel.getDesiAtel()%>'>
                            <!--=atel.getCodeAtel() + " - " + atel.getDesiAtel()-->
                            <!--=atel.getCodeAtel() + " - " + atel.getDesiAtel(idLoca.getLanguage())-->
                            <!--=atel.getCodeAtel() + " - " + hashMapValueAtelier.get(atel.getDesiAtel())!=null?(hashMapValueAtelier.get(atel.getDesiAtel())):atel.getDesiAtel()-->
                            <%=atel.getCodeAtelSite() + " - " + (((hashMapValueAtelier.get(atel.getDesiAtel()) != null) && (hashMapValueAtelier.get(atel.getDesiAtel()) != "null")) ? (hashMapValueAtelier.get(atel.getDesiAtel())) : atel.getDesiAtel())%>
                        </option>

                        <%}%>
                    </select>
                </td>
                <td align="right" rowspan="2">
                    <input style="cursor:pointer; width: 90px; height: 26px;" value="<%=rb.getString("O_STANDARD_BOUTON_RECHERCHE_L")%>" name="recherche" type="button" onClick="callCalendrierPersonnel();">
                </td>
            </tr>
            <tr>
                <td style="text-align: right; font-family: tahoma; font-weight: bold; font-size : 12px; color: rgb(51,51,51);"><%=rb.getString("O_STANDARD_PARAM_NOMBRE_SEMAINES_L")%>&nbsp;:&nbsp;</td>
                <td style="text-align: left;">
                    <select name="nbSemaineCalePers" id="idNbSemaineCalePers" style="width: 35px;" size="1" onClick="callCalendrierPersonnel();" >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3" selected="true" >3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </td>
                <td style="text-align: right; font-family: tahoma; font-weight: bold; font-size : 12px; color: rgb(51,51,51);"><%=rb.getString("O_STANDARD_PARAM_EQUIPE_L")%>&nbsp;:&nbsp;</td>
                <td style="text-align: left;">
                    <select name="listeEquiCalePers" id="idListeEquiCalePers" style="width: 200px;" size="1" >
                        <option value="-" selected="true">---</option>
                        <%
                            Equipe l_equipe = new Equipe();
                            for (int i = 0; i < listEquipe.size(); i++) {
                                l_equipe = (Equipe) listEquipe.get(i);
                        %>
                        <option value='<%=l_equipe.getCodeEqui()%>'  title='<%=l_equipe.getDesiEqui()%>'>
                            <!--=l_equipe.getCodeEqui() + " - " + l_equipe.getDesiEqui()-->
                            <%=l_equipe.getCodeEquiSite() + " - " + (((hashMapValueEquipe.get(l_equipe.getDesiEqui()) != null) && (hashMapValueAtelier.get(atel.getDesiAtel()) != "null")) ? hashMapValueEquipe.get(l_equipe.getDesiEqui()) : l_equipe.getDesiEqui())%>
                        </option>
                        <%}%>
                    </select>
                </td>
            </tr>
        </table>


        <%--
        ***************************************************************************************************
              TABLEAU AVEC LES FLECHES DE DEPLACEMENT ET LES BOUTONS QUITTER
        ***************************************************************************************************
        --%>
        <table border="0" style="width:98%;">
            <tr>
                <td style="width:210px;text-align:center;"></td>
                <td>
                    <table border="0" style="width:100%;">
                        <tr>
                            <td style="width:25%;text-align:center;"><img src="specifiques/calendrierEquipement/images/arrow_left_double.jpeg" alt="Week--" style="cursor:pointer;" onclick="removePreviousZone();
                                    callCalendrierPersonnel('doubledown');"/></td>
                            <td style="width:25%;text-align:center;"><img src="specifiques/calendrierEquipement/images/arrow_left.jpeg" alt="Week-" style="cursor:pointer;" onclick="removePreviousZone();
                                    callCalendrierPersonnel('down');"/></td>
                            <td style="width:25%;text-align:center;"><img src="specifiques/calendrierEquipement/images/arrow_right.jpeg" alt="Week+" style="cursor:pointer;" onclick="removePreviousZone();
                                    callCalendrierPersonnel('up');"/></td>
                            <td style="width:25%;text-align:center;"><img src="specifiques/calendrierEquipement/images/arrow_right_double.jpeg" alt="Week++" style="cursor:pointer;" onclick="removePreviousZone();
                                    callCalendrierPersonnel('doubleup');"/></td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>

        <div id="idCalDiv" style="width:98%; border: 0px solid #878282; z-index: 0;">
        </div>

        <table border="0" style="width:98%;">
            <tr>
                <td style="width:210px;text-align:center;"></td>
                <td>
                    <table border="0" style="width:100%;">
                        <tr>
                            <td style="width:25%;text-align:center;"><img src="specifiques/calendrierEquipement/images/arrow_left_double.jpeg" alt="Week--" style="cursor:pointer;" onclick="removePreviousZone();
                                    callCalendrierPersonnel('doubledown');"/></td>
                            <td style="width:25%;text-align:center;"><img src="specifiques/calendrierEquipement/images/arrow_left.jpeg" alt="Week-" style="cursor:pointer;" onclick="removePreviousZone();
                                    callCalendrierPersonnel('down');"/></td>
                            <td style="width:25%;text-align:center;"><img src="specifiques/calendrierEquipement/images/arrow_right.jpeg" alt="Week+" style="cursor:pointer;" onclick="removePreviousZone();
                                    callCalendrierPersonnel('up');"/></td>
                            <td style="width:25%;text-align:center;"><img src="specifiques/calendrierEquipement/images/arrow_right_double.jpeg" alt="week++" style="cursor:pointer;" onclick="removePreviousZone();
                                    callCalendrierPersonnel('doubleup');"/></td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>

    </body>

</html>



