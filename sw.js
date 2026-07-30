const CACHE_NAME = 'rider-app-v1';
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { e.waitUntil(clients.claim()); });
// ปล่อยว่างไว้แบบนี้ เพื่อไม่ให้ PWA ไปบล็อกการดึงข้อมูลจาก Google
self.addEventListener('fetch', (e) => { return; });