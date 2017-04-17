'use strict';
var app = angular.module('DriverTracing', []);
var map;
(function () {

    app.controller('InputLocationController', ['$scope', '$timeout', 'ApiFactory', function ($scope, $timeout, ApiFactory) {
        var mapboxAccessToken = 'pk.eyJ1IjoiaGlyb2tpYXJrIiwiYSI6ImNpeHF4ZTBlbzBiamkzM2x2ZTVmbml5NHcifQ.77MjMgGSZcHGqVRBLBNz2Q';
        map = L.map('map').setView([-6.255172, 106.798665], 15);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
            id: 'mapbox.streets'
            // attribution: ...
        }).addTo(map);

            // map = new OpenLayers.Map("map");
            // map.addLayer(new OpenLayers.Layer.OSM());
            // var fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
            // var toProjection   = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
            // var position       = new OpenLayers.LonLat( 106.798665,-6.255172).transform( fromProjection, toProjection);
            // map.setCenter(position, 15);

            var location1 = {
                lng : 106.798665,
                lat : -6.255172
            };
            var location2 = {
                lng : 106.801614,
                lat : -6.193758
            };
            // ApiFactory.getShortestPath(location1,location2).then(function (rawWaypoints) {
            //     var waypoints = getWaypoints(rawWaypoints);
            //     console.log(waypoints);
            //     alert(waypoints.length);
            //     var line = L.polyline(waypoints, {snakingSpeed: 100});
            //     line.addTo(map).snakeIn();
            // });

            ApiFactory.getWaypoints().then(function (waypoints) {
                console.log(waypoints);
                alert(waypoints.length);
                var line = L.polyline(waypoints, {snakingSpeed: 100});
                line.addTo(map).snakeIn();
            });
    }]);

    app.controller('FooterController', ['$scope', function ($scope) {
        $scope.copyrightLabel = new Date().getFullYear() + ' GO-JEK';
    }]);
})();

// function getWaypoints(rawWaypoints){
//     var waypoints=[];
//     rawWaypoints.forEach(function(rawWaypoint){
//         var lng = rawWaypoint.intersections[0].location[0]
//         var lat = rawWaypoint.intersections[0].location[1];
//         waypoints.push([lat,lng]);
//     });
//     return waypoints;
// }

function animateMarker(waypoint1, waypoint2){
    var latlngs = [[waypoint1.lat, waypoint1.lng],[waypoint2.lat, waypoint2.lng]];
    var line = L.polyline(latlngs, {snakingSpeed: 100});
    line.addTo(map).snakeIn();
}











