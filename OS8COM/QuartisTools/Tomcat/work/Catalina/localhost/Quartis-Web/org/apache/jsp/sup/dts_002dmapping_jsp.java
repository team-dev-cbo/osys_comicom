package org.apache.jsp.sup;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.Locale;
import java.util.Collection;
import quartisspv.util.Constants;
import quartisspv.mapping.DtsMapping;
import quartisspv.mapping.DtsMappingDelegate;
import quartisspv.page.PageDescription;
import quartisspv.servlet.Session;
import java.util.ResourceBundle;

public final class dts_002dmapping_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("\n");
      out.write("\n");

            Session supSession = (Session) session.getAttribute(Constants.SESSION_ATTR);
            ResourceBundle rb = ResourceBundle.getBundle("quartisweb/resources/private_language", new Locale(supSession.getLanguage()));
            
        DtsMappingDelegate delegate = (DtsMappingDelegate) request.getAttribute(Constants.DTS_MAPPING_ATTR);
        Collection<DtsMapping> mappings = delegate.getMappings(request);

        if (!mappings.isEmpty()) {

      out.write("\n");
      out.write("<img src=\"images/csv22x22.png\" onclick=\"showMappingList('dts-mapping-list', this)\" style=\"position:absolute;display:inline-block;float:left; left:110px;\" title=\"");
      out.print( rb.getString("supervisor.dts_mapping.print"));
      out.write("\"/>\n");
 }
      out.write("\n");
      out.write("\n");
      out.write("<div id=\"dts-mapping-list\" style=\"display: none; position: absolute; right:40px; top:0px; border: 1px solid blue; background-color: white;\">\n");
      out.write("    <table cellpadding=\"2\" cellspacing=\"0\" style=\"width:200px; border-collapse: collapse\">\n");
      out.write("    <tr>\n");
      out.write("        <td align=\"center\" style=\"cursor:pointer; background:#6699CC; color:white;\"><u>");
      out.print( rb.getString("supervisor.dts_mapping.title"));
      out.write("</u></td>\n");
      out.write("        <td align=\"right\" style=\"background:#6699CC;\" width=\"20%\"><img src=\"images/close16x16.png\" onclick=\"closeMappingList('dts-mapping-list')\" title=\"");
      out.print( rb.getString("supervisor.dts_mapping.close"));
      out.write("\"/></td>\n");
      out.write("    </tr>\n");
      out.write("        ");

        for (DtsMapping mapping : mappings) {
        
      out.write("\n");
      out.write("        <tr>\n");
      out.write("            <td align=\"left\">\n");
      out.write("                <font style=\"color: #3877AA; font-size:12px; cursor: pointer\" onclick=\"pageToDts('");
      out.print( mapping.getId());
      out.write("')\">\n");
      out.write("                    <i>");
      out.print( mapping.getLabel());
      out.write("</i>\n");
      out.write("                </font>\n");
      out.write("            </td>\n");
      out.write("        </tr>\n");
      out.write("        ");
 }
      out.write("\n");
      out.write("    </table>\n");
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
