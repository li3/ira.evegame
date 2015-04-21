(function(ng) {

  var manifest = {
    name: "iraSelectOnclick",
    type: "directive",
    module: 'ira.naming',
    dependencies: []
  };

  var iraSelectOnclick = function() {
    return {
      restrict: 'EA',
      scope: {},
      link: function(scope, element) {
        element.on('click', function() {
          element.select();
        });
      }
    };
  };

  ng.registerManifest(manifest, iraSelectOnclick);
}(angular));