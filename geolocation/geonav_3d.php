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

<nav class="navbar navbar-expand-custom navbar-mainbg">
        <a class="navbar-brand navbar-logo" href="#">Geolocation</a>
        <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars text-white"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
                
                <li class="nav-item ">
                    <a class="nav-link" href="geonav.php"><i class="fad fa-city"></i>Barangays</a>
                </li>

                <li class="nav-item ">
                    <a class="nav-link" href="geonav_hospital.php"><i class="fad fa-hospitals"></i>Hospitals</a>
                </li>

                <li class="nav-item ">
                    <a class="nav-link" href="geonav_pharmacy.php"><i class="fad fa-clinic-medical"></i>Pharmacies</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="geonav_gas_station.php"><i class="fad fa-gas-pump"></i></i>Gas Stations</a>
                </li>

              
                <li class="nav-item ">
                    <a class="nav-link" href="geonav_traffic.php"><i class="fad fa-road"></i>Traffic Map</a>
                </li>

               

                <li class="nav-item ">
                    <a class="nav-link" href="geonav_vulcanize.php"><i class="fad fa-tire-flat"></i>Vulcanizing Shop</a>
                </li>

                
                <li class="nav-item active">
                    <a class="nav-link" href="geonav_3d.php"><i class="fad fa-map-marked-alt"></i>3d map test</a>
                </li>

                <li class="nav-item ">
                    <a class="nav-link" href="geoget.php"><i class="fad fa-street-view"></i>Share Location</a>
                </li>
              
            </ul>
        </div>
    </nav>







    <div id="map">
	
	  </div>





  <?php @include("popup.php");?>












  


<script src="../data/geonav_3d_data.js"></script>



<script src="../data/navani.js"></script>

</body>

</html>