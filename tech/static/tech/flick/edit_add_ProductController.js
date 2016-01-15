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

    $scope.query = {"filters": [], "category": 1};
    $scope.got_properties = false;

    $scope.getProductForCategory = function (cat) {
        $scope.query["category"] = cat._id;
        $scope.selected_category = cat
        $http.post("/tech/rest/query/", {
            "query": $scope.query
        }).then(function (response) {
            $scope.product_results = response.data.filteredData;
            console.log($scope.product_results.length)
        }, function (error) {
        });
        $http.get("/tech/rest/" + cat._id + "/properties").then(function (result) {
            $scope.properties = result.data;
            $scope.property_names = []
            $scope.properties.forEach(function (p) {
                $scope.property_names.push(p["property_name"])
            });
            $scope.got_properties = true;
            $scope.original_prop_length = $scope.properties.length
        }, function (error) {
        });
    }

    $scope.editProduct = function (product, ev, edit) {
        var prod_properties = []
        product.parameters.forEach(function (p) {
            prod_properties.push(p["param_name"]);
        })
        jQuery.grep($scope.property_names, function (el) {
            if (jQuery.inArray(el, prod_properties) == -1) {
                product.parameters.push({"param_name": el, "param_value": ""})
            }
        })
        $mdDialog.show({
                controller: EditProductDialogController,
                template: edit_product_template,
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                targetEvent: ev,
                locals: {
                    product: product,
                    edit: edit,
                    category: $scope.selected_category,
                    category_products : $scope.product_results
                }
            })
            .then(function (answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });
    }
    function EditProductDialogController($scope, $mdDialog, $http, product, edit, category, category_products) {
        $scope.product = product;
        $scope.edit = edit;
        $scope.cat_products = category_products;
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
            product["category"] = category.name
            var data = [product]
            $http.post("/tech/rest/items/save/", data)
            $mdDialog.hide();
            $scope.cat_products.push(product)
        }
    }

    $scope.add_product = function (ev) {
        var product = {"name": "", "description": "", "parameters": []}
        $scope.property_names.forEach(function (e) {
            product.parameters.push({"param_name": e, "param_value": ""});
        })
        $scope.editProduct(product, ev, false)

    }

    $scope.$watch('selected.id', function (id) {
        //delete $scope.selected.value;
        angular.forEach($scope.data, function (attr) {
            if (attr.id === id) {
                $scope.selectedAttr = attr;
            }
        });
    });
}]);