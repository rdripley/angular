declare var angular: any;
namespace MyApp {
  // Angular Module
  angular.module('MyApp', ['ui-router']).config(($stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

    });
}
