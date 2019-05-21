<%@page import="java.util.Locale"%>
<%@ page import="quartisspv.util.Constants"%>
<%@ page import="quartisspv.servlet.Session"%>
<%@ page import="quartisspv.servlet.Session.InternalPreference"%>
<%@ page import="java.util.ResourceBundle"%>
<%
            Session appSession = (Session) session.getAttribute(Constants.SESSION_ATTR);
            ResourceBundle rb = ResourceBundle.getBundle("quartisweb/resources/private_language", new Locale(appSession.getLanguage()));
%>

<table>
    <tr>
        <td title="<%= rb.getString("supervisor.preference.preference.navigation.ttip")%>"><%= rb.getString("supervisor.preference.preference.navigation")%></td>
        <td><input type="text" id="NAVIGATION_TIMEOUT" name="_NAVIGATION_TIMEOUT" default="5" value="<%=appSession.getInternalPreference(InternalPreference.NAVIGATION_TIMEOUT)%>" size="4" /></td>
        <td><%= rb.getString("supervisor.preference.preference.second")%></td>
    </tr>
    <tr>
        <td title="<%= rb.getString("supervisor.preference.preference.level1.menu.ttip")%>"><%= rb.getString("supervisor.preference.preference.level1.menu")%></td>
        <td><input type="text" id="LEVEL1_MENU_TIMEOUT" name="_LEVEL1_MENU_TIMEOUT" default="8" value="<%=appSession.getInternalPreference(InternalPreference.LEVEL1_MENU_TIMEOUT)%>" size="4" /></td>
        <td><%= rb.getString("supervisor.preference.preference.second")%></td>
    </tr>
    <tr>
        <td title="<%= rb.getString("supervisor.preference.preference.level1.refresh.ttip")%>"><%= rb.getString("supervisor.preference.preference.level1.refresh")%></td>
        <td><input type="text" id="LEVEL1_REFRESH_PERIOD" name="_LEVEL1_REFRESH_PERIOD" default="10" value="<%=appSession.getInternalPreference(InternalPreference.LEVEL1_REFRESH_PERIOD)%>" size="4" /></td>
        <td><%= rb.getString("supervisor.preference.preference.second")%></td>
    </tr>
    <tr>
        <td title="<%= rb.getString("supervisor.preference.preference.level2.refresh.ttip")%>"><%= rb.getString("supervisor.preference.preference.level2.refresh")%></td>
        <td><input type="text" id="LEVEL2_REFRESH_PERIOD" name="_LEVEL2_REFRESH_PERIOD" default="10" value="<%=appSession.getInternalPreference(InternalPreference.LEVEL2_REFRESH_PERIOD)%>" size="4" /></td>
        <td><%= rb.getString("supervisor.preference.preference.second")%></td>
    </tr>
    <tr>
        <td title="<%= rb.getString("supervisor.preference.preference.level3"
                + ".refresh.ttip")%>"><%= rb.getString("supervisor.preference.preference.level3.refresh")%></td>
        <td><input type="text" id="LEVEL3_REFRESH_PERIOD" name="_LEVEL3_REFRESH_PERIOD" default="10" value="<%=appSession.getInternalPreference(InternalPreference.LEVEL3_REFRESH_PERIOD)%>" size="4" /></td>
        <td><%= rb.getString("supervisor.preference.preference.second")%></td>
    </tr>
</table>
