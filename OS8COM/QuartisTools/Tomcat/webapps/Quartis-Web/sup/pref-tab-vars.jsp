<%@ page import="java.util.Map"%>
<%@ page import="java.util.List"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.Collections"%>
<%@ page import="java.util.Comparator"%>
<%@ page import="quartisspv.util.Constants"%>
<%@ page import="quartisspv.page.PageDescription"%>
<%@ page import="quartisspv.action.preference.PreferenceDelegate"%>
<%@ page import="quartisspv.page.jaxb.XmlPageVar"%>
<%@ page import="quartisspv.page.jaxb.VariableListType"%>
<%@ page import="quartisspv.page.jaxb.VariableListRefType"%>
<%@ page import="quartisspv.servlet.Session"%>
<%
        Session appSession = (Session) session.getAttribute(Constants.SESSION_ATTR);
        PreferenceDelegate delegate = (PreferenceDelegate) request.getAttribute(Constants.PREFERENCE_ATTR);

        List<XmlPageVar> vrs = new ArrayList<XmlPageVar>(delegate.getVariables(appSession, request));
        Collections.sort(vrs, new Comparator<XmlPageVar>() {
            public int compare(XmlPageVar o1, XmlPageVar o2) {
                    return o1.getPosition() - o2.getPosition();
                }
            });
%>

<table>
    <%
        if (delegate != null) {
            Map vars = appSession.getVariables();
            for (XmlPageVar xpp : vrs) {
                String name = xpp.getName();
                String label = xpp.getLabel();
                String desc = xpp.getDescription();
                String dftvalue = xpp.getDefault();
                String value = (String) vars.get(xpp.getName());
                if (label == null) {
                    label = name;
                }
                if (desc == null) {
                    desc = label;
                }
                if (value == null) {
                    value = dftvalue;
                }
    %>
    <tr>
        <td title="<%=desc%>"><%=label%> : </td>
        <td id="td<%=name%>">
            <%
            String[][] lis = null;
            if (xpp instanceof VariableListType) {
                lis = delegate.getListVariables(appSession, request, (VariableListType) xpp);
                } else if (xpp instanceof VariableListRefType) {
                lis = delegate.getListVariables(appSession, (VariableListRefType) xpp);
                    }

                if (lis != null) {
            %>

            <select id="<%=name%>"
                    name="<%=name%>"
                    default="<%=dftvalue%>">
                <% for (String[] li : lis) {%>
                <option value="<%=li[1]%>"><%=li[0]%></option>
                <% }%>
            </select>

            <script type="text/javascript">
                var nf = document.getElementById("<%=name%>");
                for (var i=0;i<nf.length;i++) {
                    if (nf.options[i].value == "<%=value%>") {
                        nf.selectedIndex = i;
                    }
                }
            </script>

            <% } else {%>

            <input id="<%=name%>"
                   type="text"
                   name="<%=name%>"
                   default="<%=dftvalue%>"
                   value="<%=value%>"/>            
            <% }%>
        </td>
    </tr>
    <%
            }
        }
    %>
</table>
