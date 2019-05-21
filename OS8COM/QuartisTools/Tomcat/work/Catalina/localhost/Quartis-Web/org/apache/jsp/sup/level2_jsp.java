package org.apache.jsp.sup;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.Locale;
import quartisspv.util.Constants;
import quartisspv.servlet.Session;
import java.util.ResourceBundle;

public final class level2_jsp extends org.apache.jasper.runtime.HttpJspBase
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

            Session supSession = (Session) session.getAttribute(Constants.SESSION_ATTR);
            String language = supSession.getLanguage();
            ResourceBundle rb = ResourceBundle.getBundle("quartisweb/resources/private_language", new Locale(language));

      out.write("\n");
      out.write("<html>\n");
      out.write("    <head>\n");
      out.write("        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n");
      out.write("        <link type=\"text/css\" rel=\"stylesheet\" href=\"css/style.css\" />\n");
      out.write("        <link type=\"text/css\" rel=\"stylesheet\" href=\"css/calendar.css\" media=\"all\" title=\"winter\" />\n");
      out.write("        <script type=\"text/javascript\" src=\"sup/js/ajax-init.js\"></script>\n");
      out.write("        <script type=\"text/javascript\" src=\"sup/js/calendar.js\"></script>\n");
      out.write("        <script type=\"text/javascript\" src=\"sup/js/lang/calendar-en.js\"></script>\n");
      out.write("        <script type=\"text/javascript\" src=\"sup/js/lang/calendar-");
      out.print(language.toLowerCase());
      out.write(".js\"></script>\n");
      out.write("        <script type=\"text/javascript\" src=\"sup/js/calendar-setup.js\"></script>\n");
      out.write("        <script type=\"text/javascript\" src=\"sup/js/calendrier.js\"></script>\n");
      out.write("        <script type=\"text/javascript\" src=\"sup/js/prototype.js\"></script>\n");
      out.write("        <script type=\"text/javascript\" src=\"sup/js/effects.js\"></script>\n");
      out.write("        <script type=\"text/javascript\" src=\"sup/js/encoder.js\"></script>\n");
      out.write("        <script type=\"text/javascript\" src=\"sup/js/include.js\"></script>\n");
      out.write("        <script type=\"text/javascript\" src=\"js/dimension.js\"></script>\n");
      out.write("        <script type=\"text/javascript\" src=\"sup/js/preference.js\"></script>\n");
      out.write("        <script type=\"text/javascript\" src=\"sup/js/mapping.js\"></script>\n");
      out.write("        <script type=\"text/javascript\" src=\"sup/js/level2.js\"></script>\n");
      out.write("        <script type=\"text/javascript\" src=\"sup/js/component.js\"></script>\n");
      out.write("        <script type=\"text/javascript\" src=\"sup/js/commons.js\"></script>\n");
      out.write("    </head>\n");
      out.write("\n");
      out.write("    ");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "include.jsp", out, false);
      out.write("\n");
      out.write("\n");
      out.write("    <body >\n");
      out.write("        \n");
      out.write("        <div id=\"toolbar\" class=\"toolbarOnTopSup\">\n");
      out.write("            <!--img src=\"images/welcome22x22.png\" onclick=\"goHome()\" style=\"position:relative;\" /-->\n");
      out.write("            <img src=\"images/menu22x22.png\" onclick=\"showNavigation2()\" style=\"position:relative;\" title=\"");
      out.print( rb.getString("supervisor.level2.navigation"));
      out.write("\"/>\n");
      out.write("            <img src=\"images/edit.gif\" onclick=\"togglePreference()\" style=\"position:relative;\" title=\"");
      out.print( rb.getString("supervisor.level2.preference"));
      out.write("\"/>\n");
      out.write("            ");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "favorite.jsp", out, false);
      out.write("\n");
      out.write("            ");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "pdf-mapping.jsp", out, false);
      out.write("\n");
      out.write("            ");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "dts-mapping.jsp", out, false);
      out.write("\n");
      out.write("            <div class=\"EspaceTool\"></div>\n");
      out.write("        </div>\n");
      out.write("        \n");
      out.write("        <div style=\"width:100%; height:100%; position:absolute; margin-top: 10px; margin-left:5px;\">\n");
      out.write("            <div id=\"pages\" style=\"overflow: auto; width:100%; height:90%; position:absolute;\">\n");
      out.write("            </div>\n");
      out.write("            <div id=\"selected_page\" style=\"visibility:hidden; position:absolute; border:solid 1px red;\">\n");
      out.write("            </div>\n");
      out.write("        </div>\n");
      out.write("\n");
      out.write("        <div id=\"navigation\" align=\"left\" class=\"navigationSuperviseur\" style=\"visibility:hidden;margin-top:37px; width: 99.7%;\"></div>\n");
      out.write("\n");
      out.write("\n");
      out.write("        <div id=\"component-def\" align=\"right\" style=\"visibility:hidden; position:absolute; right:50px; top:10px; background-color: white; border:solid #3877AA 1px;\">\n");
      out.write("            ");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "component.jsp", out, false);
      out.write("\n");
      out.write("        </div>\n");
      out.write("\n");
      out.write("        <div id=\"preference\" align=\"left\" style=\"visibility:hidden; position:absolute; right:50px; top:10px; background-color: white; border:solid #3877AA 1px;\">\n");
      out.write("            ");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "preference.jsp", out, false);
      out.write("\n");
      out.write("        </div>\n");
      out.write("\n");
      out.write("        <div id=\"message\" align=\"center\" style=\"visibility:hidden; position:absolute; right: 50px; top:10px;\">\n");
      out.write("        </div>\n");
      out.write("        \n");
      out.write("        <div class=\"classeFondChargementAfter\"><img id=\"loading\" src=\"images/loading5.gif\" alt=\"Loading\"></div>\n");
      out.write("\n");
      out.write("        <script type=\"text/javascript\">\n");
      out.write("            document.body.style.overflow = 'hidden';\n");
      out.write("            document.body.onresize = function() {\n");
      out.write("                closeHeader();\n");
      out.write("                global_refreshAuto = false;\n");
      out.write("                refreshPages();\n");
      out.write("                document.getElementById('navigation').style.height = HEADER_IMG_HEIGHT + 32;\n");
      out.write("                document.getElementById('navigation').style.width = document.body.clientWidth  - 50;\n");
      out.write("                var menuElmt = document.getElementById('menu');\n");
      out.write("                if(menuElmt !== null){\n");
      out.write("                    menuElmt.style.width = document.body.clientWidth  - 50;\n");
      out.write("                }\n");
      out.write("                \n");
      out.write("            };\n");
      out.write("\n");
      out.write("            var loading = document.getElementById('loading');\n");
      out.write("            loading.style.left = (document.body.clientWidth - 320 ) / 2;\n");
      out.write("            loading.style.top = (document.body.clientHeight - 320) / 2;\n");
      out.write("\n");
      out.write("            var pages = document.getElementById('pages');\n");
      out.write("            pages.style.scrollbarFaceColor = \"#FFFFFF\";\n");
      out.write("\n");
      out.write("            var navigation = document.getElementById('navigation');\n");
      out.write("            navigation.style.scrollbarFaceColor = \"#99CCFF\";\n");
      out.write("            navigation.style.height = HEADER_IMG_HEIGHT + 32;\n");
      out.write("\n");
      out.write("            var toolbar = document.getElementById('toolbar');\n");
      out.write("            toolbar.style.visibility = TOOLBAR_VISIBILITY;\n");
      out.write("            \n");
      out.write("            slideUp();\n");
      out.write("            timer(false);\n");
      out.write("            \n");
      out.write("        </script>\n");
      out.write("    </body>\n");
      out.write("</html>");
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
