(function(ng) {

  var dependencies = ['$stateProvider'];

  function implementation($stateProvider) {
    $stateProvider
      .state('root.chat', {
        url: '/chat',
        views: {
          body: {
            controller: 'ChatController as chat',
            templateUrl: '/javascripts/chat/chat.template.html'
          }
        }
      });
  }

  dependencies.push(implementation)

  ng.module('app').config(implementation);

}(angular))