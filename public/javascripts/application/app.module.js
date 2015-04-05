(function(ng) {
  ng.module('app', []);

  ng.registerManifest = function(manifest, implementation) {
    implementation.$inject = manifest.dependencies;
    ng.module(manifest.module)[manifest.type](manifest.name, implementation);
  };

}(angular))