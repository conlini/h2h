techApp.controller('FilterController', ['$scope', "$http", '$document', function($scope, $http, $document) {
    // fetch the filters on load of the page
    $scope.query = {
        "category": "cat1",
        "filters": []
    };
    $scope.visited_filters = {}
    $http.get("/tech/rest/filters").then(function(result) {
        $scope.filters = result.data.filters
        $scope.filter_meta = result.data.filter_meta
    }, function(error) {});
    $scope.filter_select = function(clickevent) {
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
        // invoke the query api over here to get the filtered
        $http.post("/tech/rest/query/", {"query": $scope.query}).then(function(response) {
            $scope.product_results = response.data.filteredData;
        }, function(error) {})
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
}]);;
