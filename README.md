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
  var fulfordStr = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Fulford</h1>'+
      '<div id="bodyContent">'+
      '<p>Welcome to Fulford!</p>'+
      '</div>'+
      '</div>';

var walshStr = '<div id="content1">'+
      '<div id="siteNotice1">'+
      '</div>'+
      '<h1 id="firstHeading1" class="firstHeading1">Walsh-Ellett</h1>'+
      '<div id="bodyContent1">'+
      '<p>Welcome to Walsh-Ellett!</p>'+
      '</div>'+
      '</div>';

var mcclurgStr = '<div id="content2">'+
      '<div id="siteNotice2">'+
      '</div>'+
      '<h1 id="firstHeading2" class="firstHeading2">McClurg</h1>'+
      '<div id="bodyContent2">'+
      '<p>Welcome to McClurg!</p>'+
      '</div>'+
      '</div>';

var allsaintsStr = '<div id="content3">'+
      '<div id="siteNotice3">'+
      '</div>'+
      '<h1 id="firstHeading3" class="firstHeading3">All Saints</h1>'+
      '<div id="bodyContent3">'+
      '<p>Welcome to All Saints!</p>'+
      '</div>'+
      '</div>';

var bookStr = '<div id="content4">'+
      '<div id="siteNotice4">'+
      '</div>'+
      '<h1 id="firstHeading4" class="firstHeading4">Bookstore</h1>'+
      '<div id="bodyContent4">'+
      '<p>Welcome to the Bookstore!</p>'+
      '</div>'+
      '</div>';
      
var woodsStr = '<div id="content5">'+
      '<div id="siteNotice5">'+
      '</div>'+
      '<h1 id="firstHeading5" class="firstHeading5">Woods</h1>'+
      '<div id="bodyContent5">'+
      '<p>Welcome to Woods!</p>'+
      '</div>'+
      '</div>';

 var stirlingsStr = '<div id="content6">'+
      '<div id="siteNotice6">'+
      '</div>'+
      '<h1 id="firstHeading6" class="firstHeading6">Stirlings</h1>'+
      '<div id="bodyContent6">'+
      '<p>Welcome to Stirlings!</p>'+
      '</div>'+
      '</div>';

var sutStr = '<div id="content7">'+
      '<div id="siteNotice7">'+
      '</div>'+
      '<h1 id="firstHeading7" class="firstHeading7">Thompson Union</h1>'+
      '<div id="bodyContent7">'+
      '<p>Welcome to Thompson Union!</p>'+
      '</div>'+
      '</div>';

var gammaStr = '<div id="content8">'+
      '<div id="siteNotice8">'+
      '</div>'+
      '<h1 id="firstHeading8" class="firstHeading8">Gamma</h1>'+
      '<div id="bodyContent8">'+
      '<p>Welcome to Gamma!</p>'+
      '</div>'+
      '</div>';

    var infoArray = [fulfordStr,walshStr,mcclurgStr,allsaintsStr,bookStr,woodsStr,stirlingsStr,sutStr,gammaStr]; 
 
    infowindow = new google.maps.InfoWindow({
    content: ""
    });
   
    var request = {
    location: theCenter,
    radius: 500,
    };
   
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

  </script>
  </head>
  <body>
  <div id="map-canvas"></div>
  </body>
  </html>
