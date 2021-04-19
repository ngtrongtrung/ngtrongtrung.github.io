"use strict";
const MANIFEST = "flutter-app-manifest";
const TEMP = "flutter-temp-cache";
const CACHE_NAME = "flutter-app-cache";
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "144036d2c6e676aec8700393dc26925e",
  ".git/config": "26b99167f8719f70c99e5fe96d310b53",
  ".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
  ".git/FETCH_HEAD": "b33f56f2e9b82ee23abe4d5066cedc8c",
  ".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
  ".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
  ".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
  ".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
  ".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
  ".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
  ".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
  ".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
  ".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
  ".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
  ".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
  ".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
  ".git/index": "7d5da59153c050754d6d24a3b5e5c14a",
  ".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
  ".git/logs/HEAD": "f3880732ca3c7b335378448bf24f82ab",
  ".git/logs/refs/heads/main": "eff06dcb4c6611abafec37057893bb05",
  ".git/logs/refs/remotes/blog/main": "ca640f906d8e9027275028e773e8f927",
  ".git/logs/refs/remotes/blog/master": "d8da9ffeef2dabefb4a8f244da099487",
  ".git/objects/0b/4b91525436dd727172ec7ba01bd57493986076":
    "293cf1df9eaa1ed41db393c4e6991b8b",
  ".git/objects/0e/57caee911f19b5ed8ec54749d70202186d1c4c":
    "a43181201ed922dad9140151784feee2",
  ".git/objects/0f/dc3a829af442851e0a4f45a8d566bd5b1b49b4":
    "8e819370375ccdbf9091c1eeed052a94",
  ".git/objects/12/d3695541ed214b6cf3ab302267d080b8ab0d69":
    "b8c929d4122f7aebfe8819abf5db73cb",
  ".git/objects/13/726c6df6423e0331a758bdf0d18b7209ad663f":
    "0f75e632ce3f66b5de47a91c329f768a",
  ".git/objects/16/62533977c235286591931f5da4b64a8b70fcfa":
    "a038c3f89f165307ffaa76f844c84cbc",
  ".git/objects/19/09603e53097b753ee96a14c75b8ea5b969c398":
    "719df53ff12b493e49421fa5d136f32f",
  ".git/objects/1d/41779cd3126f57403862a5fca815f8fde6a989":
    "8332c8b5307d1ee96594976d4d16b7b1",
  ".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893":
    "c993b22f115d7f3ae6d5b7b212806539",
  ".git/objects/28/fe37477aaf778b0d5161a4615aebe2e468892e":
    "94ebbc9f97aacf5efd07923496979b88",
  ".git/objects/2c/5c3fbeab10cd3bd29b3674ecf790847077a067":
    "a10b212ce7c47ae0572078dcad8db407",
  ".git/objects/2c/d3f3f71415939d5704a9ec60280dac12a4c8dc":
    "099566d224c563dad82304904dbdb5ce",
  ".git/objects/38/7cc51b8314777ffb8856655c2e0894e3a25f91":
    "b0497aab0d46a91e7e5ea1e51bbb4c1c",
  ".git/objects/3d/078d743261f0722c8ae89319b1548db54b39d2":
    "a321f8f4cee4d7504ff87083f093505c",
  ".git/objects/3d/84aa07d0d900dcd315924ac272f954bd9abbee":
    "fefee7c9c847ce2d58c5a9c931e16858",
  ".git/objects/3d/ceea456d6b247bbeecc8ea56494ceeef623e55":
    "51b4f9e651840035e3e648741d0874f7",
  ".git/objects/40/62af906e53a1c5118fbe4be78d981fd0bba7bc":
    "6dd673938b3f58d7f77c5e4f3201c16d",
  ".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155":
    "2e52a767dc04391de7b4d0beb32e7fc4",
  ".git/objects/4f/da383077f5eec11cb0c51d45271e9678a16eac":
    "a13eb0abef82677d326e8bf6c57bbbfe",
  ".git/objects/50/dc0c1217a4d59991ef8e0510a92d30a33a6afe":
    "05541322af45aff3f6bcaeaf3e20e743",
  ".git/objects/56/dfc0c9b181604d670de114c7db4021435c9896":
    "64b04593797572b92f8182fa76ed708a",
  ".git/objects/58/96a5ca99fd3c6a2f5e1ce9410b58f8eaf72198":
    "f38d0687254c32f18c2a1d7fe9ebf943",
  ".git/objects/5a/703c50fc15fbe7a25e30884b5d93637c7f446f":
    "bf2902b1c3481c6bf525459aa3794607",
  ".git/objects/63/8bbee27608a09a1811cc55bfb56e8c75222676":
    "0729d8ef4df2593e790daabc5c9b4fac",
  ".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f":
    "f3e31aec622d6cf63f619aa3a6023103",
  ".git/objects/83/4fee7f245cb4ad54718c6640f5226611dbf967":
    "fb88f87c2b767fef87d3fb071fee5a15",
  ".git/objects/85/1b8d349721ada8a4a9634ea5853f2357d4577a":
    "f3feb3e1e6823aff75900b8684b58af8",
  ".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6":
    "e42aaae6a4cbfbc9f6326f1fa9e3380c",
  ".git/objects/88/f1c23fef03f0abd0c8fc87c1c68de884b8dcf4":
    "ffbd755337692e95a8f11019407dd224",
  ".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1":
    "1d8820d345e38b30de033aa4b5a23e7b",
  ".git/objects/97/7ba7f52883c1e8d57f3bc2bfad38e9b84552d2":
    "2337e78cfdfe564356431d36f0944722",
  ".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f":
    "bfe4910ea01eb3d69e9520c3b42a0adf",
  ".git/objects/a5/a9380b201bb7d5b7e182e43b3f865113d67e63":
    "9c96cb72552590c9871b3e5f0ba97211",
  ".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017":
    "6525101be8d70b808a809af9c83fa4ad",
  ".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f":
    "557c35fe3928eb2af403d1b3926bb9ba",
  ".git/objects/ad/e1d8113977796be8c672cdb3e6d6d32b37830a":
    "020e5a71e189f1f04e745bcc8d201328",
  ".git/objects/ae/efe7157b5f492d537fb60ef2d3b06125c1bbd9":
    "c7c87a2a94c755e84c20c013e9c74987",
  ".git/objects/b1/df03ca4a6918c308b7f5d4b9e7f9d4ff3d91e2":
    "0e8d8d160e7c9b490c477a116aed518f",
  ".git/objects/b6/56950557693b2a0a3e9c15fa21fc427088af71":
    "103354401286105f668947dabe838dc1",
  ".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa":
    "36b4020dca303986cad10924774fb5dc",
  ".git/objects/be/5f416615e8c7726b0087e073ea6aa16084408d":
    "4889a4e105134efa62a5ca976dea1bfb",
  ".git/objects/c2/9ae4863899a9813600a960d6cc092e11fb8232":
    "2ca675792d1a0a3084cd7eeb99e70a4f",
  ".git/objects/c4/192631f25b34d77a7f159aa0da0e3ae99c4ef4":
    "546c588f67767790fc70913da1a77878",
  ".git/objects/c6/c554a7ee84512aa6d3f8842099f274ac815e51":
    "e0845cd142c8d638da014f4549792c11",
  ".git/objects/df/62da5e037810510c1e03f46692f714d478e102":
    "36776b1e52331c864a460583d05a07ec",
  ".git/objects/df/c73b5e587e532ba1631ea05a0f1520137408c8":
    "0c71ccd46192626181503c66d696773e",
  ".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d":
    "c6fa51103d8db5478e1a43a661f6c68d",
  ".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391":
    "c70c34cbeefd40e7c0149b7a0c2c64c2",
  ".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e":
    "59e425d1456034072d902c75d18ec75f",
  ".git/objects/f6/8fa7a947e4b322df3cb06cb5c4abbf87461b0c":
    "c8d5aeee4bc79db599dae696473f74c7",
  ".git/objects/f7/e4f52c7523f34a57fd6319961d0bb0fbdba21c":
    "7be5735116aae71fbfa3a848f9b56b72",
  ".git/objects/f8/c6a413a62d87a63135dc11c1ee8ade11234dd3":
    "1d380b9d4c2285bddcd8c4396a6cab16",
  ".git/objects/fc/343bff9e178f139ebf487e5f0d3640111b539a":
    "28df913ae4c6a503c46ab0086fe53a01",
  ".git/ORIG_HEAD": "bb6dcaac367b46bc21b096f7eaa7a476",
  ".git/refs/heads/main": "6340a10bc98ca27e55cb0bf00dd2b047",
  ".git/refs/remotes/blog/main": "6340a10bc98ca27e55cb0bf00dd2b047",
  ".git/refs/remotes/blog/master": "f916ec35e0c57e1078d03517492963f3",
  "assets/AssetManifest.json": "3ec3ee818b34261d0ab564d350e9fcb0",
  "assets/assets/avatar.jpg": "effcc97704b07dcf1f1b24ee68ae2fe2",
  "assets/assets/icons/facebook.svg": "e645ea4ef0089dbc222141dd0d921680",
  "assets/assets/icons/icons8-github.svg": "07b170ca96cdc6a9da56df0194d22f94",
  "assets/assets/icons/icons8-gmail.svg": "2677eee145226619d39e771d22a7ce2e",
  "assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
  "assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
  "assets/NOTICES": "f52e7b4160844bb58d589b40e2ea7d78",
  "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf":
    "6d342eb68f170c97609e9da345464e5e",
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
  "icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
  "index.html": "f58a264614cd519c8401767bb1f784a8",
  "/": "f58a264614cd519c8401767bb1f784a8",
  "main.dart.js": "4ef190b4cd761a49ce68ee0594947474",
  "manifest.json": "8b822ae1d06034253b04295223d66438",
  "version.json": "76d57733abfda657d739f57aa578c4d0",
  "_config.yml": "d178df8a46be3ea7f599296e24430ce0",
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
  "main.dart.js",
  "index.html",
  "assets/NOTICES",
  "assets/AssetManifest.json",
  "assets/FontManifest.json",
];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map(
          (value) =>
            new Request(value + "?revision=" + RESOURCES[value], {
              cache: "reload",
            })
        )
      );
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function (event) {
  return event.waitUntil(
    (async function () {
      try {
        var contentCache = await caches.open(CACHE_NAME);
        var tempCache = await caches.open(TEMP);
        var manifestCache = await caches.open(MANIFEST);
        var manifest = await manifestCache.match("manifest");
        // When there is no prior manifest, clear the entire cache.
        if (!manifest) {
          await caches.delete(CACHE_NAME);
          contentCache = await caches.open(CACHE_NAME);
          for (var request of await tempCache.keys()) {
            var response = await tempCache.match(request);
            await contentCache.put(request, response);
          }
          await caches.delete(TEMP);
          // Save the manifest to make future upgrades efficient.
          await manifestCache.put(
            "manifest",
            new Response(JSON.stringify(RESOURCES))
          );
          return;
        }
        var oldManifest = await manifest.json();
        var origin = self.location.origin;
        for (var request of await contentCache.keys()) {
          var key = request.url.substring(origin.length + 1);
          if (key == "") {
            key = "/";
          }
          // If a resource from the old manifest is not in the new cache, or if
          // the MD5 sum has changed, delete it. Otherwise the resource is left
          // in the cache and can be reused by the new service worker.
          if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
            await contentCache.delete(request);
          }
        }
        // Populate the cache with the app shell TEMP files, potentially overwriting
        // cache files preserved above.
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put(
          "manifest",
          new Response(JSON.stringify(RESOURCES))
        );
        return;
      } catch (err) {
        // On an unhandled exception the state of the cache cannot be guaranteed.
        console.error("Failed to upgrade service worker: " + err);
        await caches.delete(CACHE_NAME);
        await caches.delete(TEMP);
        await caches.delete(MANIFEST);
      }
    })()
  );
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf("?v=") != -1) {
    key = key.split("?v=")[0];
  }
  print("hihi");
  if (
    event.request.url == origin ||
    event.request.url.startsWith(origin + "/#") ||
    key == ""
  ) {
    key = "/";
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == "/") {
    return onlineFirst(event);
  }
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return (
          response ||
          fetch(event.request).then((response) => {
            cache.put(event.request, response.clone());
            return response;
          })
        );
      });
    })
  );
});

self.addEventListener("message", (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === "skipWaiting") {
    self.skipWaiting();
    return;
  }
  if (event.data === "downloadOffline") {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request)
      .then((response) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
      .catch((error) => {
        return caches.open(CACHE_NAME).then((cache) => {
          return cache.match(event.request).then((response) => {
            if (response != null) {
              return response;
            }
            throw error;
          });
        });
      })
  );
}
