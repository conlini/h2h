/**
    A dummy feeder to provide all data to the front end for speedy developement.
    This js will document expectant result types and API calls that will be invoked on the server.

    All gaps will be marked to be ported into controller.js and will need dev on
    server.
**/
techApp.controller('FilterController', ['$scope', "$http", '$document', function($scope, $http, $document) {
    // fetch the filters on load of the page
    // /tech/rest/filters

    // CHANGE 
    // hard code category
    $scope.query = {
        "category": "cat1",
        "filters": []
    };
    $scope.product_results = static_data.filterResults($scope.query);
    $scope.filters = static_data.filters
    $scope.filter_meta = static_data.filter_meta
    $scope.visited_filters = {}
    $scope.filter_select = function(clickevent) {
        // invoke the query api over here to get the filtered
        // CHANGE START
        var dataset = clickevent.target.dataset;
        var key = dataset.key
        var type = $scope.filter_meta[key]
        if (type === "BOOL") {
            var o = $scope.visited_filters[key];
            if (o === undefined) {
                // we have never seen this filter before. Create a new obj and push to filters
                o = {}
                $scope.query["filters"].push(o)
                $scope.visited_filters[key] = o
            }

            o[key] = [clickevent.target.checked]
        } else if (type === "INT") {
            var min = Number(document.getElementById(dataset.minid).value);
            var max = Number(document.getElementById(dataset.maxid).value);
            var o = $scope.visited_filters[key];
            if (o === undefined) {
                // we have never seen this filter before. Create a new obj and push to filters
                o = {}
                $scope.query["filters"].push(o)
                $scope.visited_filters[key] = o
            }
            o[key] = [min, max]
        }
        $scope.product_results = static_data.filterResults($scope.query);
    }
    $document.ready(function() {
        var ranges = document.getElementsByClassName("ranges");
        for (var i = ranges.length - 1; i >= 0; i--) {
            var r = ranges[i];
            var slider = new Slider(r.id, {
                min: r.dataset.sliderMin,
                max: r.dataset.sliderMax
            });
            slider.getValue();
        };
    });
}]);
