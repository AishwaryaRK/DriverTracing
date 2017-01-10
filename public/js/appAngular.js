'use strict';
var app = angular.module('DriverTracing', []);
var map;
// var directionsDisplay;
// var directionsService;
(function () {

    app.controller('InputLocationController', ['$scope', 'ApiFactory', function ($scope, ApiFactory) {

        // map = L.map('map', {
        //     center: [-6.255172, 106.798665],
        //     zoom: 18
        // });
        // var tileUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        // layer = new L.TileLayer(tileUrl,
        // {
        //     attribution: 'Maps © <a href=\"www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',
        //     maxZoom:18
        // });

        // // add the layer to the map
        // map.addLayer(layer);

//--------------------------------------------
 //        L.mapbox.accessToken = '';
 // map = L.mapbox.map('map', 'mapbox.streets')
 //    .setView([-8.650000, 115.216667], 9);

    //--------------------------------------------------------

    var mapboxAccessToken = '';
    map = L.map('map').setView([-6.255172, 106.798665], 15);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
        id: 'mapbox.streets'
        // attribution: ...
    }).addTo(map);


//-------------------------------------------------

//         map = new OpenLayers.Map("map");
//     map.addLayer(new OpenLayers.Layer.OSM());
//     var fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
//     var toProjection   = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
//     var position       = new OpenLayers.LonLat( 115.216667,-8.650000).transform( fromProjection, toProjection);
// map.setCenter(position, 6);

        // var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        // L.tileLayer(
        //   'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //       attribution: 'Map data &copy; ' + mapLink,
        //       maxZoom: 16,
        // }).addTo(map);

        // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png?').addTo(map);

        var myMovingMarker = L.Marker.movingMarker([[-6.255172, 106.798665],[-6.193758, 106.801614]],
            [200000]).addTo(map);
        myMovingMarker.start();
        
        // $scope.locations = [];
        // $scope.location;
        // $scope.addLocation = function () {
        //     $scope.location = angular.element($('#pac-input')).val();
        //     $scope.locations.push($scope.location);
        //     $scope.location = null;
        // };
        // $scope.getShortestPath = function () {
        //     ApiFactory.getShortestPath($scope.locations).then(function (positions) {
        //         alert(JSON.stringify(positions));
        //         calculateAndDisplayRoute(directionsService, directionsDisplay, positions);
        //         document.getElementById('mode').addEventListener('change', function () {
        //             calculateAndDisplayRoute(directionsService, directionsDisplay, positions);
        //         });
        //     });
        // };
    }]);

    app.controller('FooterController', ['$scope', function ($scope) {
        $scope.copyrightLabel = new Date().getFullYear() + ' GO-JEK';
    }]);

})();

function initMap() {
    // map = new google.maps.Map(document.getElementById('map'), {
    //     center:{lat: -8.650000, lng: 115.216667},
    //     zoom: 5
    // });
    // var myMovingMarker = L.Marker.movingMarker([[-8.650000, 115.216667],[-6.318540, 106.899117]],
    //     [20000]).addTo(map);
    // myMovingMarker.start();

    // var input = (document.getElementById('pac-input'));
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // var autocomplete = new google.maps.places.Autocomplete(input);
    // autocomplete.bindTo('bounds', map);
    // var infowindow = new google.maps.InfoWindow();
    // var marker = new google.maps.Marker({
    //     map: map,
    //     anchorPoint: new google.maps.Point(0, -29)
    // });
    // autocomplete.addListener('place_changed', function () {
    //     infowindow.close();
    //     marker.setVisible(false);
    //     var place = autocomplete.getPlace();
    //     if (!place.geometry) {
    //         window.alert("Autocomplete's returned place contains no geometry");
    //         return;
    //     }

    //     if (place.geometry.viewport) {
    //         map.fitBounds(place.geometry.viewport);
    //     } else {
    //         map.setCenter(place.geometry.location);
    //         map.setZoom(17);
    //     }
    //     marker.setIcon(({
    //         url: place.icon,
    //         size: new google.maps.Size(71, 71),
    //         origin: new google.maps.Point(0, 0),
    //         anchor: new google.maps.Point(17, 34),
    //         scaledSize: new google.maps.Size(35, 35)
    //     }));
    //     marker.setPosition(place.geometry.location);
    //     marker.setVisible(true);
    //     var address = '';
    //     if (place.address_components) {
    //         address = [
    //             (place.address_components[0] && place.address_components[0].short_name || ''),
    //             (place.address_components[1] && place.address_components[1].short_name || ''),
    //             (place.address_components[2] && place.address_components[2].short_name || '')
    //         ].join(' ');
    //     }
    //     infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
    //     infowindow.open(map, marker);
    // });

    // directionsDisplay = new google.maps.DirectionsRenderer;
    // directionsService = new google.maps.DirectionsService;
    // directionsDisplay.setMap(map);
}


// function calculateAndDisplayRoute(directionsService, directionsDisplay, positions) {
//     var selectedMode = document.getElementById('mode').value;
//     var waypoints = [];
//     for (var i = 1; i < positions.length - 1; i++) {
//         waypoints.push({
//             location: positions[i],
//             stopover: true
//         })
//     }
//     directionsService.route({
//         origin: positions[0],
//         destination: positions[positions.length - 1],
//         waypoints: waypoints,
//         travelMode: google.maps.TravelMode[selectedMode]
//     }, function (response, status) {
//         if (status == google.maps.DirectionsStatus.OK) {
//             directionsDisplay.setDirections(response);
//         } else {
//             window.alert('Directions request failed due to ' + status);
//         }
//     });
// }



