(function(ng) {

  var manifest = {
    name: "$cryptojs",
    type: "constant",
    module: 'ira.naming',
    dependencies: []
  };

  var implementation = {
    md5: function(value) {
      return (value) ? window.CryptoJS.MD5(value) : '???';
    }
  }

  ng.registerManifest(manifest, implementation);
}(angular))