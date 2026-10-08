const CACHE_NAME = 'smarthifz-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/app/login.html',
  '/app/dashboard.html',
  '/manifest.json'
];

// تثبيت الـ Service Worker وحفظ الملفات في الكاش
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('تم حفظ الملفات في الكاش');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

// استرجاع الملفات من الكاش لو الإنترنت ضعيف
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // لو الملف موجود في الكاش رجعه، لو مش موجود هاته من النت
        return response || fetch(event.request);
      })
  );
});