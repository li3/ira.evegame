(function(ng) {
  ng.registerManifest = function(manifest, implementation) {
    implementation.$inject = manifest.dependencies;
    ng.module(manifest.module)[manifest.type](manifest.name, implementation);
  };
}(angular));
(function(ng) {
  var dependencies = [
    'ui.router',
    'ira',
    'ira.naming'
  ];

  ng.module('app', dependencies);
}(angular));
(function(ng) {
  ng.module('ira', ['ui.router']);
}(angular));
(function(ng) {
  ng.module('ira.naming', []);
}(angular));
(function(ng) {

  var dependencies = ['$stateProvider'];

  function chatConfig($stateProvider) {
    $stateProvider
      .state('root.chat', {
        url: '/chat',
        views: {
          body: {
            controller: 'ChatController as chat',
            templateUrl: '/templates/chat/chat.template.html'
          }
        }
      });
  }

  chatConfig.$inject = ['$stateProvider'];
  ng.module('app').config(chatConfig);

}(angular));
(function(ng) {

  var manifest = {
    name: "ChatController",
    type: "controller",
    module: 'app',
    dependencies: []
  };

  var ChatController = function() {
    var self = this;
  };

  ng.registerManifest(manifest, ChatController);
}(angular));
(function(ng) {
  var manifest = {
    name: "dscanParser",
    type: "factory",
    module: 'ira.naming',
    dependencies: []
  };

  var dscanParser = function() {
    var self = {};

    self.parse = function(value) {
      var lines = value.split('\n');
      var data = [];
      
      for(var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (!line)
          continue;
        
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

  ng.registerManifest(manifest, dscanParser);
}(angular));
(function(ng) {

  var manifest = {
    name: "iraHeader",
    type: "directive",
    module: 'ira',
    dependencies: []
  };

  var iraHeader = function() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: '/templates/header/header.template.html'
    };
  };

  ng.registerManifest(manifest, iraHeader);
}(angular));
(function(ng) {

  function homeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('root', {
        abstract: true,
        url: '',
        template: '<div data-ui-view="body"></div>'
      });

    $stateProvider
      .state('root.home', {
        url: '/',
        views: {
          body: {
            controller: 'HomeController as home',
            templateUrl: '/templates/home/home.template.html'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

  homeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  ng.module('app').config(homeConfig);
}(angular));
(function(ng) {

  var manifest = {
    name: "HomeController",
    type: "controller",
    module: 'app',
    dependencies: []
  };

  var HomeController = function() {
    var self = this;
  };

  ng.registerManifest(manifest, HomeController);
}(angular));
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
(function(ng) {
  var manifest = {
    name: "shipTypes",
    type: "constant",
    module: 'ira.naming',
    dependencies: []
  };

  var shipTypes = [
    'Abaddon',
    'Absolution',
    'Aeon',
    'Algos',
    'Anathema',
    'Anshar',
    'Apocalypse',
    'Apocalypse Navy Issue',
    'Apocalypse Imperial Issue',
    'Apotheosis',
    'Arazu',
    'Arbitrator',
    'Archon',
    'Ares',
    'Ark',
    'Armageddon',
    'Ashimmu',
    'Astarte',
    'Astero',
    'Atron',
    'Augoror',
    'Augoror Navy Issue',
    'Avatar',
    'Badger',
    'Bantam',
    'Basilisk',
    'Bellicose',
    'Bestower',
    'Bhaalgorn',
    'Blackbird',
    'Breacher',
    'Broadsword',
    'Brutix',
    'Burst',
    'Bustard',
    'Buzzard',
    'Caldari Navy Hookbill',
    'Caracal',
    'Catalyst',
    'Celestis',
    'Cerberus',
    'Chameleon',
    'Cheetah',
    'Chimera',
    'Claw',
    'Claymore',
    'Coercer',
    'Condor',
    'Confessor',
    'Corax',
    'Cormorant',
    'Covetor',
    'Crane',
    'Crow',
    'Crucifier',
    'Cruor',
    'Crusader',
    'Curse',
    'Cyclone',
    'Cynabal',
    'Damnation',
    'Daredevil',
    'Deimos',
    'Devoter',
    'Dominix',
    'Dragoon',
    'Drake',
    'Dramiel',
    'Eagle',
    'Enyo',
    'Eos',
    'Erebus',
    'Eris',
    'Executioner',
    'Exequror',
    'Exequror Navy Issue',
    'Falcon',
    'Ferox',
    'Flycatcher',
    'Federation Navy Comet',
    'Gila',
    'Gnosis',
    'Gold Magnate',
    'Golem',
    'Goru\'s Shuttle',
    'Griffin',
    'Guardian',
    'Guardian-Vexor',
    'Guristas Shuttle',
    'Harbinger',
    'Harpy',
    'Hawk',
    'Hel',
    'Helios',
    'Heretic',
    'Heron',
    'Hoarder',
    'Hound',
    'Huginn',
    'Hulk',
    'Hurricane',
    'Hyena',
    'Hyperion',
    'Ibis',
    'Imicus',
    'Impairor',
    'Impel',
    'Imperial Navy Slicer',
    'Incursus',
    'Inquisitor',
    'Ishkur',
    'Ishtar',
    'Iteron',
    'Jaguar',
    'Keres',
    'Kestrel',
    'Kitsune',
    'Kronos',
    'Lachesis',
    'Legion',
    'Leviathan',
    'Loki',
    'Machariel',
    'Mackinaw',
    'Maelstrom',
    'Magnate',
    'Malediction',
    'Maller',
    'Mammoth',
    'Manticore',
    'Mastodon',
    'Maulus',
    'Megathron',
    'Megathron Federate Issue',
    'Megathron Navy Issue',
    'Merlin',
    'Moa',
    'Moros',
    'Muninn',
    'Myrmidon',
    'Naga',
    'Naglfar',
    'Navitas',
    'Nemesis',
    'Nidhoggur',
    'Nighthawk',
    'Nightmare',
    'Nomad',
    'Nyx',
    'Occator',
    'Omen',
    'Omen Navy Issue',
    'Oneiros',
    'Onyx',
    'Oracle',
    'Orca',
    'Osprey',
    'Osprey Navy Issue',
    'Paladin',
    'Panther',
    'Phantasm',
    'Phobos',
    'Phoenix',
    'Pilgrim',
    'Prorator',
    'Probe',
    'Procurer',
    'Prophecy',
    'Proteus',
    'Prowler',
    'Punisher',
    'Purifier',
    'Ragnarok',
    'Rapier',
    'Raptor',
    'Rattlesnake',
    'Raven',
    'Raven Navy Issue',
    'Raven State Issue',
    'Reaper',
    'Redeemer',
    'Republic Fleet Firetail',
    'Retribution',
    'Retriever',
    'Revelation',
    'Rhea',
    'Rifter',
    'Rokh',
    'Rook',
    'Rorqual',
    'Rupture',
    'Sabre',
    'Sacrilege',
    'Scimitar',
    'Scorpion',
    'Scythe',
    'Scythe Fleet Issue',
    'Sentinel',
    'Sigil',
    'Silver Magnate',
    'Sin',
    'Skiff',
    'Slasher',
    'Sleipnir',
    'Stabber',
    'Stabber Fleet Issue',
    'Stiletto',
    'Stratios',
    'Succubus',
    'Svipul',
    'Talos',
    'Talwar',
    'Taranis',
    'Tempest',
    'Tempest Fleet Issue',
    'Tempest Tribal Issue',
    'Tengu',
    'Thanatos',
    'Thorax',
    'Thrasher',
    'Tormentor',
    'Tornado',
    'Tristan',
    'Typhoon',
    'Vagabond',
    'Vargur',
    'Velator',
    'Vengeance',
    'Vexor',
    'Vexor Navy Issue',
    'Viator',
    'Vigil',
    'Vigilant',
    'Vindicator',
    'Vulture',
    'Widow',
    'Wolf',
    'Worm',
    'Wreathe',
    'Wyvern',
    'Zealot'
  ];

  ng.registerManifest(manifest, shipTypes);
}(angular));
(function(ng) {
  var manifest = {
    name: "ShipnameGeneratorController",
    type: "controller",
    module: 'ira.naming',
    dependencies: ['$scope', 'shipnameGeneratorService']
  };

  var ShipnameGeneratorController = function($scope, shipnameGeneratorService) {
    var self = this;

    self.name = '';
    self.formatted = '';

    function onInputNameChange(value) {
      self.formatted = shipnameGeneratorService.formatName(value);
    }

    function activate() {
      $scope.$watch(function() { return self.name; }, onInputNameChange);
    }

    activate();
  };

  ng.registerManifest(manifest, ShipnameGeneratorController);
}(angular));
(function(ng) {

  var manifest = {
    name: "iraShipnameGenerator",
    type: "directive",
    module: 'ira.naming',
    dependencies: []
  };

  var iraShipnameGenerator = function() {
    return {
      restrict: 'EA',
      scope: {},
      controller: 'ShipnameGeneratorController',
      controllerAs: 'shipnameGenerator',
      templateUrl: '/templates/shipname/shipname-generator.template.html'
    };
  };

  ng.registerManifest(manifest, iraShipnameGenerator);
}(angular));
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
(function(ng) {

  var manifest = {
    name: "iraShipnameValidator",
    type: "directive",
    module: 'ira.naming',
    dependencies: []
  };

  var iraShipnameValidator = function() {
    return {
      restrict: 'EA',
      scope: {},
      controller: 'ShipnameValidatorController',
      controllerAs: 'validator',
      templateUrl: '/templates/shipname/shipname-validator.template.html'
    };
  };

  ng.registerManifest(manifest, iraShipnameValidator);
}(angular));