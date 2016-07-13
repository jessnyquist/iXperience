var app= angular.module('chummiesApp',['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'FeedCtrl',
		templateUrl: 'templates/home.html',
	})
	$routeProvider.when('/me', {
		controller: 'MeCtrl',
		templateUrl: 'templates/me.html',
	})


});

app.controller('FeedCtrl', function($scope, $http){
	$scope.isSearching = false;
	$scope.propsArray=[];
	$scope.errorMessage= "";
	$http({
		url: 'http://ixchommies.herokuapp.com/props',
		method: 'GET',
		params: {
			'token': "9d3600ed05dd4a79a3238bc5dd79e06f"
		}
	}).then(function(response){
		$scope.response = response;
	});

	$http({
		url: 'http://ixchommies.herokuapp.com/brus',
		method: 'GET',
		params: {
			'token': "9d3600ed05dd4a79a3238bc5dd79e06f"
		}
	}).then(function(response){
		$scope.brus = response.data;
	});

	$scope.sendProps = function(){
		$scope.isSearching = true;
		$scope.errorMessage= "";
		console.log($scope.selectedBru);
		console.log($scope.newPropsValue);
		$http({
			url: 'http://ixchommies.herokuapp.com/props',
			method: 'POST',
			params: {
				'token': "9d3600ed05dd4a79a3238bc5dd79e06f",
			},

			data: {
				'for': $scope.selectedBru,
				'props': $scope.newPropsValue
			}

		}).then(function(response){
			$scope.reloadFeed();
		}).catch(function(response){
			console.log(response);
			$scope.errorMessage = response.data.message;
		}).finally(function(response){
			$scope.isSearching = false;
		});
	}

	$scope.reloadFeed = function(){
		$http({
			url: "http://ixchommies.herokuapp.com/props",
			method: 'GET',
			params: {
				'token': "9d3600ed05dd4a79a3238bc5dd79e06f"
			}
		}).then(function(response){
			console.log(response);
			$scope.propsArray = response.data;
		});
	}
});

app.controller('MeCtrl', function($scope, $http){
	$http({
		url: "http://ixchommies.herokuapp.com/props/me",
		method: 'GET',
		params: {
			'token': "9d3600ed05dd4a79a3238bc5dd79e06f"
		}
	}).then(function(response){
		console.log(response);
		$scope.myProps = response.data;
	});

});