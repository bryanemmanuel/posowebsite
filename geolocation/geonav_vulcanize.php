<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Geolocation Test</title>
    
  
  
    <link rel="stylesheet" href="../fontawesome/css/all.css"/>
    <link href="../assetsrepondent/css/lib/bootstrap.min.css" rel="stylesheet">
    <script src="../assetsrepondent/js/lib/bootstrap.min.js"></script>
    <script src="../assetsrepondent/popper.js"></script>
    <script src="../assetsrepondent/js/lib/jquery.min.js"></script>

    <link href="https://fonts.googleapis.com/css?family=Open+Sans"rel="stylesheet"/>
    <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.4.1/mapbox-gl.css"rel="stylesheet"/>
	  <script src="https://api.tiles.mapbox.com/mapbox-gl-js/v2.4.1/mapbox-gl.js"></script>
	  <script src='mapbox-gl-traffic.js'></script>
	 



    <!-- Mapbox GL Directions -->
    <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.0.2/mapbox-gl-directions.js"></script>
    <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.0.2/mapbox-gl-directions.css"type="text/css"/>



    <!-- Turf & Polyline -->
    <script src="https://npmcdn.com/@turf/turf/turf.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mapbox-polyline/1.1.1/polyline.js"></script>

    <link href="mapstyle.css"rel="stylesheet"/>


  </head>

<body>

<?php @include("nav.php");?>





    <div id="map">
	
	</div>









<script src="../data/geonav_vulcanize_data.js"></script>
<script src="../data/navani.js"></script>


</body>

</html>