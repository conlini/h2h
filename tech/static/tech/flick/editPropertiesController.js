techApp.controller("EditPropertiesController" , ["$scope", "$http", "$mdDialog", function($scope, $http, $mdDialog){
    $scope.got_properties = false;
    $scope.edit_mode = true;
    $http.get("/tech/rest/categories").then(function(result){
        $scope.categories = result.data["children"]
        $scope.selected_category = result.data["name"]
        console.log($scope.categories)

    }, function(error){})
    $scope.get_properties_for_categories = function(cat) {
        $scope.selected_category = cat.name;
        $http.get("/tech/rest/cat.id/properties").then(function(result){
            $scope.properties = result.data;
            $scope.got_properties = true;
        }, function(error){});
    }
    $scope.edit_properties = function() {
        $scope.edit_mode = true;
    }
    
}]);
