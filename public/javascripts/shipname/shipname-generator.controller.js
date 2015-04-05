(function(ng) {
  var manifest = {
    name: "ShipnameGeneratorController",
    type: "controller",
    module: 'ira.naming',
    dependencies: ['$scope', '$cryptojs']
  };

  var implementation = function($scope, $cryptojs) {
    var self = this;

    self.name = '';
    self.formatted = '';

    function getTag(value) {
      var hash = $cryptojs.md5(value);
      // do stuff
      return hash;
    }

    function onInputNameChange(value) {
      var tag = getTag(value);
      self.formatted = '[' + tag + '] ' + value;
    }

    function activate() {
      $scope.$watch(function() { return self.name }, onInputNameChange);
    }

    activate();
  };

  ng.registerManifest(manifest, implementation);
}(angular))