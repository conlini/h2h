/**
    A dummy feeder to provide all data to the front end for speedy developement.
    This js will document expectant result types and API calls that will be invoked on the server.

    All gaps will be marked to be ported into controller.js and will need dev on
    server.
**/
techApp.controller('AppController', ['$scope', function($scope) {

}]);
techApp.controller('FilterController', ['$scope', "$http", '$document', function($scope, $http, $document) {
    // fetch the filters on load of the page
    // /tech/rest/filters

    // CHANGE 
    // hard code category
    $scope.selected_category = "cat1"
    $scope.filters = static_data.filters
    $scope.filter_meta = static_data.filter_meta
    $scope.filter_select = function(clickevent) {
            // invoke the query api over here to get the filtered
            // CHANGE START
        var dataset =clickevent.target.dataset;
        var query = { "category" : $scope.selected_category, "filters" : [] }
        var key = dataset.key
        var type = $scope.filter_meta[key]
        if(type === "BOOL") {
            var o = {};
            o[key] = [clickevent.target.checked]
            query['filters'].push(o)
        } else if (type === "INT") {
            var min = document.getElementById(dataset.minid).value;
            var max = document.getElementById(dataset.maxid).value;
            var o = {};
            o[key] = [min, max]
            query['filters'].push(o)
        }
        $scope.products = static_data.filterResults(query);
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


techApp.controller('ProductsController', ['$scope', '$http', function($scope, $http) {
    // /tech/rest/comparisons/recent?count=5
}]);
