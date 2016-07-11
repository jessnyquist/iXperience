var app = angular.module('movieApp',['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'MainCtrl',
		templateUrl: 'templates/home.html',
	})
	$routeProvider.when('/movie/:movieId', {
	controller: 'MovieCtrl',
	templateUrl: 'templates/movies.html',
	})
});

app.controller('MainCtrl', function($scope, $http){
	$scope.searchMovie = function(){
		$http({
			method: 'GET',
			url: 'http://www.omdbapi.com/?',
			params: {
				's': $scope.searchText
			}
		}).then(function(response){
			$scope.movieArray = response.data.Search;
		})
	}
});

app.controller('MovieCtrl', function($scope, $http, $routeParams){
	$http({
		method: 'GET',
		url: 'http://www.omdbapi.com/?',
		params: {
			'i' : $routeParams.movieId
		}

	}).then(function(response){
		$scope.movie = response;
		console.log($scope.movie);
		$scope.getGif();
	});

	$scope.getGif = function(){
	$http({
		method: 'GET',
		url: 'http://api.giphy.com/v1/gifs/translate',
		params: {
			's': $scope.movie.data.Plot,
			'api_key': "dc6zaTOxFJmzC"
		}
	}).then(function(response){
		console.log(response);
		$scope.image = response.data.data.images.original.url;
	})
};

});