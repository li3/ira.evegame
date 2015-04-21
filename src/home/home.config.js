(function(ng) {

  function homeConfig($stateProvider, $urlRouterProvider) {
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
            templateUrl: '/templates/home/home.template.html'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

  homeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  ng.module('app').config(homeConfig);
}(angular));