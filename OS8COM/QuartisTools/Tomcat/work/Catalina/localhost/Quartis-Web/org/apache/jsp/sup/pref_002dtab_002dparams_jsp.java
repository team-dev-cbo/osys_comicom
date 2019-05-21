package org.apache.jsp.sup;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.Map;
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import quartisspv.util.Constants;
import quartisspv.page.PageDescription;
import quartisspv.action.preference.PreferenceDelegate;
import quartisspv.restriction.parameter.RestrictionDelegate;
import quartisspv.page.jaxb.XmlPageParam;
import quartisspv.page.jaxb.DateTimeType;
import quartisspv.page.jaxb.XmlListType;
import quartisspv.page.jaxb.ListRefType;
import quartisspv.page.jaxb.DynamicListRefType;
import quartisspv.servlet.Session;

public final class pref_002dtab_002dparams_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");

            Session appSession = (Session) session.getAttribute(Constants.SESSION_ATTR);
            PreferenceDelegate delegate = (PreferenceDelegate) request.getAttribute(Constants.PREFERENCE_ATTR);

            List<XmlPageParam> pms = new ArrayList<XmlPageParam>(delegate.getParameters(appSession, request));
            Collections.sort(pms, new Comparator<XmlPageParam>() {

                public int compare(XmlPageParam o1, XmlPageParam o2) {
                    return o1.getPosition() - o2.getPosition();
                }
            });

            RestrictionDelegate restrictions = new RestrictionDelegate(appSession);
            //Map<String, List<String>> restrictedParameters = restrictions.restrictionListByParameter();
            Map<String, String> restrictedParameters = restrictions.getRestrictions();

      out.write("\n");
      out.write("\n");
      out.write("<table>\n");
      out.write("    ");

                if (delegate != null) {

                    int index = 0;
                    Map params = appSession.getParameters();
                    for (XmlPageParam xpp : pms) {
                        index++;
                        String name = xpp.getName();
                        String label = xpp.getLabel();
                        String desc = xpp.getDescription();
                        String dftvalue = xpp.getDefault();
                        String value = (String) params.get(xpp.getName());

                        if (label == null) {
                            label = name;
                        }
                        if (desc == null) {
                            desc = label;
                        }
                        if (value == null) {
                            value = dftvalue;
                        }

                        //List<String> restrictedValues = restrictedParameters.get(name);
                        String restrictedValue = restrictedParameters.get(name);
                        String[] restrictedValues = null;
                        if(restrictedValue != null) {
                            dftvalue = restrictedValue;
                            restrictedValues = restrictedValue.split("\\|");
                            }
    
      out.write("\n");
      out.write("    <tr>\n");
      out.write("        <td title=\"");
      out.print(desc);
      out.write('"');
      out.write('>');
      out.print(label);
      out.write(" : </td>\n");
      out.write("        <td id=\"td");
      out.print(name);
      out.write("\">\n");
      out.write("            ");
 if (restrictedValues != null && restrictedValues.length == 1) {
      out.write("\n");
      out.write("\n");
      out.write("            <input id=\"");
      out.print(name);
      out.write("\"\n");
      out.write("                   type=\"text\"\n");
      out.write("                   name=\"");
      out.print(name);
      out.write("\"\n");
      out.write("                   label=\"");
      out.print(label);
      out.write("\"\n");
      out.write("                   default=\"");
      out.print(restrictedValues[0]);
      out.write("\"\n");
      out.write("                   value=\"");
      out.print(restrictedValues[0]);
      out.write("\" disabled />\n");
      out.write("\n");
      out.write("            ");
 } else if (restrictedValues != null && restrictedValues.length > 1 && xpp instanceof ListRefType) {
                     String[][] lis = delegate.getListRestrictedParameters(appSession, (ListRefType) xpp, restrictedValue);
                     if (lis != null) {
            
      out.write("\n");
      out.write("\n");
      out.write("            <select id=\"");
      out.print(name);
      out.write("\"\n");
      out.write("                    name=\"");
      out.print(name);
      out.write("\"\n");
      out.write("                    default=\"");
      out.print(dftvalue);
      out.write("\">\n");
      out.write("                ");
 for (String[] li : lis) { 
      out.write("\n");
      out.write("                <option value=\"");
      out.print(li[1]);
      out.write('"');
      out.write('>');
      out.print(li[0]);
      out.write("</option>\n");
      out.write("                ");
 }
      out.write("\n");
      out.write("            </select>\n");
      out.write("\n");
      out.write("            ");
 } else {
      out.write("\n");
      out.write("\n");
      out.write("            <select id=\"");
      out.print(name);
      out.write("\"\n");
      out.write("                    name=\"");
      out.print(name);
      out.write("\"\n");
      out.write("                    default=\"");
      out.print(dftvalue);
      out.write("\">\n");
      out.write("                <option value=\"");
      out.print(restrictedValue);
      out.write("\">%</option>\n");
      out.write("                ");
 for (String li : restrictedValues) {
      out.write("\n");
      out.write("                <option value=\"");
      out.print(li);
      out.write('"');
      out.write('>');
      out.print(li);
      out.write("</option>\n");
      out.write("                ");
 }
      out.write("\n");
      out.write("            </select>\n");
      out.write("\n");
      out.write("            ");
 }
      out.write("\n");
      out.write("\n");
      out.write("            <script type=\"text/javascript\">\n");
      out.write("                var nf = document.getElementById(\"");
      out.print(name);
      out.write("\");\n");
      out.write("                for (var i=0;i<nf.length;i++) {\n");
      out.write("                    if (nf.options[i].value == \"");
      out.print(value);
      out.write("\") {\n");
      out.write("                        nf.selectedIndex = i;\n");
      out.write("                    }\n");
      out.write("                }\n");
      out.write("            </script>\n");
      out.write("\n");
      out.write("            ");
 } else if (restrictedValues != null && restrictedValues.length > 1) {
            
      out.write("\n");
      out.write("\n");
      out.write("            <select id=\"");
      out.print(name);
      out.write("\"\n");
      out.write("                    name=\"");
      out.print(name);
      out.write("\"\n");
      out.write("                    default=\"");
      out.print(dftvalue);
      out.write("\">\n");
      out.write("                <option value=\"");
      out.print(restrictedValue);
      out.write("\">%</option>\n");
      out.write("                ");
 for (String li : restrictedValues) {
      out.write("\n");
      out.write("                <option value=\"");
      out.print(li);
      out.write('"');
      out.write('>');
      out.print(li);
      out.write("</option>\n");
      out.write("                ");
 }
      out.write("\n");
      out.write("            </select>\n");
      out.write("\n");
      out.write("            <script type=\"text/javascript\">\n");
      out.write("                var nf = document.getElementById(\"");
      out.print(name);
      out.write("\");\n");
      out.write("                for (var i=0;i<nf.length;i++) {\n");
      out.write("                    if (nf.options[i].value == \"");
      out.print(value);
      out.write("\") {\n");
      out.write("                        nf.selectedIndex = i;\n");
      out.write("                    }\n");
      out.write("                }\n");
      out.write("            </script>\n");
      out.write("\n");
      out.write("            ");
 } else if (xpp instanceof DateTimeType) {
                                DateTimeType dtf = (DateTimeType) xpp;
            
      out.write("\n");
      out.write("\n");
      out.write("            <table cellspacing=\"0\" cellpadding=\"0\" style=\"border-collapse: collapse\"><tr>\n");
      out.write("                    <td>\n");
      out.write("                        <input id=\"");
      out.print(name);
      out.write("\"\n");
      out.write("                               type=\"text\"\n");
      out.write("                               name=\"");
      out.print(name);
      out.write("\"\n");
      out.write("                               label=\"");
      out.print(label);
      out.write("\"\n");
      out.write("                               default=\"");
      out.print(dftvalue);
      out.write("\"\n");
      out.write("                               value=\"");
      out.print(value);
      out.write("\"\n");
      out.write("                               size=\"12\"/>\n");
      out.write("                    </td>\n");
      out.write("                    <td>\n");
      out.write("                        <img id=\"btn");
      out.print(name);
      out.write("\"\n");
      out.write("                             src=\"images/cal.jpeg\"\n");
      out.write("                             style=\"cursor: pointer;\"\n");
      out.write("                             title=\"\"/>\n");
      out.write("                    </td>\n");
      out.write("            </table>\n");
      out.write("\n");
      out.write("            <script type=\"text/javascript\">\n");
      out.write("                Calendar.setup({\n");
      out.write("                    inputField     :    \"");
      out.print(name);
      out.write("\",      // id of the input field\n");
      out.write("                    ifFormat       :    \"%d/%m/%Y");
      out.print(dtf.isShowHours() ? " %H:%M" : "");
      out.write("\",       // format of the input field\n");
      out.write("                    showsTime      :    ");
      out.print(String.valueOf(dtf.isShowHours()));
      out.write(",            // will display a time selector\n");
      out.write("                    timeFormat     :    \"24\",\n");
      out.write("                    button         :    \"btn");
      out.print(name);
      out.write("\",   // trigger for the calendar (button ID)\n");
      out.write("                    singleClick    :    true,           // double-click mode\n");
      out.write("                    step           :    1                // show all years in drop-down boxes (instead of every other year as default)\n");
      out.write("                });\n");
      out.write("            </script>\n");
      out.write("\n");
      out.write("\n");
      out.write("            ");

                            } else if (xpp instanceof DynamicListRefType) {
                                DynamicListRefType xdlt = (DynamicListRefType) xpp;

            
      out.write("\n");
      out.write("            <table cellspacing=\"0\" cellpadding=\"0\" style=\"border-collapse: collapse\">\n");
      out.write("                <tr>\n");
      out.write("                    <td>\n");
      out.write("                        <input id=\"");
      out.print(name);
      out.write("\"\n");
      out.write("                               type=\"text\"\n");
      out.write("                               name=\"");
      out.print(name);
      out.write("\"\n");
      out.write("                               label=\"");
      out.print(label);
      out.write("\"\n");
      out.write("                               default=\"");
      out.print(dftvalue);
      out.write("\"\n");
      out.write("                               value=\"");
      out.print(value);
      out.write("\"\n");
      out.write("                               onkeyup=\"showDynList(this, '");
      out.print(xdlt.getListId());
      out.write("', '");
      out.print(xdlt.getListPath());
      out.write("')\"/>\n");
      out.write("                    </td>\n");
      out.write("                    <!--td>\n");
      out.write("                        <img id=\"img");
      out.print(name);
      out.write("\"\n");
      out.write("                             src=\"images/parcourir24x24.GIF\"\n");
      out.write("                             title=\"Loading...\"/>\n");
      out.write("                    </td-->\n");
      out.write("                </tr>\n");
      out.write("            </table>\n");
      out.write("\n");
      out.write("            ");
 } else if (xpp instanceof XmlListType) {
                                String[][] lis = delegate.getListParameters(appSession, (XmlListType) xpp);
                                if (lis != null) {
            
      out.write("\n");
      out.write("\n");
      out.write("            <select id=\"");
      out.print(name);
      out.write("\"\n");
      out.write("                    name=\"");
      out.print(name);
      out.write("\"\n");
      out.write("                    default=\"");
      out.print(dftvalue);
      out.write("\">\n");
      out.write("                ");
 for (String[] li : lis) {
      out.write("\n");
      out.write("                <option value=\"");
      out.print(li[1]);
      out.write('"');
      out.write('>');
      out.print(li[0]);
      out.write("</option>\n");
      out.write("                ");
 }
      out.write("\n");
      out.write("            </select>\n");
      out.write("\n");
      out.write("            <script type=\"text/javascript\">\n");
      out.write("                var nf = document.getElementById(\"");
      out.print(name);
      out.write("\");\n");
      out.write("                for (var i=0;i<nf.length;i++) {\n");
      out.write("                    if (nf.options[i].value == \"");
      out.print(value);
      out.write("\") {\n");
      out.write("                        nf.selectedIndex = i;\n");
      out.write("                    }\n");
      out.write("                }\n");
      out.write("            </script>\n");
      out.write("\n");
      out.write("            ");
 } else {
      out.write("\n");
      out.write("\n");
      out.write("            <input id=\"");
      out.print(name);
      out.write("\"\n");
      out.write("                   type=\"text\"\n");
      out.write("                   name=\"");
      out.print(name);
      out.write("\"\n");
      out.write("                   label=\"");
      out.print(label);
      out.write("\"\n");
      out.write("                   default=\"");
      out.print(dftvalue);
      out.write("\"\n");
      out.write("                   value=\"");
      out.print(value);
      out.write("\"/>\n");
      out.write("\n");
      out.write("            ");
 }

                            } else {
      out.write("\n");
      out.write("            <input id=\"");
      out.print(name);
      out.write("\"\n");
      out.write("                   type=\"text\"\n");
      out.write("                   name=\"");
      out.print(name);
      out.write("\"\n");
      out.write("                   label=\"");
      out.print(label);
      out.write("\"\n");
      out.write("                   default=\"");
      out.print(dftvalue);
      out.write("\"\n");
      out.write("                   value=\"");
      out.print(value);
      out.write("\"/>\n");
      out.write("            ");
 }
      out.write("\n");
      out.write("        </td>\n");
      out.write("    </tr>\n");
      out.write("    ");

                            }

                        }
    
      out.write("\n");
      out.write("</table>");
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
