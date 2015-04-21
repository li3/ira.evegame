(function(ng) {

  var manifest = {
    name: "iraHeader",
    type: "directive",
    module: 'ira',
    dependencies: []
  };

  var iraHeader = function() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: '/templates/header/header.template.html'
    };
  };

  ng.registerManifest(manifest, iraHeader);
}(angular));