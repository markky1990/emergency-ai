const CACHE = "emergency-assistant-v10";
const FILES = ["./", "index.html", "style.css", "app.js", "search.js", "cards.js", "cards-more.js", "verifications.js", "reviews.js", "voice.js", "manifest.json", "icon.svg", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png", "favicon-32.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      // Keep the current app cache and the voice cache (saved voice engines).
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE && !k.startsWith("voice-")).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Cache first so the app opens instantly with no network.
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request).then((hit) => hit || fetch(e.request)));
});
