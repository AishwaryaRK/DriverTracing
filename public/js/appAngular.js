'use strict';
var app = angular.module('DriverTracing', []);
var map;
(function () {

    app.controller('InputLocationController', ['$scope', '$timeout', 'ApiFactory', function ($scope, $timeout, ApiFactory) {

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


    //--------------------------------------------------------

    var mapboxAccessToken = 'pk.eyJ1IjoiaGlyb2tpYXJrIiwiYSI6ImNpeHF4ZTBlbzBiamkzM2x2ZTVmbml5NHcifQ.77MjMgGSZcHGqVRBLBNz2Q';
    map = L.map('map').setView([-6.255172, 106.798665], 15);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
        id: 'mapbox.streets'
        // attribution: ...
    }).addTo(map);


        // var line = L.polyline([[-6.255172, 106.798665],[-6.193758, 106.801614]]),
        //     animatedMarker = L.animatedMarker(line.getLatLngs(), {
        //           interval: 15000, // milliseconds
        //       });
        //     map.addLayer(animatedMarker);

        //-------------------------------------------------

        // var map = L.map('map').setView([-6.255172, 106.798665], 13);

        //   // load a tile layer
        //   L.tileLayer('http://tiles.mapc.org/basemap/{z}/{x}/{y}.png',
        //     {
        //       attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
        //       maxZoom: 17,
        //       minZoom: 9
        //     }).addTo(map);

        //-----------------------------------------------------

            // map = new OpenLayers.Map("map");
            // map.addLayer(new OpenLayers.Layer.OSM());
            // var fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
            // var toProjection   = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
            // var position       = new OpenLayers.LonLat( 106.798665,-6.255172).transform( fromProjection, toProjection);
            // map.setCenter(position, 15);

                // var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
                // L.tileLayer(
                //   'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                //       attribution: 'Map data &copy; ' + mapLink,
                //       maxZoom: 16,
                // }).addTo(map);

                // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png?').addTo(map);


            //***************************************************************************************

            // leaflet-routing-machine

                // var routingMachine = L.Routing.control({
                //     waypoints: [
                //     L.latLng(-6.255172, 106.798665),
                //     L.latLng(-6.193758, 106.801614)
                //     ]
                // }).addTo(map);
                // var waypoints = routingMachine.getWaypoints();
                // alert(JSON.stringify(waypoints));

            //------------------------------------------------------------------------------


            var location1 = {
                lng : 106.798665,
                lat : -6.255172
            };
            var location2 = {
                lng : 106.801614,
                lat : -6.193758
            };

            ApiFactory.getShortestPath(location1,location2).then(function (rawWaypoints) {
                var waypoints = getWaypoints(rawWaypoints);
                console.log(waypoints);
                alert(waypoints.length);

                var line = L.polyline(waypoints, {snakingSpeed: 100});
    line.addTo(map).snakeIn();

                // for (var i = 0; i < waypoints.length - 1; i++) {
                //     // $timeout(function () {
                //         animateMarker( waypoints[i],waypoints[i+1]);
                //     // }, 200);
                // }

              //   async.eachOfSeries(waypoints, function iterator(waypoint, i, callback) {
              //       if(i < waypoints.length-1){
              //         $timeout(function () {
              //           animateMarker( waypoints[i],waypoints[i+1]);
              //           callback(null);
              //       }, 500);
              //     }
              // }, function done() {});

                // waypoints.forEach(function(waypoint,i){
                //      $timeout(function () {
                //         animateMarker( waypoints[i],waypoints[i+1]);
                //     }, 2000);
                // });
            });


        // var myMovingMarker = L.Marker.movingMarker([[-6.255172, 106.798665],[-6.193758, 106.801614]],
        //     [200000]).addTo(map);
        // myMovingMarker.start();

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


function getWaypoints(rawWaypoints){
    // var waypoints=[];
    // rawWaypoints.forEach(function(rawWaypoint){
    //     var lng = rawWaypoint.intersections[0].location[0]
    //     var lat = rawWaypoint.intersections[0].location[1];
    //     waypoints.push({
    //         lng: lng,
    //         lat: lat
    //     });
    // });
    // return waypoints;

    var waypoints=[];
    rawWaypoints.forEach(function(rawWaypoint){
        var lng = rawWaypoint.intersections[0].location[0]
        var lat = rawWaypoint.intersections[0].location[1];
        waypoints.push([lat,lng]);
    });
    return waypoints;
}

function animateMarker(waypoint1, waypoint2){

    // var newLatLng = new L.LatLng(waypoint1.lat, waypoint1.lng);
    // marker.setLatLng(newLatLng); 

    // L.marker([waypoint1.lat, waypoint1.lng]).update(marker);
    

    var latlngs = [[waypoint1.lat, waypoint1.lng],[waypoint2.lat, waypoint2.lng]];
    var line = L.polyline(latlngs, {snakingSpeed: 100});
    line.addTo(map).snakeIn();


    // var line = L.polyline([[waypoint1.lat, waypoint1.lng],[waypoint2.lat, waypoint2.lng]]);
    // var animatedMarker = L.animatedMarker(line.getLatLngs(), {
    //       interval: 2000, // milliseconds
    //   });
    // map.addLayer(animatedMarker);
}











