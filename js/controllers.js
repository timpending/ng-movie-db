app.controller('SearchController', function($scope, $http, MovieSearchService, $route, $location){
  $scope.view = {};
  $scope.view.error = null;
  $scope.submitSearch = function() {
    MovieSearchService.query($scope.movieSearch).then(function(results){
      MovieSearchService.results = results.data.Search
      $route.reload();
    })
  }
})

app.controller('MoviesController', function ($scope, MovieSearchService, $location, $http) {
  $scope.view = {};
  // $scope.view.error = null;
  $scope.view.movies = MovieSearchService.results;
  // $scope.submitSearch = function() {
  //   MovieSearchService.query($scope.movieSearch).then(function(results){
  //     MovieSearchService.results = results.data.Search
  //     $location.path('/');
    // })
  // }
})
