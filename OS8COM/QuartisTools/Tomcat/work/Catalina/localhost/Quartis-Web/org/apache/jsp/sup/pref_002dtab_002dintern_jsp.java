package org.apache.jsp.sup;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.Locale;
import quartisspv.util.Constants;
import quartisspv.servlet.Session;
import quartisspv.servlet.Session.InternalPreference;
import java.util.ResourceBundle;

public final class pref_002dtab_002dintern_jsp extends org.apache.jasper.runtime.HttpJspBase
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

            Session appSession = (Session) session.getAttribute(Constants.SESSION_ATTR);
            ResourceBundle rb = ResourceBundle.getBundle("quartisweb/resources/private_language", new Locale(appSession.getLanguage()));

      out.write("\n");
      out.write("\n");
      out.write("<table>\n");
      out.write("    <tr>\n");
      out.write("        <td title=\"");
      out.print( rb.getString("supervisor.preference.preference.navigation.ttip"));
      out.write('"');
      out.write('>');
      out.print( rb.getString("supervisor.preference.preference.navigation"));
      out.write("</td>\n");
      out.write("        <td><input type=\"text\" id=\"NAVIGATION_TIMEOUT\" name=\"_NAVIGATION_TIMEOUT\" default=\"5\" value=\"");
      out.print(appSession.getInternalPreference(InternalPreference.NAVIGATION_TIMEOUT));
      out.write("\" size=\"4\" /></td>\n");
      out.write("        <td>");
      out.print( rb.getString("supervisor.preference.preference.second"));
      out.write("</td>\n");
      out.write("    </tr>\n");
      out.write("    <tr>\n");
      out.write("        <td title=\"");
      out.print( rb.getString("supervisor.preference.preference.level1.menu.ttip"));
      out.write('"');
      out.write('>');
      out.print( rb.getString("supervisor.preference.preference.level1.menu"));
      out.write("</td>\n");
      out.write("        <td><input type=\"text\" id=\"LEVEL1_MENU_TIMEOUT\" name=\"_LEVEL1_MENU_TIMEOUT\" default=\"8\" value=\"");
      out.print(appSession.getInternalPreference(InternalPreference.LEVEL1_MENU_TIMEOUT));
      out.write("\" size=\"4\" /></td>\n");
      out.write("        <td>");
      out.print( rb.getString("supervisor.preference.preference.second"));
      out.write("</td>\n");
      out.write("    </tr>\n");
      out.write("    <tr>\n");
      out.write("        <td title=\"");
      out.print( rb.getString("supervisor.preference.preference.level1.refresh.ttip"));
      out.write('"');
      out.write('>');
      out.print( rb.getString("supervisor.preference.preference.level1.refresh"));
      out.write("</td>\n");
      out.write("        <td><input type=\"text\" id=\"LEVEL1_REFRESH_PERIOD\" name=\"_LEVEL1_REFRESH_PERIOD\" default=\"10\" value=\"");
      out.print(appSession.getInternalPreference(InternalPreference.LEVEL1_REFRESH_PERIOD));
      out.write("\" size=\"4\" /></td>\n");
      out.write("        <td>");
      out.print( rb.getString("supervisor.preference.preference.second"));
      out.write("</td>\n");
      out.write("    </tr>\n");
      out.write("    <tr>\n");
      out.write("        <td title=\"");
      out.print( rb.getString("supervisor.preference.preference.level2.refresh.ttip"));
      out.write('"');
      out.write('>');
      out.print( rb.getString("supervisor.preference.preference.level2.refresh"));
      out.write("</td>\n");
      out.write("        <td><input type=\"text\" id=\"LEVEL2_REFRESH_PERIOD\" name=\"_LEVEL2_REFRESH_PERIOD\" default=\"10\" value=\"");
      out.print(appSession.getInternalPreference(InternalPreference.LEVEL2_REFRESH_PERIOD));
      out.write("\" size=\"4\" /></td>\n");
      out.write("        <td>");
      out.print( rb.getString("supervisor.preference.preference.second"));
      out.write("</td>\n");
      out.write("    </tr>\n");
      out.write("    <tr>\n");
      out.write("        <td title=\"");
      out.print( rb.getString("supervisor.preference.preference.level3"
                + ".refresh.ttip"));
      out.write('"');
      out.write('>');
      out.print( rb.getString("supervisor.preference.preference.level3.refresh"));
      out.write("</td>\n");
      out.write("        <td><input type=\"text\" id=\"LEVEL3_REFRESH_PERIOD\" name=\"_LEVEL3_REFRESH_PERIOD\" default=\"10\" value=\"");
      out.print(appSession.getInternalPreference(InternalPreference.LEVEL3_REFRESH_PERIOD));
      out.write("\" size=\"4\" /></td>\n");
      out.write("        <td>");
      out.print( rb.getString("supervisor.preference.preference.second"));
      out.write("</td>\n");
      out.write("    </tr>\n");
      out.write("</table>\n");
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
