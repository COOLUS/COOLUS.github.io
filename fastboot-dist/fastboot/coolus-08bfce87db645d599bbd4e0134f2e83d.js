"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('coolus/adapters/place', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].CartoDBAdapter.extend({
        accountName: 'wilburnforce'
    });
});
define('cool-places/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'cool-places/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _coolPlacesConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _coolPlacesConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _coolPlacesConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _coolPlacesConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('cool-places/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'cool-places/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _coolPlacesConfigEnvironment) {

  var name = _coolPlacesConfigEnvironment['default'].APP.name;
  var version = _coolPlacesConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('cool-places/components/array-path-layer', ['exports', 'ember-leaflet/components/array-path-layer'], function (exports, _emberLeafletComponentsArrayPathLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsArrayPathLayer['default'];
    }
  });
});
define('cool-places/components/base-layer', ['exports', 'ember-leaflet/components/base-layer'], function (exports, _emberLeafletComponentsBaseLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsBaseLayer['default'];
    }
  });
});
define('cool-places/components/circle-layer', ['exports', 'ember-leaflet/components/circle-layer'], function (exports, _emberLeafletComponentsCircleLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsCircleLayer['default'];
    }
  });
});
define('cool-places/components/circle-marker-layer', ['exports', 'ember-leaflet/components/circle-marker-layer'], function (exports, _emberLeafletComponentsCircleMarkerLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsCircleMarkerLayer['default'];
    }
  });
});
define('cool-places/components/container-layer', ['exports', 'ember-leaflet/components/container-layer'], function (exports, _emberLeafletComponentsContainerLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsContainerLayer['default'];
    }
  });
});
define('cool-places/components/geojson-layer', ['exports', 'ember-leaflet/components/geojson-layer'], function (exports, _emberLeafletComponentsGeojsonLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsGeojsonLayer['default'];
    }
  });
});
define('cool-places/components/image-layer', ['exports', 'ember-leaflet/components/image-layer'], function (exports, _emberLeafletComponentsImageLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsImageLayer['default'];
    }
  });
});
define('cool-places/components/leaflet-map', ['exports', 'ember-leaflet/components/leaflet-map'], function (exports, _emberLeafletComponentsLeafletMap) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsLeafletMap['default'];
    }
  });
});
define('cool-places/components/marker-layer', ['exports', 'ember-leaflet/components/marker-layer'], function (exports, _emberLeafletComponentsMarkerLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsMarkerLayer['default'];
    }
  });
});
define('cool-places/components/path-layer', ['exports', 'ember-leaflet/components/path-layer'], function (exports, _emberLeafletComponentsPathLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPathLayer['default'];
    }
  });
});
define('cool-places/components/point-path-layer', ['exports', 'ember-leaflet/components/point-path-layer'], function (exports, _emberLeafletComponentsPointPathLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPointPathLayer['default'];
    }
  });
});
define('cool-places/components/polygon-layer', ['exports', 'ember-leaflet/components/polygon-layer'], function (exports, _emberLeafletComponentsPolygonLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPolygonLayer['default'];
    }
  });
});
define('cool-places/components/polyline-layer', ['exports', 'ember-leaflet/components/polyline-layer'], function (exports, _emberLeafletComponentsPolylineLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPolylineLayer['default'];
    }
  });
});
define('cool-places/components/tile-layer', ['exports', 'ember-leaflet/components/tile-layer'], function (exports, _emberLeafletComponentsTileLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsTileLayer['default'];
    }
  });
});
define('cool-places/components/wms-tile-layer', ['exports', 'ember-leaflet/components/wms-tile-layer'], function (exports, _emberLeafletComponentsWmsTileLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsWmsTileLayer['default'];
    }
  });
});
define('cool-places/controllers/application', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		lat: 42.426092,
		lng: -70.927705,
		zoom: 10,
		userLocation: null
	});
});
define('cool-places/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('cool-places/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('cool-places/helpers/div-icon', ['exports', 'ember-leaflet/helpers/div-icon'], function (exports, _emberLeafletHelpersDivIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersDivIcon['default'];
    }
  });
  Object.defineProperty(exports, 'divIcon', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersDivIcon.divIcon;
    }
  });
});
define('cool-places/helpers/icon', ['exports', 'ember-leaflet/helpers/icon'], function (exports, _emberLeafletHelpersIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersIcon['default'];
    }
  });
  Object.defineProperty(exports, 'icon', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersIcon.icon;
    }
  });
});
define('cool-places/helpers/lat-lng-bounds', ['exports', 'ember-leaflet/helpers/lat-lng-bounds'], function (exports, _emberLeafletHelpersLatLngBounds) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersLatLngBounds['default'];
    }
  });
  Object.defineProperty(exports, 'latLngBounds', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersLatLngBounds.latLngBounds;
    }
  });
});
define('cool-places/helpers/point', ['exports', 'ember-leaflet/helpers/point'], function (exports, _emberLeafletHelpersPoint) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersPoint['default'];
    }
  });
  Object.defineProperty(exports, 'point', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersPoint.point;
    }
  });
});
define('cool-places/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'cool-places/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _coolPlacesConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_coolPlacesConfigEnvironment['default'].APP.name, _coolPlacesConfigEnvironment['default'].APP.version)
  };
});
define('cool-places/initializers/export-application-global', ['exports', 'ember', 'cool-places/config/environment'], function (exports, _ember, _coolPlacesConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_coolPlacesConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _coolPlacesConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_coolPlacesConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('cool-places/initializers/fastboot/ajax', ['exports'], function (exports) {
  /* globals najax */

  var nodeAjax = function nodeAjax(options) {
    najax(options);
  };

  exports['default'] = {
    name: 'ajax-service',

    initialize: function initialize(application) {
      application.register('ajax:node', nodeAjax, { instantiate: false });
      application.inject('adapter', '_ajaxRequest', 'ajax:node');
    }
  };
});
define("cool-places/initializers/fastboot/dom-helper-patches", ["exports"], function (exports) {
  /*globals Ember, URL*/
  exports["default"] = {
    name: "dom-helper-patches",

    initialize: function initialize(App) {
      // TODO: remove me
      Ember.HTMLBars.DOMHelper.prototype.protocolForURL = function (url) {
        var protocol = URL.parse(url).protocol;
        return protocol == null ? ':' : protocol;
      };

      // TODO: remove me https://github.com/tildeio/htmlbars/pull/425
      Ember.HTMLBars.DOMHelper.prototype.parseHTML = function (html) {
        return this.document.createRawHTMLSection(html);
      };
    }
  };
});
define('cool-places/initializers/leaflet-assets', ['exports', 'ember-leaflet/initializers/leaflet-assets'], function (exports, _emberLeafletInitializersLeafletAssets) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletInitializersLeafletAssets['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberLeafletInitializersLeafletAssets.initialize;
    }
  });
});
define('cool-places/models/place', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    geometry: _emberData['default'].attr(),
    properties: _emberData['default'].attr(),
    latitude: (function () {
      return this.get('geometry.coordinates')[1];
    }).property('geometry.coordinates.@'),
    longitude: (function () {
      return this.get('geometry.coordinates')[0];
    }).property('geometry.coordinates.@'),
    title: (function () {
      return this.get('properties.title');
    }).property('properties.title')
  });
});
define('cool-places/router', ['exports', 'ember', 'cool-places/config/environment'], function (exports, _ember, _coolPlacesConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _coolPlacesConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('cool-places/routes/application', ['exports', 'ember', 'npm:leaflet-knn'], function (exports, _ember, _npmLeafletKnn) {
  exports['default'] = _ember['default'].Route.extend({
    geolocation: _ember['default'].inject.service(),
    model: function model() {
      return this.get('store').findAll('place');
    },
    actions: {
      getUserLocation: function getUserLocation() {
        var _this = this;

        this.get('geolocation').getLocation().then(function (geoObject) {
          var currentLocation = _this.get('geolocation').get('currentLocation');
          _this.controllerFor('application').set('userLocation', currentLocation);
        });
      }
    }
  });
});
define('cool-places/services/cookies', ['exports', 'ember-cookies/services/cookies'], function (exports, _emberCookiesServicesCookies) {
  exports['default'] = _emberCookiesServicesCookies['default'];
});
define('cool-places/services/fastboot', ['exports', 'ember'], function (exports, _ember) {

  var alias = _ember['default'].computed.alias;
  var computed = _ember['default'].computed;

  exports['default'] = _ember['default'].Service.extend({
    cookies: alias('_fastbootInfo.cookies'),
    headers: alias('_fastbootInfo.headers'),
    host: computed(function () {
      return this._fastbootInfo.host();
    }),
    isFastBoot: computed(function () {
      return typeof FastBoot !== 'undefined';
    })
  });
});
/* global FastBoot */
define('cool-places/services/geolocation', ['exports', 'ember-cli-geo/services/geolocation'], function (exports, _emberCliGeoServicesGeolocation) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliGeoServicesGeolocation['default'];
    }
  });
});
define("cool-places/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 6,
                  "column": 3
                },
                "end": {
                  "line": 8,
                  "column": 3
                }
              },
              "moduleName": "cool-places/templates/application.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("	    ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("h3");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
              return morphs;
            },
            statements: [["content", "place.title", ["loc", [null, [7, 9], [7, 24]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 2
              },
              "end": {
                "line": 9,
                "column": 2
              }
            },
            "moduleName": "cool-places/templates/application.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "marker-layer", [], ["lat", ["subexpr", "@mut", [["get", "place.latitude", ["loc", [null, [6, 23], [6, 37]]]]], [], []], "lng", ["subexpr", "@mut", [["get", "place.longitude", ["loc", [null, [6, 42], [6, 57]]]]], [], []]], 0, null, ["loc", [null, [6, 3], [8, 20]]]]],
          locals: ["place"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "cool-places/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "tile-layer", [], ["url", "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"], ["loc", [null, [4, 2], [4, 81]]]], ["block", "each", [["get", "model", ["loc", [null, [5, 10], [5, 15]]]]], [], 0, null, ["loc", [null, [5, 2], [9, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 16
          }
        },
        "moduleName": "cool-places/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "id", "title");
        var el2 = dom.createTextNode("Cool Places");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        var el2 = dom.createTextNode("Find Cool Places");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(2);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["element", "action", ["getUserLocation"], [], ["loc", [null, [2, 7], [2, 35]]]], ["block", "leaflet-map", [], ["lat", ["subexpr", "@mut", [["get", "lat", ["loc", [null, [3, 19], [3, 22]]]]], [], []], "lng", ["subexpr", "@mut", [["get", "lng", ["loc", [null, [3, 27], [3, 30]]]]], [], []], "zoom", ["subexpr", "@mut", [["get", "zoom", ["loc", [null, [3, 36], [3, 40]]]]], [], []], "id", "map"], 0, null, ["loc", [null, [3, 0], [10, 16]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('cool-places/config/environment', ['ember'], function(Ember) {
  return { 'default': {"modulePrefix":"cool-places","environment":"production","baseURL":"/","locationType":"auto","contentSecurityPolicy":{"connect-src":"'self' https://auth.firebase.com wss://*.firebaseio.com http://*.cartodb.com http://*.basemaps.cartocdn.com","default-src":"'none'","script-src":"'self'","font-src":"'self'","img-src":"'self'","style-src":"'self'","media-src":"'self'"},"EmberENV":{"FEATURES":{}},"APP":{"name":"cool-places","version":"0.0.0+a7ab374f","autoboot":false},"contentSecurityPolicyHeader":"Content-Security-Policy-Report-Only","exportApplicationGlobal":false}};
});


define('~fastboot/app-factory', ['cool-places/app', 'cool-places/config/environment'], function(App, config) {
  App = App['default'];
  config = config['default'];

  return {
    'default': function() {
      return App.create(config.APP);
    }
  };
});


/* jshint ignore:end */
