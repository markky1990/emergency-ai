(function () {
  const $ = (id) => document.getElementById(id);
  const cards = self.CARDS;
  const { search } = self.EmergencySearch;

  // ---------- settings ----------
  const defaults = { mode: "text", size: "normal", rate: 1, volume: 0.8, engine: "vosk", voice: "auto" };
  let settings = { ...defaults };
  try { settings = { ...defaults, ...JSON.parse(localStorage.getItem("settings") || "{}") }; } catch (e) {}
  function saveSettings() { try { localStorage.setItem("settings", JSON.stringify(settings)); } catch (e) {} }
  function applySettings() {
    document.body.dataset.size = settings.size;
    document.querySelectorAll('input[name=mode]').forEach((r) => (r.checked = r.value === settings.mode));
    document.querySelectorAll('input[name=size]').forEach((r) => (r.checked = r.value === settings.size));
    document.querySelectorAll('input[name=engine]').forEach((r) => (r.checked = r.value === settings.engine));
    $("rate").value = settings.rate;
    $("volume").value = settings.volume;
  }
  $("settingsBtn").onclick = () => { $("settings").showModal(); refreshVoiceStatus(); };
  document.querySelectorAll('input[name=mode]').forEach((r) => r.addEventListener("change", () => { settings.mode = r.value; saveSettings(); }));
  document.querySelectorAll('input[name=size]').forEach((r) => r.addEventListener("change", () => { settings.size = r.value; saveSettings(); applySettings(); }));
  $("rate").addEventListener("input", (e) => { settings.rate = Number(e.target.value); saveSettings(); });
  $("volume").addEventListener("input", (e) => { settings.volume = Number(e.target.value); saveSettings(); });
  applySettings();

  // ---------- views ----------
  const views = ["home", "results", "card"];
  let history = ["home"];
  function show(name, push = true) {
    stopHandsFree();
    stopSpeaking();
    views.forEach((v) => ($(v).hidden = v !== name));
    if (push) history.push(name);
    window.scrollTo(0, 0);
  }
  function back() {
    history.pop();
    show(history[history.length - 1] || "home", false);
    if (!history.length) history = ["home"];
  }
  document.querySelectorAll("[data-back]").forEach((b) => (b.onclick = back));

  // ---------- speech out ----------
  const synth = self.speechSynthesis;
  let onSpeechEnd = null;
  // Speaking voice: an Australian voice if the device has one.
  let voices = [];
  const isEn = (v) => /^en([-_]|$)/i.test(v.lang);
  const isAU = (v) => /^en[-_]AU/i.test(v.lang);
  function pickVoice() {
    if (settings.voice && settings.voice !== "auto") {
      const chosen = voices.find((v) => v.voiceURI === settings.voice);
      if (chosen) return chosen;
    }
    const best = (list) => list.find((v) => v.localService) || list[0];
    const au = voices.filter(isAU);
    if (au.length) return best(au);
    const near = voices.filter((v) => /^en[-_](GB|NZ|IE)/i.test(v.lang));
    return best(near) || best(voices) || null;
  }
  function refreshVoices() {
    voices = synth ? synth.getVoices().filter(isEn) : [];
    const sel = $("voiceSelect");
    sel.innerHTML = "";
    const auto = document.createElement("option");
    auto.value = "auto"; auto.textContent = "Automatic (Australian if the device has one)";
    sel.appendChild(auto);
    [...voices].sort((a, b) => (isAU(b) - isAU(a)) || a.name.localeCompare(b.name)).forEach((v) => {
      const o = document.createElement("option");
      o.value = v.voiceURI;
      o.textContent = v.name + " (" + v.lang.replace("_", "-") + (v.localService ? ", works with no internet" : ", needs internet") + ")";
      sel.appendChild(o);
    });
    sel.value = [...sel.options].some((o) => o.value === settings.voice) ? settings.voice : "auto";
    const v = pickVoice();
    $("voiceInfo").textContent = !voices.length
      ? "No spoken voices found on this device yet."
      : isAU(v)
        ? "Using " + v.name + " (Australian)."
        : "This device has no Australian voice. Using " + v.name + ". To add one: on Android, go to Settings, Text-to-speech, Google, Install voice data, English (Australia). On iPhone, go to Settings, Accessibility, Spoken Content, Voices, English, Australia. On Windows, go to Settings, Time and language, Speech, Add voices.";
  }
  if (synth) { synth.onvoiceschanged = refreshVoices; }
  refreshVoices();
  $("voiceSelect").addEventListener("change", (e) => { settings.voice = e.target.value; saveSettings(); refreshVoices(); });
  $("voiceTest").onclick = () => speak("Boil the water for one minute at a rolling boil. If you are high up in the mountains, boil it for three minutes.");

  function speak(text, done) {
    if (!synth) return;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = settings.rate;
    u.volume = settings.volume;
    const v = pickVoice();
    if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = "en-AU"; }
    u.onend = () => done && done();
    u.onerror = () => done && done();
    synth.speak(u);
  }
  // Speak and wait until the voice has finished (or a safety timer runs out).
  let pendingSpeak = null;
  function speakAsync(text) {
    return new Promise((resolve) => {
      if (!synth) { resolve(); return; }
      let finished = false;
      const done = () => {
        if (finished) return;
        finished = true; clearTimeout(timer);
        if (pendingSpeak === done) pendingSpeak = null;
        resolve();
      };
      const timer = setTimeout(done, Math.max(3000, (text.length * 95) / settings.rate) + 4000);
      pendingSpeak = done;
      speak(text, done);
    });
  }
  function stopSpeaking() { if (synth) synth.cancel(); onSpeechEnd = null; if (pendingSpeak) pendingSpeak(); }

  // ---------- speech in ----------
  let listening = null;
  function listen(button, labelEl, onText) {
    if (listening) { listening.stop(); return; }
    stopSpeaking();
    const light = (on) => {
      button.classList.toggle("listening", on);
      if (labelEl) labelEl.textContent = on ? "Listening..." : "Tap and ask";
    };
    listening = self.Voice.listen(settings.engine, {
      onState: (msg, on) => { setStatus(msg); light(!!on); },
      onText: (t) => { setStatus(""); onText(t); },
      onError: (msg) => setStatus(msg),
      onEnd: () => { listening = null; light(false); }
    });
  }
  function setStatus(t) { $("micStatus").textContent = t; }

  // Voice engine choice and saving it for offline use
  async function refreshVoiceStatus() {
    const ok = await self.Voice.isDownloaded(settings.engine);
    $("voiceState").textContent =
      settings.engine === "browser" ? "Uses the browser's own voice service. May need internet." :
      ok ? "Saved on this device. Works with no internet." : "Not saved yet. Tap the button below while you have internet.";
    $("voiceDownload").hidden = settings.engine === "browser" || ok;
  }
  $("voiceDownload").onclick = async () => {
    const btn = $("voiceDownload"); btn.disabled = true;
    try {
      await self.Voice.download(settings.engine, (i, n) => ($("voiceState").textContent = "Saving... " + i + " of " + n + " files"));
    } catch (e) { $("voiceState").textContent = "Could not save: " + e.message; }
    btn.disabled = false; refreshVoiceStatus();
  };
  document.querySelectorAll('input[name=engine]').forEach((r) => r.addEventListener("change", () => { settings.engine = r.value; saveSettings(); refreshVoiceStatus(); }));

  // ---------- home ----------
  function renderTiles() {
    const cats = {};
    cards.forEach((c) => { (cats[c.category] = cats[c.category] || []).push(c); });
    $("tiles").innerHTML = "";
    Object.keys(cats).forEach((name) => {
      const b = document.createElement("button");
      b.className = "tile" + (cats[name].some((c) => c.urgent) ? " has-urgent" : "");
      b.innerHTML = "<span>" + name + "</span><small>" + cats[name].length + " guide" + (cats[name].length > 1 ? "s" : "") + "</small>";
      b.onclick = () => showList(name, cats[name]);
      $("tiles").appendChild(b);
    });
  }

  function showList(title, list) {
    $("resultsTitle").textContent = title;
    $("resultsList").innerHTML = "";
    list.forEach((c) => {
      const b = document.createElement("button");
      b.className = "result" + (c.urgent ? " urgent" : "");
      b.innerHTML = "<b></b><span></span>";
      b.firstChild.textContent = c.title;
      b.lastChild.textContent = c.category;
      b.onclick = () => openCard(c);
      $("resultsList").appendChild(b);
    });
    show("results");
  }

  function ask(query) {
    query = (query || "").trim();
    if (!query) return;
    const found = search(query, cards);
    if (!found.length) {
      setStatus("No match for \"" + query + "\". Try different words, or browse below.");
      if (views.some((v) => !$(v).hidden && v !== "home")) show("home");
      return;
    }
    setStatus("");
    if (found.length === 1 || found[0].score >= found[1].score * 1.8) openCard(found[0].card);
    else showList("Best matches for \"" + query + "\"", found.map((r) => r.card));
  }

  $("searchForm").onsubmit = (e) => { e.preventDefault(); ask($("searchInput").value); };
  $("micBtn").onclick = () => listen($("micBtn"), $("micLabel"), (t) => { $("searchInput").value = t; ask(t); });

  // ---------- trust ----------
  function fmtDate(iso) {
    const d = new Date(iso + "T00:00:00");
    return isNaN(d) ? iso : d.toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" });
  }
  function trustBox(c) {
    const s = self.Trust.status(c);
    const el = document.createElement("div");
    el.className = "trust " + s.state;
    if (s.state === "checked") {
      el.textContent = "Checked by " + s.review.reviewer + " on " + fmtDate(s.review.date) + ".";
    } else if (s.state === "verified") {
      const v = s.verification;
      el.appendChild(document.createTextNode("Checked against published sources on " + fmtDate(v.date) + ". "));
      const list = document.createElement("span");
      v.sources.forEach((src, i) => {
        const a = document.createElement("a");
        a.href = src.url; a.target = "_blank"; a.rel = "noopener noreferrer"; a.textContent = src.name;
        list.appendChild(a);
        if (i < v.sources.length - 1) list.appendChild(document.createTextNode("; "));
      });
      el.appendChild(document.createTextNode("Sources: "));
      el.appendChild(list);
      if (v.note) {
        const n = document.createElement("div");
        n.className = "trust-note";
        n.textContent = "Could not confirm: " + v.note;
        el.appendChild(n);
      }
    } else if (s.state === "changed") {
      el.textContent = "This guide was changed after it was checked. Confirm with official sources or emergency services.";
    } else {
      el.textContent = "Not yet checked against published sources. Confirm with official sources or emergency services.";
    }
    return el;
  }
  function trustSummary() {
    const t = self.Trust.summary(cards), v = self.Trust.CONTENT;
    return "Guides updated " + fmtDate(v.updated) + ". " + (t.checked + t.verified) + " of " + t.total + " guides are checked against published sources.";
  }
  $("trustLine").textContent = trustSummary();
  $("trustSettings").textContent = trustSummary();

  // ---------- card ----------
  let current = null, stepIndex = 0;

  function cardText(c) { return c.title + ". " + c.steps.map((s, i) => "Step " + (i + 1) + ". " + s).join(" ") + (c.warning ? " Warning. " + c.warning : ""); }

  function openCard(c) {
    current = c; stepIndex = 0;
    const body = $("cardBody");
    body.innerHTML = "";
    if (c.urgent) { const b = document.createElement("span"); b.className = "badge"; b.textContent = "Urgent"; body.appendChild(b); }
    const h = document.createElement("h2"); h.textContent = c.title; body.appendChild(h);
    body.appendChild(trustBox(c));
    if (c.warning) { const w = document.createElement("div"); w.className = "warning"; w.textContent = c.warning; body.appendChild(w); }
    const ol = document.createElement("ol"); ol.className = "steps";
    c.steps.forEach((s) => { const li = document.createElement("li"); li.textContent = s; ol.appendChild(li); });
    body.appendChild(ol);
    const src = document.createElement("p"); src.className = "source"; src.textContent = "Source: " + c.source + "."; body.appendChild(src);
    renderControls();
    show("card");
    if (settings.mode === "all") readAll();
    else if (settings.mode === "steps") readStep(0);
  }

  function renderControls() {
    const el = $("controls");
    el.innerHTML = "";
    const mk = (label, fn, primary) => { const b = document.createElement("button"); b.textContent = label; if (primary) b.className = "primary"; b.onclick = fn; el.appendChild(b); return b; };
    hfBtn = mk("Hands-free: talk to me", startHandsFree, true);
    hfBtn.classList.add("wide");
    mk("Read all", readAll);
    mk("Step by step", () => readStep(0));
    mk("Previous", () => readStep(stepIndex - 1));
    mk("Next", () => readStep(stepIndex + 1));
    mk("Repeat", () => readStep(stepIndex));
    mk("Stop", () => { stopHandsFree(); stopSpeaking(); });
    hfUI(false);
  }

  // ---------- hands-free ----------
  // One tap starts it. It reads a step, listens for a few words, and carries on by itself.
  let hfBtn = null;
  let hf = null; // the running session
  const NUMBERS_TEXT = "I cannot make the call for you. Call 000 now. That is triple zero. On a mobile phone you can also call 1 1 2. Say next to carry on.";
  const hfStatus = (t) => { $("hfStatus").textContent = t; };
  function hfUI(on) {
    if (!hfBtn) return;
    hfBtn.textContent = on ? "Stop hands-free" : "Hands-free: talk to me";
    hfBtn.classList.toggle("listening", on);
  }
  function parseCommand(text) {
    const w = text.toLowerCase();
    if (/\bstop\b/.test(w)) return "stop";
    if (/\b(call|emergency|numbers|zero|triple)\b/.test(w)) return "numbers";
    if (/\bnext\b/.test(w)) return "next";
    if (/\b(back|previous)\b/.test(w)) return "back";
    if (/\b(repeat|again)\b/.test(w)) return "repeat";
    if (/\bslower\b/.test(w)) return "slower";
    if (/\bfaster\b/.test(w)) return "faster";
    if (/\blouder\b/.test(w)) return "louder";
    if (/\bquieter\b/.test(w)) return "quieter";
    return null;
  }
  // Wait up to ms for a known command. Words we do not know are ignored.
  async function listenForCommand(run, ms) {
    const end = Date.now() + ms;
    while (run.active && Date.now() < end) {
      const text = await run.session.listen(end - Date.now());
      if (!run.active || text === null) return null;
      const c = parseCommand(text);
      if (c) return c;
    }
    return null;
  }
  // After a step: wait 10 seconds, ask "Ready for next?", wait 10 more, then keep
  // listening quietly for up to 3 minutes before stopping to save battery.
  async function waitAfterStep(run) {
    hfStatus("Listening. Say next, back, repeat, or stop.");
    let c = await listenForCommand(run, 10000);
    if (c || !run.active) return c;
    hfStatus("Asking if you are ready...");
    await speakAsync("Ready for next?");
    if (!run.active) return null;
    hfStatus("Listening. Say next, back, repeat, or stop.");
    c = await listenForCommand(run, 10000);
    if (c || !run.active) return c;
    hfStatus("Still listening. Say next when you are ready.");
    return await listenForCommand(run, 180000);
  }
  async function hfLoop(run) {
    const steps = current.steps, say = async (t) => { if (run.active) { hfStatus("Speaking..."); await speakAsync(t); } };
    let i = 0, readNow = true;
    await say(current.title + ". I will read one step at a time. Say next, back, repeat, or stop.");
    while (run.active) {
      if (readNow) {
        markActive(i); stepIndex = i;
        await say("Step " + (i + 1) + ". " + steps[i] + (i === steps.length - 1 && current.warning ? " Warning. " + current.warning : ""));
      }
      readNow = true;
      if (!run.active) break;
      const cmd = await waitAfterStep(run);
      if (!run.active) break;
      if (cmd === null) { await say("I have been quiet for a while, so I am stopping to save battery. Tap Hands-free to start again."); break; }
      if (cmd === "next") {
        if (i >= steps.length - 1) { await say("That was the last step. I am stopping now."); markActive(-1); break; }
        i++;
      } else if (cmd === "back") { i = Math.max(0, i - 1); }
      else if (cmd === "stop") { await say("Stopping."); break; }
      else if (cmd === "numbers") { await say(NUMBERS_TEXT); readNow = false; }
      else if (cmd === "slower" || cmd === "faster") {
        settings.rate = Math.min(1.4, Math.max(0.6, +(settings.rate + (cmd === "faster" ? 0.15 : -0.15)).toFixed(2)));
        saveSettings(); $("rate").value = settings.rate;
        await say(cmd === "faster" ? "Faster." : "Slower.");
      } else if (cmd === "louder" || cmd === "quieter") {
        const up = cmd === "louder";
        if (up && settings.volume >= 1) { await say("That is as loud as I can go. Turn up your phone volume."); }
        else {
          settings.volume = Math.min(1, Math.max(0.2, +(settings.volume + (up ? 0.2 : -0.2)).toFixed(2)));
          saveSettings(); $("volume").value = settings.volume;
          await say(up ? "Louder." : "Quieter.");
        }
      }
      // "repeat" and everything else: read the same step again
    }
  }
  function endHandsFree(run) {
    run.active = false;
    try { run.session && run.session.close(); } catch (e) {}
    try { run.wake && run.wake.release(); } catch (e) {}
    if (hf === run) hf = null;
    hfUI(false);
    markActive(-1);
  }
  function stopHandsFree() {
    if (!hf) return;
    hf.active = false;
    if (hf.session) hf.session.cancel();
    stopSpeaking();
  }
  async function startHandsFree() {
    if (!current) return;
    if (hf) { stopHandsFree(); return; }
    stopSpeaking();
    const run = (hf = { active: true, session: null, wake: null });
    hfUI(true);
    hfStatus("Getting the voice ready...");
    try {
      run.session = await self.Voice.openCommands();
      if (!run.active) { endHandsFree(run); return; }
      try { if (navigator.wakeLock) run.wake = await navigator.wakeLock.request("screen"); } catch (e) {}
    } catch (e) {
      hfStatus(e && e.name === "NotAllowedError"
        ? "The microphone is blocked. Allow the microphone for this site, then try again."
        : "Hands-free could not start. " + (e && e.message ? e.message : ""));
      endHandsFree(run);
      return;
    }
    await hfLoop(run);
    endHandsFree(run);
    hfStatus("");
  }

  function markActive(i) {
    document.querySelectorAll("ol.steps li").forEach((li, n) => li.classList.toggle("active", n === i));
    const li = document.querySelectorAll("ol.steps li")[i];
    if (li) li.scrollIntoView({ block: "center", behavior: "smooth" });
  }

  function readAll() { markActive(-1); speak(cardText(current)); }

  function readStep(i) {
    if (!current) return;
    if (i < 0) i = 0;
    if (i >= current.steps.length) {
      markActive(-1);
      speak("That is the last step." + (current.warning ? " Warning. " + current.warning : ""));
      stepIndex = current.steps.length - 1;
      return;
    }
    stepIndex = i;
    markActive(i);
    speak("Step " + (i + 1) + ". " + current.steps[i]);
  }

  $("cardMic").onclick = () => listen($("cardMic"), null, (t) => {
    const w = t.toLowerCase();
    if (/\b(next|continue|go on)\b/.test(w)) readStep(stepIndex + 1);
    else if (/\b(repeat|again|say that)\b/.test(w)) readStep(stepIndex);
    else if (/\b(back|previous|before)\b/.test(w)) readStep(stepIndex - 1);
    else if (/\b(stop|quiet|silence)\b/.test(w)) stopSpeaking();
    else if (/\b(read all|everything|all of it)\b/.test(w)) readAll();
    else ask(t);
  });

  renderTiles();

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
