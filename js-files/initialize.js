function initialize() {

  var mapOptions = {
    center: libraryM,
    zoom: 16,
    minZoom: 14,
    maxZoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  function Building(poly, description, image) {
    var infoBubble = new InfoBubble({
      maxWidth: 300
    });
    var selected = false;
    this.popBubble = function() {
      google.maps.event.addListener(poly, 'click', function(event) {
        if (selected)
          infoBubble.close();
        else {
          infoBubble = new InfoBubble({
            maxWidth: 300
          });
          map.setCenter(event.latLng);
          infoBubble.addTab('Building', description);
          infoBubble.addTab('Picture', image);
          infoBubble.setPosition(event.latLng);
          infoBubble.open(map);
        }
        selected = !selected;
      });
      google.maps.event.addListener(map, 'click', function() {
        infoBubble.close();
      });
    }

    this.closeBubble = function() {
      infoBubble.close();
    }
  }

  directionsDisplay = new google.maps.DirectionsRenderer();
  directionsDisplay.setMap(map);

  function Overlook(marker, description, image) {

    var infoBubble = new InfoBubble({
      maxWidth: 300
    });
    var selected = false;

    this.openBubble = function() {
      google.maps.event.addListener(marker, 'click', function() {
        if (selected)
          infoBubble.close();
        else {
          infoBubble = new InfoBubble({
            maxWidth: 300
          });
          infoBubble.addTab('Building', description);
          infoBubble.addTab('Picture', image);
          infoBubble.open(map, marker);
        }
        selected = !selected;
      });
      google.maps.event.addListener(map, 'click', function() {
        infoBubble.close();
      });
    }

    this.closeBubble = function() {
      infoBubble.close();
    }

  }

  for (i in dormsArray) {
    poly = new google.maps.Polygon({
      paths: dormsArray[i],
      strokeColor: '#996633',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#996633',
      fillOpacity: 0.35,
      indexID: i
    });
    dormPolygonArray.push(poly);
    infoBubbleArrayD[i] = '<div>' +
      '<h1>' + locationNameArrayD[i] + '</h1>' +
      '<p>Welcome to ' + locationNameArrayD[i] + '!</p>' +
      '</div>';
    dorm = new Building(poly, infoBubbleArrayD[i], pictureArrayD[i]);
    dorm.popBubble();
    dorms.push(dorm);
  }

  for (i in univArray) {
    poly = new google.maps.Polygon({
      paths: univArray[i],
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      indexID: i
    });
    univPolygonArray.push(poly);
    infoBubbleArrayU[i] = '<div>' +
      '<h1>' + locationNameArrayU[i] + '</h1>' +
      '<p>Welcome to ' + locationNameArrayU[i] + '!</p>' +
      '</div>';
    univ = new Building(poly, infoBubbleArrayU[i], pictureArrayU[i]);
    univ.popBubble();
    univs.push(univ);
  }

  for (i in academicPoly) {
    poly = new google.maps.Polygon({
      paths: academicPoly[i],
      strokeColor: '#5CADFF',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#5CADFF',
      fillOpacity: 0.35,
      indexID: i
    });
    acadPolygonArray.push(poly);
    infoBubbleArrayA[i] = '<div>' +
      '<h1>' + academicPolyNames[i] + '</h1>' +
      '<p>Welcome to ' + academicPolyNames[i] + '!</p>' +
      '</div>';
    acad = new Building(poly, infoBubbleArrayA[i], pictureArrayA[i]);
    acad.popBubble();
    acads.push(acad);
  }

  for (i in overlooks) {
    m = new google.maps.Marker({
      position: overlooks[i],
      map: map,
      //icon: 'markers/yellowMarker.png',
      title: overlookNames[i]
    });
    overlooksArray.push(m);
    overlooksArray[i].setMap(null);
    infoBubbleArrayO[i] = '<div>' +
      '<h1>' + overlookNames[i] + '</h1>' +
      '<p>Welcome to ' + overlookNames[i] + '!</p>' +
      '</div>';
    overlook = new Overlook(m, infoBubbleArrayO[i], overlookPics[i]);
    overlook.openBubble();
    scenic.push(overlook);
  }

  google.maps.event.addListener(marker, 'click', function() {
    infoBubble.open(map, marker1);
  });

  InfoBubble.prototype.buildDom_ = function() {

    // ...

    var that = this;
    google.maps.event.addDomListener(close, 'click', function() {
      that.close();
      google.maps.event.trigger(that, 'closeclick');
    });
  }

  for (j in fratArray) {

    var q = new google.maps.Polygon({
      paths: fratArray[j],
      strokeColor: '#CCFFEE',
      strokeOpacity: 0.2,
      strokeWeight: 2,
      fillColor: '#CCFF10',
      fillOpacity: 0.35,
      indexID: j
    });
    q.setMap(map);
  }

} // initialize end
