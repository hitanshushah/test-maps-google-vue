import { defineNuxtPlugin } from '#app';
import { GoogleMap, Marker } from 'vue3-google-map';

export default defineNuxtPlugin(async nuxtApp => {
  nuxtApp.vueApp.component('GoogleMap', GoogleMap);
  nuxtApp.vueApp.component('Marker', Marker);

  const loader = new (await import('@googlemaps/js-api-loader')).Loader({
    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
    libraries: ['places', 'geocoding'],
  });
  
  return {
    provide: {
      mapsLoader: loader
    }
  };
});