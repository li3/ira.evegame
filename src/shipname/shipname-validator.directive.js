(function(ng) {

  var manifest = {
    name: "iraShipnameValidator",
    type: "directive",
    module: 'ira.naming',
    dependencies: []
  };

  var iraShipnameValidator = function() {
    return {
      restrict: 'EA',
      scope: {},
      controller: 'ShipnameValidatorController',
      controllerAs: 'validator',
      templateUrl: '/templates/shipname/shipname-validator.template.html'
    };
  };

  ng.registerManifest(manifest, iraShipnameValidator);
}(angular));