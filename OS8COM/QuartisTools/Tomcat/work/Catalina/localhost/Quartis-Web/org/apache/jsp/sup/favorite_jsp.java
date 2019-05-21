package org.apache.jsp.sup;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.Locale;
import quartisspv.util.Constants;
import quartisweb.id.user.User;
import quartisweb.id.favorite.Favorite;
import quartisweb.id.favorite.FavoriteManager;
import quartisspv.servlet.Session;
import java.util.ResourceBundle;

public final class favorite_jsp extends org.apache.jasper.runtime.HttpJspBase
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


            Session appSession = (Session) session.getAttribute(Constants.SESSION_ATTR);
            //String path = appSession.getInternalParameter(Constants.PATH_PARAMETER);
            String path = request.getParameter(Constants.PATH_PARAMETER2);
            ResourceBundle rb = ResourceBundle.getBundle("quartisweb/resources/private_language", new Locale(appSession.getLanguage()));

            String icon = "images/keditbookmarks.png";
            String onclick = "";
            String title = "";

            //User user = (User) session.getAttribute("user");
            String login = appSession.getLogin();

            String display = "display:inline-block;";
            //if (user != null) {
            //    String login = user.getIdentifiant();
            if (login != null) {
                try {
                    FavoriteManager favoriteManager = new FavoriteManager();
                    boolean isInFavorites = favoriteManager.isInFavorites(login, Constants.SUP_PREFIX + path);

                    icon = !isInFavorites ? "images/keditbookmarks.png" : "images/favorite_remove.png";
                    onclick = !isInFavorites ? "addToFavorites()" : "removeToFavorites()";
                    title = !isInFavorites ? rb.getString("supervisor.favorite.add") : rb.getString("supervisor.favorite.remove");
                } catch (Exception ex) {
                    display = "display:none;";
                }
            } else {
                display = "display:none;";
            }

      out.write("\n");
      out.write("<div style=\"position:relative;  ");
      out.print(display);
      out.write("\">\n");
      out.write("    <img src=\"");
      out.print(icon);
      out.write("\" onclick=\"");
      out.print(onclick);
      out.write("\" title=\"");
      out.print( title);
      out.write("\"/>\n");
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
