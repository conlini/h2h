/**
 * Created by adityabhasin on 14/01/16.
 */
techApp.controller("EditAddProductController", ["$scope", "$http", "$mdDialog", function ($scope, $http, $mdDialog) {
    $http.get("/tech/rest/categories").then(function (result) {
        $scope.categories = result.data["children"]
        $scope.selected_category = result.data
        console.log($scope.categories)

    }, function (error) {
    })

    $scope.query = {"filters" : [], "category" : 1}

    $scope.getProductForCategory = function (cat) {
        $scope.query["category"] = cat._id
        $scope.selected_category = cat
        $http.post("/tech/rest/query/", {
            "query": $scope.query
        }).then(function (response) {
            $scope.product_results = response.data.filteredData;
            console.log($scope.product_results.length)
        }, function (error) {
        })
    }

    $scope.editProduct = function(product) {

    }
}]);