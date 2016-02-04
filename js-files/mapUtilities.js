function walkingTours()
        {
for(var w=0;w<tourLineArray.length;w++)
    {
tourLineArray[w].setMap(map);
    };
for(var wp=0;wp<tourLineArrayIndoor.length;wp++){
tourLineArrayIndoor[wp].setMap(map);
}

  var tourSymbol = {
    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
    scale: 8,
    strokeColor: '#393'
  };
  tourLine = new google.maps.Polyline({
    path: animationCourse,
    icons: [{
      icon: tourSymbol,
      offset: '100%',
      repeat: '400px'
    }],
    map: map
  });

  animateCircle();
            
function animateCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = tourLine.get('icons');
      icons[0].offset = (count / 2) + '%';
      tourLine.set('icons', icons);
  }, 100);
}
        }
            function locate(){
            if  (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(setMarker);
          } else {
            alert("Your browser does not support the Geolocation API");
}
        // Set blue marker indicating user position
function setMarker(pos) {
        var lat = pos.coords.latitude,
        lng = pos.coords.longitude;
        coords = new google.maps.LatLng(lat, lng);
        posMarker = new google.maps.Marker({
        map: map,
        icon: 'markers/TrackingDot.png',
        position: coords,
        animation: google.maps.Animation.DROP,
        title: "Current Position"
}
  );
        map.panTo(coords);
            //directionsDisplay = new google.maps.DirectionsRenderer();
          // Update user's location  
          positionTimer = navigator.geolocation.watchPosition(function (pos) {
           var lat = pos.coords.latitude,
           lng = pos.coords.longitude;
           coords = new google.maps.LatLng(lat, lng);
            posMarker.setPosition(coords);
}
      
  );
        directionsDisplay.setMap(map);
        currentLocationArray.push(posMarker);
     }
        
    }
         function residenceBox() {
     if(box1.checked){
     for( var m=0; m < dormMarkerBox.length; m++){
     dormMarkerBox[m].setMap(map);
}
     for(var j=0; j<dormPolygonArray.length; j++){
     dormPolygonArray[j].setMap(map);
    }
}
     if(!box1.checked){
     for(var l=0; l < dormMarkerBox.length; l++){
     dormMarkerBox[l].setMap(null);

}
     for(var j=0; j<dormPolygonArray.length; j++){
     dormPolygonArray[j].setMap(null);
    }
    }}


     function academicBox() {
     if(box2.checked){
     for(m=0; m < markersArray.length; m++){
     markersArray[m].setMap(map);
}
    for(var j=0; j<univPolygonArray.length; j++){
     univPolygonArray[j].setMap(map);
    }
    }
     if(!box2.checked){
     for(l=0; l < markersArray.length; l++){
     markersArray[l].setMap(null);
}
     for(var j=0; j<univPolygonArray.length; j++){
     univPolygonArray[j].setMap(null);
    }
    }
    }


     function academicBox2() {
     if(box3.checked){
     for(i=0; i < academicMBox.length; i++){
     academicMBox[i].setMap(map);
}
    for(var j=0; j<acadPolygonArray.length; j++){
     acadPolygonArray[j].setMap(map);
    }
    }
     if(!box3.checked){
     for(i=0; i < academicMBox.length; i++){
     academicMBox[i].setMap(null);
}
     for(var j=0; j<acadPolygonArray.length; j++){
     acadPolygonArray[j].setMap(null);
    }
    }
    }
     function routeCalc(){
       if(document.getElementById('start').value != 70)
         calcRoute();
       else
         calcRoute2();
     };
  
  function setZoomLimit(map, mapTypeId){
    //Gets MapTypeRegistry
    var mapTypeRegistry = map.mapTypes;    
    //Gets the specified MapType
    var mapType = mapTypeRegistry.get(mapTypeId);
    //Sets limits to MapType
    mapType.maxZoom = 19;  
    mapType.minZoom = 14;
  }
  function resetAll()
{
  //reset the check box form
  
  var field = document.getElementById("checkboxform");
  for (var i = 0; i < field.length; i++){
    field[i].checked = false;
    }
     for(l=0; l < markersArray.length; l++){
     markersArray[l].setMap(null);
}
     for(var j=0; j<univPolygonArray.length; j++){
     univPolygonArray[j].setMap(null);
    }
     for(i=0; i < academicMBox.length; i++){
     academicMBox[i].setMap(null);
}
     for(var j=0; j<acadPolygonArray.length; j++){
     acadPolygonArray[j].setMap(null);
    }
     for( var m=0; m < dormMarkerBox.length; m++){
     dormMarkerBox[m].setMap(null);
}
     for(var p=0; p<dormPolygonArray.length; p++){
     dormPolygonArray[p].setMap(null);
    }
     map.setCenter(coords);
    for(var d=0; d<currentLocationArray.length; d++){
     currentLocationArray[d].setMap(null)
    }
       infoBubble.close();
       infoBubbleA.close();
       infoBubbleD.close();
    for(var w=0;w<tourLineArray.length;w++)
    {
    tourLineArray[w].setMap(null);
    };
    for(var wp=0;wp<tourLineArrayIndoor.length;wp++){
    tourLineArrayIndoor[wp].setMap(null);
}
tourLine.setMap(null);
};