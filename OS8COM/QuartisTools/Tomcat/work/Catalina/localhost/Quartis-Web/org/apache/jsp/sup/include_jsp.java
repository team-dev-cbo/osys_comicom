package org.apache.jsp.sup;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import quartisspv.util.Constants;
import quartisspv.app.ApplicationProperties;
import quartisspv.app.ApplicationDelegate;
import quartisspv.page.PageDescription;
import quartisspv.servlet.Session;
import quartisspv.servlet.Session.InternalPreference;

public final class include_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.AnnotationProcessor _jsp_annotationprocessor;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_annotationprocessor = (org.apache.AnnotationProcessor) getServletConfig().getServletContext().getAttribute(org.apache.AnnotationProcessor.class.getName());
  }

  public void _jspDestroy() {
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("<script type=\"text/javascript\">\n");
      out.write("    ");

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
    
      out.write("\n");
      out.write("    PAGE_NAME = \"");
      out.print(pageName);
      out.write("\";\n");
      out.write("    PAGE_LABEL = \"");
      out.print(pageLabel);
      out.write("\";\n");
      out.write("    PAGE_PATH = \"");
      out.print(pagePath);
      out.write("\";\n");
      out.write("    PAGE_DESCRIPTION = \"\";\n");
      out.write("\n");
      out.write("    TOOLBAR_VISIBILITY = \"");
      out.print(toolbarVisibility);
      out.write("\";\n");
      out.write("    NAVIGATION_VISIBILITY = \"");
      out.print(navigationVisibility);
      out.write("\";\n");
      out.write("    LEVEL1_MENU_VISIBILITY = \"");
      out.print(level1MenuVisibility);
      out.write("\";\n");
      out.write("    NAVIGATION_TIMEOUT = ");
      out.print(appSession.getInternalPreference(InternalPreference.NAVIGATION_TIMEOUT));
      out.write(";\n");
      out.write("    LEVEL1_MENU_TIMEOUT = ");
      out.print(appSession.getInternalPreference(InternalPreference.LEVEL1_MENU_TIMEOUT));
      out.write(";\n");
      out.write("    LEVEL1_TIMER_PERIOD = ");
      out.print(appSession.getInternalPreference(InternalPreference.LEVEL1_REFRESH_PERIOD));
      out.write(";\n");
      out.write("    LEVEL2_TIMER_PERIOD = ");
      out.print(appSession.getInternalPreference(InternalPreference.LEVEL2_REFRESH_PERIOD));
      out.write(";\n");
      out.write("    LEVEL3_TIMER_PERIOD = ");
      out.print(appSession.getInternalPreference(InternalPreference.LEVEL3_REFRESH_PERIOD));
      out.write(";\n");
      out.write("    ");

                String actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL1, true);
    //        String encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                String encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    LEVEL1_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL1_REFRESH, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    LEVEL1_REFRESH_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL1_STORE, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    LEVEL1_STORE_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL1_REMOVE, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    LEVEL1_REMOVE_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL1_ADD, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    LEVEL1_ADD_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL1_MODULE_LIST, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    LEVEL1_MODULE_LIST_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL1_TO_PDF, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    LEVEL1_TO_PDF_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL1_TO_DTS, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    LEVEL1_TO_DTS_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL2, true);
    //        String encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    LEVEL2_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL2_REFRESH, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    LEVEL2_REFRESH_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL2_TO_PDF, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    LEVEL2_TO_PDF_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL2_TO_DTS, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    LEVEL2_TO_DTS_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL2_TABLE_REFRESH, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    LEVEL2_TABLE_REFRESH_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL2_TABLE_TO_PDF, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    LEVEL2_TABLE_TO_PDF_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL2_TABLE_TO_DTS, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    LEVEL2_TABLE_TO_DTS_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL3, true);
    //        String encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    LEVEL3_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL3_REFRESH, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    LEVEL3_REFRESH_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL3_TO_PDF, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    LEVEL3_TO_PDF_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatActionUrl(Constants.ACTION_LEVEL3_TO_DTS, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    LEVEL3_TO_DTS_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatPdfUrl(true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    PDF_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatPdfGeneratorUrl(true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    PDF_GEN_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatPdfCometUrl(true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    PDF_COMET_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatDtsUrl(true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    DTS_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatDtsGeneratorUrl(true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    DTS_GEN_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatDtsCometUrl(true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    DTS_COMET_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatActionUrl(Constants.ACTION_NAVIGATION, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    NAVIGATION_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatActionUrl(Constants.ACTION_PREFERENCE_STORE, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    PREFERENCE_STORE_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatActionUrl(Constants.ACTION_PREFERENCE_APPLY, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    PREFERENCE_APPLY_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatActionUrl(Constants.ACTION_PREFERENCE_DYN_LIST, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    PREFERENCE_DYN_LIST_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatActionUrl(Constants.ACTION_PREFERENCE_COMPONENT, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("    \n");
      out.write("    PREFERENCE_COMPONENT_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatActionUrl(Constants.ACTION_FAVORITE, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    FAVORITE_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("    ");

                actionUrl = Constants.formatActionUrl(Constants.ACTION_EXPORT_COMPONENT, true);
    //        encodedUrl = delegate.encodeUserId(session.getId(), actionUrl);
                encodedUrl = delegate.encodeUser(appSession, actionUrl);
    
      out.write("\n");
      out.write("    EXPORT_COMPONENT_URL = '");
      out.print(encodedUrl);
      out.write("';\n");
      out.write("\n");
      out.write("    RESPONSE_BODY_PREFIX = \"");
      out.print(Constants.AJAX_RESPONSE_BODY_PREFIX);
      out.write("\";\n");
      out.write("    RESPONSE_MODULES_PREFIX = \"");
      out.print(Constants.AJAX_RESPONSE_MODULES_PREFIX);
      out.write("\";\n");
      out.write("    RESPONSE_NAVIGATION_PREFIX = \"");
      out.print(Constants.AJAX_RESPONSE_NAVIGATION_PREFIX);
      out.write("\";\n");
      out.write("    RESPONSE_PREFERENCE_PREFIX = \"");
      out.print(Constants.AJAX_RESPONSE_PREFERENCE_PREFIX);
      out.write("\";\n");
      out.write("    RESPONSE_PREFERENCE_DYN_LIST_PREFIX = \"");
      out.print(Constants.AJAX_RESPONSE_PREFERENCE_DYN_LIST_PREFIX);
      out.write("\";\n");
      out.write("    RESPONSE_PREFERENCE_COMPONENT_PREFIX = \"");
      out.print(Constants.AJAX_RESPONSE_PREFERENCE_COMPONENT_PREFIX);
      out.write("\";\n");
      out.write("    RESPONSE_MESSAGE_PREFIX = \"");
      out.print(Constants.AJAX_RESPONSE_MESSAGE_PREFIX);
      out.write("\";\n");
      out.write("    RESPONSE_NO_PREFIX = \"");
      out.print(Constants.AJAX_RESPONSE_NO_PREFIX);
      out.write("\";\n");
      out.write("\n");
      out.write("</script>\n");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
