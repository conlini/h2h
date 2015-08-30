techApp.controller('FilterController', ['$scope', "$http", '$document', function($scope, $http, $document) {
    // fetch the filters on load of the page
    $http.get("/tech/rest/filters").then(function(result) {
        $scope.filters = result.data.filters
        $scope.filter_meta = result.data.filter_meta
    }, function(error) {});
    $scope.filter_select = function(clickevent) {
        var key = clickevent.target.dataset.key
            // invoke the query api over here to get the filtered
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
    })
}]);


techApp.controller('ProductsController', ['$scope', '$http', function($scope, $http) {
    $http.get("/tech/rest/products?count=10").then(function(result){}, function(error){});
}]);

techApp.controller('AppController', ['$scope', function($scope){

}]);
