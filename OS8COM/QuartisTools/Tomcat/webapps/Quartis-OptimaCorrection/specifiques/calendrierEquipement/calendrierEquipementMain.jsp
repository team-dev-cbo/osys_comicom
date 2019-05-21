<%-- 
    Document   : calendrierEquipement
    Created on : 4 mars 2009, 10:38:19
    Modified   : 1 june 2010
    Author     : Petitot, Battail
--%>

<%@page import="fr.osys.quartis.multilanguage.manager.WebRessources"%>
<%@page import="fr.osys.quartis.multilanguage.manager.MultiLanguageManager"%>
<%@page import="java.util.HashMap"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.Locale"%>
<%@page import="java.util.ResourceBundle"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>

<%@page import="commun.beans.Atelier"%>
<%@page import="commun.beans.SecteurGeo"%>
<%@page import="commun.beans.HoraireEquipement"%>
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

    List listSecteur = (List) idSess.getAttribute("listSecteur");
    List listAtelier = (List) idSess.getAttribute("listAtelier");
    String dateJour = (String) idSess.getAttribute("date");
    List listHoraire = (List) idSess.getAttribute("listHoraire");
    String codeSite = (String) idSess.getAttribute("codeSite");
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

    //--> Recuperation des designations du contexte SECTION_GEO_DESI_SECT_GEOG
    HashMap<String, String> hashMapValueSectionGeo = MultiLanguageManager.INSTANCE.getContextValueLanguage("SECTION_GEO_DESI_SECT_GEOG");

    //--> Recuperation des designations du contexte HORAIRE_MACHINE_DESI_HORA
    HashMap<String, String> hashMapValueHoraireMach = MultiLanguageManager.INSTANCE.getContextValueLanguage("HORAIRE_MACHINE_DESI_HORA");

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

        <!-- Gestion du Menu Contextuel -->
        <script type="text/javascript" src="<%=request.getContextPath()%>/javascript/menuContextuel/menuContextuel.js"></script>
        <link rel="stylesheet" type="text/css" media="all" href="<%=request.getContextPath()%>/javascript/menuContextuel/css/style.css"/>

        <!-- Gestion des données  -->
        <link rel="stylesheet" type="text/css" media="all" href="<%=request.getContextPath()%>/specifiques/calendrierEquipement/css/style.css"/>
        <script type="text/javascript" src="<%=request.getContextPath()%>/specifiques/calendrierEquipement/javascript/calendrierEquipementMain.js"></script>

    </head>

    <body onload="callCalendrierEquipement();" 
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
                    <td class="inputFormTitle" colspan="2"><%=rb.getString("O_CALENDRIER_EQUIPEMENT_MENU_AJOUT_HORAIRE_L")%></td>
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
                                            HoraireEquipement h = new HoraireEquipement();
                                            for (int i = 0; i < listHoraire.size(); i++) {
                                                h = (HoraireEquipement) listHoraire.get(i);
                                        %>
                                        <option value='<%=h.getCodeHora()%>'>
                                            <!--=h.getCodeHora() + " - " + h.getDesiHora()-->
                                            <!--=h.getCodeHora() + " - " + hashMapValueHoraireMach.get(h.getDesiHora())!=null?hashMapValueAtelier.get(h.getDesiHora()):h.getDesiHora()-->
                                            <%=h.getCodeHoraSite() + " - " + (((hashMapValueHoraireMach.get(h.getDesiHora()) != null) && (hashMapValueHoraireMach.get(h.getDesiHora()) != "null")) ? hashMapValueHoraireMach.get(h.getDesiHora()) : h.getDesiHora())%>
                                        </option>
                                        <%}%>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td class="inputText"><input name="idMachAjout" id="idMachAjout1" value="1" type="radio" checked="checked"/></td>
                                <td class="commentText"><%=rb.getString("O_CALENDRIER_EQUIPEMENT_PARAM_EQUIPEMENT_SELECTIONNE_LL")%></td>
                            </tr>
                            <tr>
                                <td class="inputText"><input name="idMachAjout" id="idMachAjout2" value="2" type="radio"/></td>
                                <td class="commentText"><%=rb.getString("O_CALENDRIER_EQUIPEMENT_PARAM_EQUIPEMENT_TOUS_LL")%></td>
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
                        <input style="cursor:pointer; width: 90px; height: 26px;" value="<%=rb.getString("O_STANDARD_BOUTON_ENREGISTRER_L")%>" type="button" onClick ="callCalendrierEquipementAdd();
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
                    <td class="inputFormTitle" colspan="2"><%=rb.getString("O_CALENDRIER_EQUIPEMENT_MENU_SUPPRESSION_HORAIRE_L")%></td>
                </tr>
                <tr>
                    <td width="100%" colspan="2">
                        <table border="0" style="border: 1px solid #878282;" cellpadding="0" cellspacing="2px" width="100%">
                            <tr>
                                <td class="inputText" width="30%"><input name="idMachDelete" id="idMachDelete1" value="1" type="radio" checked="checked"></td>
                                <td class="commentText"><%=rb.getString("O_CALENDRIER_EQUIPEMENT_PARAM_PLAGE_SELECTIONNE_LL")%></td>
                            </tr>
                            <tr>
                                <td class="inputText"><input name="idMachDelete" id="idMachDelete2" value="2" type="radio"></td>
                                <td class="commentText"><%=rb.getString("O_CALENDRIER_EQUIPEMENT_PARAM_PLAGE_COMPLETE_LL")%></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td width="50%" align="center" height="40px">
                        <input style="cursor:pointer; width: 90px; height: 26px;" value="<%=rb.getString("O_STANDARD_BOUTON_ENREGISTRER_L")%>" type="button" onClick ="callCalendrierEquipementDelete();" />
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
                    <td class="inputFormTitle" colspan="2"><%=rb.getString("O_CALENDRIER_EQUIPEMENT_MENU_CALCUL_OUVERTURE_L")%></td>
                </tr>
                <tr>
                    <td width="100%" colspan="2">
                        <table border="0" style="border: 1px solid #878282;" cellpadding="0" cellspacing="2px" width="100%">
                            <tr>
                                <td class="inputText" width="30%"><input name="idMachCalcul" id="idMachCalcul1" value="1" type="radio" checked="checked"/></td>
                                <td class="commentText"><%=rb.getString("O_CALENDRIER_EQUIPEMENT_PARAM_EQUIPEMENT_SELECTIONNE_LL")%></td>
                            </tr>
                            <tr>
                                <td class="inputText"><input name="idMachCalcul" id="idMachCalcul2" value="2" type="radio"/></td>
                                <td class="commentText"><%=rb.getString("O_CALENDRIER_EQUIPEMENT_PARAM_EQUIPEMENT_TOUS_LL")%></td>
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
                        <input style="cursor:pointer; width: 90px; height: 26px;" value="<%=rb.getString("O_STANDARD_BOUTON_ENREGISTRER_L")%>" type="button" onClick ="callCalendrierEquipementCalcul();" />
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
        <div id="ie5menu" class="menuclickdroit" onmouseover="highlightie5(event, '#3872A8', '#FFFFFF');" onmouseout="lowlightie5(event, '', '#000000');" onclick="jumptoie5(event);" style="display:block; visibility:hidden;">
            <div class="menuitems" onclick="openAddForm();" title='<%=rb.getString("O_CALENDRIER_EQUIPEMENT_MENU_AJOUT_HORAIRE_LL")%>'><%=rb.getString("O_CALENDRIER_EQUIPEMENT_MENU_AJOUT_HORAIRE_L")%></div>
            <div class="menuitems" onclick="openDeleteForm();" title='<%=rb.getString("O_CALENDRIER_EQUIPEMENT_MENU_SUPPRESSION_HORAIRE_LL")%>'><%=rb.getString("O_CALENDRIER_EQUIPEMENT_MENU_SUPPRESSION_HORAIRE_L")%></div>
            <hr/>
            <div class="menuitems" onclick="openCalcForm();" title='<%=rb.getString("O_CALENDRIER_EQUIPEMENT_MENU_CALCUL_OUVERTURE_LL")%>'><%=rb.getString("O_CALENDRIER_EQUIPEMENT_MENU_CALCUL_OUVERTURE_L")%></div>
            <hr/>
            <div class="menuitems" onclick="selectDisplayMode(1);" title='<%=rb.getString("O_CALENDRIER_EQUIPEMENT_MENU_AFFICHE_HORAIRE_LL")%>'><%=rb.getString("O_CALENDRIER_EQUIPEMENT_MENU_AFFICHE_HORAIRE_L")%></div>
            <div class="menuitems" onclick="selectDisplayMode(2);" title='<%=rb.getString("O_CALENDRIER_EQUIPEMENT_MENU_AFFICHE_OUVERTURE_LL")%>'><%=rb.getString("O_CALENDRIER_EQUIPEMENT_MENU_AFFICHE_OUVERTURE_L")%></div>
            <div class="menuitems" onclick="selectDisplayMode(3);" title='<%=rb.getString("O_CALENDRIER_EQUIPEMENT_MENU_AFFICHE_CALCULE_LL")%>'><%=rb.getString("O_CALENDRIER_EQUIPEMENT_MENU_AFFICHE_CALCULE_L")%></div>
            <hr/>
            <div class="menuitems" onclick="selectDisplayDefault();" title='<%=rb.getString("O_CALENDRIER_EQUIPEMENT_MENU_AFFICHE_DEFAUT_LL")%>'><%=rb.getString("O_CALENDRIER_EQUIPEMENT_MENU_AFFICHE_DEFAUT_L")%></div>
        </div>
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

        <%--
        ***************************************************************************************************
              VARIABLE CONTENANT LES TEXTES DE LA PAGE
        ***************************************************************************************************
        --%>
        <input type="hidden" id="calRes_msg_1" value="<%=rb.getString("O_STANDARD_MSG_DATE_NON_SAISIE_LL")%>" />
        <input type="hidden" id="calResWeek"  value="<%=rb.getString("O_STANDARD_LABEL_SEMAINES_LL")%>" />
        <input type="hidden" id="calResDay_1" value="<%=rb.getString("O_STANDARD_LABEL_LUNDI_L")%>" />
        <input type="hidden" id="calResDay_2" value="<%=rb.getString("O_STANDARD_LABEL_MARDI_L")%>" />
        <input type="hidden" id="calResDay_3" value="<%=rb.getString("O_STANDARD_LABEL_MERCREDI_L")%>" />
        <input type="hidden" id="calResDay_4" value="<%=rb.getString("O_STANDARD_LABEL_JEUDI_L")%>" />
        <input type="hidden" id="calResDay_5" value="<%=rb.getString("O_STANDARD_LABEL_VENDREDI_L")%>" />
        <input type="hidden" id="calResDay_6" value="<%=rb.getString("O_STANDARD_LABEL_SAMEDI_L")%>" />
        <input type="hidden" id="calResDay_7" value="<%=rb.getString("O_STANDARD_LABEL_DIMANCHE_L")%>" />
        <input type="hidden" id="caldeta_2"   value="<%=rb.getString("O_STANDARD_PARAM_DATE_DU_L")%>" />
        <input type="hidden" id="caldeta_3"   value="<%=rb.getString("O_STANDARD_PARAM_DATE_AU_L")%>" />
        <input type="hidden" id="caldeta_4"   value="<%=rb.getString("O_STANDARD_LABEL_TEMPS_OUVERTURE_LL")%>" />
        <input type="hidden" id="caldeta_5"   value="<%=rb.getString("O_STANDARD_LABEL_DISPONIBILITE_OPERATIONNELLE_LL")%>" />
        <input type="hidden" id="calRes_msg_4" value="<%=rb.getString("O_CALENDRIER_EQUIPEMENT_MSG_DATE_ATTRIBUEE_LL")%>" />
        <input type="hidden" id="sip_msg_date" value="<%=rb.getString("O_STANDARD_MSG_DATE_ERREUR_FORMAT_LL")%>" />
        <INPUT type="hidden" id="idModeAffichage" value="1"/>
        <INPUT type="hidden" id="idDefautAffichage" value="1"/>

        <%--
        ***************************************************************************************************
              CRITERES DE RECHERCHE
        ***************************************************************************************************
        --%>
        <table style="width:100%;" id="criteria" border="0" cellpadding="0" cellspacing="0">
            <tr>
                <td class="inputText"><%=rb.getString("O_STANDARD_PARAM_DATE_CALENDRIER_L")%>&nbsp;:&nbsp;</td>
                <td>
                    <table cellspacing="0" cellpadding="0" style="border-collapse: collapse"><tr>
                            <td><input type="text" name="dateCaleRes" id="idDateCaleRes" value='<%=dateJour%>' size="10"/></td>
                            <td><img src="specifiques/calendrierEquipement/images/cal.jpeg" alt="+" id="btnDateCaleRes" style="cursor: pointer;" title=""/></td>
                        </tr>
                    </table>
                    <div id="calendarDisplay" style="position:absolute; visibility:hidden;"></div>
                    <script type="text/javascript">
                        Calendar.setup({
                            inputField: "idDateCaleRes", // id of the input field
                            displayArea: "calendarDisplay",
                            ifFormat: "%d/%m/%Y", // format of the input field
                            showsTime: false, // will display a time selector
                            timeFormat: "24",
                            button: "btnDateCaleRes", // trigger for the calendar (button ID)
                            singleClick: true, // double-click mode
                            step: 1                // show all years in drop-down boxes (instead of every other year as default)
                        });
                    </script>
                </td>
                <td class="inputText"><%=rb.getString("O_STANDARD_PARAM_ATELIER_L")%>&nbsp;:&nbsp;</td>
                <td>
                    <select name="listeAtelCaleRes" id="idListeAtelCaleRes" style="width: 200px;" size="1" >
                        <option value="-" selected="true">---</option>
                        <%
                            Atelier atel = new Atelier();
                            for (int i = 0; i < listAtelier.size(); i++) {
                                atel = (Atelier) listAtelier.get(i);
                        %><option value='<%=atel.getCodeAtel()%>'  title='<%=atel.getDesiAtel()%>'>
                            <!--
                            /*=atel.getCodeAtel() + " - " + atel.getDesiAtel()*/-->
                            <!--=atel.getCodeAtel() + " - " + atel.getDesiAtel(idLoca.getLanguage())-->
                            <!--=atel.getCodeAtel() + " - " + hashMapValueAtelier.get(atel.getDesiAtel())!=null?hashMapValueAtelier.get(atel.getDesiAtel()):atel.getDesiAtel()-->
                            <%=atel.getCodeAtelSite() + " - " + (((hashMapValueAtelier.get(atel.getDesiAtel()) != null) && (hashMapValueAtelier.get(atel.getDesiAtel()) != "null")) ? hashMapValueAtelier.get(atel.getDesiAtel()) : atel.getDesiAtel())%>
                        </option>

                        <%}%>
                    </select>
                </td>
                <td align="right" rowspan="2">
                    <input style="cursor:pointer; width: 90px; height: 26px;" value="<%=rb.getString("O_STANDARD_BOUTON_RECHERCHE_L")%>" name="recherche" type="button" onClick="callCalendrierEquipement('init');"/>
                </td>
            </tr>
            <tr>
                <td style="text-align: right; font-family: tahoma; font-weight: bold; font-size : 12px; color: rgb(51,51,51);"><%=rb.getString("O_STANDARD_PARAM_NOMBRE_SEMAINES_L")%>&nbsp;:&nbsp;</td>
                <td style="text-align: left;">
                    <select name="nbSemaineCaleRes" id="idNbSemaineCaleRes" style="width: 35px;" size="1" onclick="callCalendrierEquipement('init');">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3" selected="true">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </td>
                <td style="text-align: right; font-family: tahoma; font-weight: bold; font-size : 12px; color: rgb(51,51,51);"><%=rb.getString("O_STANDARD_PARAM_SECTEUR_GEOGRAPHIQUE_L")%>&nbsp;:&nbsp;</td>
                <td style="text-align: left;">
                    <select name="listeSecteurCaleRes" id="idListeSecteurCaleRes" style="width: 200px;" size="1" >
                        <option value="-" selected="true">---</option>
                        <%
                            SecteurGeo sg = new SecteurGeo();
                            for (int i = 0; i < listSecteur.size(); i++) {
                                sg = (SecteurGeo) listSecteur.get(i);
                        %><option value='<%=sg.getCodeSecteur()%>'  title='<%=sg.getDesiSecteur()%>'>
                            <!--=sg.getCodeSecteur() + " - " + sg.getDesiSecteur()-->
                            <!--=sg.getCodeSecteur() + " - " + hashMapValueSectionGeo.get(sg.getDesiSecteur())!=null?hashMapValueSectionGeo.get(sg.getDesiSecteur()):sg.getDesiSecteur()-->
                            <%=sg.getCodeSecteurSite() + " - " + (((hashMapValueSectionGeo.get(sg.getDesiSecteur()) != null) && (hashMapValueSectionGeo.get(sg.getDesiSecteur()) != "null")) ? hashMapValueSectionGeo.get(sg.getDesiSecteur()) : sg.getDesiSecteur())%>

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
                                    callCalendrierEquipement('doubledown');"/></td>
                            <td style="width:25%;text-align:center;"><img src="specifiques/calendrierEquipement/images/arrow_left.jpeg" alt="Week-" style="cursor:pointer;" onclick="removePreviousZone();
                                    callCalendrierEquipement('down');"/></td>
                            <td style="width:25%;text-align:center;"><img src="specifiques/calendrierEquipement/images/arrow_right.jpeg" alt="Week+" style="cursor:pointer;" onclick="removePreviousZone();
                                    callCalendrierEquipement('up');"/></td>
                            <td style="width:25%;text-align:center;"><img src="specifiques/calendrierEquipement/images/arrow_right_double.jpeg" alt="Week++" style="cursor:pointer;" onclick="removePreviousZone();
                                    callCalendrierEquipement('doubleup');"/></td>
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
                                    callCalendrierEquipement('doubledown');"/></td>
                            <td style="width:25%;text-align:center;"><img src="specifiques/calendrierEquipement/images/arrow_left.jpeg" alt="Week-" style="cursor:pointer;" onclick="removePreviousZone();
                                    callCalendrierEquipement('down');"/></td>
                            <td style="width:25%;text-align:center;"><img src="specifiques/calendrierEquipement/images/arrow_right.jpeg" alt="Week+" style="cursor:pointer;" onclick="removePreviousZone();
                                    callCalendrierEquipement('up');"/></td>
                            <td style="width:25%;text-align:center;"><img src="specifiques/calendrierEquipement/images/arrow_right_double.jpeg" alt="week++" style="cursor:pointer;" onclick="removePreviousZone();
                                    callCalendrierEquipement('doubleup');"/></td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>

    </body>

</html>



