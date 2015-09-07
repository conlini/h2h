var techApp = angular.module('tech_app', []);
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