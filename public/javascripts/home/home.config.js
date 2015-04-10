(function(ng) {

  var dependencies = ['$stateProvider', '$urlRouterProvider'];

  function implementation($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('root', {
        abstract: true,
        url: '',
        template: '<div data-ui-view="body"></div>'
      });

    $stateProvider
      .state('root.home', {
        url: '/',
        views: {
          body: {
            controller: 'HomeController as home',
            templateUrl: '/javascripts/home/home.template.html'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

  dependencies.push(implementation)

  ng.module('app').config(implementation);

}(angular))