<%@page import="java.util.Locale"%>
<%@ page import="quartisspv.util.Constants"%>
<%@ page import="quartisspv.servlet.Session"%>
<%@ page import="java.util.ResourceBundle"%>
<%
            Session supSession = (Session) session.getAttribute(Constants.SESSION_ATTR);
            ResourceBundle rb = ResourceBundle.getBundle("quartisweb/resources/private_language", new Locale(supSession.getLanguage()));

            String path = request.getParameter(Constants.PATH_PARAMETER2);
            path = path == null ? "" : path;

            String extend = request.getParameter(Constants.EXTEND_PARAMETER);
            extend = extend == null ? "" : extend;

            String mappingId = request.getParameter(Constants.MAPPING_ID_PARAMETER);
            mappingId = mappingId == null ? "" : mappingId;
%>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link type="text/css" rel="stylesheet" href="../css/style.css" />
        <script type="text/javascript" src="js/ajax-init.js"></script>
        <script type="text/javascript" src="js/include.js"></script>
    </head>

    <jsp:include page="include.jsp" />

    <body>
        <div id="div_pdf" style="border:solid #3877AA 1px; height:100%;">
            <iframe id="pdf" style="width:100%; height:100%;">
            </iframe>
        </div>

        <div id="div_loading" style="position: absolute; border:solid #3877AA 1px; height:100%;">
            <table width="100%" height="100%">
                <tr>
                    <td width="100%" align="center" valign="middle">
                        <table>
                            <tr>
                                <td><img src="../images/loading2.gif"/></td>
                                <td>
                                    <font style="color: #6699CC; font-size:14px"><%= rb.getString("pdf.loading")%></font>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>

        <div id="toolbar" class="toolbarContainer toolbarStatique" align="center">
            <img src="../images/back.png" onclick="history.back()" style="position:relative;" title="<%= rb.getString("supervisor.pdf_view.back")%>"/>
        </div>

        <div id="message" align="center" style="visibility:hidden; position:absolute; right: 50px; top:10px;">
        </div>

        <script type="text/javascript">
            var req;

            document.body.style.overflow = 'hidden';

            var div_pdf = document.getElementById('div_pdf');
            div_pdf.style.width = document.body.clientWidth - 50;
            div_pdf.style.display = 'none';

            var div_loading = document.getElementById('div_loading');
            div_loading.style.width = document.body.clientWidth - 50;
            div_loading.style.display = '';

            if("<%= path%>" == "" || "<%= mappingId%>" == "") {
                history.back();
            } else {
                //                var pdf = document.getElementById('pdf');
                //                pdf.style.scrollbarFaceColor = "#FFFFFF";
                //                if("<%= path%>".indexOf("<%= Constants.LEVEL1_DIR_NAME%>", 0) > -1) {
                //                    pdf.src = LEVEL1_TO_PDF_URL + "&_mapping-id=<%= mappingId%>";
                //                } else if("<%= path%>".indexOf("<%= Constants.LEVEL2_DIR_NAME%>", 0) > -1 && "<%= extend%>".indexOf("<%= Constants.LEVEL2_TABLE_EXTENSION%>", 0) > -1) {
                //                    pdf.src = LEVEL2_TABLE_TO_PDF_URL + "&_path=<%= path%>" + "&_mapping-id=<%= mappingId%>";
                //                } else if("<%= path%>".indexOf("<%= Constants.LEVEL2_DIR_NAME%>", 0) > -1) {
                //                    pdf.src = LEVEL2_TO_PDF_URL + "&_path=<%= path%>" + "&_mapping-id=<%= mappingId%>";
                //                } else if("<%= path%>".indexOf("<%= Constants.LEVEL3_DIR_NAME%>", 0) > -1) {
                //                    pdf.src = LEVEL3_TO_PDF_URL + "&_path=<%= path%>" + "&_mapping-id=<%= mappingId%>";
                //                }
                sendQuery();
            }

            function sendQuery() {
                req = newXMLHttpRequest();
                if(req!=null) {
                    var url = "";
                    var pdf = document.getElementById('pdf');
                    pdf.style.scrollbarFaceColor = "#FFFFFF";
                    if("<%= path%>".indexOf("<%= Constants.LEVEL1_DIR_NAME%>", 0) > -1) {
                        url = LEVEL1_TO_PDF_URL + "&_mapping-id=<%= mappingId%>";
                    } else if("<%= path%>".indexOf("<%= Constants.LEVEL2_DIR_NAME%>", 0) > -1 && "<%= extend%>".indexOf("<%= Constants.LEVEL2_TABLE_EXTENSION%>", 0) > -1) {
                        url = LEVEL2_TABLE_TO_PDF_URL + "&_path=<%= path%>" + "&_mapping-id=<%= mappingId%>";
                    } else if("<%= path%>".indexOf("<%= Constants.LEVEL2_DIR_NAME%>", 0) > -1) {
                        url = LEVEL2_TO_PDF_URL + "&_path=<%= path%>" + "&_mapping-id=<%= mappingId%>";
                    } else if("<%= path%>".indexOf("<%= Constants.LEVEL3_DIR_NAME%>", 0) > -1) {
                        url = LEVEL3_TO_PDF_URL + "&_path=<%= path%>" + "&_mapping-id=<%= mappingId%>";
                    }

                    div_pdf.style.display = 'none';
                    div_loading.style.display = '';

                    req.onreadystatechange = process;
                    req.open("POST", url, true);
                    req.send(null);
                }
            }

            function process() {
                if (req.readyState == 4) {
                    if (req.status == 200) {
                        try {
                            var xmltxt = req.responseText;

                            var pdf = document.getElementById('pdf');
                            pdf.src = xmltxt;

                            div_pdf.style.display = '';
                            div_loading.style.display = 'none';
                        } catch(e) {
                        }
                    }
                }
            }
        </script>
    </body>
</html>