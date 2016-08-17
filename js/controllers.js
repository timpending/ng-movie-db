app.controller('SearchController', function($scope, $http, MovieSearchService){
  $scope.view = {};
  $scope.view.error = null;
  $scope.submitSearch = function(movieSearch) {
      MovieSearchService.query(movieSearch).then(function(results){
      // console.log(results);
      // console.log('8888');
      $scope.view.movies = results.data.Search
      // console.log($scope.view.movies);
      return $scope.view.movies
    }).then(function(movies){
      console.log(movies);
    $scope.view.movies = movies
  })
  console.log($scope.view.movies);
  // undefined
  }
})
