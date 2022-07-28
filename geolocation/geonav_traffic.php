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
    <link href='mapbox-gl-traffic.css' rel='stylesheet' />
   





    <!-- Mapbox GL Directions -->
    <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.0.2/mapbox-gl-directions.js"></script>
    <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.0.2/mapbox-gl-directions.css"type="text/css"/>



    <!-- Turf & Polyline -->
    <script src="https://npmcdn.com/@turf/turf/turf.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mapbox-polyline/1.1.1/polyline.js"></script>

    <link href="mapstyle.css"rel="stylesheet"/>



  </head>

<style>
  
        body { margin:0; padding:0; }

    
@import url('https://fonts.googleapis.com/css?family=Roboto');

body{
  font-family: 'Roboto', sans-serif;
}
* {
  margin: 0;
  padding: 0;
}
i {
  margin-right: 10px;
}
/*----------bootstrap-navbar-css------------*/
.navbar-logo{
  padding: 15px;
  color: #fff;
}
.navbar-mainbg{
  background-color: #5161ce;
  padding: 0px;
}
#navbarSupportedContent{
  overflow: hidden;
  position: relative;
}
#navbarSupportedContent ul{
  padding: 0px;
  margin: 0px;
}
#navbarSupportedContent ul li a i{
  margin-right: 10px;
}
#navbarSupportedContent li {
  list-style-type: none;
  float: left;
}
#navbarSupportedContent ul li a{
  color: rgba(255,255,255,0.5);
    text-decoration: none;
    font-size: 15px;
    display: block;
    padding: 20px 20px;
    transition-duration:0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
}
#navbarSupportedContent>ul>li.active>a{
  color: #5161ce;
  background-color: transparent;
  transition: all 0.7s;
}
#navbarSupportedContent a:not(:only-child):after {
  content: "\f105";
  position: absolute;
  right: 20px;
  top: 10px;
  font-size: 14px;
  font-family: "Font Awesome 5 Free";
  display: inline-block;
  padding-right: 3px;
  vertical-align: middle;
  font-weight: 900;
  transition: 0.5s;
}
#navbarSupportedContent .active>a:not(:only-child):after {
  transform: rotate(90deg);
}
.hori-selector{
  display:inline-block;
  position:absolute;
  height: 100%;
  top: 0px;
  left: 0px;
  transition-duration:0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  background-color: #fff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-top: 10px;
}
.hori-selector .right,
.hori-selector .left{
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #fff;
  bottom: 10px;
}
.hori-selector .right{
  right: -25px;
}
.hori-selector .left{
  left: -25px;
}
.hori-selector .right:before,
.hori-selector .left:before{
  content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #5161ce;
}
.hori-selector .right:before{
  bottom: 0;
    right: -25px;
}
.hori-selector .left:before{
  bottom: 0;
    left: -25px;
}


@media(min-width: 992px){
  .navbar-expand-custom {
      -ms-flex-flow: row nowrap;
      flex-flow: row nowrap;
      -ms-flex-pack: start;
      justify-content: flex-start;
  }
  .navbar-expand-custom .navbar-nav {
      -ms-flex-direction: row;
      flex-direction: row;
  }
  .navbar-expand-custom .navbar-toggler {
      display: none;
  }
  .navbar-expand-custom .navbar-collapse {
      display: -ms-flexbox!important;
      display: flex!important;
      -ms-flex-preferred-size: auto;
      flex-basis: auto;
  }
}


@media (max-width: 991px){
  #navbarSupportedContent ul li a{
    padding: 12px 30px;
  }
  .hori-selector{
    margin-top: 0px;
    margin-left: 10px;
    border-radius: 0;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }
  .hori-selector .left,
  .hori-selector .right{
    right: 10px;
  }
  .hori-selector .left{
    top: -25px;
    left: auto;
  }
  .hori-selector .right{
    bottom: -25px;
  }
  .hori-selector .left:before{
    left: -25px;
    top: -25px;
  }
  .hori-selector .right:before{
    bottom: -25px;
    left: -25px;
  }
}

















</style>
<body>

<?php @include("nav.php");?>











    <div id='map'></div>











