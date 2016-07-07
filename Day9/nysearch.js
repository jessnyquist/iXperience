var app = angular.module('nytimesApp', []);
app.controller('nytimesCtrl', function($scope,$http) {
	var API_KEY = '71f7bf7b04be422db6b8912932c2001d';
	$scope.searchNow= function(){
		$http({
		url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
		method: 'GET',
		params: {
			'api-key': API_KEY,
			'q': $scope.searchTerm
		}
	}).then(function(response){
		console.log(response);
		$scope.articles=response.data.response.docs;
		console.log($scope.articles);
		$scope.searchTerm= "";
	});
}

});