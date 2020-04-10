/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'coolus',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: { 'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com http://*.cartodb.com http://*.basemaps.cartocdn.com http://api.wunderground.com https://query.yahooapis.com",
                              'img-src': "'self' http://*.basemaps.cartocdn.com/ data: https://p.typekit.net https://api.mapbox.com",
                              'font-src': "'self' data: https://fonts.typekit.net data: https://use.typekit.net",
                              'style-src': "'self' 'unsafe-inline'",
                              'script-src': "'self' 'unsafe-eval' 'unsafe-inline' localhost:49152 0.0.0.0:49152 http://use.typekit.net https://use.typekit.net" },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.manifest = {
    enabled: true,
    appcacheFile: "/manifest.appcache",
    excludePaths: ['index.html'],
    includePaths: ['/'],
    network: ['api/'],
    showCreateDate: true
  }
  // Only these towns will show up in the dropdown. Required.
  ENV.MMC_towns = ['Arlington', 'Boston', 'Cambridge', 'Chelsea', 'Everett', 'Malden', 'Melrose', 'Medford', 'Quincy', 'Revere', 'Somerville', 'Brookline', 'Winthrop', 'Braintree', 'Newton'];

ENV.datacollection = false;

 ENV.typekit = {
      kitId: 'brw3zbp'
  }
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.locationType = 'hash';
    ENV.baseURL = '/cool-places/';
    ENV.datacollection = true;

  }

  return ENV;
};
