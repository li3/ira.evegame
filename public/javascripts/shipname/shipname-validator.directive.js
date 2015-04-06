(function(ng) {

  var manifest = {
    name: "iraShipnameValidator",
    type: "directive",
    module: 'ira.naming',
    dependencies: []
  };

  var implementation = function() {
    return {
      restrict: 'EA',
      scope: {},
      controller: 'ShipnameValidatorController',
      controllerAs: 'validator',
      templateUrl: '/javascripts/shipname/shipname-validator.template.html'
    }
  };

  ng.registerManifest(manifest, implementation);
}(angular))