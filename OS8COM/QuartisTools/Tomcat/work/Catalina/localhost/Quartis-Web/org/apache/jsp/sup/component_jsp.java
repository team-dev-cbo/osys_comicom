package org.apache.jsp.sup;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.Locale;
import quartisspv.util.Constants;
import quartisspv.servlet.Session;
import java.util.ResourceBundle;

public final class component_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<table cellpadding=\"0\" cellspacing=\"0\" style=\"width:180px; border-collapse: collapse\">\n");
      out.write("    <tr>\n");
      out.write("        <td align=\"center\" style=\"cursor:pointer; background:#6699CC; color:white;\"><u>");
      out.print( rb.getString("supervisor.component.title"));
      out.write("</u></td>\n");
      out.write("        <td align=\"right\" style=\"background:#6699CC;\" width=\"20%\"><img id=\"component-close\" src=\"images/close16x16.png\" title=\"");
      out.print( rb.getString("supervisor.component.close"));
      out.write("\"/></td>\n");
      out.write("    </tr>\n");
      out.write("</table>\n");
      out.write("<div id=\"component\" align=\"left\" style=\"overflow:auto; width:180px; height:200px\">\n");
      out.write("</div>\n");
      out.write("<div align=\"left\" style=\"width:180px\">\n");
      out.write("    <img id=\"component-other\" src=\"images/apply16x16.png\" />\n");
      out.write("    <img id=\"component-clear\" src=\"images/clear16x16.png\" title=\"");
      out.print( rb.getString("supervisor.component.default"));
      out.write("\" />\n");
      out.write("    <img id=\"component-save\" src=\"images/filesave.png\" title=\"");
      out.print( rb.getString("supervisor.component.save"));
      out.write("\" />\n");
      out.write("    <!--img id=\"component-export\" src=\"images/filesave.png\" title=\"");
      out.print( rb.getString("supervisor.component.save"));
      out.write("\" /-->\n");
      out.write("</div>\n");
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
