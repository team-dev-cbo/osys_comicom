<%-- 
    Document   : browse
    Created on : 2 avr. 2008, 10:04:47
    Author     : guerineau
--%>

<%@ page import="quartisweb.filechooser.FileChooser" %>
<%@ page import="quartisweb.filechooser.Folder" %>
<%@ page import="quartisweb.utils.EscapeChars" %>
<%@ page import="java.util.List" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">

<html>
    <head>
        <title>JSP Page</title>
        <link type="text/css" rel="stylesheet" href="css/style.css" />
        <style>
            body, td, th, p, div, span {
                font-size: 13px;
            }
        </style>
        <script type="text/javascript" src="js/security.js"></script>
        <script type="text/javascript" src="js/ajax-init.js"></script>
        <script type="text/javascript" src="js/ajax-opentree.js"></script>
        <script type="text/javascript" src="js/browse.js"></script>
        <%
        FileChooser fileChooser = (FileChooser)request.getAttribute("fileChooser");
        List<Folder> folderList = fileChooser.getFolderList();
        %>
    </head>
    <body onload="security();" style="margin: 0 0 0 0;overflow: hidden;">
        <form action="browse.brw">
            <input type="hidden" name="action" value="load">
            <table style="width: 400px;border:1px solid #C0C0C0;" cellspacing="3">
                <!-- Lecteurs -->
                <tr>
                    <td>
                        Rechercher&nbsp;dans :
                    </td>
                    <td align="right">
                        <select name="indiceRoot" style="width:300px;" onchange="showWaitPanel();submit()">
                            <%
                            for (int i=0; i<folderList.size(); i++) {
                                Folder folder = folderList.get(i);
                                StringBuffer sb = new StringBuffer();
                                sb.append("<option value=\"");
                                sb.append(i);
                                sb.append("\"");
                                if (fileChooser.getCurrentFolder()!=null) {
                                    if (fileChooser.getCurrentFolder().getPath().equals(folder.getPath())) {
                                        sb.append(" selected");
                                    }
                                }
                                    
                                sb.append(">");
                                sb.append(folder.getName());
                                sb.append("</option>");
                                out.println(sb.toString());
                            }
                            %>
                        </select>
                    </td>
                </tr>
                <!-- Sous-repertoires -->
                <tr>
                    <td colspan="2" valign="top">
                        <div id="div_browse" style="width: 415px;height: 300px;border:1px solid #C0C0C0;overflow:scroll;">
                            <table cellspacing=0 cellspacing=0 style="width:380px;">
                                <tbody>
                                    <%
                                    if (fileChooser.getCurrentFolder()!=null) {
                                        List<Folder> subFolderList = fileChooser.getCurrentFolder().getFolderList();
                                        for (int i=0; i<subFolderList.size(); i++) {
                                            Folder folder = subFolderList.get(i);
                                            String path = folder.getPath().replaceAll("\\\\", "\\\\\\\\");
                                            path = path.replaceAll("'", "\\\\'");
                                            String folder_line_id = "folder_line_" + i;

                                        %>
                                        <tr id="<%=folder_line_id%>" arb="1">
                                            <td valign="top" style="cursor:pointer;width:1px;">
                                                <img id="img_<%=folder_line_id%>" deploy="false" src="images/plus.png" onclick="demandeDonneesXml('<%=path%>', '<%=folder_line_id%>', this.id);">
                                            </td>
                                            <td style="cursor:default;" colspan="2">
                                                <img src="images/folder.gif">
                                                <span onclick="selectFolder(this, '<%=path%>');" ondblclick="demandeDonneesXml('<%=path%>', '<%=folder_line_id%>', 'img_<%=folder_line_id%>');">
                                                    <%=folder.getName()%>
                                                </span> 
                                            </td>
                                        </tr>
                                        <%
                                        }
                                    }
                                    %>
                                </tbody>
                            </table>

                        </div>
                    </td>
                </tr>
                <!-- Adresse -->
                <tr>
                    <td>
                        Répertoire :
                    </td>
                    <td align="right">
                        <input type="text" id="input_path_folder" style="width:300px;">
                    </td>
                <tr>

                </tr>
                <!-- Boutons d'action -->
                <tr>
                    <td colspan="2" align="center">
                        <br>
                        <table cellspacing=0  cellpadding=0>
                            <tr>
                                <td>
                                    <div class="ombre" style="width: 120px; height: 25px;">
                                        <div class="boite" style="width: 120px; height: 25px;">
                                            <input type="button" value="Annuler" class="commandButton" onclick="closeBrowse()" />
                                        </div>
                                    </div>    
                                </td>
                                <td>
                                    <div class="ombre" style="width: 120px; height: 25px;">
                                        <div class="boite" style="width: 120px; height: 25px;">
                                            <input type="button" value="Valider" class="commandButton" onclick="valider()" />
                                        </div>
                                    </div> 
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </form>
        
        <!--
        <textarea id="abcd" cols="100" rows="100">
            
        </textarea>
        -->
    </body>
</html>
