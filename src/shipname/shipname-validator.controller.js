(function(ng) {
  var manifest = {
    name: "ShipnameValidatorController",
    type: "controller",
    module: 'ira.naming',
    dependencies: ['$scope', 'dscanParser', 'shipTypes', 'shipnameGeneratorService']
  };

  var ShipnameValidatorController = function($scope, dscanParser, shipTypes, shipnameGeneratorService) {
    var self = this;

    self.dscan = '';
    self.results = [];
    self.filtered = [];
    self.filterState = 'Ships Only';

    self.clearDscanInput = function() {
      self.dscan = '';
    };

    self.toggleFilterState = function() {
      if (self.filterState === 'Ships Only') {
        self.filterState = 'Show All';
      } else {
        self.filterState = 'Ships Only';
      }
    };

    self.filterResults = function() {
      self.filtered = self.results;
      for(var i = 0; i < self.filtered.length; i++) {
        self.filtered[i].show = true;
        self.filtered[i].valid = validateName(self.filtered[i].name);

        if (self.filterState === 'Ships Only') {
          var type = self.filtered[i].type;
          self.filtered[i].show = (shipTypes.indexOf(type) >= 0);
        }
      }
    };

    function parseFullname(value) {
      return {
        name: value.substring(6, value.length),
        tag: value.substring(0, 5)
      };
    }

    function validateName(value) {
      var parsed = parseFullname(value);
      var generatedName = shipnameGeneratorService.formatName(parsed.name);
      var valid = (generatedName === value);
      return valid;
    }

    function onDscanChange(value) {
      self.results = dscanParser.parse(value);
      self.filterResults();
    }

    function onFilterStateChange() {
      self.filterResults();
    }

    function activate() {
      $scope.$watch(function() { return self.dscan; }, onDscanChange);
      $scope.$watch(function() { return self.filterState; }, onFilterStateChange);
    }

    activate();
  };

  ng.registerManifest(manifest, ShipnameValidatorController);
}(angular));