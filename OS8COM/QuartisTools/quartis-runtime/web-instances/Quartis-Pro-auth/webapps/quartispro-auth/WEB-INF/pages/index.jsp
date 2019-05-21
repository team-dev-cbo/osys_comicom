<%@page import="java.util.Properties"%>
<%@page import="com.osys.quartispro.auth.Dispatcher"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<% 
    String version = "1.0.4";
%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <title>Console Login</title>
        
        <!-- Progressive web app support -->
        <link rel="manifest" href="manifest.json">
        
        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css?version=<%= version %>" />
        <script src="js/jquery-3.3.1.min.js?version=<%= version %>" type="text/javascript"></script>
        <script src="js/quartis-i18n-v1.0.0.js?version=<%= version %>" type="text/javascript"></script>
        <script type="text/javascript">
        //<!-- Annulation clic droit CJ 06/04-->
        document.oncontextmenu = new Function("return false");
        </script>
        <style>
            * {
                -webkit-user-select: none; 
            }
            
            html {
                font-family: sans-serif;
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%; 
            }
            body {
                margin: 0;
                background-color: #2D3039;
                color: #FFFFFF;
                font-size: 15px; 
            }            
            .center-div
            {
                position: absolute;
                margin: auto;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background-color: #292C33
            }
            .content-center {
                margin-top: 50vh;
                margin-left: 50vw;
                transform: translate(-50%,-50%);
                height: auto !important;
            }
            .input-basic {
                width: 100%;
                background-color: #292C33;
                border: 1px solid #05A6F0;
                color: white;
                padding-left: 5px;
                text-align: left; 
            }  
            .input-form {
                width: 240px;
            }            
            .btn-basic {
                width: 100%;
                background-color: #292C33;
                border: 1px solid #05A6F0;
                color: white;
                vertical-align: top;
                padding: 1px 0px;
            }     
            .btn-key {
                height: 60px !important;
                padding: 0px !important; 
            }      
            .btn-form {
                width: 100%;
                background-color: #292C33;
                border: 1px solid #05A6F0;
                color: white;
                vertical-align: top;
                margin: 0;
                box-sizing: border-box;
                padding: 1px 6px;
                text-align: center;
            }
            .fontN {
                font-size: 16px;
            }
            
            .fontB {
                font-size: 17px;
            }
            .heightS {
                height: 32px;
                line-height: 32px;
            }
            .heightN {
                height: 60px;
                line-height: 60px;
            }
            .btn-highlight {
                background-color: #05A6F0;
                border: 1px solid #05A6F0;
                color: white; 
            }
            .btn-icon-validate {
                background-image: url("load?path=consoles/images/button_ok.png");
                background-repeat: no-repeat;
                background-position: 8px; 
            }
            .btn-icon-exit {
                background-image: url("load?path=consoles/images/button_cancel.png");
                background-repeat: no-repeat;
                background-position: 8px; 
            }
            
            .btn-caps-lock {
                background-image: url("load?path=consoles/images/button_caps_lock.png");
                background-repeat: no-repeat;
                background-position: center; 
            }
            
            .btn-icon-backspace {
                background-image: url("load?path=consoles/images/button_backspace.png");
                background-repeat: no-repeat;
                background-position: center; 
            }
            .btn-icon-clear {
                background-image: url("load?path=consoles/images/button_clear.png");
                background-repeat: no-repeat;
                background-position: 8px; 
            }
            .icon-left {
                background-position: 8px; 
            }
            .icon-center {
                background-position: center; 
            }
            .rowMargin {
                margin: 5px 0px 5px 0px  !important; 
            } 
            
            .noMargin {
                margin: 0px !important;
            }

            #loading {
                width: 500px; 
                height: 300px;
            }

            #form {
                width: 500px; 
                height: 320px;
            }

            #clavier {
                width: 800px; 
                height: 300px; 
            }
            
            #disconnect-modal, #alreadyconnect-modal {
                width: 500px; 
                height: 320px; 
                background-color: #292C33; 
                z-index: 9990;
            }
            
            #disconnect-modal-content, #alreadyconnect-modal-content {
                position: relative;
                width: 100%;
                height: 100%;
                text-align: center;
                padding-top: 60px;
            }
            
            #disconnect-modal-cancel, #alreadyconnect-modal-btn-container {
                bottom: 15px;
                left: 0;
                position: absolute;
            }
            
            #alreadyconnect-modal-btn-container {
                width: 100%;
                margin-left: 0px;
                margin-right: 0px;
            }

            @media (max-width: 400px) {
                #loading {                   
                    width: 100%; 
                    height: 300px;
                }
                #form {                    
                    width: 100%; 
                    height: 300px;
                }            
                #clavier {
                    width: 90%; 
                    height: 90%; 
                }
                .input-form {
                    width: 140px;
                }     
                .btn-key {
                    height: 60px !important;
                    padding: 0px !important; 
                }      
                .btn-icon-validate {
                    background-image: url("load?path=consoles/images/button_ok.png");
                    background-repeat: no-repeat;
                    background-position: center;
                    font-size: 0px !important;
                }
                .btn-icon-exit {
                    background-image: url("load?path=consoles/images/button_cancel.png");
                    background-repeat: no-repeat;
                    background-position: center;
                    font-size: 0px !important;
                }
                .btn-icon-clear {
                    background-image: url("load?path=consoles/images/button_clear.png");
                    background-repeat: no-repeat;
                    background-position: center;
                    font-size: 0px !important;
                } 
            }

            <%
                String ua = request.getHeader("User-Agent").toLowerCase();
                if (ua.matches("(?i).*((bodet-osys).+-.+mobile).*")
                        || ua.matches("(?i).*((android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino).*")
                        || ua.substring(0, 4).matches("(?i)1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-")) {
            %>    

            <%
                }
            %>

        </style>
    </head>

    <%
        String dispatcherUrl = Dispatcher.getInstance().getUrl();
        
        String username = (String) request.getParameter("username");
        if (username == null || username.isEmpty()) {
            username = "";
        }

        String password = (String) request.getParameter("password");
        if (password == null || password.isEmpty()) {
            password = "";
        }

        String lang = (String) request.getParameter("lang");
        if (lang == null || lang.isEmpty()) {
            lang = "fr";
        }

        String autoConnect = (String) request.getParameter("autoConnect");
        if (!"false".equalsIgnoreCase(autoConnect)) {
            autoConnect = "true";
        }
        
        String userDisconnect = (String) request.getParameter("userDisconnect");
        if (userDisconnect == null) {
            userDisconnect = "";
        }
        
        Properties trad = (Properties) request.getAttribute("trad");
    %>

    <body>      

        <div id="mainframe">

            <div id="portrait">

                <div id="loading" class="center-div">
                    <div>
                        <img src="images/logo_osys.png">                    
                    </div>
                    <div style="position: relative; margin: 10px 10px 10px 10px">
                        <div style="position: absolute; width: 100%; ">
                            <table cellpadding="0" cellspacing="10" style="width: 100%; text-align:center;">
                                <tbody>
                                    <tr class="fontN heightS">
                                        <td><span><%= trad.getProperty("login.load")%></span></td>
                                    </tr>
                                    <tr>
                                        <td><input id="cancel_button" type="button" class="btn-form fontN heightN" onclick="cancel()" name="cancel_button" value="Annuler"/></td>
                                    </tr>
                                </tbody>
                            </table>                    
                        </div>                  
                    </div>
                    <div style="position: absolute; bottom:0;">    
                        <span style="font-weight:bold; height: 40px"><%= trad.getProperty("login.wait")%></span>
                    </div>
                </div>

                <div id="form" class="center-div" style="display: none">
                    <div>
                        <img src="images/logo_osys.png">                    
                    </div>
                    <div style="position: relative; margin: 10px 10px 10px 10px">
                        <div style="position: absolute; right:0">
                            <table cellpadding="0" cellspacing="10" style="text-align:right;">
                                <tbody>
                                    <tr class="fontN heightS">
                                        <td><span><%= trad.getProperty("login.id")%></span></td>
                                        <td> : </td>
                                        <td><input class="input-basic input-form fontN heightS" id="login" type="text" name="login" onfocus="loginInput();" style="border:1px solid #3872A8;" readonly="true" /></td>
                                    </tr>
                                    <tr class="fontN heightS">
                                        <td><span><%= trad.getProperty("login.password")%></span></td>
                                        <td> : </td>
                                        <td><input class="input-basic input-form fontN heightS" id="password" type="password" name="saisie_password" value="" onfocus="passwordInput();" style="border:1px solid #3872A8; margin-top: 5px;" readonly="true"/></td>
                                    </tr>
                                    <tr class="fontN heightS" style="display: none">
                                        <td><span><%= trad.getProperty("login.mobile")%></span></td>
                                        <td> : </td>
                                        <td><input class="input-basic input-form fontN heightS" id="mobile" type="checkbox" name="mobile" checked /></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td><input id="login_button" type="button" class="btn-form fontN heightN" onclick="connect(false)" name="login_button" value="<%= trad.getProperty("form.button.connect")%>" style="margin-top: 10px"/></td>
                                    </tr>
                                </tbody>
                            </table>                    
                        </div>                  
                    </div>
                    <div style="position: absolute; bottom:0;">    
                        <span id="message" style="font-weight:bold; height: 40px">-</span>
                    </div>
                </div>

                <div id="clavier" class="center-div" style="display: none">

                    <div class="row noMargin" id="clavier_5" data-reactid=".9.0.0">
                        <div class="abc" id="clavier_6" data-reactid=".9.0.0.0">
                            <div id="clavier_7_cont" class="col-xs-2 col-sm-2 heightB fontB visible-xs btn-key" data-reactid=".9.0.0.0.0" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB visible-xs btn-key icon-left" value="123" data-reactid=".9.0.0.0.0.0" onclick="onClickAbc()">
                            </div>
                        </div>
                        <div class="num" id="clavier_8" data-reactid=".9.0.0.1" style="display: none;">
                            <div id="clavier_9_cont" class="col-xs-2 col-sm-2 heightB fontB visible-xs btn-key" data-reactid=".9.0.0.1.0" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB visible-xs btn-key icon-left" value="ABC" data-reactid=".9.0.0.1.0.0" onclick="onClick123()">
                            </div>
                        </div>
                        <div id="clavier_10_cont" class="col-xs-2 col-sm-2 heightB fontB hidden-xs btn-key" data-reactid=".9.0.0.2" style="display: block; visibility: visible;">
                            <input type="button" class="btn-basic heightB fontB hidden-xs btn-icon-clear btn-key icon-left" value="Vider" data-reactid=".9.0.0.2.0" onclick="clean();">
                        </div>
                        <div id="clavier_TextboxSaisie_cont" class="col-xs-8 col-sm-8" data-reactid=".9.0.0.3" style="visibility: visible;">
                            <input type="text" class="input-basic heightN fontN " id="clavier_login" value="" style="display: none"/>
                            <input type="password" class="input-basic heightN fontN " id="clavier_password" value="" style="display: none" readonly="true"/>
                        </div>
                        <div id="clavier_11_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.0.4" style="visibility: visible;">
                            <input type="button" class="btn-basic heightB fontB btn-icon-backspace btn-key icon-center" value="" data-reactid=".9.0.0.4.0" onclick="backspace();">
                        </div>
                    </div>
                    <div class="hidden-xs" id="clavier_12" data-reactid=".9.0.1">
                        <div class="row" id="clavier_13" data-reactid=".9.0.1.0">
                            <div id="clavier_14_cont" class="col-xs-1 col-sm-1 " data-reactid=".9.0.1.0.0" style="visibility: visible;"></div>
                            <div id="clavier_15_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.0.1" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="0" data-reactid=".9.0.1.0.1.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_16_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.0.2" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="1" data-reactid=".9.0.1.0.2.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_17_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.0.3" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="2" data-reactid=".9.0.1.0.3.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_18_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.0.4" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="3" data-reactid=".9.0.1.0.4.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_19_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.0.5" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="4" data-reactid=".9.0.1.0.5.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_20_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.0.6" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="5" data-reactid=".9.0.1.0.6.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_21_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.0.7" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="6" data-reactid=".9.0.1.0.7.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_22_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.0.8" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="7" data-reactid=".9.0.1.0.8.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_23_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.0.9" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="8" data-reactid=".9.0.1.0.9.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_24_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.0.a" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="9" data-reactid=".9.0.1.0.a.0" onclick="keyInput(this)">
                            </div>
                        </div>
                        <div class="row fr" id="clavier_25" data-reactid=".9.0.1.1">
                            <div id="clavier_26_cont" class="col-xs-1 col-sm-1 " data-reactid=".9.0.1.1.0" style="visibility: visible;"></div>
                            <div id="clavier_27_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.1.1" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="A" data-reactid=".9.0.1.1.1.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_28_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.1.2" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="Z" data-reactid=".9.0.1.1.2.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_29_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.1.3" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="E" data-reactid=".9.0.1.1.3.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_30_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.1.4" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="R" data-reactid=".9.0.1.1.4.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_31_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.1.5" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="T" data-reactid=".9.0.1.1.5.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_32_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.1.6" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="Y" data-reactid=".9.0.1.1.6.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_33_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.1.7" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="U" data-reactid=".9.0.1.1.7.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_34_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.1.8" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="I" data-reactid=".9.0.1.1.8.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_35_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.1.9" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="O" data-reactid=".9.0.1.1.9.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_36_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.1.a" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="P" data-reactid=".9.0.1.1.a.0" onclick="keyInput(this)">
                            </div>
                        </div>
                        <div class="row en" id="clavier_37" data-reactid=".9.0.1.2" style="display: none;">
                            <div id="clavier_38_cont" class="col-xs-1 col-sm-1 " data-reactid=".9.0.1.2.0" style="visibility: visible;"></div>
                            <div id="clavier_39_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.2.1" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="Q" data-reactid=".9.0.1.2.1.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_40_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.2.2" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="W" data-reactid=".9.0.1.2.2.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_41_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.2.3" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="E" data-reactid=".9.0.1.2.3.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_42_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.2.4" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="R" data-reactid=".9.0.1.2.4.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_43_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.2.5" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="T" data-reactid=".9.0.1.2.5.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_44_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.2.6" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="Y" data-reactid=".9.0.1.2.6.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_45_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.2.7" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="U" data-reactid=".9.0.1.2.7.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_46_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.2.8" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="I" data-reactid=".9.0.1.2.8.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_47_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.2.9" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="O" data-reactid=".9.0.1.2.9.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_48_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.2.a" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="P" data-reactid=".9.0.1.2.a.0" onclick="keyInput(this)">
                            </div>
                        </div>
                        <div class="row fr" id="clavier_49" data-reactid=".9.0.1.3">
                            <div id="clavier_50_cont" class="col-xs-1 col-sm-1 " data-reactid=".9.0.1.3.0" style="visibility: visible;"></div>
                            <div id="clavier_51_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.3.1" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="Q" data-reactid=".9.0.1.3.1.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_52_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.3.2" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="S" data-reactid=".9.0.1.3.2.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_53_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.3.3" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="D" data-reactid=".9.0.1.3.3.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_54_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.3.4" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="F" data-reactid=".9.0.1.3.4.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_55_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.3.5" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="G" data-reactid=".9.0.1.3.5.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_56_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.3.6" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="H" data-reactid=".9.0.1.3.6.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_57_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.3.7" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="J" data-reactid=".9.0.1.3.7.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_58_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.3.8" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="K" data-reactid=".9.0.1.3.8.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_59_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.3.9" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="L" data-reactid=".9.0.1.3.9.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_60_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.3.a" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="M" data-reactid=".9.0.1.3.a.0" onclick="keyInput(this)">
                            </div>
                        </div>
                        <div class="row en" id="clavier_61" data-reactid=".9.0.1.4" style="display: none;">
                            <div id="clavier_62_cont" class="col-xs-1 col-sm-1 " data-reactid=".9.0.1.4.0" style="visibility: visible;"></div>
                            <div id="clavier_63_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.4.1" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="A" data-reactid=".9.0.1.4.1.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_64_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.4.2" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="S" data-reactid=".9.0.1.4.2.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_65_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.4.3" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="D" data-reactid=".9.0.1.4.3.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_66_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.4.4" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="F" data-reactid=".9.0.1.4.4.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_67_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.4.5" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="G" data-reactid=".9.0.1.4.5.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_68_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.4.6" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="H" data-reactid=".9.0.1.4.6.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_69_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.4.7" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="J" data-reactid=".9.0.1.4.7.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_70_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.4.8" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="K" data-reactid=".9.0.1.4.8.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_71_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.4.9" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="L" data-reactid=".9.0.1.4.9.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_72_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.4.a" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="-" data-reactid=".9.0.1.4.a.0" onclick="keyInput(this)">
                            </div>
                        </div>
                        <div class="row fr" id="clavier_73" data-reactid=".9.0.1.5">
                            <div id="clavier_74_cont" class="col-xs-2 col-sm-2 " data-reactid=".9.0.1.5.0" style="visibility: visible;"></div>
                            <!--div id="clavier_75_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.5.1" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="_" data-reactid=".9.0.1.5.1.0" onclick="keyInput(this)">
                            </div-->
                            <div id="clavier_76_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.5.2" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="W" data-reactid=".9.0.1.5.2.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_77_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.5.3" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="X" data-reactid=".9.0.1.5.3.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_78_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.5.4" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="C" data-reactid=".9.0.1.5.4.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_79_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.5.5" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="V" data-reactid=".9.0.1.5.5.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_80_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.5.6" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="B" data-reactid=".9.0.1.5.6.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_81_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.5.7" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="N" data-reactid=".9.0.1.5.7.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_82_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.5.8" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="-" data-reactid=".9.0.1.5.8.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_83_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.5.9" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="." data-reactid=".9.0.1.5.9.0" onclick="keyInput(this)">
                            </div>
                            <!--div id="clavier_84_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.5.a" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="/" data-reactid=".9.0.1.5.a.0" onclick="keyInput(this)">
                            </div-->
                        </div>
                        <div class="row en" id="clavier_85" data-reactid=".9.0.1.6" style="display: none;">
                            <div id="clavier_86_cont" class="col-xs-2 col-sm-2 " data-reactid=".9.0.1.6.0" style="visibility: visible;"></div>
                            <!--div id="clavier_87_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.6.1" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="_" data-reactid=".9.0.1.6.1.0" onclick="keyInput(this)">
                            </div-->
                            <div id="clavier_88_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.6.2" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="Z" data-reactid=".9.0.1.6.2.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_89_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.6.3" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="X" data-reactid=".9.0.1.6.3.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_90_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.6.4" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="C" data-reactid=".9.0.1.6.4.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_91_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.6.5" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="V" data-reactid=".9.0.1.6.5.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_92_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.6.6" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="B" data-reactid=".9.0.1.6.6.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_93_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.6.7" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="N" data-reactid=".9.0.1.6.7.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_94_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.6.8" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="M" data-reactid=".9.0.1.6.8.0" onclick="keyInput(this)">
                            </div>
                            <div id="clavier_95_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.6.9" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="." data-reactid=".9.0.1.6.9.0" onclick="keyInput(this)">
                            </div>
                            <!--div id="clavier_96_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.1.6.a" style="visibility: visible;">
                                <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="/" data-reactid=".9.0.1.6.a.0" onclick="keyInput(this)">
                            </div-->
                        </div>
                    </div>
                    <div class="visible-xs" id="clavier_97" data-reactid=".9.0.2">
                        <div class="num" id="clavier_98" data-reactid=".9.0.2.0" style="display: none;">
                            <div id="clavier_99" class="row " style="height:25px;" data-reactid=".9.0.2.0.0"></div>
                            <div class="row" id="clavier_100" data-reactid=".9.0.2.0.1">
                                <div id="clavier_101_cont" class="col-xs-4 col-sm-4 heightB fontB btn-key" data-reactid=".9.0.2.0.1.0" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="7" data-reactid=".9.0.2.0.1.0.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_102_cont" class="col-xs-4 col-sm-4 heightB fontB btn-key" data-reactid=".9.0.2.0.1.1" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="8" data-reactid=".9.0.2.0.1.1.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_103_cont" class="col-xs-4 col-sm-4 heightB fontB btn-key" data-reactid=".9.0.2.0.1.2" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="9" data-reactid=".9.0.2.0.1.2.0" onclick="keyInput(this)">
                                </div>
                            </div>
                            <div class="row" id="clavier_104" data-reactid=".9.0.2.0.2">
                                <div id="clavier_105_cont" class="col-xs-4 col-sm-4 heightB fontB btn-key" data-reactid=".9.0.2.0.2.0" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="4" data-reactid=".9.0.2.0.2.0.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_106_cont" class="col-xs-4 col-sm-4 heightB fontB btn-key" data-reactid=".9.0.2.0.2.1" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="5" data-reactid=".9.0.2.0.2.1.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_107_cont" class="col-xs-4 col-sm-4 heightB fontB btn-key" data-reactid=".9.0.2.0.2.2" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="6" data-reactid=".9.0.2.0.2.2.0" onclick="keyInput(this)">
                                </div>
                            </div>
                            <div class="row" id="clavier_108" data-reactid=".9.0.2.0.3">
                                <div id="clavier_109_cont" class="col-xs-4 col-sm-4 heightB fontB btn-key" data-reactid=".9.0.2.0.3.0" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="1" data-reactid=".9.0.2.0.3.0.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_110_cont" class="col-xs-4 col-sm-4 heightB fontB btn-key" data-reactid=".9.0.2.0.3.1" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="2" data-reactid=".9.0.2.0.3.1.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_111_cont" class="col-xs-4 col-sm-4 heightB fontB btn-key" data-reactid=".9.0.2.0.3.2" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="3" data-reactid=".9.0.2.0.3.2.0" onclick="keyInput(this)">
                                </div>
                            </div>
                            <div class="row" id="clavier_112" data-reactid=".9.0.2.0.4">
                                <div id="clavier_113_cont" class="col-xs-4 col-sm-4 heightB fontB btn-key" data-reactid=".9.0.2.0.4.0" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="-" data-reactid=".9.0.2.0.4.0.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_114_cont" class="col-xs-4 col-sm-4 heightB fontB btn-key" data-reactid=".9.0.2.0.4.1" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="0" data-reactid=".9.0.2.0.4.1.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_115_cont" class="col-xs-4 col-sm-4 heightB fontB btn-key" data-reactid=".9.0.2.0.4.2" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="." data-reactid=".9.0.2.0.4.2.0" onclick="keyInput(this)">
                                </div>
                            </div>
                            <div id="clavier_116" class="row " style="height:25px;" data-reactid=".9.0.2.0.5"></div>
                        </div>
                        <div class="abc" id="clavier_117" data-reactid=".9.0.2.1">
                            <div class="row fr" id="clavier_118" data-reactid=".9.0.2.1.0">
                                <div id="clavier_119_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.0.0" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="A" data-reactid=".9.0.2.1.0.0.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_120_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.0.1" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="Z" data-reactid=".9.0.2.1.0.1.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_121_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.0.2" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="E" data-reactid=".9.0.2.1.0.2.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_122_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.0.3" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="R" data-reactid=".9.0.2.1.0.3.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_123_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.0.4" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="T" data-reactid=".9.0.2.1.0.4.0" onclick="keyInput(this)">
                                </div>
                            </div>
                            <div class="row fr" id="clavier_124" data-reactid=".9.0.2.1.1">
                                <div id="clavier_125_cont" class="col-xs-1 col-sm-1 " data-reactid=".9.0.2.1.1.0" style="visibility: visible;"></div>
                                <div id="clavier_126_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.1.1" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="Y" data-reactid=".9.0.2.1.1.1.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_127_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.1.2" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="U" data-reactid=".9.0.2.1.1.2.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_128_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.1.3" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="I" data-reactid=".9.0.2.1.1.3.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_129_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.1.4" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="O" data-reactid=".9.0.2.1.1.4.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_130_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.1.5" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="P" data-reactid=".9.0.2.1.1.5.0" onclick="keyInput(this)">
                                </div>
                            </div>
                            <div class="row en" id="clavier_131" data-reactid=".9.0.2.1.2" style="display: none;">
                                <div id="clavier_132_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.2.0" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="Q" data-reactid=".9.0.2.1.2.0.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_133_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.2.1" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="W" data-reactid=".9.0.2.1.2.1.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_134_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.2.2" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="E" data-reactid=".9.0.2.1.2.2.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_135_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.2.3" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="R" data-reactid=".9.0.2.1.2.3.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_136_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.2.4" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="T" data-reactid=".9.0.2.1.2.4.0" onclick="keyInput(this)">
                                </div>
                            </div>
                            <div class="row en" id="clavier_137" data-reactid=".9.0.2.1.3" style="display: none;">
                                <div id="clavier_138_cont" class="col-xs-1 col-sm-1 " data-reactid=".9.0.2.1.3.0" style="visibility: visible;"></div>
                                <div id="clavier_139_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.3.1" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="Y" data-reactid=".9.0.2.1.3.1.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_140_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.3.2" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="U" data-reactid=".9.0.2.1.3.2.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_141_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.3.3" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="I" data-reactid=".9.0.2.1.3.3.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_142_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.3.4" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="O" data-reactid=".9.0.2.1.3.4.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_143_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.3.5" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="P" data-reactid=".9.0.2.1.3.5.0" onclick="keyInput(this)">
                                </div>
                            </div>
                            <div class="row fr" id="clavier_144" data-reactid=".9.0.2.1.4">
                                <div id="clavier_145_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.4.0" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="Q" data-reactid=".9.0.2.1.4.0.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_146_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.4.1" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="S" data-reactid=".9.0.2.1.4.1.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_147_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.4.2" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="D" data-reactid=".9.0.2.1.4.2.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_148_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.4.3" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="F" data-reactid=".9.0.2.1.4.3.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_149_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.4.4" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="G" data-reactid=".9.0.2.1.4.4.0" onclick="keyInput(this)">
                                </div>
                            </div>
                            <div class="row fr" id="clavier_150" data-reactid=".9.0.2.1.5">
                                <div id="clavier_151_cont" class="col-xs-1 col-sm-1 " data-reactid=".9.0.2.1.5.0" style="visibility: visible;"></div>
                                <div id="clavier_152_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.5.1" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="H" data-reactid=".9.0.2.1.5.1.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_153_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.5.2" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="J" data-reactid=".9.0.2.1.5.2.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_154_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.5.3" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="K" data-reactid=".9.0.2.1.5.3.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_155_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.5.4" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="L" data-reactid=".9.0.2.1.5.4.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_156_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.5.5" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="M" data-reactid=".9.0.2.1.5.5.0" onclick="keyInput(this)">
                                </div>
                            </div>
                            <div class="row en" id="clavier_157" data-reactid=".9.0.2.1.6" style="display: none;">
                                <div id="clavier_158_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.6.0" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="A" data-reactid=".9.0.2.1.6.0.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_159_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.6.1" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="S" data-reactid=".9.0.2.1.6.1.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_160_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.6.2" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="D" data-reactid=".9.0.2.1.6.2.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_161_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.6.3" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="F" data-reactid=".9.0.2.1.6.3.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_162_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.6.4" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="G" data-reactid=".9.0.2.1.6.4.0" onclick="keyInput(this)">
                                </div>
                            </div>
                            <div class="row en" id="clavier_163" data-reactid=".9.0.2.1.7" style="display: none;">
                                <div id="clavier_164_cont" class="col-xs-1 col-sm-1 " data-reactid=".9.0.2.1.7.0" style="visibility: visible;"></div>
                                <div id="clavier_165_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.7.1" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="H" data-reactid=".9.0.2.1.7.1.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_166_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.7.2" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="J" data-reactid=".9.0.2.1.7.2.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_167_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.7.3" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="K" data-reactid=".9.0.2.1.7.3.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_168_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.7.4" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="L" data-reactid=".9.0.2.1.7.4.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_169_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.7.5" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="M" data-reactid=".9.0.2.1.7.5.0" onclick="keyInput(this)">
                                </div>
                            </div>
                            <div class="row fr" id="clavier_170" data-reactid=".9.0.2.1.8">
                                <div id="clavier_171_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.8.0" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="W" data-reactid=".9.0.2.1.8.0.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_172_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.8.1" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="X" data-reactid=".9.0.2.1.8.1.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_173_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.8.2" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="C" data-reactid=".9.0.2.1.8.2.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_174_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.8.3" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="V" data-reactid=".9.0.2.1.8.3.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_175_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.8.4" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="B" data-reactid=".9.0.2.1.8.4.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_176_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.8.5" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="N" data-reactid=".9.0.2.1.8.5.0" onclick="keyInput(this)">
                                </div>
                            </div>
                            <div class="row en" id="clavier_177" data-reactid=".9.0.2.1.9" style="display: none;">
                                <div id="clavier_178_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.9.0" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="Z" data-reactid=".9.0.2.1.9.0.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_179_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.9.1" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="X" data-reactid=".9.0.2.1.9.1.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_180_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.9.2" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="C" data-reactid=".9.0.2.1.9.2.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_181_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.9.3" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="V" data-reactid=".9.0.2.1.9.3.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_182_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.9.4" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="B" data-reactid=".9.0.2.1.9.4.0" onclick="keyInput(this)">
                                </div>
                                <div id="clavier_183_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.2.1.9.5" style="visibility: visible;">
                                    <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="N" data-reactid=".9.0.2.1.9.5.0" onclick="keyInput(this)">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row noMargin" id="clavier_184" data-reactid=".9.0.3">
                        <div id="clavier_185_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.3.0" style="visibility: visible;">
                            <input type="button" class="btn-basic heightB fontB btn-icon-exit btn-key icon-left" value="Quitter" data-reactid=".9.0.3.0.0" onclick="exit();">
                        </div>
                        <div id="clavier_186_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.3.1" style="visibility: visible;">
                            <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="_" data-reactid=".9.0.3.1.0" onclick="keyInput(this)">
                        </div>
                        <div id="clavier_187_cont" class="col-xs-4 col-sm-4 heightB fontB btn-key" data-reactid=".9.0.3.2" style="visibility: visible;">
                            <input type="button" class="btn-basic heightB fontB btn-key icon-center" value="" data-reactid=".9.0.3.2.0" onclick="keyInput(this)">
                        </div>
                        <div id="clavier_190_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.3.3" style="visibility: visible;">
                            <input type="button" class="btn-basic heightB fontB btn-caps-lock btn-key" value="" data-reactid=".9.0.3.3.0" onclick="MAJ()">
                        </div>
                        <div id="clavier_188_cont" class="col-xs-1 col-sm-1 heightB fontB btn-key" data-reactid=".9.0.3.3" style="visibility: visible;">
                            <input type="button" class="btn-basic heightB fontB btn-key icon-left" value="/" data-reactid=".9.0.3.3.0" onclick="keyInput(this)">
                        </div>
                        <div id="clavier_189_cont" class="col-xs-2 col-sm-2 heightB fontB btn-key" data-reactid=".9.0.3.4" style="visibility: visible;">
                            <input type="button" class="btn-basic heightB fontB btn-highlight btn-icon-validate btn-key icon-left" value="Valider" data-reactid=".9.0.3.4.0" onclick="validate();">
                        </div>
                    </div>
                </div>

            </div>
                                    
            <div id="disconnect-modal" class="center-div container">
                <div id="disconnect-modal-content">
                    <div class="row">
                        <div class="fontB"><%= trad.getProperty("user.disconnect")%> <span id="disconnect-modal-tcl"></span></div>
                    </div>
                    <button id="disconnect-modal-cancel" onclick="closeDisconnectModal()" class="btn-form fontN heightN"><%= trad.getProperty("form.button.close")%></button>
                </div>
            </div>
                
            <div id="alreadyconnect-modal" class="center-div container">
                <div id="alreadyconnect-modal-content">
                    <div class="row">
                        <div class="fontB">
                            <%= trad.getProperty("user.alreadyconnect1")%>
                            <span id="disconnect-modal-tcl"></span>
                            <%= trad.getProperty("user.alreadyconnect2")%>
                            <span id="disconnect-modal-ip"></span>
                        </div>
                        <div class="fontB"><%= trad.getProperty("user.askdisconnect")%> <span id="disconnect-modal-tcl"></span></div>
                    </div>
                    <div id="alreadyconnect-modal-btn-container" class="row">
                        <div class="col-md-6">
                            <button id="alreadyconnect-modal-cancel" onclick="closeAlreadyConnectModal()" class="btn-form fontN heightN"><%= trad.getProperty("form.button.close")%></button>
                        </div>
                        <div class="col-md-6">
                            <button id="alreadyconnect-modal-validate" onclick="applyAlreadyConnectModal()" class="btn-form fontN heightN"><%= trad.getProperty("form.button.validate")%></button>
                        </div>
                    </div>
                </div>
            </div>


            <div id="ping-modal" style="overflow: hidden; position: absolute; top: 0px; left: 0px; width:100%; height:100%; background-color: #2E2E2E; opacity: 0.8; z-index: 9991;">                                
            </div>  
            <div id="ping" class="center-div" style="width: 300px; height: 200px; border: 1px solid white; color: white; background-color: #292C33; opacity: 1.0; z-index: 9992;">
                <table cellpadding="0" cellspacing="10" style="width: 100%; text-align:center; margin-top: 30px;">
                    <tbody>
                        <tr class="fontN heightS">
                            <td><h3><%= trad.getProperty("network.problem")%></h3></td>
                        </tr>
                        <tr class="fontN heightS">
                            <td><span style="font-weight:bold; height: 40px"><%= trad.getProperty("network.advice")%></span></td>
                        </tr>
                    </tbody>
                </table>   
            </div>

        </div>

    </body>

    <script>
        var autoConnect = <%= autoConnect%>;
        var userDisconnect = '<%= userDisconnect %>';
        
        // Setting up service-worker
        /*if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('service-worker.js')
              .then(function(registration) {
                console.log('Service Worker registration successful with scope: ',
                registration.scope);
              })
              .catch(function(err) {
                console.log('Service Worker registration failed: ', err);
              });
        }*/

        $(function () {
            if (userDisconnect.length > 0) {
                $("#disconnect-modal-tcl").html(userDisconnect);
                $("#login").val(userDisconnect);
                $("#disconnect-modal").show();
            } else {
                $("#disconnect-modal").hide();
                $("#login").val('<%= username%>');
            }
            
            $("#alreadyconnect-modal").hide();
            $("#ping-modal").hide();
            $("#ping").hide();

            $("#mainframe").css("width", $(window).width());
            $("#mainframe").css("height", $(window).height());

            $("#loading").show();
            $("#form").hide();
            $("#clavier").hide();

            $('.num').hide();

            var lang = '<%= lang%>';
            if (lang.toLowerCase() === 'fr') {
                $('div.en').hide();
                $('div.fr').show();
            } else {
                $('div.fr').hide();
                $('div.en').show();
            }

            if (!autoConnect) {
                $("#message").html("");
                $("#loading").hide();
                $("#form").show();
            } else {
                ping();
            }
        });

        function ping() {
            $.ajax({
                url: "ping",
                type: 'post',
                data: {},
                dataType: 'text',
                async: true,
                crossDomain: true, 
                timeout: 5000,
                success: function (data, status) {
                    $("#ping-modal").hide();
                    $("#ping").hide();

                    setTimeout(function () {
                        if (autoConnect && $('#portrait').css('display') != 'none') {
                            $("#message").html("<%= trad.getProperty("login.connecting")%>");
                            $.ajax({
                                url: "login",
                                type: 'post',
                                data: {'read-cookies': true, 'clear-cookies': false, username: $("#login").val(), password: $("#password").val(), mobile: $("#mobile").is(':checked') ? true : false, force: false},
                                dataType: 'json',
                                async: true,
                                crossDomain: true, 
                                success: function (data, status) {
                                    onSuccess(data);
                                },
                                error: function (data, status, error) {
                                    onError(data);
                                }
                            });
                        }
                    }, 3000);
                },
                error: function (data, status, error) {
                    $("#ping-modal").show();
                    $("#ping").show();

                    setTimeout(function () {
                        ping();
                    }, 1000);
                }
            });
        }

        function cancel() {
            autoConnect = false;

            $.ajax({
                url: "login",
                type: 'post',
                data: {'read-cookies': false, 'clear-cookies': true},
                dataType: 'json',
                async: true,
                crossDomain: true, 
                success: function (data, status) {
                    onSuccess(data);
                },
                error: function (data, status, error) {
                    onError(data);
                }
            });
        }

        function connect(isForce) {
            $("#message").html("<%= trad.getProperty("login.connecting")%>");
            $.ajax({
                url: "login",
                type: 'post',
                data: {'read-cookies': false, 'clear-cookies': false, username: $("#login").val(), password: $("#password").val(), mobile: $("#mobile").is(':checked') ? true : false, force: isForce},
                dataType: 'json',
                async: true,
                crossDomain: true, 
                success: function (data, status) {
                    if (data.status !== undefined && data.status ===201) {
                        var ip = data.ip !== undefined ? data.ip : "";
                        showAlreadyConnectModal(ip);
                    } else {
                        onSuccess(data);
                    }
                },
                error: function (data, status, error) {
                    onError(data);
                }
            });
        }

        function onSuccess(data) {
            $("#message").html("<%= trad.getProperty("login.connected")%>");
            switch (data.status) {
                case 0:
                    $("#message").html("<%= trad.getProperty("status.0")%>");
                    $("#loading").hide();
                    $("#form").show();
                    break;
                case 100:
                    $("#message").html("<%= trad.getProperty("status.100")%>");
                    window.location.href = '<%= dispatcherUrl %>/quartispro-console/index?token=' + data.token;
                    break;
                case 101:
                    $("#message").html("<%= trad.getProperty("status.101")%>");
                    $("#login").html(data.username);

                    $("#loading").hide();
                    $("#form").show();
                    break;
                case 200:
                    $("#message").html("<%= trad.getProperty("status.200")%>");

                    $("#loading").hide();
                    $("#form").show();
                    break;
                case 201:
                    $("#message").html("<%= trad.getProperty("status.201")%>");
                    window.location.href = '<%= dispatcherUrl %>/quartispro-console/index?token=' + data.token;
                    break;
                case 202:
                    $("#message").html("<%= trad.getProperty("status.202")%>");

                    $("#loading").show();
                    $("#form").hide();

                    ping();
                    break;
                case 500:
                    $("#message").html("<%= trad.getProperty("status.500")%>");

                    $("#loading").show();
                    $("#form").hide();

                    ping();
                    break;
            }
        }

        function onError(data) {
            $("#message").html("<%= trad.getProperty("login.not_connected")%>");

            ping();
        }

        var formInput = null;
        var keyboardInput = null;
        function loginInput() {
            formInput = $('#login');
            keyboardInput = $('#clavier_login');

            keyboardInput.show();
            $('#clavier_password').hide();
            keyboardInput.val(formInput.val());

            formInput.select();
            $('#clavier').show();
            $("#form").hide();
        }
        function passwordInput(obj) {
            formInput = $('#password');
            keyboardInput = $('#clavier_password');

            $('#clavier_login').hide();
            keyboardInput.show();
            keyboardInput.val(formInput.val());

            formInput.select();
            $('#clavier').show();
            $("#form").hide();
        }

        function keyInput(obj) {
            if (keyboardInput != null) {
                keyboardInput.val(keyboardInput.val() + $(obj).val());
            }
        }
        
        function MAJ() {
            $.each( $( ".btn-key .btn-basic" ), function() {
                var value = $(this).val();
                if (value.length === 1 && value.match(/[a-z]/i)) {
                    if (value === value.toLowerCase()) {
                      $(this).val(value.toUpperCase());
                    }
                    else {
                      $(this).val(value.toLowerCase());
                    }
                }
            });
        }

        function clean() {
            if (keyboardInput != null) {
                keyboardInput.val('');
            }
        }

        function exit() {
            clean();
            $('#clavier').hide();
            $("#form").show();
        }

        function validate() {
            if (formInput != null && keyboardInput != null) {
                formInput.val(keyboardInput.val());
            }
            exit();
        }

        function backspace() {
            if (keyboardInput != null) {
                var input = keyboardInput[0];
                input.focus();

                /* Pour IE */
                if (typeof document.selection != 'undefined') {

                    if (input.type == "password") {
                        var inputModifier = input.cloneNode(false);
                        inputModifier.setAttribute("value", "");
                        input.parentNode.replaceChild(inputModifier, input);
                        setTimeout(function () {
                            inputModifier.focus();
                        }, 10);
                    } else {
                        var range = document.selection.createRange();
                        range.moveStart('character', -1);
                        range.execCommand("cut");
                        range.select();
                    }

                } else {
                    input.value = input.value.substring(0, input.value.length - 1);
                    moveCursorToTheRight();
                }
            }
        }

        function onClick123() {
            $('.num').hide();
            $('.abc').show();
        }

        function onClickAbc() {
            $('.num').show();
            $('.abc').hide();
        }

        function moveCursorToTheRight() {
            if (keyboardInput != null) {
                var input = keyboardInput[0];
                input.focus();
                /* Pour IE */
                if (typeof document.selection != 'undefined') {
                    var range = document.selection.createRange();
                    range.move('character', 1);
                    range.select();
                } else {
                    var startPos = input.selectionStart;
                    input.selectionStart = startPos + 1;
                    input.focus();
                }
            }
        }
        
        function closeDisconnectModal() {
            $("#disconnect-modal").hide();
            $("#message").html("");
        }
        
        function showAlreadyConnectModal(ip) {
            $("#disconnect-modal-ip").html(ip);
            $("#alreadyconnect-modal").show();
        }
        
        function closeAlreadyConnectModal() {
            $("#alreadyconnect-modal").hide();
        }
        
        function applyAlreadyConnectModal() {
            connect(true);
        }
        
    </script>
</html>
