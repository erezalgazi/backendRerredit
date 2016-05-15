app.controller('MainCtrl', ['$scope','posts', function($scope, posts){
  $scope.posts = posts;

  $scope.addPost = function() {
    if ($scope.title === '') { return; }
    $scope.posts.push({ 
      title: $scope.title, 
      link: $scope.link,
      upvotes: 0,
      comments: [
        { author: 'Joe', body: 'Cool post!', upvotes: 0 },
        { author: 'Bob', body: 'Bad post!', upvotes: 3 },
        { author: 'Jim', body: 'Ok post!', upvotes: 1 }
      ]
    });
    $scope.title = '';
    $scope.link = '';
  }

  $scope.incrementUpvotes = function(item) {
    item.upvotes += 1;
  }
}]);