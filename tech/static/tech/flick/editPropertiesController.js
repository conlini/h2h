techApp.controller("EditPropertiesController" , ["$scope", "$http", "$mdDialog", function($scope, $http, $mdDialog){
    $http.get("/tech/rest/categories").then(function(result){
        $scope.categories = result.data["children"]
        console.log($scope.categories)

    }, function(error){})
}]);
