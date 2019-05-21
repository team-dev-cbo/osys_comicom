<%@ page language="java" %>
<%@ page import="quartisweb.id.user.User" %>


<%
String instance = (String)session.getAttribute("instance");
User user = (User)session.getAttribute("user");
String id="";
String nom = "";
String prenom = "";
String mdp = "";
String profil = "";
String locale = "";
String codeSite = "";
String identqt = "";
String mdpqt = "";
if (user!=null) {
    id = user.getIdentifiant();
    nom = user.getNom();
    prenom = user.getPrenom();
    mdp = user.getMdp();
    profil = user.getCodeProfil();
    locale = user.getLocale().toString();
    codeSite = user.getSiteDefaut();
    identqt = user.getIdentQtools();
    mdpqt = user.getMdpQtools();

    //System.out.println("-----> "+codeSite);
}
%>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        
    </head>
    <body scroll="no" >
        <table style="width:100%;height:100%;">
            <tr>
                <td align="center" style="color:#3877AA;font-family: 'Arial'; font-weight:bold;font-size:16px;font-style:italic;">
                    Chargement... <br/>
                </td>
            </tr>
        </table>
    </body>
</html>