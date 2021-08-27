"use strict";

const staticCacheName = 'staticfiles';

addEventListener('install', installEvent => {
  installEvent.waitUntil(
    caches.open(staticCacheName)
    .then( staticCache => {
      return staticCache.addAll([
        'j/main.js',
        'c/default.css'
      ]);
    })
  );
});

addEventListener('fetch', fetchEvent => {
  const request = fetchEvent.request;
  fetchEvent.respondWith(
    // First, look in the cache.
    caches.match(request)
      .then( responseFromCache => {
        if (responseFromCache) {
          return responseFromCache;
        }
        // Otherwise fetch from the network.
        return fetch(request);
      }) // end match then
  ); // end respondWith
}); // end addEventListener
