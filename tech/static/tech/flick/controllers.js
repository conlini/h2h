tech_app.controller('filtersController', ['$scope', "$http", function($scope, $http) {
    $http.get("/tech/rest/filters").then(function(result){
    	$scope.filter = result;
    }, function(error){});
}])
