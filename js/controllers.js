app.controller('SearchController', function($scope, $http){
  $scope.view = {};
  $scope.view.error = null;

  $scope.submitSearch = function() {
    var movie = $scope.movieSearch.movie
    console.log(movie);
    console.log('******');
    $http.get('http://www.omdbapi.com/?s='+movie).then(function successCallback(data){
      console.log(data);
      $scope.view.movies = data.data.Search
    }, function errorCallback(response){
      $scope.view.error = 'There was an error with the search.'
    });

  }


})
