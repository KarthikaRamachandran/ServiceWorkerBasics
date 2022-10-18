const cacheName = "karthi_cache";
const cacheAssets = ["index.html","css/mystyles.css","js/index.js"];
const version = "0.0.2"; // updating this version will update our PWA.

self.addEventListener("install", function(ev){
    console.log("Installing...");
    ev.waitUntil(
        caches.open(cacheName).then(function(cache){
            cache.addAll(cacheAssets);  
        })
    );
});

self.addEventListener("activate", function(){
    console.log("Activating...");
    ev.waitUntil(
        caches.keys().then(function(cacheNames){
            return Promise.all(cacheNames.map(function(cache){
                if(cache !== cacheName){
                    return caches.delete(cache);
                }
            }))
        })
    )
});

self.addEventListener("fetch", function(ev){
    console.log("Fetching...");
    ev.respondWith(
        fetch(ev.request).catch(function(){ 
            return caches.match(ev.request)
        })
    );
});