app.service('MovieSearchService', function($http){
  return {
    query: function(movie) {
      var movie = movie.movie
      return $http.get('http://www.omdbapi.com/?s='+movie)
    },
  results: []
  }
})
