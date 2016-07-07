var app = angular.module('calculatorApp', []);
app.controller('CalculatorCtrl', function($scope) {
	$scope.doAdd = function(){
		var numX = parseInt($scope.x);
		var numY = parseInt($scope.y);
		$scope.result = numY + numX;
	}

	$scope.doTimes = function(){
		var numX = parseInt($scope.x);
		var numY = parseInt($scope.y);
		$scope.result = numY * numX;
	}
});