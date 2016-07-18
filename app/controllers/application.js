import Ember from 'ember';

export default Ember.Controller.extend({
  geolocation: Ember.inject.service(),
	lat: 42.426092,
	lng: -70.927705,
	zoom: 12,
  userLocation: [42.426092,-70.927705],
  callOutMarker: function() {
    return L.icon({
      iconUrl: 'marker-icon-red.png',
      iconRetinaUrl: 'marker-icon-red.png',
      iconSize: [25, 41],
      iconAnchor: [12, 0],
      popupAnchor: [-3, -76]
    });
    
  }.property(),
  nearestMax: 5,

  actions: {
    getUserLocation: function() {
      this.get('geolocation').getLocation().then((geoObject) => {
        var currentLocation = this.get('geolocation').get('currentLocation');
        this.set('userLocation', currentLocation);
        this.getNearbyPlaces();
      });
    }
  },

  mapBounds: function() {
    if (!this.get('nearest')) {
      return this.get('geojson').getBounds();  
    } else {
      return this.get('nearestMarkersFeatureGroup').getBounds();
    }
  }.property('geojson,nearest'),

  geojson: function() {
    let geojson = [];

    this.get('model').forEach((model, index) => {
      geojson.push({
        type: model.get('type'),
        geometry: model.get('geometry'),
        properties: model.get('properties')
      });
      geojson[index].properties.model_id = model.get('id');
    });

    return L.geoJson(geojson);
  }.property('model'),

  nearestMarkersFeatureGroup: function() {
    var nearest = this.get('nearest');
    var markersArray = nearest.map((marker) => {
      return marker.layer;
    });
    
    var nearestIDs = markersArray.map((marker) => {
      console.log(marker);
      return marker.feature.properties.model_id;
    });

    console.log(this.get('model').filterProperty('place_id' , nearestIDs.toString()));

    return L.featureGroup(markersArray);
  }.property('nearest'),

  geoJsonIndex: function() {
    return leafletKnn(this.get('geojson'));
  }.property('this.geojson'),

  getNearbyPlaces() {
    var index = this.get('geoJsonIndex');
    var nearestMax = this.get('nearestMax');
    var nearest = index.nearest(L.latLng(this.get('userLocation')), nearestMax);
    
    this.set('nearest', nearest);
  }
});
