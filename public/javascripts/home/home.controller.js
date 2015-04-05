(function(ng) {

  var manifest = {
    name: "HomeController",
    type: "controller",
    module: 'app',
    dependencies: []
  };

  var implementation = function() {
    var self = this;

    self.message = "Hello world from AngularJs!";
  };

  ng.registerManifest(manifest, dependencies);
}(angular))