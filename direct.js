var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var infowindow = new google.maps.InfoWindow();
var geocoder   = new google.maps.Geocoder();
var map;
var currentLocation = "27 Canterbury Way, Sewanee, TN, 37375";  
  

function calcRoute() {
  var end = document.getElementById('end').value;
  var request = {
      origin: currentLocation,
      destination: end,
      travelMode: google.maps.TravelMode.WALKING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
