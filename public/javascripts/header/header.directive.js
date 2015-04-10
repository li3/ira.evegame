(function(ng) {

  var manifest = {
    name: "iraHeader",
    type: "directive",
    module: 'ira',
    dependencies: []
  };

  var implementation = function() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: '/javascripts/header/header.template.html'
    };
  };

  ng.registerManifest(manifest, implementation);
}(angular))