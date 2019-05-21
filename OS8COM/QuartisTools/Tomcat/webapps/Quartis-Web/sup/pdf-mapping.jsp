<%@ page import="java.util.Locale"%>
<%@ page import="java.util.Collection"%>
<%@ page import="quartisspv.util.Constants"%>
<%@ page import="quartisspv.mapping.PdfMapping"%>
<%@ page import="quartisspv.mapping.PdfMappingDelegate"%>
<%@ page import="quartisspv.page.PageDescription"%>
<%@ page import="quartisspv.servlet.Session"%>
<%@ page import="java.util.ResourceBundle"%>
<%
        Session supSession = (Session) session.getAttribute(Constants.SESSION_ATTR);
        ResourceBundle rb = ResourceBundle.getBundle("quartisweb/resources/private_language", new Locale(supSession.getLanguage()));
            
        PdfMappingDelegate delegate = (PdfMappingDelegate) request.getAttribute(Constants.PDF_MAPPING_ATTR);
        Collection<PdfMapping> mappings = delegate.getMappings(request);

        if (!mappings.isEmpty()) {
%>
<img src="images/pdf22x22.png" onclick="showMappingList('pdf-mapping-list',this)" style="position:absolute; display:inline-block; " title="<%= rb.getString("supervisor.pdf_mapping.print")%>"/>
<% }%>

<div id="pdf-mapping-list" style="display: none; position: absolute; right:40px; top:0px; border: 1px solid blue; background-color: white;z-index:99;">
    <table cellpadding="2" cellspacing="0" style="width:200px; border-collapse: collapse">
    <tr>
        <td align="center" class="titreOngletSelectionnePreferences"><%= rb.getString("supervisor.pdf_mapping.title")%></td>
        <td align="right" style="background:#6699CC;" width="20%"><img src="images/close16x16.png" onclick="closeMappingList('pdf-mapping-list')" title="<%= rb.getString("supervisor.pdf_mapping.close")%>"/></td>
    </tr>
        <%
        for (PdfMapping mapping : mappings) {
        %>
        <tr>
            <td width="100px" align="left" title="<%= mapping.getDescription()%>">
                <div class="fullwebLink fullwebLinkStyle" onclick="pageToPdf('<%= mapping.getId()%>')">
                    <i><%= mapping.getLabel()%></i>
                </div>
            </td>
            <td align="left">
                <font style="color: #3877AA; font-size:10px;">(<%= mapping.getFormat()%>)</font>
            </td>
        </tr>
        <% }%>
    </table>
</div>
