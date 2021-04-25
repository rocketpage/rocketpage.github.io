var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
'/', 
'img/01_416x312.webp', 
'img/02_416x312.webp', 
'img/03_416x312.webp', 
'img/04_416x312.webp', 
'img/05_416x312.webp', 
'img/06_416x312.webp', 
'img/01_800x600.webp', 
'img/02_800x600.webp', 
'img/03_800x600.webp', 
'img/04_800x600.webp', 
'img/05_800x600.webp', 
'img/06_800x600.webp'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );  
});

self.addEventListener('activate', function(event) {
  console.log('Finally active. Ready to start serving content!');  
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
