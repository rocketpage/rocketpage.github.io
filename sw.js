this.addEventListener('install', function(event) { event.waitUntil(caches.open('v1').then(function(cache) { return cache.addAll(['/','img/01_416x312.webp','img/02_416x312.webp','img/03_416x312.webp','img/04_416x312.webp','img/05_416x312.webp','img/06_416x312.webp','img/01_800x600.webp','img/02_800x600.webp','img/03_800x600.webp','img/04_800x600.webp','img/05_800x600.webp','img/06_800x600.webp','index.html','manifest.json']).then(function() { console.log('Success! App is available offline!'); }) })); }); self.addEventListener('fetch', function(event) { event.respondWith(caches.match(event.request).then(function(response) { return response || fetch(event.request); })); });
