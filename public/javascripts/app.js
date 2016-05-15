var app = angular.module('redditFun', ['ui.router']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/templates/home.html',
        controller: 'MainCtrl'
      })
      .state('post', {
        url: '/posts/:id',
        templateUrl: '/templates/posts.html',
        controller: 'PostsCtrl'
      });

      $urlRouterProvider.otherwise('home');
}]);