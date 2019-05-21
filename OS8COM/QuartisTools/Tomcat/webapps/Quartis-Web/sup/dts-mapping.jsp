<%@ page import="java.util.Locale"%>
<%@ page import="java.util.Collection"%>
<%@ page import="quartisspv.util.Constants"%>
<%@ page import="quartisspv.mapping.DtsMapping"%>
<%@ page import="quartisspv.mapping.DtsMappingDelegate"%>
<%@ page import="quartisspv.page.PageDescription"%>
<%@ page import="quartisspv.servlet.Session"%>
<%@ page import="java.util.ResourceBundle"%>
<%
            Session supSession = (Session) session.getAttribute(Constants.SESSION_ATTR);
            ResourceBundle rb = ResourceBundle.getBundle("quartisweb/resources/private_language", new Locale(supSession.getLanguage()));
            
        DtsMappingDelegate delegate = (DtsMappingDelegate) request.getAttribute(Constants.DTS_MAPPING_ATTR);
        Collection<DtsMapping> mappings = delegate.getMappings(request);

        if (!mappings.isEmpty()) {
%>
<img src="images/csv22x22.png" onclick="showMappingList('dts-mapping-list', this)" style="position:absolute;display:inline-block;float:left; left:110px;" title="<%= rb.getString("supervisor.dts_mapping.print")%>"/>
<% }%>

<div id="dts-mapping-list" style="display: none; position: absolute; right:40px; top:0px; border: 1px solid blue; background-color: white;">
    <table cellpadding="2" cellspacing="0" style="width:200px; border-collapse: collapse">
    <tr>
        <td align="center" style="cursor:pointer; background:#6699CC; color:white;"><u><%= rb.getString("supervisor.dts_mapping.title")%></u></td>
        <td align="right" style="background:#6699CC;" width="20%"><img src="images/close16x16.png" onclick="closeMappingList('dts-mapping-list')" title="<%= rb.getString("supervisor.dts_mapping.close")%>"/></td>
    </tr>
        <%
        for (DtsMapping mapping : mappings) {
        %>
        <tr>
            <td align="left">
                <font style="color: #3877AA; font-size:12px; cursor: pointer" onclick="pageToDts('<%= mapping.getId()%>')">
                    <i><%= mapping.getLabel()%></i>
                </font>
            </td>
        </tr>
        <% }%>
    </table>
</div>
