const CACHE = "network-or-cache-v1";
const timeout = 100;
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => cache.addAll([
				"img/01_416x312.webp",
				"img/02_416x312.webp",
				"img/03_416x312.webp",
				"img/04_416x312.webp",
				"img/05_416x312.webp",
				"img/06_416x312.webp",
				"img/01_800x600.webp",
				"img/02_800x600.webp",
				"img/03_800x600.webp",
				"img/04_800x600.webp",
				"img/05_800x600.webp",
				"img/06_800x600.webp"
            ])
        ));
});

self.addEventListener("fetch", (event) => {
    event.respondWith(fromNetwork(event.request, timeout)
      .catch((err) => {
          console.log(`Error: ${err.message()}`);
          return fromCache(event.request);
      }));
});

function fromNetwork(request, timeout) {
    return new Promise((fulfill, reject) => {
        var timeoutId = setTimeout(reject, timeout);
        fetch(request).then((response) => {
            clearTimeout(timeoutId);
            fulfill(response);
        }, reject);
    });
}

function fromCache(request) {
    return caches.open(CACHE).then((cache) =>
        cache.match(request).then((matching) =>
            matching || Promise.reject("no-match")
        ));
}
