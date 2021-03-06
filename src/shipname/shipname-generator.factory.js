(function(ng) {
  var manifest = {
    name: "shipnameGeneratorService",
    type: "factory",
    module: 'ira.naming',
    dependencies: ['$cryptojs']
  };

  var shipnameGeneratorService = function($cryptojs) {
    var self = {};

    self.getTag = function(value) {
      if (!value)
        return '???';

      var hash = $cryptojs.md5(value).toString();
      var tag = hash.substr(hash.length - 3);
      return tag;
    };

    self.formatName = function(value) {
      var tag = self.getTag(value);
      return '[' + tag + '] ' + value;
    };

    return self;
  };

  ng.registerManifest(manifest, shipnameGeneratorService);
}(angular));