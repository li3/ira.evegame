(function(ng) {

  var manifest = {
    name: "$cryptojs",
    type: "constant",
    module: 'ira.naming',
    dependencies: []
  };

  var implementation = {
    md5: function(value) {
      return (value) ? 'xxx'; //window.CryptoJS.MD5(value) : null;
    }
  }

  ng.registerManifest(manifest, implementation);
}(angular))