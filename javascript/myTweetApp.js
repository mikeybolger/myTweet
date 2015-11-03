//myTweet.js
var app = angular.module"myTweet"("myTweet", []);

app.controller("mainController", function($scope){
	$scope.posts = []; //retrieve posts placeholder
	$scope.newPost = {created_by: " ", text: " ", created_at: " "};

	//Create a posts function to be called in the app
	$scope.post = function(){
		$scope.newPost.created_at = Data.now();
		$scope.posts.push($scope.newPost);
		$scope.newPost = {created_by: " ", text: " ", created_at: " "};
	};
});