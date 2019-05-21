package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class index_jsp extends org.apache.jasper.runtime.HttpJspBase
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

      out.write("<?xml version='1.0' encoding='UTF-8' ?>\r\n");
      out.write("<!DOCTYPE html>\r\n");
      out.write("\r\n");
      out.write("<html xmlns=\"http://www.w3.org/1999/xhtml\"\r\n");
      out.write("\txmlns:ui=\"http://java.sun.com/jsf/facelets\"\r\n");
      out.write("\txmlns:h=\"http://java.sun.com/jsf/html\"\r\n");
      out.write("\txmlns:f=\"http://java.sun.com/jsf/core\"\r\n");
      out.write("\txmlns:p=\"http://primefaces.org/ui\"\r\n");
      out.write("\txmlns:c=\"http://java.sun.com/jsp/jstl/core\">\r\n");
      out.write("<h:head>\r\n");
      out.write("\t<title>Quartis Pro Gestion des ContrÃ´les</title>\r\n");
      out.write("\t<link rel=\"stylesheet\" media=\"screen\" href=\"../css/treeView.css\" />\r\n");
      out.write("\t<script type=\"text/javascript\" src=\"../js/treeView.js\"></script>\r\n");
      out.write("\r\n");
      out.write("</h:head>\r\n");
      out.write("\r\n");
      out.write("<h:body>\r\n");
      out.write("\t");
      licence.LicenceInformations licence = null;
      synchronized (request) {
        licence = (licence.LicenceInformations) _jspx_page_context.getAttribute("licence", PageContext.REQUEST_SCOPE);
        if (licence == null){
          licence = new licence.LicenceInformations();
          _jspx_page_context.setAttribute("licence", licence, PageContext.REQUEST_SCOPE);
        }
      }
      out.write("\r\n");
      out.write("\r\n");
      out.write("\t<h1>Gestion des Licences</h1>\r\n");
      out.write("\t<label>Licences Utilisateurs Ateliers : </label>\r\n");
      out.write("\t<label id=\"maxuseratel\">");
      out.print(licence.getMaxUserAtel() );
      out.write("</label>\r\n");
      out.write("\t<br/>\r\n");
      out.write("\t<label>Licences Utilisateurs Web : </label>\r\n");
      out.write("\t<label id=\"maxuserweb\">");
      out.print(licence.getMaxUserWeb() );
      out.write("</label>\r\n");
      out.write("\t<br/>\r\n");
      out.write("\t<label>Date fin validitÃ© licence : </label>\r\n");
      out.write("\t<label id=\"datefin\">");
      out.print(licence.getDateFin() );
      out.write("</label>\r\n");
      out.write("\t\r\n");
      out.write("\t\r\n");
      out.write("\t<h3>---------   </h3>\r\n");
      out.write("\t<h3>DÃ©tail de la licence</h3>\r\n");
      out.write("\t<label>Valide : </label>\r\n");
      out.write("\t<label id=\"isValidLicence\">");
      out.print(licence.isValidLicence() );
      out.write("</label>\r\n");
      out.write("\t<br/>\r\n");
      out.write("\t<label>Cle : </label>\r\n");
      out.write("\t<label id=\"key\">");
      out.print(licence.getKey() );
      out.write("</label>\r\n");
      out.write("\t<br/>\r\n");
      out.write("\t<label>Type : </label>\r\n");
      out.write("\t<label id=\"type\">");
      out.print(licence.getTypeLicence() );
      out.write("</label>\r\n");
      out.write("\t<br/>\r\n");
      out.write("\t<label>Statut : </label>\r\n");
      out.write("\t<label id=\"status\">");
      out.print(licence.getLicenceStatus() );
      out.write("</label>\r\n");
      out.write("\t<br/>\r\n");
      out.write("\t<label>Id Client : </label>\r\n");
      out.write("\t<label id=\"idClient\">");
      out.print(licence.getIdClient() );
      out.write("</label>\r\n");
      out.write("\t<br/>\r\n");
      out.write("\t<label>Id Poste : </label>\r\n");
      out.write("\t<label id=\"idPoste\">");
      out.print(licence.getIdPost() );
      out.write("</label>\r\n");
      out.write("\t<br/>\r\n");
      out.write("\t<label>Date de fin de validitÃ© : </label>\r\n");
      out.write("\t<label id=\"dueDate\">");
      out.print(licence.getDueDate() );
      out.write("</label>\r\n");
      out.write("\t<br/>\r\n");
      out.write("\t<label>Nombre de connexion atelier maximum : </label>\r\n");
      out.write("\t<label id=\"nbConnAtelier\">");
      out.print(licence.getNbConnAtelier() );
      out.write("</label>\r\n");
      out.write("\t<br/>\r\n");
      out.write("\t<label>Nombre de connexion web maximum : </label>\r\n");
      out.write("\t<label id=\"nbConnWeb\">");
      out.print(licence.getNbConnWeb() );
      out.write("</label>\r\n");
      out.write("\t\r\n");
      out.write("</h:body>\r\n");
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
