var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var infowindow = new google.maps.InfoWindow();
var geocoder   = new google.maps.Geocoder();
var map;
var coords;
var lat;
var lng;


//Marker paths
var walshElletM = new google.maps.LatLng(35.20458,-85.91990);
var bookStoreMarker = new google.maps.LatLng(35.20283, -85.92100);
var woodsLab = new google.maps.LatLng(35.20423,-85.91927);
var hospital = new google.maps.LatLng(35.20771,-85.91373);
var gailor = new google.maps.LatLng(35.20270,-85.91953);
var mcclurg = new google.maps.LatLng(35.20340,-85.92029);
var fowlerCenter = new google.maps.LatLng(35.20838,-85.91964);
var carnegie = new google.maps.LatLng(35.20434,-85.91993);
var library = new google.maps.LatLng(35.20453,-85.91804);
var bishopCommons = new google.maps.LatLng(35.20542,-85.91803);
var fulford = new google.maps.LatLng(35.20478,-85.92145);
var allSaints = new google.maps.LatLng(35.20400,-85.92055);
var thompsonUnion = new google.maps.LatLng(35.20400,-85.92131);
var stLukes = new google.maps.LatLng(35.20604,-85.91893);
var mccrady = new google.maps.LatLng(35.20257,-85.91818);
var vanness = new google.maps.LatLng(35.20261,-85.91754);
var snowden = new google.maps.LatLng(35.20318,-85.91774);
var archives = new google.maps.LatLng(35.20384,-85.91803);
var policeFire = new google.maps.LatLng(35.20353,-85.91790);
var stirlings = new google.maps.LatLng(35.20512,-85.91661);
var alumniHouse = new google.maps.LatLng(35.20498,-85.91872);
var hoffman = new google.maps.LatLng(35.20643,-85.91876);
var careerServices = new google.maps.LatLng(35.20784,-85.91988);
var womensCenter = new google.maps.LatLng(35.20635,-85.91726);
var eqb = new google.maps.LatLng(35.20285,-85.92032);
var chen = new google.maps.LatLng(35.20310,-85.92214);
var convocation = new google.maps.LatLng(35.20497,-85.92045);
var guerry = new google.maps.LatLng(35.20507,-85.91959);

var navArray = [walshElletM, bookStoreMarker, woodsLab, hospital, gailor, mcclurg, fowlerCenter, 
carnegie, library, bishopCommons, fulford, allSaints, thompsonUnion, stLukes, mccrady, vanness, 
snowden, archives, policeFire, stirlings, alumniHouse, hoffman, careerServices, womensCenter, eqb, chen, 
convocation, guerry];


function calcRoute() {
  var request = {
      origin: navArray[document.getElementById('start').value],
      destination: navArray[document.getElementById('end').value],
      travelMode: google.maps.TravelMode.WALKING
      
  };
     
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}
		
function calcRoute2() {
  var request = {
      origin: coords,
      destination: navArray[document.getElementById('end').value],
      travelMode: google.maps.TravelMode.WALKING
      
  };
     
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
