<%@ page import="quartisspv.util.Constants"%>
<%@ page import="quartisspv.app.ApplicationProperties"%>
<%@ page import="quartisspv.app.ApplicationDelegate"%>
<%@ page import="quartisspv.page.PageDescription"%>
<%@ page import="quartisspv.servlet.Session"%>
<%@ page import="quartisspv.servlet.Session.InternalPreference"%>
<script type="text/javascript">
    <%
                Session appSession = (Session) session.getAttribute(Constants.SESSION_ATTR);

                ApplicationProperties properties = appSession.getProperties();
                ApplicationDelegate delegate = new ApplicationDelegate(properties);

                PageDescription pageDescription = (PageDescription) request.getAttribute(Constants.PAGE_PROPERTIES_ATTR);
                String pagePath = pageDescription != null && pageDescription.getPath() != null ? pageDescription.getPath() : "";
                String pageName = pageDescription != null && pageDescription.getName() != null ? pageDescription.getName() : "";
                String pageLabel = pageDescription != null && pageDescription.getLabel() != null ? pageDescription.getLabel() : pageName;
                String pageDesc = pageDescription != null && pageDescription.getDescription() != null ? pageDescription.getDescription() : pageLabel;

                String toolbarVisibility = "N".equalsIgnoreCase(appSession.getInternalPreference(InternalPreference.TOOLBAR_VISIBLE)) ? "hidden" : "visible";
                String navigationVisibility = "N".equalsIgnoreCase(appSession.getInternalPreference(InternalPreference.NAVIGATION_VISIBLE)) ? "hidden" : "visible";
                String level1MenuVisibility = "N".equalsIgnoreCase(appSession.getInternalPreference(InternalPreference.LEVEL1_MENU_VISIBLE)) ? "hidden" : "visible";

                String restricted = request.getParameter(Constants.RESTRICTED_PARAMETER);
                //String clientType = request.getParameter(Constants.CLIENT_TYPE_PARAMETER);
                //if (!Constants.CLIENT_TYPE_CLIENT_ATTR.equalsIgnoreCase(clientType) && "O".equalsIgnoreCase(restricted)) {
                if ("O".equalsIgnoreCase(restricted)) {
                    toolbarVisibility = "hidden";
                    navigationVisibility = "hidden";
                    level1MenuVisibility = "hidden";
                }
    %>
    PAGE_NAME = "<%=pageName%>";
    PAGE_LABEL = "<%=pageLabel%>";
    PAGE_PATH = "<%=pagePath%>";
    PAGE_DESCRIPTION = "";

    TOOLBAR_VISIBILITY = "<%=toolbarVisibility%>";
    NAVIGATION_VISIBILITY = "<%=navigationVisibility%>";
    LEVEL1_MENU_VISIBILITY = "<%=level1MenuVisibility%>";
    NAVIGATION_TIMEOUT = <%=appSession.getInternalPreference(InternalPreference.NAVIGATION_TIMEOUT)%>;
    LEVEL1_MENU_TIMEOUT = <%=appSession.getInternalPreference(InternalPreference.LEVEL1_MENU_TIMEOUT)%>;
    LEVEL1_TIMER_PERIOD = <%=appSession.getInternalPreference(InternalPreference.LEVEL1_REFRESH_PERIOD)%>;
    LEVEL2_TIMER_PERIOD = <%=appSession.getInternalPreference(InternalPreference.LEVEL2_REFRESH_PERIOD)%>;
    LEVEL3_TIMER_PERIOD = <%=appSession.getInternalPreference(InternalPreference.LEVEL3_REFRESH_PERIOD)%>;
    <%
                String actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL1, true);
    //        String encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                String encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    LEVEL1_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL1_REFRESH, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    LEVEL1_REFRESH_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL1_STORE, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    LEVEL1_STORE_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL1_REMOVE, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    LEVEL1_REMOVE_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL1_ADD, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    LEVEL1_ADD_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL1_MODULE_LIST, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    LEVEL1_MODULE_LIST_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL1_TO_PDF, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    LEVEL1_TO_PDF_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL1_TO_DTS, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    LEVEL1_TO_DTS_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL2, true);
    //        String encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    LEVEL2_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL2_REFRESH, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    LEVEL2_REFRESH_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL2_TO_PDF, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    LEVEL2_TO_PDF_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL2_TO_DTS, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    LEVEL2_TO_DTS_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL2_TABLE_REFRESH, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    LEVEL2_TABLE_REFRESH_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL2_TABLE_TO_PDF, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    LEVEL2_TABLE_TO_PDF_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL2_TABLE_TO_DTS, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    LEVEL2_TABLE_TO_DTS_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL3, true);
    //        String encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    LEVEL3_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL3_REFRESH, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    LEVEL3_REFRESH_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL3_TO_PDF, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    LEVEL3_TO_PDF_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL3_TO_DTS, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    LEVEL3_TO_DTS_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatPdfUrl(true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    PDF_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatPdfGeneratorUrl(true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    PDF_GEN_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatPdfCometUrl(true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    PDF_COMET_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatDtsUrl(true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    DTS_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatDtsGeneratorUrl(true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    DTS_GEN_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatDtsCometUrl(true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    DTS_COMET_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatActionUrl(Constants.ACTION_NAVIGATION, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    NAVIGATION_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatActionUrl(Constants.ACTION_PREFERENCE_STORE, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    PREFERENCE_STORE_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatActionUrl(Constants.ACTION_PREFERENCE_APPLY, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    PREFERENCE_APPLY_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatActionUrl(Constants.ACTION_PREFERENCE_DYN_LIST, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    PREFERENCE_DYN_LIST_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatActionUrl(Constants.ACTION_PREFERENCE_COMPONENT, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>    
    PREFERENCE_COMPONENT_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatActionUrl(Constants.ACTION_FAVORITE, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    FAVORITE_URL = '<%=encodedUrl%>';
    <%
                actionUrl = Constants.formatActionUrl(Constants.ACTION_EXPORT_COMPONENT, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    %>
    EXPORT_COMPONENT_URL = '<%=encodedUrl%>';

    RESPONSE_BODY_PREFIX = "<%=Constants.AJAX_RESPONSE_BODY_PREFIX%>";
    RESPONSE_MODULES_PREFIX = "<%=Constants.AJAX_RESPONSE_MODULES_PREFIX%>";
    RESPONSE_NAVIGATION_PREFIX = "<%=Constants.AJAX_RESPONSE_NAVIGATION_PREFIX%>";
    RESPONSE_PREFERENCE_PREFIX = "<%=Constants.AJAX_RESPONSE_PREFERENCE_PREFIX%>";
    RESPONSE_PREFERENCE_DYN_LIST_PREFIX = "<%=Constants.AJAX_RESPONSE_PREFERENCE_DYN_LIST_PREFIX%>";
    RESPONSE_PREFERENCE_COMPONENT_PREFIX = "<%=Constants.AJAX_RESPONSE_PREFERENCE_COMPONENT_PREFIX%>";
    RESPONSE_MESSAGE_PREFIX = "<%=Constants.AJAX_RESPONSE_MESSAGE_PREFIX%>";
    RESPONSE_NO_PREFIX = "<%=Constants.AJAX_RESPONSE_NO_PREFIX%>";

</script>
