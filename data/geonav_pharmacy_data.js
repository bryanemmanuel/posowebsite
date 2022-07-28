mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ2aW5pbnQiLCJhIjoiY2twaHkxYTRtMTYxdjJ3cDNkcnpsMjU4biJ9.6Sgq8I1-2QebttGyrGaNAA';

var geojson = {
  'type': 'FeatureCollection',
  'features': [
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1670,14.1953] 
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'THE GENERICS PHARMACY'
      }
    },
    
    
{
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1631,14.1986] 
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'AGZ BOTIKA PHARMACY'
      }
    },
    
{		  
    
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1549,14.2044] 
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'WATSON SM CITY CALAMBA SUPERMARKET'
      }
    },
    
    
   {		  
    
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1533,14.2052] 
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'BOTICA PLUS PHARMACY CALAMBA BRANCHS'
      }
    },
    
    
     {		  
    
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1561,14.2053] 
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'ST.LACHERINE PHARMACY'
      }
    },
    
    {		  
    
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1562,14.2054] 
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'THE GENERIC PHARMACY'
      }
    },
    
     {		  
    
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1546,14.2067] 
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'DAILY RX PHARMACY'
      }
    },

  
  {		  
    
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1553,14.2067] 
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'MERCURY DRUG-CALAMBA CROSSING UNO'
      }
    },
  
  
  
  {		  
    
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1566,14.2070] 
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'THE GENERICS PHARMACY'
      }
    },
  
  
  
  {		  
    
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1580,14.2071] 
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'ROSE PHARMACY CALAMBA LAGUNA'
      }
    },
  
  
  
  {		  
    
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1530,14.2058] 
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'DRUG STORE NG MASA'
      }
    },
  
      
  {		  
    
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1561,14.2111] 
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'ALBINO PHARMACY'
      }
    },
  
  
  
  {		  
    
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1405,14.2176] 
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'THE GENERICS PHARMACY'
      }
    },
  
  
  {		  
    
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1356,14.2138] 
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'RX PLUS MEDECINE SHOPPE'
      }
    },
  
  {		  
    
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1230,14.2126] 
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'THE GENERICS PHARMACY MAYAPA'
      }
    },

{		  
    
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1169,14.2140] 
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'SOUTHSTAR DRUG'
      }
    },

{		  
    
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1104,14.2142] 
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'MERCURY DRUG'
      }
    },

{		  
    
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1028,14.2050] 
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'TGP THE GENERICS PHARMACY'
      }
    },


{		  
    
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1636,14.2097] 
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'ROSE PHARMACY INC'
      }
    },




{		  
    
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [121.1641,14.2135] 
      },
      'properties': {
        'title': 'CALAMBA CITY',
        'description': 'CALAMBA PHARMA'
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





