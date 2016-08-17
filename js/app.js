var app = angular.module('AngularMovieDB', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/splash.html',
      controller: 'SearchController'
    })
    // .when('/id/:movieId', {
    //   templateUrl: 'partials/show.html',
    //   controller: 'ShowController'
    // })
    .otherwise('/')
})
