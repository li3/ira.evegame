(function(ng) {
  var manifest = {
    name: "ShipnameGeneratorController",
    type: "controller",
    module: 'ira.naming',
    dependencies: ['$scope', 'shipnameGeneratorService']
  };

  var ShipnameGeneratorController = function($scope, shipnameGeneratorService) {
    var self = this;

    self.name = '';
    self.formatted = '';

    function onInputNameChange(value) {
      self.formatted = shipnameGeneratorService.formatName(value);
    }

    function activate() {
      $scope.$watch(function() { return self.name; }, onInputNameChange);
    }

    activate();
  };

  ng.registerManifest(manifest, ShipnameGeneratorController);
}(angular));