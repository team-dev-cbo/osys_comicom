<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link type="text/css" rel="stylesheet" href="sup/css/style.css" />
        <script type="text/javascript" src="sup/js/include.js"></script>
    </head>

    <jsp:include page="include.jsp" />

    <body>
        <div id="toolbar" style="position:absolute; z-index:1004;">
            <img src="images/welcome22x22.png" onclick="goHome()" style="position:absolute; top:10px;" />
        </div>
        <center>
            <div id="message" align="center" style="visibility:hidden; position:absolute; background-color:white; border:1px solid red; width:300px; height:40px; line-height: 40px; z-index:1005;">
            </div>
        </center>

        <script type="text/javascript">
            var ERROR = '<%=request.getAttribute("ERROR")%>';

            document.body.style.overflow='hidden';
            document.body.onresize=function() { resize(); };

            document.getElementById('message').innerHTML = "<font color='red'>" + ERROR + "</font>";

            function resize() {
                var toolbar = document.getElementById('toolbar');
                toolbar.style.left = document.body.clientWidth - 24;
            }
            resize();
        </script>
    </body>
</html>