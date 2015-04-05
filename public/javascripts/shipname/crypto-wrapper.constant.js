(function(ng) {

  var manifest = {
    name: "$cryptojs",
    type: "constant",
    module: 'ira.naming',
    dependencies: []
  };

  var implementation = {
    md5: function(value) {
      return '???';
    }
  }

  ng.registerManifest(manifest, implementation);
}(angular))