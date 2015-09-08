techApp.controller('FilterController', ['$scope', "$http", '$document', function($scope, $http, $document) {
    // fetch the filters on load of the page. We init the query and allow filters to be appended as is. 
    $scope.query = {
        "category": "cat1",
        "filters": []
    };
    $scope.visited_filters = {}
    $http.get("/tech/rest/filters").then(function(result) {
        // init the context with the initial filters. We may need to implement a refersh logic but for now data is more statically controlled
        $scope.filters = result.data.filters
        $scope.filter_meta = result.data.filter_meta
    }, function(error) {});

    // on load fetch of filter-free data
    $http.post("/tech/rest/query/", {
        "query": $scope.query
    }).then(function(response) {
        $scope.product_results = response.data.filteredData;
    }, function(error) {})

    // the filter select function is responsible for adding the appropriate filter into the query.
    // For now this addes bool = false as well and expects the server to ignore it
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

    // compare item flag and compare list hold state of products being compared
    $scope.compare_item_flag = {}
    $scope.compare_list = []

    function init_array(size) {
        var answer = []
        for (var i = 0; i < size; i++) {
            answer.push("")
        }
        return answer
    }

    $scope.add_for_compare = function(item, add) {
        $scope.compare_item_flag[item.name] = add;
        if (add) {
            $scope.compare_list.push(item)
        } else {
            $scope.compare_list.splice($scope.compare_list.indexOf(item), 1)
        }
    }

    // this function is responsible for preparing data for presentation. it should be quick and painfree as will affect user experience
    // doing a 2 pass may be dangerously slow, although at max we will have 3 items to compare, however this limitation may be lifted and may break future 
    // developers down
    $scope.show_compare = function() {
        $scope.compare_headers = Object.keys($scope.compare_item_flag)
        $scope.compare_headers.unshift("Parameters")
        $scope.compare_parameters = {}
        $scope.compare_list.forEach(function(item, itemIndex) {
            item.parameters.forEach(function(p) {
                if (p.param_name != "name") {
                    var x = $scope.compare_parameters[p.param_name]
                    if (!x) {
                        x = init_array($scope.compare_list.length)
                        $scope.compare_parameters[p.param_name] = x
                    }
                    $scope.compare_parameters[p.param_name][itemIndex] = p.param_value;
                }
            })


        });
        // the presetnR
        $scope.presentResults = true;
        console.log($scope.compare_parameters)

    }
}]);;
