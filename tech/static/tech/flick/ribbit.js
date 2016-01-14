var techApp = angular.module('tech_app', ['ngMaterial']);
// we need to change the template start/end tags as they conflict
// with  ones provided by Django
techApp.config(function($interpolateProvider){
	$interpolateProvider.startSymbol("{$");
	$interpolateProvider.endSymbol("$}")
})

techApp.filter('default', [function(){
  return function(value, def) {
    return value || def;
  };
}]);

var edit_product_template = '<md-dialog aria-label="Comparison">' +
                        '<md-toolbar>' +
                            '<div class="md-toolbar-tools">' +
                                '<h2 ng-show="edit">Edit {$ product.name $}</h2>' +
                                '<h2 ng-show="!edit">Add <input id="product_name" value="{$product.name$}a"></h2>' +
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
                                        '<th>Property Name</th>' +
                                        '<th>Property Value</th>' +
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
