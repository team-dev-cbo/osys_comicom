(function() {
  'use strict';

  // ## - Cache the application
  var filesToCache = [
    '.',
    
    'css/bootstrap.min.css',
    
    'images/accueil_login_quartis_web.png',
    'images/loading.gif',
    'images/loading_xs.gif',
    'images/logo_osys.png',
    'images/logo_osys_login.gif',
    'images/unknown.png',
    
    'js/bootstrap.min.js',
    'js/jquery-2.1.4.min.js',
    'js/quartis-i18n-v1.0.0.js',
    
  ];

  var staticCacheName = 'quartispro-auth-cache-v1.0.3-dev';

  self.addEventListener('install', function(event) {
    console.log('Attempting to install service worker and cache static assets');
    event.waitUntil(
      caches.open(staticCacheName)
      .then(function(cache) {
        return cache.addAll(filesToCache);
      })
    );
  });

  // ## - Intercept network requests
  
  self.addEventListener('fetch', function(event) {
    console.log('Fetch event for ', event.request.url);
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          console.log('Found ', event.request.url, ' in cache');
          return response;
        }
        console.log('Network request for ', event.request.url);
        return fetch(event.request)
          .then(function(response) {

            return caches.open(staticCacheName).then(function(cache) {
              if (event.request.url.indexOf('test') < 0) {
                cache.put(event.request.url, response.clone());
              }
              return response;
            });
          });

      }).catch(function(error) {
          console.log('An error occurend when trying to get files from cache');
      })
    );
  });

    self.addEventListener('activate', function(event) {
      console.log('Activating new service worker...');

      var cacheWhitelist = [staticCacheName];

      event.waitUntil(
        caches.keys().then(function(cacheNames) {
          return Promise.all(
            cacheNames.map(function(cacheName) {
              if (cacheWhitelist.indexOf(cacheName) === -1) {
                return caches.delete(cacheName);
              }
            })
          );
        })
      );
    });

})();