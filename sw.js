// Offline cache. The app files are saved first and must all succeed.
// Icons are saved next, one by one, so a single missing icon cannot break the install.
// Step drawings are saved in the background after the app is ready.
const CACHE = "emergency-assistant-v18";
const CRITICAL = ["./", "index.html", "style.css", "app.js", "tools.js", "voice.js", "search.js", "cards.js", "cards-more.js", "verifications.js", "reviews.js", "manifest.json"];
const NICE = ["icon.svg", "favicon-32.png", "logo-64.webp", "icons/allergy.webp", "icons/attacks.webp", "icons/basics.webp", "icons/bleeding.webp", "icons/call.webp", "icons/choking.webp", "icons/cpr.webp", "icons/disasters.webp", "icons/first-aid.webp", "icons/heart.webp", "icons/home.webp", "icons/illness.webp", "icons/medical.webp", "icons/mic.webp", "icons/settings.webp", "icons/shelter.webp", "icons/snake.webp", "icons/theme-moon.webp", "icons/theme-sun.webp", "icons/timers.webp", "icons/touch.webp", "icons/vehicles.webp", "icons/water.webp", "icons/weather.webp", "icons/where.webp"];
const LATER = ["img/adrenaline-pen.webp", "img/baby-cpr.webp", "img/bleeding-pressure.webp", "img/burn-cooling.webp", "img/choking-adult.webp", "img/choking-baby.webp", "img/cpr-hands.webp", "img/recovery-position.webp", "img/snake-bandage.webp", "img/tourniquet.webp"];

// Always fetch fresh copies when saving. The website tells browsers to keep files for
// 10 minutes, and saving an old copy next to new files would break the app.
const fresh = (u) => new Request(u, { cache: "reload" });

self.addEventListener("install", (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(CRITICAL.map(fresh));
    await Promise.allSettled(NICE.map((u) => c.add(fresh(u))));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    // Keep the current app cache and the voice cache (saved voice engines).
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE && !k.startsWith("voice-")).map((k) => caches.delete(k)));
    await self.clients.claim();
    const c = await caches.open(CACHE);
    await Promise.allSettled(LATER.map(async (u) => { if (!(await c.match(u))) await c.add(fresh(u)); }));
  })());
});

// Cache first, so the app opens instantly with no network.
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request).then((hit) => hit || fetch(e.request)));
});
