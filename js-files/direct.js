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
var police = new google.maps.LatLng(35.20353,-85.91790);
var stirlings = new google.maps.LatLng(35.20512,-85.91661);
var alumniHouse = new google.maps.LatLng(35.20498,-85.91872);
var hoffman = new google.maps.LatLng(35.20643,-85.91876);
var careerServices = new google.maps.LatLng(35.20784,-85.91988);
var womensCenter = new google.maps.LatLng(35.20635,-85.91726);
var eqb = new google.maps.LatLng(35.20285,-85.92032);
var chen = new google.maps.LatLng(35.20310,-85.92214);
var convocation = new google.maps.LatLng(35.20497,-85.92045);
var guerry = new google.maps.LatLng(35.20507,-85.91959);
var soccerField = new google.maps.LatLng(35.196098, -85.927296);
var sewaneeGolfCourse = new google.maps.LatLng(35.210493, -85.914744);
var equestrian = new google.maps.LatLng(35.214192, -85.936966);
var tennisCourts = new google.maps.LatLng(35.209908, -85.915493);
var footballField = new google.maps.LatLng(35.209406, -85.921503);
var baseballField = new google.maps.LatLng(35.211948, -85.925140);
var memorialCross = new google.maps.LatLng(35.191995, -85.937322);
var morgansSteep = new google.maps.LatLng(35.202472, -85.931802);
var greensView = new google.maps.LatLng(35.217453, -85.918474);
var sewaneeInn = new google.maps.LatLng(35.209099, -85.913995);
var stLukesChapel = new google.maps.LatLng(35.205584, -85.918786);
var spencer = new google.maps.LatLng(35.20411,-85.91849);
var tenneseeWilliams = new google.maps.LatLng(35.196440, -85.924078);
var cravens = new google.maps.LatLng(35.196388, -85.925687);
var universityFarm = new google.maps.LatLng(35.212991, -85.926138);
var nabit = new google.maps.LatLng(35.203750, -85.914345);
var multiculturalCenter = new google.maps.LatLng(35.201101, -85.919406);
var hodgeson = new google.maps.LatLng(35.20510,-85.92802);
var philips = new google.maps.LatLng(35.205716, -85.928844);
var smith = new google.maps.LatLng(35.20469,-85.92211);
var trez = new google.maps.LatLng(35.205545, -85.912272);
var courts = new google.maps.LatLng(35.205150, -85.913943);
var elliott = new google.maps.LatLng(35.20075,-85.92140);
var fire = new google.maps.LatLng(35.20365, -85.91733);

var navArray = [walshElletM, bookStoreMarker, woodsLab, hospital, gailor, mcclurg, fowlerCenter,
carnegie, library, bishopCommons, fulford, allSaints, thompsonUnion, stLukes, mccrady, vanness,
snowden, archives, police, stirlings, alumniHouse, hoffman, careerServices, womensCenter, eqb, chen,
convocation, guerry, soccerField, sewaneeGolfCourse, equestrian, tennisCourts, footballField, baseballField, memorialCross,morgansSteep, greensView, sewaneeInn, stLukesChapel, spencer, tenneseeWilliams, cravens, universityFarm, nabit, multiculturalCenter, hodgeson, philips, smith, trez, courts, elliott, fire];

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
