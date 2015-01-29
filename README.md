# geoApp
// Geolocation map of Sewanee

var map;
var infowindow;

var fulford = new google.maps.LatLng(35.20479,-85.92166);
var walsh = new google.maps.LatLng(35.20479,-85.91960);
var mcclurg = new google.maps.LatLng(35.20321,-85.92009);
var allsaints = new google.maps.LatLng(35.20397,-85.92011);
var bookstore = new google.maps.LatLng(35.20281, -85.92086);
var woods = new google.maps.LatLng(35.20420, -85.91908);
var stirlings = new google.maps.LatLng(35.20528,-85.91656);
var sut = new google.maps.LatLng(35.20402, -85.92155);
var gamma = new google.maps.LatLng(35.20622,-85.91526);

var locationArray = [fulford,walsh,mcclurg,allsaints,bookstore,woods,stirlings,sut,gamma];

function initialize() {
var theCenter = new google.maps.LatLng(35.20438,-85.92016);

  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: theCenter,
    zoom: 17
  });

  var request = {
    location: theCenter,
    radius: 500,
    types: ['store']
  };
  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);

}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  
   var coord;
   for (coord in locationArray) {
    var marker = new google.maps.Marker({
      position: locationArray[coord],
      map: map,
      //title: locationNameArray[coord]
    });
  }
  
    google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
