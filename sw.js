self.addEventListener("install",i=>{i.waitUntil(caches.open("v1").then(i=>i.addAll(["/","index.html","img/01_416x312.webp","img/02_416x312.webp","img/03_416x312.webp","img/04_416x312.webp","img/05_416x312.webp", "img/06_416x312.webp","img/01_800x600.webp","img/02_800x600.webp","img/03_800x600.webp","img/04_800x600.webp","img/05_800x600.webp","img/06_800x600.webp","icons/favicon-16x16.png","icons/favicon-32x32.png","icons/apple-touch-icon.png", "icons/icon-72x72.png","icons/icon-96x96.png","icons/icon-128x128.png","icons/icon-144x144.png", "icons/icon-152x152.png","icons/icon-192x192.png","icons/icon-384x384.png","icons/icon-512x512.png","icons/maskable_icon.png","manifest.json"]).then(function(){console.log("Success! App is available offline!")})))}),self.addEventListener("fetch",i=>{i.respondWith(caches.match(i.request).then(n=>n||fetch(i.request)))});
