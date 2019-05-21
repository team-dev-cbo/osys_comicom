<%@ page import="java.util.Locale"%>
<%@ page import="java.util.ResourceBundle"%>
<%@ page import="quartisspv.servlet.Session"%>
<%@ page import="quartisspv.util.Constants"%>

<!-- Taglib pour toolbar en haut CF Refonte QuartisWeb-->
<%@ taglib uri="http://java.sun.com/jsf/html" prefix="h" %>
<%@ taglib uri="/WEB-INF/tld/myComponent.tld" prefix="m" %>
<%@ taglib uri="http://rcfaces.org/core" prefix="v"%> 

<%
            Session supSession = (Session) session.getAttribute(Constants.SESSION_ATTR);
            String language = supSession.getLanguage();
            ResourceBundle rb = ResourceBundle.getBundle("quartisweb/resources/private_language", new Locale(language));
%>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <link type="text/css" rel="stylesheet" href="css/style.css" />
        <link type="text/css" rel="stylesheet" href="css/calendar.css" media="all" title="winter" />
        <script type="text/javascript" src="sup/js/ajax-init.js"></script>
        <script type="text/javascript" src="sup/js/calendar.js"></script>
        <script type="text/javascript" src="sup/js/lang/calendar-en.js"></script>
        <script type="text/javascript" src="sup/js/lang/calendar-<%=language.toLowerCase()%>.js"></script>
        <script type="text/javascript" src="sup/js/calendar-setup.js"></script>
        <script type="text/javascript" src="sup/js/calendrier.js"></script>
        <script type="text/javascript" src="sup/js/prototype.js"></script>
        <script type="text/javascript" src="sup/js/effects.js"></script>
        <script type="text/javascript" src="sup/js/drag.js"></script>
        <script type="text/javascript" src="sup/js/encoder.js"></script>
        <script type="text/javascript" src="sup/js/include.js"></script>
        <script type="text/javascript" src="js/dimension.js"></script>
        <script type="text/javascript" src="sup/js/preference.js"></script>
        <script type="text/javascript" src="sup/js/mapping.js"></script>
        <script type="text/javascript" src="sup/js/level1.js"></script>
        <script type="text/javascript" src="sup/js/component.js"></script>
        <script type="text/javascript" src="sup/js/commons.js"></script>

    </head>

    <jsp:include page="include.jsp" />

    <body>
        <!--
        <div>
            <p>Utilisateur : <%= request.getRemoteUser() %></p>
            Si la ligne précédente indique null ou est vide après ":", cette page n'est pas passée par le filtre SSO.
        </div>
        -->
        <div id="toolbar" class="toolbarOnTopSup" >
            <!--img src="images/welcome22x22.png" onclick="goHome()" style="position:relative;" /-->
            <img src="images/menu22x22.png" onclick="showMenu()" style="position:relative;" title="<%= rb.getString("supervisor.level1.menu")%>"/>
            <img src="images/edit.gif" onclick="togglePreference()" style="position:relative;" title="<%= rb.getString("supervisor.level1.preference")%>"/>
            <jsp:include page="pdf-mapping.jsp" />
            <div class="EspaceTool"></div>
        </div>
        
        <div style="width:100%; height:100%; margin-top: 0px; margin-left:5px;">
            <div id="pages" style="overflow: auto; width:100%; height:100%; position:absolute;">
            </div>
            <img id="X_page" src="images/close.png" style="visibility:hidden; position:absolute;" onclick="removeXPage();"/>
        </div>
        

        <div id="navigation" align="left" class="navigationSuperviseur" style="visibility:hidden;position:absolute;margin-top:36px;border-color: #E3E3E3;
        border-width:1px;"></div>

        <div id="menu" align="left" style="visibility:hidden; position:absolute; left:0px; top:0px; width:100%; margin-top:36px;border-color: #E3E3E3;
        border-width:1px; border-style: solid; background: linear-gradient(#F5F5F5,#F5F5F5);border-radius: 0px 0px 10px 10px;line-height:40px;"></div>


        <div id="component-def" align="right" style="visibility:hidden; position:absolute; right:50px; top:10px; background-color: white; border:solid #3877AA 1px;">
            <jsp:include page="component.jsp" />
        </div>

        <div id="preference" align="left" style="visibility:hidden; position:absolute; right:50px; top:10px; background-color: white; border:solid #3877AA 1px;">
            <jsp:include page="preference.jsp" />
        </div>

        <div id="message" align="center" style="visibility:hidden; position:absolute; right: 50px; top:10px;">
        </div>

        <div class="classeFondChargementAfter"><img id="loading" src="images/loading5.gif" alt="Loading"></div>

        <script type="text/javascript">
            document.body.style.overflow = 'hidden';
            document.body.onresize = function() {
                closeHeader();
                global_refreshAuto = false;
                document.getElementById('menu').style.height = HEADER_IMG_HEIGHT + 32;
                document.getElementById('menu').style.width = document.body.clientWidth ;
                document.getElementById('navigation').style.height = HEADER_IMG_HEIGHT + 32;
                document.getElementById('navigation').style.width = document.body.clientWidth  - 50;
            };

            var loading = document.getElementById('loading');
            loading.style.left = (document.body.clientWidth - 320) / 2;
            loading.style.top = (document.body.clientHeight - 320) / 2;

            var pages = document.getElementById('pages');
            pages.style.scrollbarFaceColor = "#FFFFFF";

            var menu = document.getElementById('menu');
            menu.style.scrollbarFaceColor = "#99CCFF";
            menu.style.height = HEADER_IMG_HEIGHT + 32;

            var navigation = document.getElementById('navigation');
            navigation.style.scrollbarFaceColor="#99CCFF";
            navigation.style.height = HEADER_IMG_HEIGHT + 32;

            var toolbar = document.getElementById('toolbar');
            toolbar.style.visibility = TOOLBAR_VISIBILITY;

            slideUp();
            timer(false);
        </script>
    </body>
</html>