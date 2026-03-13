// Basit bir Service Worker - Uygulamanın PWA sayılması için gereklidir
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
