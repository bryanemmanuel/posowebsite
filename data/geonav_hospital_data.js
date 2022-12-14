mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ2aW5pbnQiLCJhIjoiY2twaHkxYTRtMTYxdjJ3cDNkcnpsMjU4biJ9.6Sgq8I1-2QebttGyrGaNAA';

var geojson = {
  'type': 'FeatureCollection',
  'features': [
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1617,14.1984] 
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'PAMANA MEDICAL CENTER<br> OPEN 24HRS <br> PHONE NUMBER<br><a href="tel:+09495456858" target="_blank"><b>09495456858</b></a><br>WEBSITE<br><a href="https://pamanamedicalcenter.com/" target="_blank"><b>pamanamedicalcenter.com</b></a>'
      }
    },
    
    
     {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1142,14.2117]	
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'GLOBAL MEDICAL CENTER CANLUBANG<br> OPEN 24HRS <br>PHONE NUMBER<br><a href="tel:+63495205626" target="_blank"><b>+63495205626</b></a>'
      }
    },
    
     
     {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1422,14.2175]	
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'CALAMBA DOCTORS HOSPITAL<br> OPEN 24HRS <br> PHONE NUMBER<br><a href="tel:+63495457371" target="_blank"><b>+63495457371</b></a> <br>WEBSITE<br><a href="https://www.calambadoctorshospital.com/" target="_blank"><b>www.calambadoctorshospital.com</b></a>'
      }
    },
    
    
     
     {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1264,14.2116]	
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'SAN JOSE HOSPITAL AND MEDICAL CENTER<br> OPEN 24HRS <br> PHONE NUMBER<br><a href="tel:+63498340861" target="_blank"><b>+63498340861</b></a>'
      }
    },
    
    
     
     {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1641,14.2126]	
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'GAMEZ HOSPITAL<br> OPEN 24HRS <br> PHONE NUMBER<br><a href="tel:+63495457012" target="_blank"><b>+63495457012</b></a> <br>WEBSITE<br><a href="http://www.phap-ph.org/Members/view/gamez_hospital" target="_blank"><b>www.phap-ph.org</b></a>'
      }
    },
    
    
    
     
     {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1572,14.2117]	
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'ST.JOHN THE BAPTIST MEDICAL CENTER<br> OPEN 24HRS <br> PHONE NUMBER<br><a href="tel:+63495457528" target="_blank"><b>+63495457528</b></a> <br>WEBSITE<br><a href="https://stjohnmedicalcalamba.com/" target="_blank"><b>stjohnmedicalcalamba.com</b></a>'
      }
    },
    
    
     
     {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1527,14.2064]	
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'CALAMBA MEDICAL CENTER<br> OPEN 24HRS <br>  PHONE NUMBER<br><a href="tel:+63495451740" target="_blank"><b>+63495451740</b></a> <br>WEBSITE<br><a href="http://cmc.ph/" target="_blank"><b>cmc.ph</b></a>'
      }
    },
    
    
    
    
     
     {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1677,14.1914]	
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'DR.JOSE RIZAL MEMORIAL DISTRICT HOSPITAL<br> OPEN 24HRS <br>PHONE NUMBER<br><a href="tel:+63495451885" target="_blank"><b>+63495451885</b></a>'
      }
    },
    
    
    

    
    
  ]
};

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [121.1618,14.2098],
  zoom: 13
});

// add markers to map
geojson.features.forEach(function (marker) {
  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add it to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          '<h3>' +
            marker.properties.title +
            '</h3><p>' +
            marker.properties.description +
            '</p>'
        )
    )
    .addTo(map);
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

var clearances = {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-84.47426, 38.06673]
},
'properties': {
'clearance': "13' 2"
}
},
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-84.47208, 38.06694]
},
'properties': {
'clearance': "13' 7"
}
},
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-84.47184, 38.06694]
},
'properties': {
'clearance': "13' 7"
}
},
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-84.60485, 38.12184]
},
'properties': {
'clearance': "13' 7"
}
},
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-84.61905, 37.87504]
},
'properties': {
'clearance': "12' 0"
}
},
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-84.55946, 38.30213]
},
'properties': {
'clearance': "13' 6"
}
},
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-84.27235, 38.04954]
},
'properties': {
'clearance': "13' 6"
}
},
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-84.27264, 37.82917]
},
'properties': {
'clearance': "11' 6"
}
}
]
};

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
emoji = '??????';
report.className = 'item';
map.setPaintProperty('route' + e.id, 'line-color', '#74c476');
} else {
collision = 'is bad.';
detail = 'goes';
emoji = '??????';
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



map.addControl(new mapboxgl.NavigationControl());	


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



