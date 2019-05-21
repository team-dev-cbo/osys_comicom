<%-- 
    Document   : index
    Created on : 20 avr. 2010, 14:03:49
    Author     : Petitot
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>OPTIMA WEB (c)OSYS 2010</title>
        <style>
            a:vlink {color:#3872A8}
            a:link {color:#3872A8}
        </style>

        <script type="text/javascript" >
            function validChoix(choix){
                document.getElementById("select").value = choix;
            }
        </script>
    </head>
    <body>
        <center>
        <br>
        <h3>OPTIMA WEB 3.0 - OSYS (C) 2012</h3>
        <br>
            <form  name="selectForm" action="<%=request.getContextPath()%>/SelectForm" method="POST">
                <input type="hidden" name="select" id="select" value="">
                <table>
                    <tr>
                        <td>
                            <img alt="" src="images/dateres.jpeg" />
                        </td>
                        <td style="text-align: left;"><big style="font-family: Tahoma; color: rgb(51, 51, 51);">
                                <a href="javascript:document.selectForm.submit()" onclick="validChoix('CalendrierEquipement');">Calendrier Machine</a></big>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img alt="" src="images/datepers.jpeg" />
                        </td>                    
                        <td style="text-align: left;"><big style="font-family: Tahoma; color: rgb(51, 51, 51);">
                                <a href="javascript:document.selectForm.submit()" onclick="validChoix('CalendrierPersonnel');">Calendrier Personnel</a></big>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img alt="" src="images/datepers.jpeg" />
                        </td>
                        <td style="text-align: left;"><big style="font-family: Tahoma; color: rgb(51, 51, 51);">
                                <a href="javascript:document.selectForm.submit()" onclick="validChoix('CalendrierPersonnelKelio');">Calendrier Personnel Kelio</a></big>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td style="text-align: left;"><big style="font-family: Tahoma; color: rgb(51, 51, 51);">
                                <a href="javascript:document.selectForm.submit()" onclick="validChoix('CorrectionTempsEquipement');">Correction temps équipement</a></big>
                        </td>
                    </tr>
                   <tr>
                        <td></td>
                        <td style="text-align: left;"><big style="font-family: Tahoma; color: rgb(51, 51, 51);">
                                <a href="javascript:document.selectForm.submit()" onclick="validChoix('CorrectionTempsHomme');">Correction temps homme</a></big>
                        </td>
                   </tr>
                   <tr>
                        <td></td>
                         <td style="text-align: left;"><big style="font-family: Tahoma; color: rgb(51, 51, 51);">
                                <a href="javascript:document.selectForm.submit()" onclick="validChoix('CorrectionRebut');">Correction déclaration rebut</a></big>
                        </td>
                    </tr>                    
                </table>
            </form>
        </center>
        <br>
    </body>
</html>
