/*
  geoApp - Geolocation map of Sewanee,TN
  Nasko Apostolov
  4/30/2016
*/

//Keep track of residence halls overlay
function residenceBox() {
  if (box1.checked) {
    for (i in dormMarkerBox)
      dormMarkerBox[i].setMap(map);
    for (i in dormPolygonArray)
      dormPolygonArray[i].setMap(map);
  }
  if (!box1.checked) {
    for (i in dormMarkerBox)
      dormMarkerBox[i].setMap(null);
    for (i in dormPolygonArray)
      dormPolygonArray[i].setMap(null);
  }
}

//Keep track of university buildings overlay
function universityBox() {
  if (box2.checked) {
    for (i in markersArray)
      markersArray[i].setMap(map);
    for (i in univPolygonArray)
      univPolygonArray[i].setMap(map);
  }
  if (!box2.checked) {
    for (i in markersArray)
      markersArray[i].setMap(null);
    for (i in univPolygonArray)
      univPolygonArray[i].setMap(null);
  }
}

//Keep track of academic buildings overlay
function academicBox() {
  if (box3.checked) {
    for (i in academicMBox)
      academicMBox[i].setMap(map);
    for (i in acadPolygonArray)
      acadPolygonArray[i].setMap(map);
  }
  if (!box3.checked) {
    for (i in academicMBox)
      academicMBox[i].setMap(null);
    for (i in acadPolygonArray)
      acadPolygonArray[i].setMap(null);
  }
}

//Keep track of overlooks overlay
function overlookBox() {
  if (box4.checked) {
    for (i in overlooksArray) {
      overlooksArray[i].setMap(map);
      overlooksArray[i].setAnimation(google.maps.Animation.DROP);
    }
  }
  if (!box4.checked) {
    for (i in overlooksArray)
      overlooksArray[i].setMap(null);
  }
}

//Fix image display
function rmJPG(pics) {
  for (i in pics)
    pics[i].replace("JPG", "jpg");
}

//Reset animation counter after origin/destination change
function trackOptions() {
  cnt = 0;
}

//Count how many times the 'Get Directions' has been clicked
function countClicks() {
  cnt++;
}

//Reset directions to default values upon clearing map
function resetDirections(elementId, val) {
  var elt = document.getElementById(elementId);
  elt.value = val;
}

$(document).ready(function() {
  getWeather(); //Get the initial weather.
  setInterval(getWeather, 600000); //Update the weather every 10 minutes.
});

//Display current conditions as well as a 9-day forecast
function getWeather() {
  $.simpleWeather({
    location: '37383',
    unit: 'f',
    success: function(weather) {
      dates = []; //Store dates in the following format '29 Apr 2016'

      html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li></ul>';

      $("#weather").html(html); //Display current temperature

      for(i in weather.forecast)
        dates.push(weather.forecast[i].date);

      //Show a 9-day forecast
      forecast = '<table><tr><th colspan="10"> Forecast from ' + dates[0] + ' to ' + dates.slice(-1).pop() + ' </th></tr><tr>';
      for(i in weather.forecast) {
        forecast += '<td>' + weather.forecast[i].day+'</td>';
      }
      forecast += '</tr><tr>';
      for(i in weather.forecast)
        forecast += '<td>' + weather.forecast[i].high+'&deg;'+weather.units.temp +'</td>';
      forecast += '</tr></table>';

      $("#forecast").html(forecast); //Display forecast

    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}

function resetAll() {

  cnt = 0;

  resetDirections('start', 100);
  resetDirections('end',   102);
  resetDirections('mode',  'WALKING');

  var field = document.getElementById("checkboxform");

  //Remove all overlays
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

  //Remove all infoBubbles
  for (i in dorms)
    dorms[i].closeBubble();

  for (i in univs)
    univs[i].closeBubble();

  for (i in acads)
    acads[i].closeBubble();

  for (i in scenic)
    scenic[i].closeBubble();

  //Remove directions
  directionsDisplay.setMap(null);
  document.getElementById("travel_data").innerHTML = "";

  map.setCenter(map_center);
  map.setZoom(16);
};
