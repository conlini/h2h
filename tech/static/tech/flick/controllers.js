techApp.controller('filterController', ['$scope', "$http", function($scope, $http) {
	// fetch the filters on load of the page
    $http.get("/tech/rest/filters").then(function(result) {
        $scope.filters = []
        for (var prop in result.data.filters) {
            $scope.filters.push(prop)
        }
        $scope.filter_selected = $scope.filters[0]
    }, function(error) {});
    $scope.filterSelected = function() {
    }
}]).controller('appController', ['$scope', function($scope) {
	// do we really need  multiple controllers at this point. May be overkill of small functionality 
    $scope.showFilters = function() {
        if ($scope.showfilters === true) {
            $scope.showfilters = false;
            $scope.add_btn_label = "Add filters";
        } else {
            $scope.showfilters = true;
            $scope.add_btn_label = "Hide filters";
        }
    }
    $scope.add_btn_label = "Add filters";
}])
