package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class a_005fpropos_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ff_005fview_0026_005flocale;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ff_005floadBundle_0026_005fvar_005fbasename_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fh_005foutputText_0026_005fvalue_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fh_005foutputText_0026_005fvalue_005frendered_005fnobody;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.AnnotationProcessor _jsp_annotationprocessor;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005ff_005fview_0026_005flocale = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005ff_005floadBundle_0026_005fvar_005fbasename_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fh_005foutputText_0026_005fvalue_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fh_005foutputText_0026_005fvalue_005frendered_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_annotationprocessor = (org.apache.AnnotationProcessor) getServletConfig().getServletContext().getAttribute(org.apache.AnnotationProcessor.class.getName());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005ff_005fview_0026_005flocale.release();
    _005fjspx_005ftagPool_005ff_005floadBundle_0026_005fvar_005fbasename_005fnobody.release();
    _005fjspx_005ftagPool_005fh_005foutputText_0026_005fvalue_005fnobody.release();
    _005fjspx_005ftagPool_005fh_005foutputText_0026_005fvalue_005frendered_005fnobody.release();
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
      out.write("<!DOCTYPE html>\n");
      out.write("\n");
      if (_jspx_meth_f_005fview_005f0(_jspx_page_context))
        return;
      out.write('\n');
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

  private boolean _jspx_meth_f_005fview_005f0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  f:view
    com.sun.faces.taglib.jsf_core.ViewTag _jspx_th_f_005fview_005f0 = new com.sun.faces.taglib.jsf_core.ViewTag();
    org.apache.jasper.runtime.AnnotationHelper.postConstruct(_jsp_annotationprocessor, _jspx_th_f_005fview_005f0);
    _jspx_th_f_005fview_005f0.setPageContext(_jspx_page_context);
    _jspx_th_f_005fview_005f0.setParent(null);
    // /a_propos.jsp(7,0) name = locale type = javax.el.ValueExpression reqTime = false required = false fragment = false deferredValue = true expectedTypeName = java.lang.Object deferredMethod = false methodSignature = null
    _jspx_th_f_005fview_005f0.setLocale(new org.apache.jasper.el.JspValueExpression("/a_propos.jsp(7,0) '#{aProposManagedBean.locale}'",_el_expressionfactory.createValueExpression(_jspx_page_context.getELContext(),"#{aProposManagedBean.locale}",java.lang.Object.class)));
    _jspx_th_f_005fview_005f0.setJspId("jsp_1741810809_0");
    int _jspx_eval_f_005fview_005f0 = _jspx_th_f_005fview_005f0.doStartTag();
    if (_jspx_eval_f_005fview_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_f_005fview_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_f_005fview_005f0.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_f_005fview_005f0.doInitBody();
      }
      do {
        out.write("\n");
        out.write("<html>\n");
        out.write("    <head>\n");
        out.write("        ");
        if (_jspx_meth_f_005floadBundle_005f0(_jspx_th_f_005fview_005f0, _jspx_page_context))
          return true;
        out.write("\n");
        out.write("        <script src=\"js/security.js\" ></script>\n");
        out.write("        <link type=\"text/css\" media=\"screen\" rel=\"stylesheet\" href=\"css/style.css\" />\n");
        out.write("    </head>\n");
        out.write("    <body onload=\"security();\" style=\"margin: 0 0 0 0;overflow: hidden;\">\n");
        out.write("        <div class=\"Apropos-container Apropos\">\n");
        out.write("            <div class=\"Apropos-titre\">\n");
        out.write("                <p class=\"Apropos-titre-nom\">Quartis Web</p>\n");
        out.write("                <p>");
        if (_jspx_meth_h_005foutputText_005f0(_jspx_th_f_005fview_005f0, _jspx_page_context))
          return true;
        out.write("&nbsp;");
        if (_jspx_meth_h_005foutputText_005f1(_jspx_th_f_005fview_005f0, _jspx_page_context))
          return true;
        out.write("</p>\n");
        out.write("            </div>\n");
        out.write("            <div class=\"Apropos-Texte\">\n");
        out.write("                <div class=\"Apropos-license-logo\">\n");
        out.write("                        <div>\n");
        out.write("                            <img src=\"images/logo_sedapta_osys_no_space.png\" alt=\"Osys Logo\"/>\n");
        out.write("                        </div>\n");
        out.write("                        <div>\n");
        out.write("                            License : <br/>\n");
        out.write("                                ");
        if (_jspx_meth_h_005foutputText_005f2(_jspx_th_f_005fview_005f0, _jspx_page_context))
          return true;
        out.write("\n");
        out.write("                                ");
        if (_jspx_meth_h_005foutputText_005f3(_jspx_th_f_005fview_005f0, _jspx_page_context))
          return true;
        out.write("<br/>\n");
        out.write("                                ");
        if (_jspx_meth_h_005foutputText_005f4(_jspx_th_f_005fview_005f0, _jspx_page_context))
          return true;
        out.write("\n");
        out.write("                                \n");
        out.write("                        </div>\n");
        out.write("                </div>\n");
        out.write("                <div class=\"Apropos-adresse\">\n");
        out.write("                    <p>\n");
        out.write("                        Sedapta-Osys<br/>\n");
        out.write("                        Parc tertiaire technopolis<br/>\n");
        out.write("                        Bâtiment N - Rue de Broglie<br/>\n");
        out.write("                        53810 - Changé-Les-Laval<br/>\n");
        out.write("                        France<br/>\n");
        out.write("                        Tél: ");
        if (_jspx_meth_h_005foutputText_005f5(_jspx_th_f_005fview_005f0, _jspx_page_context))
          return true;
        if (_jspx_meth_h_005foutputText_005f6(_jspx_th_f_005fview_005f0, _jspx_page_context))
          return true;
        out.write("<br/>\n");
        out.write("                        Fax: ");
        if (_jspx_meth_h_005foutputText_005f7(_jspx_th_f_005fview_005f0, _jspx_page_context))
          return true;
        if (_jspx_meth_h_005foutputText_005f8(_jspx_th_f_005fview_005f0, _jspx_page_context))
          return true;
        out.write("<br/>\n");
        out.write("                    </p>\n");
        out.write("                    <table>\n");
        out.write("                        <tr>\n");
        out.write("                            <td><img src=\"images/globe2.png\" alt=\"Website\" width=\"17\" height=\"17\"/></td>\n");
        out.write("                            <td>&nbsp;<a class=\"Apropos\" href=\"http://www.sedapta-osys.com/\">www.sedapta-osys.com</a></td>\n");
        out.write("                        </tr>\n");
        out.write("                        <tr>\n");
        out.write("                            <td><img src=\"images/mail.png\" alt=\"E-mail\"/></td>\n");
        out.write("                            <td>&nbsp;<a class=\"Apropos\" href=\"mailto:hotline@sedapta-osys.com\">hotline@sedapta-osys.com</a></td>\n");
        out.write("                        </tr>\n");
        out.write("                    </table>\n");
        out.write("\n");
        out.write("                </div>\n");
        out.write("            \n");
        out.write("                \n");
        out.write("            </div>\n");
        out.write("            <div class=\"Apropos-copyright\">\n");
        out.write("                &copy; Copyright 2007-<span id=\"yearCopyright\">2017</span> ");
        if (_jspx_meth_h_005foutputText_005f9(_jspx_th_f_005fview_005f0, _jspx_page_context))
          return true;
        out.write("\n");
        out.write("            </div>\n");
        out.write("        </div>\n");
        out.write("        <script type=\"text/javascript\">\n");
        out.write("            var date = new Date();\n");
        out.write("            var year = date.getFullYear();\n");
        out.write("            \n");
        out.write("            spanElement = document.getElementById(\"yearCopyright\");\n");
        out.write("            spanElement.innerHTML = year;\n");
        out.write("        </script>\n");
        out.write("    </body>\n");
        out.write("</html>\n");
        int evalDoAfterBody = _jspx_th_f_005fview_005f0.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_f_005fview_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_f_005fview_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_th_f_005fview_005f0.release();
      org.apache.jasper.runtime.AnnotationHelper.preDestroy(_jsp_annotationprocessor, _jspx_th_f_005fview_005f0);
      return true;
    }
    _jspx_th_f_005fview_005f0.release();
    org.apache.jasper.runtime.AnnotationHelper.preDestroy(_jsp_annotationprocessor, _jspx_th_f_005fview_005f0);
    return false;
  }

  private boolean _jspx_meth_f_005floadBundle_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_f_005fview_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  f:loadBundle
    com.sun.faces.taglib.jsf_core.LoadBundleTag _jspx_th_f_005floadBundle_005f0 = (com.sun.faces.taglib.jsf_core.LoadBundleTag) _005fjspx_005ftagPool_005ff_005floadBundle_0026_005fvar_005fbasename_005fnobody.get(com.sun.faces.taglib.jsf_core.LoadBundleTag.class);
    _jspx_th_f_005floadBundle_005f0.setPageContext(_jspx_page_context);
    _jspx_th_f_005floadBundle_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_f_005fview_005f0);
    // /a_propos.jsp(10,8) name = basename type = javax.el.ValueExpression reqTime = false required = false fragment = false deferredValue = true expectedTypeName = java.lang.String deferredMethod = false methodSignature = null
    _jspx_th_f_005floadBundle_005f0.setBasename(new org.apache.jasper.el.JspValueExpression("/a_propos.jsp(10,8) 'quartisweb/resources/private_language'",_el_expressionfactory.createValueExpression("quartisweb/resources/private_language",java.lang.String.class)));
    // /a_propos.jsp(10,8) name = var type = java.lang.String reqTime = false required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_f_005floadBundle_005f0.setVar("language");
    int _jspx_eval_f_005floadBundle_005f0 = _jspx_th_f_005floadBundle_005f0.doStartTag();
    if (_jspx_th_f_005floadBundle_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ff_005floadBundle_0026_005fvar_005fbasename_005fnobody.reuse(_jspx_th_f_005floadBundle_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005ff_005floadBundle_0026_005fvar_005fbasename_005fnobody.reuse(_jspx_th_f_005floadBundle_005f0);
    return false;
  }

  private boolean _jspx_meth_h_005foutputText_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_f_005fview_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  h:outputText
    com.sun.faces.taglib.html_basic.OutputTextTag _jspx_th_h_005foutputText_005f0 = new com.sun.faces.taglib.html_basic.OutputTextTag();
    org.apache.jasper.runtime.AnnotationHelper.postConstruct(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f0);
    _jspx_th_h_005foutputText_005f0.setPageContext(_jspx_page_context);
    _jspx_th_h_005foutputText_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_f_005fview_005f0);
    // /a_propos.jsp(18,19) name = value type = javax.el.ValueExpression reqTime = false required = false fragment = false deferredValue = true expectedTypeName = java.lang.Object deferredMethod = false methodSignature = null
    _jspx_th_h_005foutputText_005f0.setValue(new org.apache.jasper.el.JspValueExpression("/a_propos.jsp(18,19) '#{language.aproposNumVersion}'",_el_expressionfactory.createValueExpression(_jspx_page_context.getELContext(),"#{language.aproposNumVersion}",java.lang.Object.class)));
    _jspx_th_h_005foutputText_005f0.setJspId("jsp_1741810809_1");
    int _jspx_eval_h_005foutputText_005f0 = _jspx_th_h_005foutputText_005f0.doStartTag();
    if (_jspx_th_h_005foutputText_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_th_h_005foutputText_005f0.release();
      org.apache.jasper.runtime.AnnotationHelper.preDestroy(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f0);
      return true;
    }
    _jspx_th_h_005foutputText_005f0.release();
    org.apache.jasper.runtime.AnnotationHelper.preDestroy(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f0);
    return false;
  }

  private boolean _jspx_meth_h_005foutputText_005f1(javax.servlet.jsp.tagext.JspTag _jspx_th_f_005fview_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  h:outputText
    com.sun.faces.taglib.html_basic.OutputTextTag _jspx_th_h_005foutputText_005f1 = new com.sun.faces.taglib.html_basic.OutputTextTag();
    org.apache.jasper.runtime.AnnotationHelper.postConstruct(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f1);
    _jspx_th_h_005foutputText_005f1.setPageContext(_jspx_page_context);
    _jspx_th_h_005foutputText_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_f_005fview_005f0);
    // /a_propos.jsp(18,79) name = value type = javax.el.ValueExpression reqTime = false required = false fragment = false deferredValue = true expectedTypeName = java.lang.Object deferredMethod = false methodSignature = null
    _jspx_th_h_005foutputText_005f1.setValue(new org.apache.jasper.el.JspValueExpression("/a_propos.jsp(18,79) '#{aProposManagedBean.version}'",_el_expressionfactory.createValueExpression(_jspx_page_context.getELContext(),"#{aProposManagedBean.version}",java.lang.Object.class)));
    _jspx_th_h_005foutputText_005f1.setJspId("jsp_1741810809_2");
    int _jspx_eval_h_005foutputText_005f1 = _jspx_th_h_005foutputText_005f1.doStartTag();
    if (_jspx_th_h_005foutputText_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_th_h_005foutputText_005f1.release();
      org.apache.jasper.runtime.AnnotationHelper.preDestroy(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f1);
      return true;
    }
    _jspx_th_h_005foutputText_005f1.release();
    org.apache.jasper.runtime.AnnotationHelper.preDestroy(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f1);
    return false;
  }

  private boolean _jspx_meth_h_005foutputText_005f2(javax.servlet.jsp.tagext.JspTag _jspx_th_f_005fview_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  h:outputText
    com.sun.faces.taglib.html_basic.OutputTextTag _jspx_th_h_005foutputText_005f2 = new com.sun.faces.taglib.html_basic.OutputTextTag();
    org.apache.jasper.runtime.AnnotationHelper.postConstruct(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f2);
    _jspx_th_h_005foutputText_005f2.setPageContext(_jspx_page_context);
    _jspx_th_h_005foutputText_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_f_005fview_005f0);
    // /a_propos.jsp(27,32) name = value type = javax.el.ValueExpression reqTime = false required = false fragment = false deferredValue = true expectedTypeName = java.lang.Object deferredMethod = false methodSignature = null
    _jspx_th_h_005foutputText_005f2.setValue(new org.apache.jasper.el.JspValueExpression("/a_propos.jsp(27,32) '#{language.aproposInvalide}'",_el_expressionfactory.createValueExpression(_jspx_page_context.getELContext(),"#{language.aproposInvalide}",java.lang.Object.class)));
    // /a_propos.jsp(27,32) name = rendered type = javax.el.ValueExpression reqTime = false required = false fragment = false deferredValue = true expectedTypeName = boolean deferredMethod = false methodSignature = null
    _jspx_th_h_005foutputText_005f2.setRendered(new org.apache.jasper.el.JspValueExpression("/a_propos.jsp(27,32) '#{!aProposManagedBean.licenceValide}'",_el_expressionfactory.createValueExpression(_jspx_page_context.getELContext(),"#{!aProposManagedBean.licenceValide}",boolean.class)));
    _jspx_th_h_005foutputText_005f2.setJspId("jsp_1741810809_3");
    int _jspx_eval_h_005foutputText_005f2 = _jspx_th_h_005foutputText_005f2.doStartTag();
    if (_jspx_th_h_005foutputText_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_th_h_005foutputText_005f2.release();
      org.apache.jasper.runtime.AnnotationHelper.preDestroy(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f2);
      return true;
    }
    _jspx_th_h_005foutputText_005f2.release();
    org.apache.jasper.runtime.AnnotationHelper.preDestroy(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f2);
    return false;
  }

  private boolean _jspx_meth_h_005foutputText_005f3(javax.servlet.jsp.tagext.JspTag _jspx_th_f_005fview_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  h:outputText
    com.sun.faces.taglib.html_basic.OutputTextTag _jspx_th_h_005foutputText_005f3 = new com.sun.faces.taglib.html_basic.OutputTextTag();
    org.apache.jasper.runtime.AnnotationHelper.postConstruct(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f3);
    _jspx_th_h_005foutputText_005f3.setPageContext(_jspx_page_context);
    _jspx_th_h_005foutputText_005f3.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_f_005fview_005f0);
    // /a_propos.jsp(28,32) name = value type = javax.el.ValueExpression reqTime = false required = false fragment = false deferredValue = true expectedTypeName = java.lang.Object deferredMethod = false methodSignature = null
    _jspx_th_h_005foutputText_005f3.setValue(new org.apache.jasper.el.JspValueExpression("/a_propos.jsp(28,32) '#{language.aproposNombreUtilisateurs} #{aProposManagedBean.numUser}'",_el_expressionfactory.createValueExpression(_jspx_page_context.getELContext(),"#{language.aproposNombreUtilisateurs} #{aProposManagedBean.numUser}",java.lang.Object.class)));
    // /a_propos.jsp(28,32) name = rendered type = javax.el.ValueExpression reqTime = false required = false fragment = false deferredValue = true expectedTypeName = boolean deferredMethod = false methodSignature = null
    _jspx_th_h_005foutputText_005f3.setRendered(new org.apache.jasper.el.JspValueExpression("/a_propos.jsp(28,32) '#{aProposManagedBean.licenceValide}'",_el_expressionfactory.createValueExpression(_jspx_page_context.getELContext(),"#{aProposManagedBean.licenceValide}",boolean.class)));
    _jspx_th_h_005foutputText_005f3.setJspId("jsp_1741810809_4");
    int _jspx_eval_h_005foutputText_005f3 = _jspx_th_h_005foutputText_005f3.doStartTag();
    if (_jspx_th_h_005foutputText_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_th_h_005foutputText_005f3.release();
      org.apache.jasper.runtime.AnnotationHelper.preDestroy(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f3);
      return true;
    }
    _jspx_th_h_005foutputText_005f3.release();
    org.apache.jasper.runtime.AnnotationHelper.preDestroy(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f3);
    return false;
  }

  private boolean _jspx_meth_h_005foutputText_005f4(javax.servlet.jsp.tagext.JspTag _jspx_th_f_005fview_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  h:outputText
    com.sun.faces.taglib.html_basic.OutputTextTag _jspx_th_h_005foutputText_005f4 = new com.sun.faces.taglib.html_basic.OutputTextTag();
    org.apache.jasper.runtime.AnnotationHelper.postConstruct(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f4);
    _jspx_th_h_005foutputText_005f4.setPageContext(_jspx_page_context);
    _jspx_th_h_005foutputText_005f4.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_f_005fview_005f0);
    // /a_propos.jsp(29,32) name = value type = javax.el.ValueExpression reqTime = false required = false fragment = false deferredValue = true expectedTypeName = java.lang.Object deferredMethod = false methodSignature = null
    _jspx_th_h_005foutputText_005f4.setValue(new org.apache.jasper.el.JspValueExpression("/a_propos.jsp(29,32) '#{language.aproposNombreTerminaux} #{aProposManagedBean.numTerminaux}'",_el_expressionfactory.createValueExpression(_jspx_page_context.getELContext(),"#{language.aproposNombreTerminaux} #{aProposManagedBean.numTerminaux}",java.lang.Object.class)));
    // /a_propos.jsp(29,32) name = rendered type = javax.el.ValueExpression reqTime = false required = false fragment = false deferredValue = true expectedTypeName = boolean deferredMethod = false methodSignature = null
    _jspx_th_h_005foutputText_005f4.setRendered(new org.apache.jasper.el.JspValueExpression("/a_propos.jsp(29,32) '#{aProposManagedBean.licenceValide}'",_el_expressionfactory.createValueExpression(_jspx_page_context.getELContext(),"#{aProposManagedBean.licenceValide}",boolean.class)));
    _jspx_th_h_005foutputText_005f4.setJspId("jsp_1741810809_5");
    int _jspx_eval_h_005foutputText_005f4 = _jspx_th_h_005foutputText_005f4.doStartTag();
    if (_jspx_th_h_005foutputText_005f4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_th_h_005foutputText_005f4.release();
      org.apache.jasper.runtime.AnnotationHelper.preDestroy(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f4);
      return true;
    }
    _jspx_th_h_005foutputText_005f4.release();
    org.apache.jasper.runtime.AnnotationHelper.preDestroy(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f4);
    return false;
  }

  private boolean _jspx_meth_h_005foutputText_005f5(javax.servlet.jsp.tagext.JspTag _jspx_th_f_005fview_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  h:outputText
    com.sun.faces.taglib.html_basic.OutputTextTag _jspx_th_h_005foutputText_005f5 = new com.sun.faces.taglib.html_basic.OutputTextTag();
    org.apache.jasper.runtime.AnnotationHelper.postConstruct(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f5);
    _jspx_th_h_005foutputText_005f5.setPageContext(_jspx_page_context);
    _jspx_th_h_005foutputText_005f5.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_f_005fview_005f0);
    // /a_propos.jsp(40,29) name = value type = javax.el.ValueExpression reqTime = false required = false fragment = false deferredValue = true expectedTypeName = java.lang.Object deferredMethod = false methodSignature = null
    _jspx_th_h_005foutputText_005f5.setValue(new org.apache.jasper.el.JspValueExpression("/a_propos.jsp(40,29) '#{language.prefixtel}'",_el_expressionfactory.createValueExpression(_jspx_page_context.getELContext(),"#{language.prefixtel}",java.lang.Object.class)));
    _jspx_th_h_005foutputText_005f5.setJspId("jsp_1741810809_6");
    int _jspx_eval_h_005foutputText_005f5 = _jspx_th_h_005foutputText_005f5.doStartTag();
    if (_jspx_th_h_005foutputText_005f5.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_th_h_005foutputText_005f5.release();
      org.apache.jasper.runtime.AnnotationHelper.preDestroy(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f5);
      return true;
    }
    _jspx_th_h_005foutputText_005f5.release();
    org.apache.jasper.runtime.AnnotationHelper.preDestroy(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f5);
    return false;
  }

  private boolean _jspx_meth_h_005foutputText_005f6(javax.servlet.jsp.tagext.JspTag _jspx_th_f_005fview_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  h:outputText
    com.sun.faces.taglib.html_basic.OutputTextTag _jspx_th_h_005foutputText_005f6 = new com.sun.faces.taglib.html_basic.OutputTextTag();
    org.apache.jasper.runtime.AnnotationHelper.postConstruct(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f6);
    _jspx_th_h_005foutputText_005f6.setPageContext(_jspx_page_context);
    _jspx_th_h_005foutputText_005f6.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_f_005fview_005f0);
    // /a_propos.jsp(40,75) name = value type = javax.el.ValueExpression reqTime = false required = false fragment = false deferredValue = true expectedTypeName = java.lang.Object deferredMethod = false methodSignature = null
    _jspx_th_h_005foutputText_005f6.setValue(new org.apache.jasper.el.JspValueExpression("/a_propos.jsp(40,75) '#{language.numtel}'",_el_expressionfactory.createValueExpression(_jspx_page_context.getELContext(),"#{language.numtel}",java.lang.Object.class)));
    _jspx_th_h_005foutputText_005f6.setJspId("jsp_1741810809_7");
    int _jspx_eval_h_005foutputText_005f6 = _jspx_th_h_005foutputText_005f6.doStartTag();
    if (_jspx_th_h_005foutputText_005f6.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_th_h_005foutputText_005f6.release();
      org.apache.jasper.runtime.AnnotationHelper.preDestroy(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f6);
      return true;
    }
    _jspx_th_h_005foutputText_005f6.release();
    org.apache.jasper.runtime.AnnotationHelper.preDestroy(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f6);
    return false;
  }

  private boolean _jspx_meth_h_005foutputText_005f7(javax.servlet.jsp.tagext.JspTag _jspx_th_f_005fview_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  h:outputText
    com.sun.faces.taglib.html_basic.OutputTextTag _jspx_th_h_005foutputText_005f7 = new com.sun.faces.taglib.html_basic.OutputTextTag();
    org.apache.jasper.runtime.AnnotationHelper.postConstruct(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f7);
    _jspx_th_h_005foutputText_005f7.setPageContext(_jspx_page_context);
    _jspx_th_h_005foutputText_005f7.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_f_005fview_005f0);
    // /a_propos.jsp(41,29) name = value type = javax.el.ValueExpression reqTime = false required = false fragment = false deferredValue = true expectedTypeName = java.lang.Object deferredMethod = false methodSignature = null
    _jspx_th_h_005foutputText_005f7.setValue(new org.apache.jasper.el.JspValueExpression("/a_propos.jsp(41,29) '#{language.prefixtel}'",_el_expressionfactory.createValueExpression(_jspx_page_context.getELContext(),"#{language.prefixtel}",java.lang.Object.class)));
    _jspx_th_h_005foutputText_005f7.setJspId("jsp_1741810809_8");
    int _jspx_eval_h_005foutputText_005f7 = _jspx_th_h_005foutputText_005f7.doStartTag();
    if (_jspx_th_h_005foutputText_005f7.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_th_h_005foutputText_005f7.release();
      org.apache.jasper.runtime.AnnotationHelper.preDestroy(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f7);
      return true;
    }
    _jspx_th_h_005foutputText_005f7.release();
    org.apache.jasper.runtime.AnnotationHelper.preDestroy(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f7);
    return false;
  }

  private boolean _jspx_meth_h_005foutputText_005f8(javax.servlet.jsp.tagext.JspTag _jspx_th_f_005fview_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  h:outputText
    com.sun.faces.taglib.html_basic.OutputTextTag _jspx_th_h_005foutputText_005f8 = new com.sun.faces.taglib.html_basic.OutputTextTag();
    org.apache.jasper.runtime.AnnotationHelper.postConstruct(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f8);
    _jspx_th_h_005foutputText_005f8.setPageContext(_jspx_page_context);
    _jspx_th_h_005foutputText_005f8.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_f_005fview_005f0);
    // /a_propos.jsp(41,75) name = value type = javax.el.ValueExpression reqTime = false required = false fragment = false deferredValue = true expectedTypeName = java.lang.Object deferredMethod = false methodSignature = null
    _jspx_th_h_005foutputText_005f8.setValue(new org.apache.jasper.el.JspValueExpression("/a_propos.jsp(41,75) '#{language.numfax}'",_el_expressionfactory.createValueExpression(_jspx_page_context.getELContext(),"#{language.numfax}",java.lang.Object.class)));
    _jspx_th_h_005foutputText_005f8.setJspId("jsp_1741810809_9");
    int _jspx_eval_h_005foutputText_005f8 = _jspx_th_h_005foutputText_005f8.doStartTag();
    if (_jspx_th_h_005foutputText_005f8.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_th_h_005foutputText_005f8.release();
      org.apache.jasper.runtime.AnnotationHelper.preDestroy(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f8);
      return true;
    }
    _jspx_th_h_005foutputText_005f8.release();
    org.apache.jasper.runtime.AnnotationHelper.preDestroy(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f8);
    return false;
  }

  private boolean _jspx_meth_h_005foutputText_005f9(javax.servlet.jsp.tagext.JspTag _jspx_th_f_005fview_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  h:outputText
    com.sun.faces.taglib.html_basic.OutputTextTag _jspx_th_h_005foutputText_005f9 = new com.sun.faces.taglib.html_basic.OutputTextTag();
    org.apache.jasper.runtime.AnnotationHelper.postConstruct(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f9);
    _jspx_th_h_005foutputText_005f9.setPageContext(_jspx_page_context);
    _jspx_th_h_005foutputText_005f9.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_f_005fview_005f0);
    // /a_propos.jsp(59,75) name = value type = javax.el.ValueExpression reqTime = false required = false fragment = false deferredValue = true expectedTypeName = java.lang.Object deferredMethod = false methodSignature = null
    _jspx_th_h_005foutputText_005f9.setValue(new org.apache.jasper.el.JspValueExpression("/a_propos.jsp(59,75) '#{language.aproposAllRights}'",_el_expressionfactory.createValueExpression(_jspx_page_context.getELContext(),"#{language.aproposAllRights}",java.lang.Object.class)));
    _jspx_th_h_005foutputText_005f9.setJspId("jsp_1741810809_10");
    int _jspx_eval_h_005foutputText_005f9 = _jspx_th_h_005foutputText_005f9.doStartTag();
    if (_jspx_th_h_005foutputText_005f9.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_th_h_005foutputText_005f9.release();
      org.apache.jasper.runtime.AnnotationHelper.preDestroy(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f9);
      return true;
    }
    _jspx_th_h_005foutputText_005f9.release();
    org.apache.jasper.runtime.AnnotationHelper.preDestroy(_jsp_annotationprocessor, _jspx_th_h_005foutputText_005f9);
    return false;
  }
}
