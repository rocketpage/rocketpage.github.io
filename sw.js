const CACHE = "cache-and-update-v1";  self.addEventListener("install", (event) => { event.waitUntil( caches.open(CACHE).then((cache) => cache.addAll(["img/01_416x312.webp","img/02_416x312.webp","img/03_416x312.webp","img/04_416x312.webp","img/05_416x312.webp","img/06_416x312.webp","img/01_800x600.webp","img/02_800x600.webp","img/03_800x600.webp","img/04_800x600.webp","img/05_800x600.webp","img/06_800x600.webp"])) ); });   self.addEventListener("fetch", function(event) {  event.respondWith(fromCache(event.request));  event.waitUntil(update(event.request)); });  function fromCache(request) { return caches.open(CACHE).then((cache) => cache.match(request).then((matching) => matching || Promise.reject("no-match") )); }  function update(request) { return caches.open(CACHE).then((cache) => fetch(request).then((response) => cache.put(request, response) ) ); }
