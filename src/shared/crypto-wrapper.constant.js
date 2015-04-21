(function(ng) {

  var manifest = {
    name: "$cryptojs",
    type: "constant",
    module: 'ira.naming',
    dependencies: []
  };

  var $cryptojs = {
    md5: function(value) {
      return (value) ? window.CryptoJS.MD5(value) : null;
    }
  };

  ng.registerManifest(manifest, $cryptojs);
}(angular));