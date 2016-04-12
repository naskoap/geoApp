function linkInfoBubble(marker, map, description, image){

       var infoBubble = new InfoBubble({
             maxWidth: 300
           });
           var selected = false;
           google.maps.event.addListener(marker, 'click', function() {
             if (selected)
               infoBubble.close();
             else {
               infoBubble = new InfoBubble({
                 maxWidth: 300
               });
               infoBubble.addTab('Building', description);
               infoBubble.addTab('Picture', image);
               infoBubble.open(map);
             }
             selected = !selected;
           });
           google.maps.event.addListener(map, 'click', function() {
             infoBubble.close();
           });
       }

// Construct markers
    // DORM MARKERS START
      for (i in locationNameArrayD) {
          infoBubbleArrayD[i] = '<div>'+
             '<h1>' + locationNameArrayD[i] + '</h1>'+
             '<p>Welcome to ' + locationNameArrayD[i] + '!</p>' +
             '</div>';
          var storeY = infoBubbleArrayD[i];
          var storeW = pictureArrayD[i];
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
