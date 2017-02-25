declare var angular: any;
console.log(ng);
namespace MyApp {
  // Angular Module
  angular.module('MyApp', ['ui-router']).config(($stateProvider,
    $locationProvider, $urlRouterProvider) => {
      $stateProvider
      .state('Home', {
                url: '/',
                templateUrl: "ngApp/page1.html",
                controller: MyApp.Controllers.Page1Controller,
                controllerAs: 'controller'
            })
            .state('Page1', {
                url: '/page1',
                templateUrl: "ngApp/page1.html",
                controller: MyApp.Controllers.Page1Controller
            })
            .state('Page2', {
                url: '/page2',
                templateUrl: "ngApp/page2.html",
                controller: MyApp.Controllers.Page2Controller,
                controllerAs: 'controller'
            });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });
}
