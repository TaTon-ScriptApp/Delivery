const CACHE_NAME = 'rider-app-v10';

self.addEventListener('install', (e) => { 
  self.skipWaiting(); 
});

self.addEventListener('activate', (e) => { 
  e.waitUntil(clients.claim()); 
});

// สำคัญมาก: ปล่อยว่างไว้เพื่อไม่ให้ขัดขวางการยิง API ไปหา Google
self.addEventListener('fetch', (e) => {
  return;
});