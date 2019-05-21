<%@ page import="java.util.Map"%>
<%@ page import="java.util.List"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.Collections"%>
<%@ page import="java.util.Comparator"%>
<%@ page import="quartisspv.util.Constants"%>
<%@ page import="quartisspv.page.PageDescription"%>
<%@ page import="quartisspv.action.preference.PreferenceDelegate"%>
<%@ page import="quartisspv.restriction.parameter.RestrictionDelegate"%>
<%@ page import="quartisspv.page.jaxb.XmlPageParam"%>
<%@ page import="quartisspv.page.jaxb.DateTimeType"%>
<%@ page import="quartisspv.page.jaxb.XmlListType"%>
<%@ page import="quartisspv.page.jaxb.ListRefType"%>
<%@ page import="quartisspv.page.jaxb.DynamicListRefType"%>
<%@ page import="quartisspv.servlet.Session"%>
<%
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
%>

<table>
    <%
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
    %>
    <tr>
        <td title="<%=desc%>"><%=label%> : </td>
        <td id="td<%=name%>">
            <% if (restrictedValues != null && restrictedValues.length == 1) {%>

            <input id="<%=name%>"
                   type="text"
                   name="<%=name%>"
                   label="<%=label%>"
                   default="<%=restrictedValues[0]%>"
                   value="<%=restrictedValues[0]%>" disabled />

            <% } else if (restrictedValues != null && restrictedValues.length > 1 && xpp instanceof ListRefType) {
                     String[][] lis = delegate.getListRestrictedParameters(appSession, (ListRefType) xpp, restrictedValue);
                     if (lis != null) {
            %>

            <select id="<%=name%>"
                    name="<%=name%>"
                    default="<%=dftvalue%>">
                <% for (String[] li : lis) { %>
                <option value="<%=li[1]%>"><%=li[0]%></option>
                <% }%>
            </select>

            <% } else {%>

            <select id="<%=name%>"
                    name="<%=name%>"
                    default="<%=dftvalue%>">
                <option value="<%=restrictedValue%>">%</option>
                <% for (String li : restrictedValues) {%>
                <option value="<%=li%>"><%=li%></option>
                <% }%>
            </select>

            <% }%>

            <script type="text/javascript">
                var nf = document.getElementById("<%=name%>");
                for (var i=0;i<nf.length;i++) {
                    if (nf.options[i].value == "<%=value%>") {
                        nf.selectedIndex = i;
                    }
                }
            </script>

            <% } else if (restrictedValues != null && restrictedValues.length > 1) {
            %>

            <select id="<%=name%>"
                    name="<%=name%>"
                    default="<%=dftvalue%>">
                <option value="<%=restrictedValue%>">%</option>
                <% for (String li : restrictedValues) {%>
                <option value="<%=li%>"><%=li%></option>
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

            <% } else if (xpp instanceof DateTimeType) {
                                DateTimeType dtf = (DateTimeType) xpp;
            %>

            <table cellspacing="0" cellpadding="0" style="border-collapse: collapse"><tr>
                    <td>
                        <input id="<%=name%>"
                               type="text"
                               name="<%=name%>"
                               label="<%=label%>"
                               default="<%=dftvalue%>"
                               value="<%=value%>"
                               size="12"/>
                    </td>
                    <td>
                        <img id="btn<%=name%>"
                             src="images/cal.jpeg"
                             style="cursor: pointer;"
                             title=""/>
                    </td>
            </table>

            <script type="text/javascript">
                Calendar.setup({
                    inputField     :    "<%=name%>",      // id of the input field
                    ifFormat       :    "%d/%m/%Y<%=dtf.isShowHours() ? " %H:%M" : ""%>",       // format of the input field
                    showsTime      :    <%=String.valueOf(dtf.isShowHours())%>,            // will display a time selector
                    timeFormat     :    "24",
                    button         :    "btn<%=name%>",   // trigger for the calendar (button ID)
                    singleClick    :    true,           // double-click mode
                    step           :    1                // show all years in drop-down boxes (instead of every other year as default)
                });
            </script>


            <%
                            } else if (xpp instanceof DynamicListRefType) {
                                DynamicListRefType xdlt = (DynamicListRefType) xpp;

            %>
            <table cellspacing="0" cellpadding="0" style="border-collapse: collapse">
                <tr>
                    <td>
                        <input id="<%=name%>"
                               type="text"
                               name="<%=name%>"
                               label="<%=label%>"
                               default="<%=dftvalue%>"
                               value="<%=value%>"
                               onkeyup="showDynList(this, '<%=xdlt.getListId()%>', '<%=xdlt.getListPath()%>')"/>
                    </td>
                    <!--td>
                        <img id="img<%=name%>"
                             src="images/parcourir24x24.GIF"
                             title="Loading..."/>
                    </td-->
                </tr>
            </table>

            <% } else if (xpp instanceof XmlListType) {
                                String[][] lis = delegate.getListParameters(appSession, (XmlListType) xpp);
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
                   label="<%=label%>"
                   default="<%=dftvalue%>"
                   value="<%=value%>"/>

            <% }

                            } else {%>
            <input id="<%=name%>"
                   type="text"
                   name="<%=name%>"
                   label="<%=label%>"
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