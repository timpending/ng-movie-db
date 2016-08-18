var app = angular.module('AngularMovieDB', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/splash.html',
      controller: 'MoviesController'
    })
    .when('/:id', {
      templateUrl: 'partials/show.html',
      controller: 'ShowController'
    })
  $locationProvider.html5Mode(true);
})
