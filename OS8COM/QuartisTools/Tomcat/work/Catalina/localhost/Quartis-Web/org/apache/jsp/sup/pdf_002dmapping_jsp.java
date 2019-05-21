package org.apache.jsp.sup;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.Locale;
import java.util.Collection;
import quartisspv.util.Constants;
import quartisspv.mapping.PdfMapping;
import quartisspv.mapping.PdfMappingDelegate;
import quartisspv.page.PageDescription;
import quartisspv.servlet.Session;
import java.util.ResourceBundle;

public final class pdf_002dmapping_jsp extends org.apache.jasper.runtime.HttpJspBase
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
            
        PdfMappingDelegate delegate = (PdfMappingDelegate) request.getAttribute(Constants.PDF_MAPPING_ATTR);
        Collection<PdfMapping> mappings = delegate.getMappings(request);

        if (!mappings.isEmpty()) {

      out.write("\n");
      out.write("<img src=\"images/pdf22x22.png\" onclick=\"showMappingList('pdf-mapping-list',this)\" style=\"position:absolute; display:inline-block; \" title=\"");
      out.print( rb.getString("supervisor.pdf_mapping.print"));
      out.write("\"/>\n");
 }
      out.write("\n");
      out.write("\n");
      out.write("<div id=\"pdf-mapping-list\" style=\"display: none; position: absolute; right:40px; top:0px; border: 1px solid blue; background-color: white;z-index:99;\">\n");
      out.write("    <table cellpadding=\"2\" cellspacing=\"0\" style=\"width:200px; border-collapse: collapse\">\n");
      out.write("    <tr>\n");
      out.write("        <td align=\"center\" class=\"titreOngletSelectionnePreferences\">");
      out.print( rb.getString("supervisor.pdf_mapping.title"));
      out.write("</td>\n");
      out.write("        <td align=\"right\" style=\"background:#6699CC;\" width=\"20%\"><img src=\"images/close16x16.png\" onclick=\"closeMappingList('pdf-mapping-list')\" title=\"");
      out.print( rb.getString("supervisor.pdf_mapping.close"));
      out.write("\"/></td>\n");
      out.write("    </tr>\n");
      out.write("        ");

        for (PdfMapping mapping : mappings) {
        
      out.write("\n");
      out.write("        <tr>\n");
      out.write("            <td width=\"100px\" align=\"left\" title=\"");
      out.print( mapping.getDescription());
      out.write("\">\n");
      out.write("                <div class=\"fullwebLink fullwebLinkStyle\" onclick=\"pageToPdf('");
      out.print( mapping.getId());
      out.write("')\">\n");
      out.write("                    <i>");
      out.print( mapping.getLabel());
      out.write("</i>\n");
      out.write("                </div>\n");
      out.write("            </td>\n");
      out.write("            <td align=\"left\">\n");
      out.write("                <font style=\"color: #3877AA; font-size:10px;\">(");
      out.print( mapping.getFormat());
      out.write(")</font>\n");
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
