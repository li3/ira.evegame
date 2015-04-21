(function(ng) {

  var dependencies = ['$stateProvider'];

  function chatConfig($stateProvider) {
    $stateProvider
      .state('root.chat', {
        url: '/chat',
        views: {
          body: {
            controller: 'ChatController as chat',
            templateUrl: '/templates/chat/chat.template.html'
          }
        }
      });
  }

  chatConfig.$inject = ['$stateProvider'];
  ng.module('app').config(chatConfig);

}(angular));