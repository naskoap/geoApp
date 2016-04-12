  function locate() {
      if  (navigator.geolocation)
        navigator.geolocation.getCurrentPosition(setMarker);
      else
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
    });
    map.panTo(coords);
    map.setCenter(coords);
    // Update user's location
    positionTimer = navigator.geolocation.watchPosition(function (pos) {
      /*var lat = pos.coords.latitude,
          lng = pos.coords.longitude;
      coords = new google.maps.LatLng(lat, lng);*/
      posMarker.setPosition(coords);
    });
    //directionsDisplay.setMap(map);
    currentLocationArray.push(posMarker);
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
    if (box3.checked) {
      for (i = 0; i < academicMBox.length; i++) {
        academicMBox[i].setMap(map);
      }
      for (var j = 0; j < acadPolygonArray.length; j++) {
        acadPolygonArray[j].setMap(map);
      }
    }
    if (!box3.checked) {
      for (i = 0; i < academicMBox.length; i++) {
        academicMBox[i].setMap(null);
      }
      for (var j = 0; j < acadPolygonArray.length; j++) {
        acadPolygonArray[j].setMap(null);
      }
    }
  }

    function overlookBox() {
      if(box4.checked){
        for(i in overlooksArray)
          overlooksArray[i].setMap(map);
      }
      if (!box4.checked){
        for(i in overlooksArray)
          overlooksArray[i].setMap(null);
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

  function resetDirections(elementId, val) {
    var elt = document.getElementById(elementId);
    elt.value = val;
  }

  function resetAll() {

  resetDirections('start',100);
  resetDirections('end',102);

  map.setCenter(bishopCommons);
  map.setZoom(16);

  var field = document.getElementById("checkboxform");

  for (var i = 0; i < field.length; i++){
    field[i].checked = false;
  }
     for(l=0; l < markersArray.length; l++){
       markersArray[l].setMap(null);
}
     for(i in univPolygonArray){
       univPolygonArray[i].setMap(null);
    }
     for(i=0; i < academicMBox.length; i++){
       academicMBox[i].setMap(null);
}
     for(i in acadPolygonArray){
       acadPolygonArray[i].setMap(null);
    }

     for(i in dormPolygonArray){
     dormPolygonArray[i].setMap(null);
    }
     for(i in overlooks)
       overlooksArray[i].setMap(null);
     map.setCenter(coords);
     for(i in currentLocationArray){
       currentLocationArray[i].setMap(null)
     }

    infoBubble.close();
    infoBubbleM.close();

    directionsDisplay.setMap(null);
    document.getElementById("travel_data").innerHTML = "";

    //currentLocationArray = [];
};
