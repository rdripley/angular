namespace MyApp.Services {

  export class MovieService {
    private MovieResource;

    public listMovies() {
      return this.MovieResource.query();
    }

    constructor($resource) {
      this.MovieResource = $resource('/api/movies');
    }
  }

  angular.module('MyApp').service('movieService', MovieService);

  export class AccountService {
    public isLoggedIn() {
      return false;
    }
  }

  angular.module('MyApp').service('accountService', AccountService);
}
