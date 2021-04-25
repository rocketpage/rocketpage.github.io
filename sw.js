self.oninstall = event => {
  self.skipWaiting();

  const toCache = Array(300).fill('').map((v, i) => `img/${i}.webp`);
  toCache.push('./');

  event.waitUntil(
    caches.open('img').then(cache => cache.addAll(toCache))
  );
};

self.onfetch = event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
};
