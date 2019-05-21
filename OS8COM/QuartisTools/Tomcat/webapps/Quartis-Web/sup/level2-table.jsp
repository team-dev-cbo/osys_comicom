<%@ page import="java.util.Locale"%>
<%@ page import="quartisspv.util.Constants"%>
<%@ page import="quartisspv.servlet.Session"%>
<%@ page import="java.util.ResourceBundle"%>
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
        <script type="text/javascript" src="sup/js/encoder.js"></script>
        <script type="text/javascript" src="sup/js/include.js"></script>
        <script type="text/javascript" src="js/dimension.js"></script>
        <script type="text/javascript" src="sup/js/preference.js"></script>
        <script type="text/javascript" src="sup/js/mapping.js"></script>
        <script type="text/javascript" src="sup/js/level2-table.js"></script>
        <script type="text/javascript" src="sup/js/component.js"></script>
        <script type="text/javascript" src="sup/js/commons.js"></script>
    </head>

    <jsp:include page="include.jsp" />

    <body>
        <!-- CF Refonte QuartisWeb -->
        <div id="toolbar" class="toolbarOnTopSup">
            <!--img src="images/welcome22x22.png" onclick="goHome()" style="position:relative;" /-->
            <img src="images/menu22x22.png" onclick="showNavigation2()" style="position:relative;" title="<%= rb.getString("supervisor.level2.navigation")%>"/>
            <img src="images/edit.gif" onclick="togglePreference()" style="position:relative;" title="<%= rb.getString("supervisor.level2.preference")%>"/>
            <jsp:include page="favorite.jsp" />
            <jsp:include page="pdf-mapping.jsp" />
            <jsp:include page="dts-mapping.jsp" />
            <div class="EspaceTool"></div>
        </div>
        
        <div style="width:100%; height:100%; margin-top: 7px; margin-left:5px;">
            <div id="pages" style="overflow: auto; width:100% !important; height:90%; position:absolute;">
            </div>
            <div id="selected_page" style="visibility:hidden; position:absolute; border:solid 1px red;">
            </div>
        </div>

        <!--<div id="navigation" align="left" style="visibility:hidden; position:absolute; left:0px; top:0px; width:100%; background: url('images/level1.png') repeat;"></div>-->
        <div id="navigation" align="left" class="navigationSuperviseur" style="visibility:hidden;margin-top:37px; width: 100% !important;"></div>
        

        <div id="component-def" align="right" style="visibility:hidden; position:absolute; right:50px; top:10px; background-color: white; border:solid #3877AA 1px;">
            <jsp:include page="component.jsp" />
        </div>

        <div id="preference" align="left" style="visibility:hidden; position:absolute; right:50px; top:10px; background-color: white; border:solid #3877AA 1px;">
            <jsp:include page="preference.jsp" />
        </div>

        <div id="message" align="center" style="visibility:hidden; position:absolute; right: 50px; top:10px;"></div>

        <div class="classeFondChargementAfter"><img id="loading" src="images/loading5.gif" alt="Loading"></div>

        <script type="text/javascript">
            document.body.style.overflow = 'hidden';
            document.body.onresize = function() {
                closeHeader();
                global_refreshAuto = false;
                refreshPages();
                document.getElementById('navigation').style.height = HEADER_IMG_HEIGHT + 32;
                   
            };

            var pages = document.getElementById('pages');
            pages.style.scrollbarFaceColor = "#FFFFFF";
            
            var navigation = document.getElementById('navigation');
            navigation.style.scrollbarFaceColor = "#99CCFF";
            navigation.style.height = HEADER_IMG_HEIGHT + 32;

            var toolbar = document.getElementById('toolbar');
            toolbar.style.visibility = TOOLBAR_VISIBILITY;
            
            slideUp();
            timer(false);
        </script>
    </body>
</html>