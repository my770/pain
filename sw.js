const CACHE_NAME = "pain-management-cache-v1";
const urlsToCache = [
  "/pain/",
  "/pain/index.html",
  "/pain/styles.css",
  "/pain/script.js",
  "/pain/favicon.ico",
  "/pain/icon-192x192.png",
  "/pain/icon-512x512.png"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log("Opened cache");
        return cache.addAll(urlsToCache);
      })
      .catch(function(error) {
        console.error("Failed to cache resources:", error);
      })
  );
});

// Fetch event to serve cached content
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
