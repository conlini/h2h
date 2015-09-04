var techApp = angular.module('tech_app', []);
// we need to change the template start/end tags as they conflict
// with  ones provided by Django
techApp.config(function($interpolateProvider){
	$interpolateProvider.startSymbol("{$");
	$interpolateProvider.endSymbol("$}")
})

techApp.filter("split" , function(){
	return function(input, increment) {
		increment = parseInt(increment)
		var answer = []
		var counter = 0
		
	}
});