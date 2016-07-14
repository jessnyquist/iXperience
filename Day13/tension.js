var app = angular.module('tensionApp',['ngRoute', 'firebase']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'ListCtrl',
		templateUrl: 'templates/list.html',
	})
	$routeProvider.when('/channel/:channelId',{
		controller: 'ChannelCtrl',
		templateUrl: 'templates/channel.html',
	})
});

app.controller('ListCtrl', function($scope, $firebaseArray, $firebaseObject){
 var ref = firebase.database().ref().child('channels');
 $scope.channels= $firebaseObject(ref);
 $scope.channels.$save();
 



});

app.controller('ChannelCtrl', function($scope, $firebaseObject, $routeParams){
var ref = firebase.database().ref().child('messages').child($routeParams.channelId);
$scope.messages=$firebaseArray(ref);

$scope.sendMessage = function(){
	$scope.messages.$add({
		sender: $scope.userName,
		text: $scope.newMessage,
		created_at: Data.now()
	});
	$scope.newMessage= "";

};
});