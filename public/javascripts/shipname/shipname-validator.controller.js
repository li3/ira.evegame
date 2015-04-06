(function(ng) {
  var manifest = {
    name: "ShipnameValidatorController",
    type: "controller",
    module: 'ira.naming',
    dependencies: ['$scope', 'dscanParser']
  };

  var implementation = function($scope, dscanParser) {
    var self = this;

    self.dscan = '';
    self.results = [];

    function onDscanChange(value) {
      self.results = dscanParser.parse(value);
    }

    function activate() {
      $scope.$watch(function() { return self.dscan }, onDscanChange);
    }

    activate();
  };

  ng.registerManifest(manifest, implementation);
}(angular))