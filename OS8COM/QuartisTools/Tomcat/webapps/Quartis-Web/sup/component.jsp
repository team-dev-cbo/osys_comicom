<%@ page import="java.util.Locale"%>
<%@ page import="quartisspv.util.Constants"%>
<%@ page import="quartisspv.servlet.Session"%>
<%@ page import="java.util.ResourceBundle"%>
<%
            Session supSession = (Session) session.getAttribute(Constants.SESSION_ATTR);
            ResourceBundle rb = ResourceBundle.getBundle("quartisweb/resources/private_language", new Locale(supSession.getLanguage()));
%>

<table cellpadding="0" cellspacing="0" style="width:180px; border-collapse: collapse">
    <tr>
        <td align="center" style="cursor:pointer; background:#6699CC; color:white;"><u><%= rb.getString("supervisor.component.title")%></u></td>
        <td align="right" style="background:#6699CC;" width="20%"><img id="component-close" src="images/close16x16.png" title="<%= rb.getString("supervisor.component.close")%>"/></td>
    </tr>
</table>
<div id="component" align="left" style="overflow:auto; width:180px; height:200px">
</div>
<div align="left" style="width:180px">
    <img id="component-other" src="images/apply16x16.png" />
    <img id="component-clear" src="images/clear16x16.png" title="<%= rb.getString("supervisor.component.default")%>" />
    <img id="component-save" src="images/filesave.png" title="<%= rb.getString("supervisor.component.save")%>" />
    <!--img id="component-export" src="images/filesave.png" title="<%= rb.getString("supervisor.component.save")%>" /-->
</div>
