<%@page import="java.util.Locale"%>
<%@ page import="quartisspv.util.Constants"%>
<%@ page import="quartisspv.servlet.Session"%>
<%@ page import="java.util.ResourceBundle"%>
<%
            Session supSession = (Session) session.getAttribute(Constants.SESSION_ATTR);
            ResourceBundle rb = ResourceBundle.getBundle("quartisweb/resources/private_language", new Locale(supSession.getLanguage()));
%>

<table cellpadding="0" cellspacing="0">
    <tr>
        <td id="Tab0" align="center" class="titreOngletPreferences" onclick="showTab(0)"><%= rb.getString("supervisor.preference.parameter")%></td>
        <td id="Tab1" align="center" class="titreOngletPreferences" onclick="showTab(1)"><%= rb.getString("supervisor.preference.variable")%></td>
        <td id="Tab2" align="center" class="titreOngletPreferences" onclick="showTab(2)"><%= rb.getString("supervisor.preference.preference")%></td>
        <td align="right" style="background:#6699CC;" width="20%"><img src="images/close16x16.png" onclick="togglePreference()" title="<%= rb.getString("supervisor.preference.close")%>"/></td>
    </tr>
    <tr>
        <td align="center" colspan="4">
            <div id="TabBody0">
                <jsp:include page="pref-tab-params.jsp" />
            </div>
            <div id="TabBody1" style="display:none;">
                <jsp:include page="pref-tab-vars.jsp" />
            </div>
            <div id="TabBody2" style="display:none;">
                <jsp:include page="pref-tab-intern.jsp" />
            </div>
        </td>
    </tr>
    <tr align="center">
        <td align="left" colspan="4">
            <img src="images/apply16x16.png" onclick="applyPreference()" title="<%= rb.getString("supervisor.preference.apply")%>" />
            <img src="images/clear16x16.png" onclick="cleanPreference()" title="<%= rb.getString("supervisor.preference.default")%>"/>
            <img src="images/save16x16.png" onclick="savePreference()" title="<%= rb.getString("supervisor.preference.save")%>"/>
            <!--img src="images/saveall16x16.png" onclick="saveAll()"/-->
        </td>
        <!--td align="right">
            <img src="images/close16x16.png" onclick="togglePreference()"/>
        </td-->
    </tr>
</table>
<div id="dynamic-list" style="display: none; position: absolute; border: 1px solid blue; background-color: #99CCFF;"></div>
