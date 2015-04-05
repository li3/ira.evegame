(function(ng) {

  var manifest = {
    name: "iraShipnameGenerator",
    type: "directive",
    module: 'ira.naming',
    dependencies: []
  };

  var implementation = function() {
    return {
      restrict: 'EA',
      scope: {},
      controller: 'ShipnameGeneratorController',
      controllerAs: 'shipnameGenerator',
      templateUrl: '/javascripts/shipname/shipname-generator.template.html'
    }
  };

  ng.registerManifest(manifest, implementation);
}(angular))