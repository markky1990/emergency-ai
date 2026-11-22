// Timers, the CPR beat, the tourniquet clock, and "Where am I".
// Everything here works with no internet.
(function (root) {
  const $ = (id) => document.getElementById(id);
  let app = { speak() {}, show() {} };
  let ctx = null, wake = null;

  const beat = { on: false, count: 0, timer: null, next: 0 };
  const timer = { endAt: 0, label: "", interval: null, done: false };
  const tq = { at: 0 };
  const BPM = 110, GAP = 60000 / BPM;

  const pad = (n) => String(n).padStart(2, "0");
  const fmt = (s) => pad(Math.floor(s / 60)) + ":" + pad(s % 60);
  const save = () => { try { localStorage.setItem("tools", JSON.stringify({ endAt: timer.endAt, label: timer.label, tq: tq.at })); } catch (e) {} };
  const buzz = (p) => { try { navigator.vibrate && navigator.vibrate(p); } catch (e) {} };

  function audio() {
    const AC = root.AudioContext || root.webkitAudioContext;
    if (!ctx && AC) ctx = new AC();
    if (ctx && ctx.state === "suspended") ctx.resume();
    return ctx;
  }
  function tone(freq, ms) {
    const c = audio(); if (!c) return;
    const o = c.createOscillator(), g = c.createGain();
    o.type = "square"; o.frequency.value = freq; g.gain.value = 0.18;
    o.connect(g); g.connect(c.destination);
    o.start(); o.stop(c.currentTime + ms / 1000);
  }
  const running = () => beat.on || timer.endAt > 0;
  async function wakeOn() {
    try { if (navigator.wakeLock && !wake) { wake = await navigator.wakeLock.request("screen"); wake.addEventListener("release", () => { wake = null; }); } } catch (e) {}
  }
  function wakeOff() { if (!running()) { try { wake && wake.release(); } catch (e) {} wake = null; } }

  const left = () => Math.max(0, Math.ceil((timer.endAt - Date.now()) / 1000));

  // ---------- screen updates ----------
  function render() {
    const parts = [];
    if (beat.on) parts.push("CPR beat on");
    if (timer.endAt) parts.push(fmt(left()) + (timer.label ? " " + timer.label : ""));
    if (tq.at) parts.push("Tourniquet " + Math.floor((Date.now() - tq.at) / 60000) + " min");
    const chip = $("chip");
    chip.hidden = !parts.length;
    chip.textContent = "";
    if (parts.length) {
      const im = document.createElement("img");
      im.src = "icons/timers.webp"; im.alt = ""; im.width = 20; im.height = 20;
      chip.append(im, document.createTextNode(" " + parts.join(" · ")));
    }

    $("beatBtn").textContent = beat.on ? "Stop CPR beat" : "Start CPR beat";
    $("beatBtn").classList.toggle("listening", beat.on);
    $("timerDisplay").textContent = timer.endAt ? fmt(left()) : (timer.done ? "Time is up" : "00:00");
    $("timerLabel").textContent = timer.endAt || timer.done ? timer.label : "";
    if (tq.at) {
      const mins = Math.floor((Date.now() - tq.at) / 60000);
      const t = new Date(tq.at).toLocaleTimeString("en-AU", { hour: "numeric", minute: "2-digit" });
      $("tqDisplay").textContent = "On since " + t + " (" + mins + " min)";
    } else $("tqDisplay").textContent = "Not started";
  }

  // ---------- CPR beat ----------
  function pulse() {
    const el = $("beatCircle"); el.classList.remove("pulse"); void el.offsetWidth; el.classList.add("pulse");
  }
  function tick() {
    if (!beat.on) return;
    beat.count++;
    const n = ((beat.count - 1) % 30) + 1, last = n === 30;
    tone(last ? 600 : 1000, last ? 140 : 45);
    buzz(last ? [40, 60, 40] : 25);
    $("beatCount").textContent = n;
    pulse();
    beat.next += GAP;
    beat.timer = setTimeout(tick, Math.max(0, beat.next - performance.now()));
  }
  function startBeat() {
    if (beat.on) return;
    beat.on = true; beat.count = 0; beat.next = performance.now();
    audio(); wakeOn(); tick(); render();
  }
  function stopBeat() { beat.on = false; clearTimeout(beat.timer); $("beatCount").textContent = "0"; wakeOff(); render(); }

  // ---------- timer ----------
  function runLoop() {
    clearInterval(timer.interval);
    timer.interval = setInterval(() => { if (timer.endAt && left() <= 0) finish(); render(); }, 250);
  }
  function startTimer(seconds, label) {
    timer.endAt = Date.now() + seconds * 1000; timer.label = label || ""; timer.done = false;
    audio(); wakeOn(); save(); runLoop(); render();
  }
  function finish() {
    clearInterval(timer.interval);
    timer.endAt = 0; timer.done = true; save();
    tone(900, 250); setTimeout(() => tone(900, 250), 400); setTimeout(() => tone(900, 250), 800);
    buzz([300, 150, 300, 150, 300]);
    app.speak("Time is up. " + timer.label);
    wakeOff(); render();
  }
  function stopTimer() { clearInterval(timer.interval); timer.endAt = 0; timer.done = false; save(); wakeOff(); render(); }

  // ---------- tourniquet clock ----------
  function startTourniquet() { tq.at = Date.now(); save(); render(); if (!timer.interval) runLoop(); }
  function clearTourniquet() { tq.at = 0; save(); render(); }

  // ---------- where am I ----------
  function dms(v, pos, neg) { return Math.abs(v).toFixed(5) + "° " + (v >= 0 ? pos : neg); }
  function spoken(v, pos, neg) {
    const words = Math.abs(v).toFixed(4).split("").map((ch) => (ch === "." ? "point" : ch)).join(" ");
    return words + " " + (v >= 0 ? pos : neg === "S" ? "south" : "west");
  }
  let lastWhere = null;
  function find() {
    const st = $("whereStatus");
    if (!navigator.geolocation) { st.textContent = "This device cannot find its position."; return; }
    st.textContent = "Finding your position. This can take up to 30 seconds. Please allow location if asked.";
    navigator.geolocation.getCurrentPosition((p) => {
      const lat = p.coords.latitude, lon = p.coords.longitude, acc = Math.round(p.coords.accuracy);
      lastWhere = { lat, lon, acc };
      st.textContent = "";
      $("whereLat").textContent = "Latitude " + dms(lat, "N", "S");
      $("whereLon").textContent = "Longitude " + dms(lon, "E", "W");
      $("whereAcc").textContent = "Accurate to about " + acc + " metres." + (acc > 100 ? " Move to open ground or near a window for a better reading." : "");
      $("whereMap").href = "https://www.google.com/maps?q=" + lat.toFixed(5) + "," + lon.toFixed(5);
      $("whereResult").hidden = false;
    }, (e) => {
      st.textContent = e.code === 1 ? "Location is blocked. Allow location for this site in your browser settings, then try again."
        : "Could not find your position. Try again outside or near a window.";
    }, { enableHighAccuracy: true, timeout: 30000, maximumAge: 0 });
  }
  function readWhere() {
    if (!lastWhere) return;
    app.speak("Latitude " + spoken(lastWhere.lat, "north", "S") + ". Longitude " + spoken(lastWhere.lon, "east", "W") + ". Accurate to about " + lastWhere.acc + " metres.");
  }
  function copyWhere() {
    if (!lastWhere) return;
    const t = lastWhere.lat.toFixed(5) + ", " + lastWhere.lon.toFixed(5);
    try { navigator.clipboard.writeText(t); $("whereStatus").textContent = "Copied: " + t; } catch (e) { $("whereStatus").textContent = t; }
  }

  // ---------- start up ----------
  function init(appApi) {
    app = appApi;
    const presets = [[60, "Boil for 1 minute"], [180, "Boil for 3 minutes"], [240, "Wait 4 minutes"], [300, "5 minutes"], [900, "Check again"], [1200, "20 minutes"], [1800, "30 minutes"]];
    const box = $("timerPresets");
    presets.forEach(([s, l]) => {
      const b = document.createElement("button");
      b.className = "chipbtn"; b.textContent = Math.round(s / 60) + " min";
      b.onclick = () => startTimer(s, l);
      box.appendChild(b);
    });
    $("beatBtn").onclick = () => (beat.on ? stopBeat() : startBeat());
    $("timerStart").onclick = () => {
      const m = Math.min(180, Math.max(1, Number($("timerMins").value) || 1));
      startTimer(m * 60, m + " minute timer");
    };
    $("timerStop").onclick = stopTimer;
    $("tqStart").onclick = startTourniquet;
    $("tqClear").onclick = clearTourniquet;
    $("chip").onclick = () => app.show("tools");
    $("whereFind").onclick = find;
    $("whereSpeak").onclick = readWhere;
    $("whereCopy").onclick = copyWhere;
    try {
      const s = JSON.parse(localStorage.getItem("tools") || "{}");
      if (s.endAt && s.endAt > Date.now()) { timer.endAt = s.endAt; timer.label = s.label || ""; wakeOn(); runLoop(); }
      if (s.tq) { tq.at = s.tq; runLoop(); }
    } catch (e) {}
    render();
  }

  root.Tools = { init, startBeat, startTimer, startTourniquet, render };
})(typeof self !== "undefined" ? self : this);
