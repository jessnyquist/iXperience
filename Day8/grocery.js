var app = angular.module('groceryApp', []);
app.controller('GroceryCtrl', function($scope) {
	$scope.grocerylist= [];
	$scope.addItem = function(){
		var isNew = true;
		for(var i = 0; i < $scope.grocerylist.length; i++) {
			if($scope.itemname === $scope.grocerylist[i].item){
				$scope.grocerylist[i].quantity += parseInt($scope.amount);
				isNew = false;
			}
		}
		if(isNew){
			var grocery = {
				'item': $scope.itemname,
				'quantity': parseInt($scope.amount)
			};
			$scope.grocerylist.push(grocery);
		}

		$scope.itemname= "";
		$scope.amount = "";
	};
	$scope.plusOne = function(item){
		item.quantity += 1;
	}
	$scope.minusOne = function(item){
		if(item.quantity > 0){
		item.quantity -= 1;
	}
		
	}

});