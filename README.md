<!-- 
 geoApp
 Geolocation map of Sewanee -->
<html>
  <head>
    <title> Sewanee map </title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=yes">
    <meta charset="utf-8">
    <style>
      html, body, #map-canvas {
        height: 100%;
        margin: 0px;
        padding: 0px
      }
    </style>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true&libraries=places"></script>
    <script src="buildings.js"> </script>
    <script src="coords.js"> </script>
    <script src="direct.js"> </script>
    <script>
    
var map;
var infowindow;
var marker;

//Store them in an array
var locationArray = [fulford,walsh,mcclurg,allsaints,bookstore,woods,stirlings,sut,gamma];
var locationNameArray = ['Fulford','Walsh-Ellett','McClurg','All Saints Chapel',
'Barnes&Noble','Woods','Stirlings','Thompson Union','Gamma'];

function initialize() {
  
var theCenter = new google.maps.LatLng(35.20438,-85.92016);

var mapOptions = {
    center: theCenter,
    zoom: 17   
    };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
   
   var infowindow1 = new google.maps.InfoWindow({
      content: ""
  });
 
  var addListenersOnPolygon = function(polygon) {
  google.maps.event.addListener(polygon, 'click', function (event) {
  alert(polygon.indexID);
  });  
}

 for (var i = 0; i < dormsArray.length; i++) {
    
    var p = new google.maps.Polygon({
    paths: dormsArray[i],
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    indexID: i
    });
    p.setMap(map);
    addListenersOnPolygon(p);
}

 for (var j = 0; j < fratArray.length; j++) {
    
    var q = new google.maps.Polygon({
    paths: fratArray[j],
    strokeColor: '#CCFFEE',
    strokeOpacity: 0.2,
    strokeWeight: 2,
    fillColor: '#CCFF10',
    fillOpacity: 0.35,
    indexID: j
    });
    q.setMap(map);
    addListenersOnPolygon(q);
}
     var infoArray = [fulfordStr,walshStr,mcclurgStr,allsaintsStr,bookStr,woodsStr,stirlingsStr,sutStr,gammaStr]; 
 
    infowindow = new google.maps.InfoWindow({
    content: ""
    });
   
    var request = {
    location: theCenter,
    radius: 500,
    };
  
    navigator.geolocation.getCurrentPosition(function(pos) {
    var lat = pos.coords.latitude;
    var lng = pos.coords.longitude;
    directionsDisplay = new google.maps.DirectionsRenderer();
    var latlng = new google.maps.LatLng(lat, lng);

    geocoder.geocode({'latLng': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
              marker = new google.maps.Marker({
              position: latlng,
              map: map
          });
          currentLocation = results[0].formatted_address;
          infowindow.setContent(results[0].formatted_address);
          infowindow.open(map, marker);
        } else {
          alert('No results found');
        }
      } else {
        alert('Geocoder failed due to: ' + status);
      }
    });
    directionsDisplay.setMap(map);
  });
  
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
      //Construct markers
      for (var i=0; i<locationArray.length; i++) {
      var storeV=infoArray[i];
      marker = new google.maps.Marker({
      position: locationArray[i],
      map: map,
      title: locationNameArray[i]
    });
     
    linkInfoWindow(marker, map, infowindow, storeV);
 }
}   //Connect the description with the appropriate marker
    function linkInfoWindow(marker, map, infowindow, description) {
    google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(description);
    infowindow.open(map, marker);
  });
 }

 function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}
 
google.maps.event.addDomListener(window, 'load', initialize);
//window.onload = geolocateUser;
  </script> 
  </head>
  <body>
<div id="panel">
    <b>Directions to</b>
      <select id="end" onchange="calcRoute();">
      <option value="27 Canterbury Way, Sewanee, TN, 37375">    27 Canterbury</option>
      <option value="92 Dubose Ln, Sewanee, TN 37375"> 	 	Gailor Hall</option>
      <option value="1260 University Avenue, Sewanee, TN 37375">Hospital</option>
      <option value="740 University Avenue, Sewanee, TN 37375"> Walsh-Ellett Hall</option>
    </select>
    </div>
  <div id="out"></div>
  <div id="map-canvas"></div>
  </body>
  </html>
