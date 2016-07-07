var app = angular.module('groceryApp', []);
app.controller('GroceryCtrl', function($scope) {
	$scope.grocerylist= [];
	$scope.isEdit=false;
	$scope.addItem = function(){
		var isNew = true;
		for(var i = 0; i < $scope.grocerylist.length; i++) {
			if($scope.itemname.toLowerCase() === $scope.grocerylist[i].item){
				$scope.grocerylist[i].quantity += parseInt($scope.amount);
				isNew = false;
			}
		}
		if(isNew && isNaN($scope.itemname)){
			var grocery = {
				'item': $scope.itemname.toLowerCase(),
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
		else{
			$scope.delete(item);
		}
		
	}
	$scope.delete = function(item){
		var index = $scope.grocerylist.indexOf(item); 
		$scope.grocerylist.splice(index, 1);
	}
	$scope.deleteAll = function(){
		$scope.grocerylist.splice(0, $scope.grocerylist.length);
	}

});