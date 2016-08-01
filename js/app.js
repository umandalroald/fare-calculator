(function($) {
  $.fn.fareCalculator = function(data) {
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: {lat: 14.58, lng: 121.01}
    });

    directionsDisplay.setMap(map);

    directionsService.route({
        origin: data.start,
        destination: data.end,
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
    }, function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
          var route = response.routes[0];
          var summaryPanel = document.getElementById('directions-panel');
          summaryPanel.innerHTML = '';
          // For each route, display summary information.
           for (var i = 0; i < route.legs.length; i++) {
             var routeSegment = i + 1;
             var rawDistance = route.legs[i].distance.text.replace('km','');

             summaryPanel.innerHTML += '<strong>Travel: </strong> ' + route.legs[i].start_address + ' <strong>to</strong> ';
             summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
             summaryPanel.innerHTML += '<strong>Distance:</strong> ' + route.legs[i].distance.text + '<br>';
             summaryPanel.innerHTML += '<strong>Duration:</strong> ' + route.legs[i].duration.text + '<br>';
             summaryPanel.innerHTML += '<strong>Fare:</strong> ' + rawDistance.trim() * data.fare;
           }
         } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
  }
})(jQuery);