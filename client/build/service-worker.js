"use strict";var precacheConfig=[["/index.html","ac17814fc016c6a72dcef937ef227d67"],["/static/css/main.f887c7b4.css","31aaa17caa7a45240bb0dbccfc561bed"],["/static/js/main.71ed5324.js","1d475c7bf785aef165e3eed625789e9d"],["/static/media/0.103b68a0.jpg","103b68a00ec31939f60be3fec15bd6e1"],["/static/media/1.2f452357.jpg","2f45235752748d4aaf4921a2ec64c0cb"],["/static/media/2.ea805fd3.jpg","ea805fd3b351bd1e178e35dc7be1c898"],["/static/media/3.67cb57a8.jpg","67cb57a8d9b5f472ebfc7abd4c16ab08"],["/static/media/4.f696bae6.jpg","f696bae63e35a60c322e3d1580b64ed5"],["/static/media/5.fc384981.jpg","fc384981e36246c51174a735bc3dda5c"],["/static/media/6.206db3bb.jpg","206db3bb2860b60cd3d58fa7f0965cdc"],["/static/media/7.bc3df798.jpg","bc3df798b1e5c292fe74541efb0b674e"],["/static/media/8.62ac9c65.jpg","62ac9c656fdfef57a2c616a072dd683f"],["/static/media/aafp_strong.c061d8e0.jpg","c061d8e032434bc261e1662c27cfdb6b"],["/static/media/ada.06f7d949.jpg","06f7d949f3e847cf81c8d70c4519bcea"],["/static/media/drmohammedi.bc0a01d2.jpg","bc0a01d26027b62dab19d580ba7983f3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});