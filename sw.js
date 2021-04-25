self.oninstall = event => {
  self.skipWaiting();

  const toCache = Array(300).fill('').map((v, i) => `images/${i}.webp`);
  toCache.push('./');

  event.waitUntil(
    caches.open('img-images').then(cache => cache.addAll(toCache))
  );
};

self.onfetch = event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
};
