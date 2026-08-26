const CACHE_NAME = 'rk-learning-hub-v3';

const ASSETS = [
  './',
  'index.html',
  'spelling-bee.html',
  'manifest.json',
  'assets/icons/logo.svg',
  'games/cucu.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});