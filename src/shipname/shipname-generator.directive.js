(function(ng) {

  var manifest = {
    name: "iraShipnameGenerator",
    type: "directive",
    module: 'ira.naming',
    dependencies: []
  };

  var iraShipnameGenerator = function() {
    return {
      restrict: 'EA',
      scope: {},
      controller: 'ShipnameGeneratorController',
      controllerAs: 'shipnameGenerator',
      templateUrl: '/templates/shipname/shipname-generator.template.html'
    };
  };

  ng.registerManifest(manifest, iraShipnameGenerator);
}(angular));