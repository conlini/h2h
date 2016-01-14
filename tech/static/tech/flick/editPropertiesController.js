techApp.controller("EditPropertiesController", ["$scope", "$http", "$mdDialog", function ($scope, $http, $mdDialog) {
    $scope.got_properties = false;
    $scope.edit_mode = false;
    $scope.new_properties = 0;
    $http.get("/tech/rest/categories").then(function (result) {
        $scope.categories = result.data["children"]
        $scope.selected_category = result.data
        console.log($scope.categories)

    }, function (error) {
    })
    $scope.get_properties_for_categories = function (cat) {
        $scope.selected_category = cat;
        $http.get("/tech/rest/" + cat._id + "/properties").then(function (result) {
            $scope.properties = result.data;
            $scope.got_properties = true;
            $scope.original_prop_length = $scope.properties.length
        }, function (error) {
        });
    }
    $scope.edit_properties = function () {
        $scope.edit_mode = true;
    }
    $scope.add_new_property = function () {
        $scope.properties.push({"property_name": "", "property_value": ""})
        $scope.new_properties += 1;
    }

    $scope.save_properties = function () {
        $http.post("/tech/rest/" + $scope.selected_category._id + "/properties/save/", $scope.properties).then(function (result) {
            $scope.edit_mode = false;
        }, function (error) {
        })
    }

    $scope.cancel_edit = function() {
        for (var i = 0; i < $scope.new_properties; i++) {
            $scope.properties.pop()
        }
        $scope.edit_mode = false;
    }

}]);
