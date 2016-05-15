app.factory('posts', [function(){
  var posts = [{
      title: 'this is hardcoded', 
      upvotes: 5,
      comments: [
        { author: 'Joe', body: 'Cool post!', upvotes: 0 },
        { author: 'Bob', body: 'Bad post!', upvotes: 3 },
        { author: 'Jim', body: 'Ok post!', upvotes: 1 }
      ]
    }]

  return posts;
}]);