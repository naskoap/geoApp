function initialize() {

    var mapOptions = {
        center: coords,
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
};

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  
    var infowindow1 = new google.maps.InfoWindow({
          content: ""
}
  );
    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);

            infoBubble = new InfoBubble({
          maxWidth: 100
        });
                infoBubbleA = new InfoBubble({
          maxWidth: 100
        });
                infoBubbleD = new InfoBubble({
          maxWidth: 100
        });
      //Construct markers
    // DORM MARKERS START
            for (var p=0; p < locationNameArrayD.length; p++) {
         contentStringD = '<div>'+
      '<div>'+
      '</div>'+
      '<h1>' + locationNameArrayD[p] + '</h1>'+
      '<div>'+
      '<p>Welcome to ' + locationNameArrayD[p] + '!</p>' +
      '</div>'+
      '</div>';
    infoBubbleArrayD[p] = contentStringD;
    }


      for (var i=0; i <= locationNameArrayD.length; i++) {
      var storeY = infoBubbleArrayD[i];
      var storeW = infoBubbleArrayD[i];
      dMarker = new google.maps.Marker({
      position: dormMarkerarray[i],
      map: map,
      icon: 'markers/yellowMarker.png',
      title: locationNameArrayD[i]
      });
      dormMarkerBox.push(dMarker);
      markersArrayD.push(dMarker);
      markersArrayD[i].setMap(null);
      linkInfoBubble(dMarker, map, infoBubbleD, storeY, storeW);
}
            google.maps.event.addListener(dMarker, 'click', function() {
            infoBubbleD.open(map, dMarker);
          
          });
       function linkInfoBubble(dMarker, map, infoBubbleD, description5, description6){ 
       
       google.maps.event.addListener(aMarker, 'click', function() {
       if('click'){infoBubbleD.close();}
       if(infoBubbleD.getMap()){
          infoBubbleD.close();
       }
       if (infoBubbleD.getMap() != null) {
          delete infoBubbleD;
          infoBubbleD = new InfoBubble({
          maxWidth: 300
        });
      }
                  if(infoBubbleD.getMap()){
          infoBubbleD.close();
       }
       infoBubbleD.open(map, dMarker);
       infoBubbleD.addTab('Building', description5);
       infoBubbleD.addTab('Photo', description6);

}
    );
        }
    
    
    
    
    
    
    
    //ACADEMIC MARKERS
    
        for (var p=0; p < locationNameArrayA.length; p++) {
         contentStringA = '<div>'+
      '<div>'+
      '</div>'+
      '<h1>' + locationNameArrayA[p] + '</h1>'+
      '<div>'+
      '<p>Welcome to ' + locationNameArrayA[p] + '!</p>' +
      '</div>'+
      '</div>';
    infoBubbleArrayA[p] = contentStringA;
    }

      for (var i=0; i <= academicArray.length; i++) {
      var storeK = infoBubbleArrayA[i];
      var storeT = infoBubbleArrayA[i];
      aMarker = new google.maps.Marker({
      position: academicArray[i],
      map: map,
      icon: 'markers/blue-dot.png',
      title: locationNameArrayA[i]
      });
      academicMBox.push(aMarker);  // -> Attempt to push the marker to an array s
      academicMBox[i].setMap(null);
      linkInfoBubble(aMarker, map, infoBubbleA, storeK, storeT);
}
            google.maps.event.addListener(aMarker, 'click', function() {
            infoBubbleA.open(map, aMarker);
          
          });
       function linkInfoBubble(aMarker, map, infoBubbleA, description3, description4){ 
       
       google.maps.event.addListener(aMarker, 'click', function() {
       if('click'){infoBubbleA.close();}
       if(infoBubbleA.getMap()){
          infoBubbleA.close();
       }
       if (infoBubbleA.getMap() != null) {
          delete infoBubbleA;
          infoBubbleA = new InfoBubble({
          maxWidth: 300
        });
      }
                  if(infoBubbleA.getMap()){
          infoBubbleA.close();
       }
       infoBubbleA.open(map, aMarker);
       infoBubbleA.addTab('Building', description3);
       infoBubbleA.addTab('Photo', description4);

}
    );
        }
    
    
    
    
    
    
    
    //UNIVERSITY MARKERS
    
    for (var p=0; p < locationArrayU.length; p++) {
         contentString = '<div>'+
      '<div>'+
      '</div>'+
      '<h1>' + locationNameArrayU[p] + '</h1>'+
      '<div>'+
      '<p>Welcome to ' + locationNameArrayU[p] + '!</p>' +
      '</div>'+
      '</div>';
    infoBubbleArrayU[p] = contentString;
    }

      for (var i=0; i < locationArrayU.length; i++) {
      var storeU = infoBubbleArrayU[i];
      var storeP = pictureArrayU[i];
      marker1 = new google.maps.Marker({
      position: locationArrayU[i],
      map: map,
      title: locationNameArrayU[i]
      });
      markersArray.push(marker1);  // -> Attempt to push the marker to an array s
      markersArray[i].setMap(null);
      linkInfoBubble(marker1, map, infoBubble, storeU, storeP);
}
            google.maps.event.addListener(marker, 'click', function() {
            infoBubble.open(map, marker1);
          
          });
       function linkInfoBubble(marker1, map, infoBubble, description1, description2){ 
       google.maps.event.addListener(marker1, 'click', function() {
       google.maps.event.addListener(map, "click", function () { 
       infoBubble.close();
        });
       if('click'){infoBubble.close();}
       if(infoBubble.getMap()){
          infoBubble.close();
       }
       if (infoBubble.getMap() != null) {
          delete InfoBubble;
          infoBubble = new InfoBubble({
          maxWidth: 300
        });
      }
                  if(infoBubble.getMap()){
          infoBubble.close();
       }
       infoBubble.open(map, marker1);
       infoBubble.addTab('Building', description1);
       infoBubble.addTab('Photo', description2);

}
    );
        }
       google.maps.event.addListener(map, "click", function () { 
       infoBubble.close();
       infoBubbleA.close();
       infoBubbleD.close();
        });
    
    InfoBubble.prototype.buildDom_ = function() {

  // ...  

  var that = this;
  google.maps.event.addDomListener(close, 'click', function() {
    that.close();
    google.maps.event.trigger(that, 'closeclick');
  });}
        
// Set blue marker indicating user position


     for (var j = 0; j < fratArray.length; j++) {
   
        var q = new google.maps.Polygon({
         paths: fratArray[j],
        strokeColor: '#CCFFEE',
        strokeOpacity: 0.2,
        strokeWeight: 2,
        fillColor: '#CCFF10',
        fillOpacity: 0.35,
        indexID: j
}
  );
        q.setMap(map);
}
        infowindowD = new google.maps.InfoWindow({
        content: ""
}
  );
        infowindowA = new google.maps.InfoWindow({
        content: ""
}
  );
  
        var request = {
        location: coords,
        radius: 500,
};

    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
    
    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          //createMarker(results[i]);
        }
      }
    }


     google.maps.event.addListenerOnce(map, "projection_changed", function(){
      map.setMapTypeId(google.maps.MapTypeId.HYBRID);  //Changes the MapTypeId in short time.
      setZoomLimit(map, google.maps.MapTypeId.ROADMAP);
      setZoomLimit(map, google.maps.MapTypeId.HYBRID);
      setZoomLimit(map, google.maps.MapTypeId.SATELLITE);
      setZoomLimit(map, google.maps.MapTypeId.TERRAIN);
      map.setMapTypeId(google.maps.MapTypeId.ROADMAP);  //Sets the MapTypeId to original.
    });

   }               // initialize end