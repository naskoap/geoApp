function residenceBox() {
  if (box1.checked) {
    for (var m = 0; m < dormMarkerBox.length; m++) {
      dormMarkerBox[m].setMap(map);
    }
    for (var j = 0; j < dormPolygonArray.length; j++) {
      dormPolygonArray[j].setMap(map);
    }
  }
  if (!box1.checked) {
    for (var l = 0; l < dormMarkerBox.length; l++) {
      dormMarkerBox[l].setMap(null);

    }
    for (var j = 0; j < dormPolygonArray.length; j++) {
      dormPolygonArray[j].setMap(null);
    }
  }
}

function academicBox() {
  if (box2.checked) {
    for (m = 0; m < markersArray.length; m++) {
      markersArray[m].setMap(map);
    }
    for (var j = 0; j < univPolygonArray.length; j++) {
      univPolygonArray[j].setMap(map);
    }
  }
  if (!box2.checked) {
    for (l = 0; l < markersArray.length; l++) {
      markersArray[l].setMap(null);
    }
    for (var j = 0; j < univPolygonArray.length; j++) {
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
  if (box4.checked) {
    for (i in overlooksArray)
      overlooksArray[i].setMap(map);
  }
  if (!box4.checked) {
    for (i in overlooksArray)
      overlooksArray[i].setMap(null);
  }
}

//reset animation counter after origin/destination change
function trackOptions() {
  cnt = 0;
}

function routeCalc() {
  if (document.getElementById('start').value != 70)
    calcRoute();
  else
    calcRoute2();
};

function setZoomLimit(map, mapTypeId) {
  //Gets MapTypeRegistry
  var mapTypeRegistry = map.mapTypes;
  //Gets the specified MapType
  var mapType = mapTypeRegistry.get(mapTypeId);
  //Sets limits to MapType
  mapType.maxZoom = 19;
  mapType.minZoom = 14;

}

function countClicks() {
  cnt++;
}

function resetDirections(elementId, val) {
  var elt = document.getElementById(elementId);
  elt.value = val;
}

function resetAll() {

  cnt = 0;

  resetDirections('start', 100);
  resetDirections('end', 102);
  resetDirections('mode', 'WALKING');

  var field = document.getElementById("checkboxform");

  for (var i = 0; i < field.length; i++) {
    field[i].checked = false;
  }
  for (l = 0; l < markersArray.length; l++) {
    markersArray[l].setMap(null);
  }
  for (i in univPolygonArray) {
    univPolygonArray[i].setMap(null);
  }
  for (i = 0; i < academicMBox.length; i++) {
    academicMBox[i].setMap(null);
  }
  for (i in acadPolygonArray) {
    acadPolygonArray[i].setMap(null);
  }

  for (i in dormPolygonArray) {
    dormPolygonArray[i].setMap(null);
  }
  for (i in overlooks)
    overlooksArray[i].setMap(null);
  map.setCenter(coords);
  for (i in currentLocationArray) {
    currentLocationArray[i].setMap(null)
  }

  for (i in dorms)
    dorms[i].closeBubble();

  for (i in univs)
    univs[i].closeBubble();

  for (i in acads)
    acads[i].closeBubble();

  for (i in scenic)
    scenic[i].closeBubble();

  directionsDisplay.setMap(null);
  document.getElementById("travel_data").innerHTML = "";

  map.setCenter(libraryM);
  map.setZoom(16);
};
