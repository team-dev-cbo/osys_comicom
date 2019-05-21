package org.apache.jsp.sup;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.Locale;
import quartisspv.util.Constants;
import quartisspv.servlet.Session;
import java.util.ResourceBundle;

public final class preference_jsp extends org.apache.jasper.runtime.HttpJspBase
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
            ResourceBundle rb = ResourceBundle.getBundle("quartisweb/resources/private_language", new Locale(supSession.getLanguage()));

      out.write("\n");
      out.write("\n");
      out.write("<table cellpadding=\"0\" cellspacing=\"0\">\n");
      out.write("    <tr>\n");
      out.write("        <td id=\"Tab0\" align=\"center\" class=\"titreOngletPreferences\" onclick=\"showTab(0)\">");
      out.print( rb.getString("supervisor.preference.parameter"));
      out.write("</td>\n");
      out.write("        <td id=\"Tab1\" align=\"center\" class=\"titreOngletPreferences\" onclick=\"showTab(1)\">");
      out.print( rb.getString("supervisor.preference.variable"));
      out.write("</td>\n");
      out.write("        <td id=\"Tab2\" align=\"center\" class=\"titreOngletPreferences\" onclick=\"showTab(2)\">");
      out.print( rb.getString("supervisor.preference.preference"));
      out.write("</td>\n");
      out.write("        <td align=\"right\" style=\"background:#6699CC;\" width=\"20%\"><img src=\"images/close16x16.png\" onclick=\"togglePreference()\" title=\"");
      out.print( rb.getString("supervisor.preference.close"));
      out.write("\"/></td>\n");
      out.write("    </tr>\n");
      out.write("    <tr>\n");
      out.write("        <td align=\"center\" colspan=\"4\">\n");
      out.write("            <div id=\"TabBody0\">\n");
      out.write("                ");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "pref-tab-params.jsp", out, false);
      out.write("\n");
      out.write("            </div>\n");
      out.write("            <div id=\"TabBody1\" style=\"display:none;\">\n");
      out.write("                ");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "pref-tab-vars.jsp", out, false);
      out.write("\n");
      out.write("            </div>\n");
      out.write("            <div id=\"TabBody2\" style=\"display:none;\">\n");
      out.write("                ");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "pref-tab-intern.jsp", out, false);
      out.write("\n");
      out.write("            </div>\n");
      out.write("        </td>\n");
      out.write("    </tr>\n");
      out.write("    <tr align=\"center\">\n");
      out.write("        <td align=\"left\" colspan=\"4\">\n");
      out.write("            <img src=\"images/apply16x16.png\" onclick=\"applyPreference()\" title=\"");
      out.print( rb.getString("supervisor.preference.apply"));
      out.write("\" />\n");
      out.write("            <img src=\"images/clear16x16.png\" onclick=\"cleanPreference()\" title=\"");
      out.print( rb.getString("supervisor.preference.default"));
      out.write("\"/>\n");
      out.write("            <img src=\"images/save16x16.png\" onclick=\"savePreference()\" title=\"");
      out.print( rb.getString("supervisor.preference.save"));
      out.write("\"/>\n");
      out.write("            <!--img src=\"images/saveall16x16.png\" onclick=\"saveAll()\"/-->\n");
      out.write("        </td>\n");
      out.write("        <!--td align=\"right\">\n");
      out.write("            <img src=\"images/close16x16.png\" onclick=\"togglePreference()\"/>\n");
      out.write("        </td-->\n");
      out.write("    </tr>\n");
      out.write("</table>\n");
      out.write("<div id=\"dynamic-list\" style=\"display: none; position: absolute; border: 1px solid blue; background-color: #99CCFF;\"></div>\n");
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
