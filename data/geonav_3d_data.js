mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ2aW5pbnQiLCJhIjoiY2twaHkxYTRtMTYxdjJ3cDNkcnpsMjU4biJ9.6Sgq8I1-2QebttGyrGaNAA';
const map = new mapboxgl.Map({
style: 'mapbox://styles/mapbox/light-v10',
center: [ 121.160377,14.194802],
zoom: 15.5,
pitch: 45,
bearing: -17.6,
container: 'map',
antialias: true
});
 
map.on('load', () => {
// Insert the layer beneath any symbol layer.
const layers = map.getStyle().layers;
const labelLayerId = layers.find(
(layer) => layer.type === 'symbol' && layer.layout['text-field']
).id;
 
// The 'building' layer in the Mapbox Streets
// vector tileset contains building height data
// from OpenStreetMap.
map.addLayer(
{
'id': 'add-3d-buildings',
'source': 'composite',
'source-layer': 'building',
'filter': ['==', 'extrude', 'true'],
'type': 'fill-extrusion',
'minzoom': 15,
'paint': {
'fill-extrusion-color': '#aaa',
 
// Use an 'interpolate' expression to
// add a smooth transition effect to
// the buildings as the user zooms in.
'fill-extrusion-height': [
'interpolate',
['linear'],
['zoom'],
15,
0,
15.05,
['get', 'height']
],
'fill-extrusion-base': [
'interpolate',
['linear'],
['zoom'],
15,
0,
15.05,
['get', 'min_height']
],
'fill-extrusion-opacity': 0.6
}
},
labelLayerId
);
});








    


    

    var geojson = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [121.1851,14.1791] 
        },
        'properties': {
          'title': 'CALAMBA CITY',
          'description': 'JHOMEL VULCANIZING<br>OPENING TIME: MON-SUN/8AM TO 11PM<br>CONTACT NUMBER<br> 09204940595'
        }
      },
  
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [121.1753,14.1837] 
        },
        'properties': {
          'title': 'CALAMBA CITY',
          'description': 'CHARIZ VULCANIZING AND TIRE SUPPLY<br>OPENING TIME: MON-SUN/8AM TO 11PM<br>CONTACT NUMBER<br> 09204940595'
        }
      },
  
  
 {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [121.1693,14.1890] 
        },
        'properties': {
          'title': 'CALAMBA CITY',
          'description': 'LEO VULCANIZING SHOP<br>OPENING TIME: MON-SUN/8AM TO 11PM<br>CONTACT NUMBER<br> 09204940595'
        }
      },
  
  
   {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [121.1632,14.1981] 
        },
        'properties': {
          'title': 'CALAMBA CITY',
          'description': 'BUKAL VULCANIZING SHOP<br>OPENING TIME: MON-SUN/8AM TO 11PM<br>CONTACT NUMBER<br> 09204940595'
        }
      },
  
   {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [121.1637,14.2011] 
        },
        'properties': {
          'title': 'CALAMBA CITY',
          'description': 'JOJIE STORE VULCANIZING SHOP<br>OPENING TIME: MON-SUN/8AM TO 11PM<br>CONTACT NUMBER<br> 09204940595'
        }
      },
 

  {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [121.1620,14.2096] 
        },
        'properties': {
          'title': 'CALAMBA CITY',
          'description': 'DHENIZ VULCANIZING AND TIRE SUPPLY<br>OPENING TIME: MON-SUN/8AM TO 11PM<br>CONTACT NUMBER<br> 09204940595'
        }
      },
  
   {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [121.1629,14.2133] 
        },
        'properties': {
          'title': 'CALAMBA CITY',
          'description': 'EBJ VULCANIZING SHOP<br>OPENING TIME: MON-SUN/8AM TO 11PM<br>CONTACT NUMBER<br> 09204940595'
        }
      },
  
  
    {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [121.1391,14.2184] 
        },
        'properties': {
          'title': 'CALAMBA CITY',
          'description': 'JONEX TIRE RETAIL AND VULCANIZING SHOP<br>OPENING TIME: MON-SUN/8AM TO 11PM<br>CONTACT NUMBER<br> 09204940595'
        }
      },


{
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [121.1410,14.2265] 
        },
        'properties': {
          'title': 'CALAMBA CITY',
          'description': 'FOBELESS TIRE VULCANIZING<br>OPENING TIME: MON-SUN/8AM TO 11PM<br>CONTACT NUMBER<br> 09204940595'
        }
      },


{
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [121.1474,14.2317] 
        },
        'properties': {
          'title': 'CALAMBA CITY',
          'description': 'JE VULCANIZING SHOP<br>OPENING TIME: MON-SUN/8AM TO 11PM<br>CONTACT NUMBER<br> 09204940595'
        }
      },


{
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [121.1173,14.2149] 
        },
        'properties': {
          'title': 'CALAMBA CITY',
          'description': 'EB HABANA VULCANIZING SHOP<br>OPENING TIME: MON-SUN/8AM TO 11PM<br>CONTACT NUMBER<br> 09204940595'
        }
      },



{
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [121.0966,14.2102] 
        },
        'properties': {
          'title': 'CALAMBA CITY',
          'description': 'JIYANS VULCANIZING SHOP<br>OPENING TIME: MON-SUN/8AM TO 11PM<br>CONTACT NUMBER<br> 09204940595'
        }
      },

 
  
{
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [121.1162,14.2080] 
        },
        'properties': {
          'title': 'CALAMBA CITY',
          'description': 'GENALYN VULCANIZING SHOP<br>OPENING TIME: MON-SUN/8AM TO 11PM<br>CONTACT NUMBER<br> 09204940595'
        }
      },

  
  
  

  
    ]
  };


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
