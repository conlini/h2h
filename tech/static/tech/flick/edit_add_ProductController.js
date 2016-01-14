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

    $scope.query = {"filters": [], "category": 1}

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

    var edit_product_template = '<md-dialog aria-label="Comparison">' +
                        '<md-toolbar>' +
                            '<div class="md-toolbar-tools">' +
                                '<h2>Edit {$ product.name $}</h2>' +
                                '<span flex></span>' +
                                '<md-button class="md-icon-button" ng-click="save_product(product)">' +
                                    '<md-icon md-font-set="material-icons"> done </md-icon> ' +
                                '</md-button>' +
                            '</div>' +
                        '</md-toolbar>' +
                        '<md-dialog-content style="max-width:800px;max-height:810px;">' +
                            '<table class="md-table table-striped table-hover">' +
                                '<thead>' +
                                    '<tr>' +
                                        '<th ng-repeat="val in headers">{$val$}</th>' +
                                    '</tr>' +
                                '</thead>' +
                                '<tbody>' +
                                    '<tr ng-repeat="param in product.parameters">' +
                                        '<td>{$param.param_name$}</td>' +
                                         // @RahulMamgain: How do I bind the value of this text field to override the value of param.param_value??
                                        '<td><input type="text" value="{$param.param_value$}"></td>' +
                                    '</tr>' +
                                '</tbody>' +
                            '</table>' +
                        '</md-dialog-content>' +
                    '</md-dialog>';

    $scope.editProduct = function (product, ev) {
        $mdDialog.show({
          controller: EditProductDialogController,
          template: edit_product_template,
          parent: angular.element(document.body),
          clickOutsideToClose:true,
          targetEvent: ev,
          locals: {
            product: product
            }
        })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
    }
    function EditProductDialogController($scope, $mdDialog, product) {
        $scope.product = product;
        $scope.hide = function () {
            $mdDialog.hide();
        };
        $scope.cancel = function () {
            $mdDialog.cancel();
        };
        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        }

        $scope.save_product = function (product) {
            console.log(product);
            $mdDialog.hide();
        }
    }


}]);