<script>
  

      

      mapboxgl.accessToken = 'pk.eyJ1IjoibW9yZ2Vua2FmZmVlIiwiYSI6IjIzcmN0NlkifQ.0LRTNgCc-envt9d5MzR75w';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/traffic-night-v2',
    center: [121.1618,14.2098],
    zoom: 13,
    hash: true
});






	  
	  
	  	  
var nav = new mapboxgl.NavigationControl();
 
 var directions = new MapboxDirections({
 accessToken: mapboxgl.accessToken,
 unit: 'metric',
 profile: 'mapbox/driving',
 alternatives: 'false',
 geometries: 'geojson'
 });

	

 
map.scrollZoom.enable();
map.addControl(directions, 'top-right');
   
map.addControl(new mapboxgl.NavigationControl());
map.addControl(new MapboxTraffic());

map.addControl(
new mapboxgl.GeolocateControl({
positionOptions: {
enableHighAccuracy: true
},
// When active the map will receive updates to the device's location as it changes.
trackUserLocation: true,
// Draw an arrow next to the location dot to indicate which direction the device is heading.
showUserHeading: true
})
);




var obstacle = turf.buffer(clearances, 0.25, { units: 'kilometers' });
 
map.on('load', function (e) {
map.addLayer({
id: 'clearances',
type: 'fill',
source: {
type: 'geojson',
data: obstacle
},
layout: {},
paint: {
'fill-color': '#f03b20',
'fill-opacity': 0.5,
'fill-outline-color': '#f03b20'
}
});
 
//Create sources and layers for the returned routes.
//There will be a maximum of 3 results from the Directions API.
//We use a loop to create the sources and layers.
for (i = 0; i <= 2; i++) {
map.addSource('route' + i, {
type: 'geojson',
data: {
type: 'Feature'
}
});
 
map.addLayer({
id: 'route' + i,
type: 'line',
source: 'route' + i,
layout: {
'line-join': 'round',
'line-cap': 'round'
},
paint: {
'line-color': '#cccccc',
'line-opacity': 0.5,
'line-width': 13,
'line-blur': 0.5
}
});
}
});
 
directions.on('route', (e) => {
var reports = document.getElementById('reports');
reports.innerHTML = '';
var report = reports.appendChild(document.createElement('div'));
let routes = e.route;
 
//Hide all routes by setting the opacity to zero.
for (i = 0; i < 3; i++) {
map.setLayoutProperty('route' + i, 'visibility', 'none');
}
 
routes.forEach(function (route, i) {
route.id = i;
});
 
routes.forEach((e) => {
//Make each route visible, by setting the opacity to 50%.
map.setLayoutProperty('route' + e.id, 'visibility', 'visible');
 
//Get GeoJson LineString feature of route
var routeLine = polyline.toGeoJSON(e.geometry);
 
//Update the data for the route, updating the visual.
map.getSource('route' + e.id).setData(routeLine);
 
var collision = '';
var emoji = '';
var clear = turf.booleanDisjoint(obstacle, routeLine);
 
if (clear == true) {
collision = 'is good!';
detail = 'does not go';
emoji = '✔️';
report.className = 'item';
map.setPaintProperty('route' + e.id, 'line-color', '#74c476');
} else {
collision = 'is bad.';
detail = 'goes';
emoji = '⚠️';
report.className = 'item warning';
map.setPaintProperty('route' + e.id, 'line-color', '#de2d26');
}
 
//Add a new report section to the sidebar.
// Assign a unique `id` to the report.
report.id = 'report-' + e.id;
 
// Add the response to the individual report created above.
var heading = report.appendChild(document.createElement('h3'));
 
// Set the class type based on clear value.
if (clear == true) {
heading.className = 'title';
} else {
heading.className = 'warning';
}
 
heading.innerHTML = emoji + ' Route ' + (e.id + 1) + ' ' + collision;
 


// Add details to the individual report.
var details = report.appendChild(document.createElement('div'));
details.innerHTML =
'This route ' + detail + ' through an avoidance area.';
report.appendChild(document.createElement('hr'));
});
});
	


	  
 
	  
	  
	  
	  
    </script>















<script src="../data/navani.js"></script>
<script src="../data/navani.js"></script>
</body>

</html>