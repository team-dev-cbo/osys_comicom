<!DOCTYPE html>
<html>
<head>
  <title>Video.js | HTML5 Video Player</title>

  <!-- Chang URLs to wherever Video.js files will be hosted -->
  <link href="../build/video-js/video-js.css" rel="stylesheet" type="text/css">
  <!-- video.js must be in the <head> for older IEs to work. -->
  <script src="../build/video-js/video.js"></script>

  <!-- Unless using the CDN hosted version, update the URL to the Flash SWF -->
  <script>
    videojs.options.flash.swf = "../build/video-js/video-js.swf";
  </script>


</head>
<body>
    <%
        String strWidthDefault = "800";
        String strHeightDefault = "640";
        String strFile = request.getParameter("file");
        String strWidth = request.getParameter("width");
        String strHeight = request.getParameter("height");
     %>
     <!--<p>strHeight=<%=strHeight%> strWidth=<%=strWidth%></p>-->
     <%
        if (strWidth == null || strWidth == "null" || strWidth == ""){
            strWidth = strWidthDefault;
        }
        if (strHeight == null || strHeight == "null" || strHeight == ""){
            strHeight = strHeightDefault;
        }
    %>
    <!--<p>strHeight=<%=strHeight%> strWidth=<%=strWidth%></p>-->

  <div width="100%" height="100%">
    <video id="example_video_1" class="video-js vjs-default-skin" controls preload="none" width="<%=strWidth%>" height="<%=strHeight%>"
        data-setup="{}">
      <!--<source src="C:/Osys/DOCUMENTS/DemoQuartisPROdebut.mp4" type='video/mp4' />-->
      <!--<source src="DemoQuartisPROdebut.mp4" type='video/mp4' />-->
      <!--<source src="20161004_113529.mp4" type='video/mp4' />-->
      <source src="<%=strFile%>" type='video/mp4' />
      <!--<source src="http://192.9.200.49:8386/quartispro-console/load?path=C:%5C%5COsys%5C%5CDOCUMENTS%5C%5CDemoQuartisPROdebut6.mp4" type='video/mp4' />-->
          <!--<source src="http://192.9.200.49:8386/quartispro-console/load?path=file://C:/Osys/DOCUMENTS/DemoQuartisPROdebut.mp4" type='video/mp4' />-->

      <p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p>
    </video>
  </div>

</body>
</html>
