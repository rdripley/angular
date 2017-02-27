declare var angular: any;
namespace MyApp {
  angular.module('MyApp', ['ui.router', 'ngResource']).config(
    ($stateProvider, $locationProvider, $urlRouterProvider) => {
      // Define routes
      $stateProvider
      .state('Home', {
        url: '/',
        templateUrl: "./home.html",
      })
      .state('secret', {
        url: '/secret',
        templateUrl: "./secret.html",
        data: {
          requiresAuthentication: true
        }
      })
      .state('public', {
        url: '/public',
        templateUrl: './public.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: './login.html'
      });
      // Enable HTML5 navigation
      $locationProvider.html5Mode(true);
    });

angular.module('MyApp').run(($rootScope, $state, accountService: MyApp.Services.AccountService) => {
  $rootScope.$on('$stateChangeStart', (e, to) => {
    // protect non-public views
    if (to.data && to.data.requiresAuthentication) {
      if (!accountService.isLoggedIn()) {
        e.preventDefault();
        $state.go('login');
      }
    }
  });
});
}
