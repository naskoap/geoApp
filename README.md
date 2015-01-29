# geoApp
// Geolocation map of Sewanee
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
    <script>
var map;
var infowindow;
var marker;

//Construct building coordinates
var fulford = new google.maps.LatLng(35.20479,-85.92166);
var walsh = new google.maps.LatLng(35.20479,-85.91960);
var mcclurg = new google.maps.LatLng(35.20321,-85.92009);
var allsaints = new google.maps.LatLng(35.20397,-85.92011);
var bookstore = new google.maps.LatLng(35.20281, -85.92086);
var woods = new google.maps.LatLng(35.20420, -85.91908);
var stirlings = new google.maps.LatLng(35.20528,-85.91656);
var sut = new google.maps.LatLng(35.20402, -85.92155);
var gamma = new google.maps.LatLng(35.20622,-85.91526);

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
  //Infobox content
  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Fulford</h1>'+
      '<div id="bodyContent">'+
      '<p>Welcome to Fulford!</p>'+
      '</div>'+
      '</div>';

  var request = {
    location: theCenter,
    radius: 500,
    };
    
  infowindow = new google.maps.InfoWindow({
    content: contentString
    });
    
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
  
  var coord;
   for (coord in locationArray) {
    var marker = new google.maps.Marker({
      position: locationArray[coord],
      map: map,
      title: locationNameArray[coord]
      });
  
    google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
  });
}

}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

google.maps.event.addDomListener(window, 'load', initialize);

  </script>
  </head>
  <body>
  <div id="map-canvas"></div>
  </body>
  </html>
