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

    $http.post("/tech/rest/query/", {
        "query": $scope.query
    }).then(function(response) {
        $scope.product_results = response.data.filteredData;
    }, function(error) {})
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
        $http.post("/tech/rest/query/", {
            "query": $scope.query
        }).then(function(response) {
            $scope.product_results = response.data.filteredData;
        }, function(error) {})
    }
    $scope.compare_item_flag = {}
    $scope.compare_list = []
    $scope.add_for_compare = function(item, add) {
        $scope.compare_item_flag[item.name] = add;
        if (add) {
            $scope.compare_list.push(item)
        } else {
            $scope.compare_list.splice($scope.compare_list.indexOf(item), 1)
        }
    }

    $scope.show_compare = function() {
        $scope.compare_headers = Object.keys($scope.compare_item_flag)
        $scope.compare_headers.unshift("Parameters")
        $scope.compare_parameters = {}
        $scope.compare_list.forEach(function(item) {
            item.parameters.forEach(function(p) {
                if (p.param_name != "name") {
                    var x = $scope.compare_parameters[p.param_name]
                    if (!x) {
                        x = [p.param_name]
                        $scope.compare_parameters[p.param_name] = x
                    }
                    $scope.compare_parameters[p.param_name].push(p.param_value)
                }
            })


        });
        $scope.presentResults = true;

    }
}]);;
