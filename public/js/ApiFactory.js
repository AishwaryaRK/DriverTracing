(function () {
    'use strict';
    app.factory('ApiFactory', ['$http',
        function ($http) {
            return {
                // getShortestPath: function (locations) {
                //     var csrf = document.getElementById('csrfid').value;
                //     var data = {
                //         '_csrf': csrf,
                //         'locations': locations
                //     };
                //     return $http.post('/ShortestPathFinder/getShortestPath/locations/', data)
                //         .then(function (data) {
                //             return data.data;
                //         }, xhrErrorHandler);
                // }

                getShortestPath: function (location1, location2) {
                    return $http.get('https://api.mapbox.com/directions/v5/mapbox/driving/'+location1.lng+','+location1.lat+';'+location2.lng+','+location2.lat+'?geometries=polyline&steps=true&alternatives=true&access_token=')
                    .then(function (data) {
                        return data.data.routes[0].legs[0].steps;
                    }, xhrErrorHandler);
                }
            };
        }
        ]);

    function xhrErrorHandler(data, status, headers, config) {
        console.log('failure message: ' +
            JSON.stringify({
                data: data
            }) +
            JSON.stringify({
                status: status
            }) +
            JSON.stringify({
                headers: headers
            }) +
            JSON.stringify({
                config: config
            }));
    }

})();
