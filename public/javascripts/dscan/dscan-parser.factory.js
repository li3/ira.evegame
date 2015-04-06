(function(ng) {
  var manifest = {
    name: "dscanParser",
    type: "factory",
    module: 'ira.naming',
    dependencies: []
  };

  var implementation = function() {
    var self = {};

    self.parse = function(value) {
      var lines = value.split('\n');
      var data = [];
      
      for(var i = 0; i < lines.length; i++) {
        var line = lines[i];
        var values = line.split('\t');
        var row = {
          name: values[0],
          type: values[1],
          distance: values[2]
        };

        data.push(row);
      }

      return data;
    };

    return self;
  };

  ng.registerManifest(manifest, implementation);
}(angular))