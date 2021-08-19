importScripts('https://cdn.ampproject.org/sw/amp-sw.js');
AMP_SW.init();

const cacheName = 'demo_02'; const precacheResources = ['index.html']; self.addEventListener('install', (event) => { console.log('Service worker install event!'); event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources))); }); self.addEventListener('activate', (event) => { console.log('Service worker activate event!'); }); self.addEventListener('fetch', (event) => { console.log('Fetch intercepted for:', event.request.url); event.respondWith( caches.match(event.request).then((cachedResponse) => { if (cachedResponse) { return cachedResponse; } return fetch(event.request); }), ); });
