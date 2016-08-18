var app = angular.module('AngularMovieDB', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
      templateUrl: 'partials/splash.html',
      controller: 'MoviesController'
    })
    // .when('/id/:movieId', {
    //   templateUrl: 'partials/show.html',
    //   controller: 'ShowController'
    // })
    .otherwise('/')
})
