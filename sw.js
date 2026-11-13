/* Mind-sage V4 service worker: static offline shell, no response data cached. */
const CACHE='mind-sage-v4-shell-2026-11-13-videos-final-2';
const STATIC=['./','./index.html','./styles.css','./v3.css','./v4.css','./video-library.css','./data.js','./app.js','./v3.js','./v4-questions.js','./v4.js','./video-library.js','./config.js','./vivekananda-portrait.webp','./student-calm-sunset.webp','./parent-child-reflection.webp','./favicon.svg','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(STATIC)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE && key.startsWith('mind-sage-')).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  const request=event.request,url=new URL(request.url);
  if(request.method!=='GET'||url.origin!==self.location.origin)return;
  if(!url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
  if(request.mode==='navigate'){
    event.respondWith(fetch(request).then(response=>response.ok?response:caches.match('./index.html')).catch(()=>caches.match('./index.html')));return;
  }
  event.respondWith(fetch(request).then(response=>{if(response.ok&&STATIC.some(asset=>new URL(asset,self.registration.scope).pathname===url.pathname)){const cloned=response.clone();caches.open(CACHE).then(cache=>cache.put(request,cloned));}return response;}).catch(()=>caches.match(request)));
});
