(function () {
  const $ = (id) => document.getElementById(id);
  const cards = self.CARDS;
  const { search } = self.EmergencySearch;

  // ---------- settings ----------
  const defaults = { mode: "text", size: "normal", theme: "night", rate: 1, volume: 0.8, engine: "vosk", voice: "auto" };
  let settings = { ...defaults };
  try { settings = { ...defaults, ...JSON.parse(localStorage.getItem("settings") || "{}") }; } catch (e) {}
  function saveSettings() { try { localStorage.setItem("settings", JSON.stringify(settings)); } catch (e) {} }

  // Day and night colours. "auto" follows the phone's own setting.
  const lightQuery = self.matchMedia ? self.matchMedia("(prefers-color-scheme: light)") : null;
  const isLight = () => settings.theme === "day" || (settings.theme === "auto" && lightQuery && lightQuery.matches);
  function applyTheme() {
    const light = isLight();
    if (light) document.documentElement.setAttribute("data-theme", "light");
    else document.documentElement.removeAttribute("data-theme");
    const meta = $("themeColor"); if (meta) meta.setAttribute("content", light ? "#ffffff" : "#000000");
    const btn = $("themeBtn");
    btn.textContent = light ? "\u{1F319}" : "☀️";
    btn.title = light ? "Switch to night colours" : "Switch to day colours";
    btn.setAttribute("aria-label", btn.title);
    document.querySelectorAll('input[name=theme]').forEach((r) => (r.checked = r.value === settings.theme));
  }
  $("themeBtn").onclick = () => { settings.theme = isLight() ? "night" : "day"; saveSettings(); applyTheme(); };
  document.querySelectorAll('input[name=theme]').forEach((r) => r.addEventListener("change", () => { settings.theme = r.value; saveSettings(); applyTheme(); }));
  if (lightQuery && lightQuery.addEventListener) lightQuery.addEventListener("change", () => { if (settings.theme === "auto") applyTheme(); });

  function applySettings() {
    applyTheme();
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
  const views = ["home", "results", "card", "focus", "tools", "where"];
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

  // ---------- speech in (home screen microphone) ----------
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
  // Icons made with an AI image tool: one per topic, colour-coded by group.
  const CAT_ICON = {
    "First aid": "first-aid", "Medical emergency": "medical", "Vehicles and accidents": "vehicles", "Attacks and threats": "attacks",
    "Disasters": "disasters", "Weather": "weather",
    "Water": "water", "Shelter and food": "shelter", "Basics": "basics", "Home safety": "home",
    "Staying in touch": "touch", "Illness that spreads": "illness"
  };
  function iconEl(name) {
    const ico = document.createElement("span");
    ico.className = "ico"; ico.setAttribute("aria-hidden", "true");
    const img = document.createElement("img");
    img.src = "icons/" + (name || "basics") + ".webp"; img.alt = ""; img.width = 44; img.height = 44; img.decoding = "async";
    ico.appendChild(img);
    return ico;
  }
  const iconFor = (c) => CAT_ICON[c.category] || "basics";

  function makeTile(icon, name, small, onclick, urgent) {
    const b = document.createElement("button");
    b.className = "tile" + (urgent ? " has-urgent" : "");
    const ico = iconEl(icon);
    const txt = document.createElement("span");
    txt.className = "txt";
    const nm = document.createElement("b"); nm.textContent = name;
    txt.appendChild(nm);
    if (small) { const sm = document.createElement("small"); sm.textContent = small; txt.appendChild(sm); }
    b.append(ico, txt);
    b.onclick = onclick;
    return b;
  }

  const QUICK = [
    { id: "cpr-adult", label: "Not breathing (CPR)", icon: "cpr" },
    { id: "bleeding-severe", label: "Heavy bleeding", icon: "bleeding" },
    { id: "choking-adult", label: "Choking", icon: "choking" },
    { id: "snake-bite", label: "Snake bite", icon: "snake" },
    { id: "anaphylaxis", label: "Allergic reaction", icon: "allergy" },
    { id: "heart-attack", label: "Heart attack", icon: "heart" }
  ];
  function renderQuick() {
    const box = $("quick"); box.innerHTML = "";
    QUICK.forEach((q) => {
      const c = cards.find((x) => x.id === q.id);
      if (c) box.appendChild(makeTile(q.icon, q.label, "", () => openCard(c), true));
    });
  }

  function renderTiles() {
    const cats = {};
    cards.forEach((c) => { (cats[c.category] = cats[c.category] || []).push(c); });
    const GROUPS = [
      { title: "Right now", names: ["First aid", "Medical emergency", "Vehicles and accidents", "Attacks and threats"] },
      { title: "Disasters and weather", names: ["Disasters", "Weather"] },
      { title: "Everyday", names: ["Water", "Shelter and food", "Basics", "Home safety", "Staying in touch", "Illness that spreads"] }
    ];
    // Any category not named above goes into "Everyday", so a new category never disappears.
    const listed = new Set(GROUPS.flatMap((g) => g.names));
    GROUPS[2].names.push(...Object.keys(cats).filter((n) => !listed.has(n)));

    const wrap = $("tiles");
    wrap.innerHTML = "";
    GROUPS.forEach((g, gi) => {
      const names = g.names.filter((n) => cats[n]);
      if (!names.length) return;
      const h = document.createElement("h3");
      h.className = "group-title"; h.textContent = g.title;
      const grid = document.createElement("div");
      grid.className = "tiles";
      names.forEach((name) => {
        const list = cats[name];
        grid.appendChild(makeTile(CAT_ICON[name] || "basics", name, list.length + " guide" + (list.length > 1 ? "s" : ""), () => showList(name, list), gi === 0));
      });
      wrap.append(h, grid);
    });
  }

  function showList(title, list) {
    $("resultsTitle").textContent = title;
    $("resultsList").innerHTML = "";
    list.forEach((c) => {
      const b = document.createElement("button");
      b.className = "result" + (c.urgent ? " urgent" : "");
      const ico = iconEl(iconFor(c));
      const txt = document.createElement("span");
      txt.className = "txt";
      const t = document.createElement("b"); t.textContent = c.title;
      const s = document.createElement("span"); s.className = "cat"; s.textContent = c.category;
      txt.append(t, s);
      b.append(ico, txt);
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
  $("openTools").onclick = () => show("tools");
  $("openWhere").onclick = () => show("where");

  // ---------- trust and the info box ----------
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
  $("trustSettings").textContent = trustSummary();

  function openInfo(c) {
    const body = $("infoBody");
    body.innerHTML = "";
    const g = document.createElement("p"); g.className = "info-guide"; g.textContent = c.title; body.appendChild(g);
    body.appendChild(trustBox(c));
    const src = document.createElement("p"); src.className = "source"; src.textContent = "Source: " + c.source + "."; body.appendChild(src);
    const n = document.createElement("p"); n.className = "note"; n.textContent = "Guidance only. It does not replace professional help. Call 000 if you can."; body.appendChild(n);
    $("infoDlg").showModal();
  }

  // ---------- timers on guide pages ----------
  const T = (s, label, button) => ({ kind: "timer", s, label, button });
  const TOOLCHIPS = {
    "cpr-adult": [{ kind: "beat", button: "Start CPR beat" }],
    "cpr-child-baby": [{ kind: "beat", button: "Start CPR beat" }],
    "water-boil": [T(60, "Boil for 1 minute", "1 minute timer"), T(180, "Boil for 3 minutes", "3 minute timer")],
    "water-bleach": [T(1800, "Wait 30 minutes for the bleach", "30 minute timer")],
    "burns": [T(1200, "Keep cooling the burn", "20 minute cooling timer")],
    "bleeding-severe": [{ kind: "tq", button: "Tourniquet clock" }],
    "low-blood-sugar": [T(900, "Check again", "15 minute timer")],
    "asthma": [T(240, "Wait 4 minutes, then give 4 more puffs", "4 minute timer")],
    "anaphylaxis": [T(300, "No better? You may give a second dose", "5 minute timer")],
    "marine-stings": [T(1200, "Hot water soak", "20 minute timer")],
    "disinfect-surfaces": [T(60, "Leave the bleach on for 1 minute", "1 minute timer")],
    "seizure": [T(300, "Call 000 if it is still going", "5 minute seizure timer")]
  };
  function fillChips(box, c) {
    box.innerHTML = "";
    (TOOLCHIPS[c.id] || []).forEach((t) => {
      const b = document.createElement("button");
      b.className = "chipbtn"; b.type = "button"; b.textContent = "⏱️ " + t.button;
      b.onclick = () => {
        if (t.kind === "beat") self.Tools.startBeat();
        else if (t.kind === "tq") self.Tools.startTourniquet();
        else self.Tools.startTimer(t.s, t.label);
        b.textContent = "Started";
        setTimeout(() => { b.textContent = "⏱️ " + t.button; }, 1500);
      };
      box.appendChild(b);
    });
  }

  // ---------- drawings (made with an AI image tool, each checked against its step) ----------
  const FIGURES = {
    "cpr-adult": { 2: ["img/cpr-hands.webp", "Drawing: a rescuer kneeling beside a person lying on their back, arms straight, one hand on top of the other on the centre of the chest."] },
    "cpr-child-baby": { 3: ["img/baby-cpr.webp", "Drawing: a baby lying on their back, two fingers pressing on the middle of the chest."] },
    "recovery-position": { 2: ["img/recovery-position.webp", "Drawing: a person lying on their side, head tilted back, top hand under the cheek, top knee bent forward."] },
    "choking-adult": { 2: ["img/choking-adult.webp", "Drawing: a person leaning forward while a helper supports them and gives a back blow between the shoulder blades."] },
    "choking-baby": { 2: ["img/choking-baby.webp", "Drawing: a baby face down along a rescuer's forearm, head supported, with a back blow between the shoulder blades."] },
    "bleeding-severe": {
      0: ["img/bleeding-pressure.webp", "Drawing: a hand pressing firmly on a folded pad over a bleeding wound on the forearm."],
      4: ["img/tourniquet.webp", "Drawing: a tourniquet tightened on bare skin of the upper arm just above a bleeding wound, away from the elbow."]
    },
    "snake-bite": { 3: ["img/snake-bandage.webp", "Drawing: a firm bandage wrapped up the whole lower leg from just above the toes, with a splint along the leg."] },
    "anaphylaxis": { 2: ["img/adrenaline-pen.webp", "Drawing: an adrenaline pen pressed at a right angle against the outer middle of the thigh."] },
    "burns": { 1: ["img/burn-cooling.webp", "Drawing: a burned hand held under cool running water from a tap."] }
  };
  function figureFor(id, i) {
    const f = FIGURES[id] && FIGURES[id][i];
    if (!f) return null;
    const fig = document.createElement("figure");
    fig.className = "fig";
    const img = document.createElement("img");
    img.src = f[0]; img.alt = f[1]; img.loading = "lazy"; img.width = 360; img.height = 360;
    fig.append(img);
    return fig;
  }

  // ---------- guide page ----------
  let current = null, stepIndex = 0;

  function cardText(c) { return c.title + ". " + c.steps.map((s, i) => "Step " + (i + 1) + ". " + s).join(" ") + (c.warning ? " Warning. " + c.warning : ""); }

  function openCard(c) {
    current = c; stepIndex = 0;
    const body = $("cardBody");
    body.innerHTML = "";
    if (c.urgent) { const b = document.createElement("span"); b.className = "badge"; b.textContent = "Urgent"; body.appendChild(b); }
    const head = document.createElement("div"); head.className = "card-head";
    const h = document.createElement("h2"); h.textContent = c.title;
    const info = document.createElement("button");
    info.className = "info-btn"; info.type = "button"; info.textContent = "i";
    info.setAttribute("aria-label", "About this guide: where it comes from"); info.title = "Where this guide comes from";
    info.onclick = () => openInfo(c);
    head.append(h, info);
    body.appendChild(head);
    if (c.warning) { const w = document.createElement("div"); w.className = "warning"; w.textContent = c.warning; body.appendChild(w); }
    const chips = document.createElement("div"); chips.className = "chips"; fillChips(chips, c);
    if (chips.children.length) body.appendChild(chips);
    const ol = document.createElement("ol"); ol.className = "steps";
    c.steps.forEach((s, i) => {
      const li = document.createElement("li");
      const t = document.createElement("span"); t.textContent = s; li.appendChild(t);
      const fig = figureFor(c.id, i); if (fig) li.appendChild(fig);
      ol.appendChild(li);
    });
    body.appendChild(ol);
    renderBar();
    show("card");
    if (settings.mode === "all") readAll();
    else if (settings.mode === "steps") readStep(0);
  }

  let hfBtn = null;
  function renderBar() {
    const el = $("cardBar");
    el.innerHTML = "";
    const mk = (label, fn, primary) => { const b = document.createElement("button"); b.className = "bar-btn" + (primary ? " primary" : ""); b.textContent = label; b.onclick = fn; el.appendChild(b); return b; };
    hfBtn = mk("Hands‑free", startHandsFree, true);
    mk("Big steps", () => openFocus(0));
    mk("Read all", readAll);
    mk("Stop", () => { stopHandsFree(); stopSpeaking(); });
    hfUI(false);
  }

  function markActive(i) {
    document.querySelectorAll("ol.steps li").forEach((li, n) => li.classList.toggle("active", n === i));
    const li = document.querySelectorAll("ol.steps li")[i];
    if (li && !$("card").hidden) li.scrollIntoView({ block: "center", behavior: "smooth" });
    if (!$("focus").hidden && i >= 0) renderFocus(i, false);
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

  // ---------- big steps view: one large step at a time ----------
  let focusIdx = 0, focusAuto = false;
  function openFocus(i) {
    if (!current) return;
    focusAuto = settings.mode === "steps";
    show("focus");
    renderFocus(i || 0, focusAuto);
  }
  function renderFocus(i, speakIt) {
    const n = current.steps.length;
    focusIdx = Math.max(0, Math.min(n - 1, i));
    stepIndex = focusIdx;
    $("focusTitle").textContent = current.title;
    $("focusCount").textContent = "Step " + (focusIdx + 1) + " of " + n;
    $("focusStep").textContent = current.steps[focusIdx];
    const ff = $("focusFig"); ff.innerHTML = "";
    const fg = figureFor(current.id, focusIdx); if (fg) ff.appendChild(fg);
    const dots = $("focusDots"); dots.innerHTML = "";
    for (let k = 0; k < n; k++) { const d = document.createElement("span"); d.className = "dot" + (k === focusIdx ? " on" : k < focusIdx ? " done" : ""); dots.appendChild(d); }
    const w = $("focusWarn");
    w.hidden = !(current.warning && focusIdx === n - 1);
    w.textContent = current.warning || "";
    fillChips($("focusTool"), current);
    $("focusBack").disabled = focusIdx === 0;
    $("focusNext").textContent = focusIdx === n - 1 ? "Done" : "Next";
    $("focusRead").textContent = "Read aloud: " + (focusAuto ? "on" : "off");
    window.scrollTo(0, 0);
    if (speakIt) speak("Step " + (focusIdx + 1) + ". " + current.steps[focusIdx]);
  }
  $("focusNext").onclick = () => {
    if (focusIdx >= current.steps.length - 1) { stopSpeaking(); back(); return; }
    renderFocus(focusIdx + 1, focusAuto);
  };
  $("focusBack").onclick = () => renderFocus(focusIdx - 1, focusAuto);
  $("focusClose").onclick = back;
  $("focusRead").onclick = () => {
    focusAuto = !focusAuto;
    if (focusAuto) renderFocus(focusIdx, true); else { stopSpeaking(); renderFocus(focusIdx, false); }
  };
  $("focusHf").onclick = () => startHandsFree();

  // ---------- hands-free ----------
  // One tap starts it. It reads a step, listens for a few words, and carries on by itself.
  let hf = null; // the running session
  const NUMBERS_TEXT = "I cannot make the call for you. Call 000 now. That is triple zero. On a mobile phone you can also call 1 1 2. Say next to carry on.";
  const hfStatus = (t) => { $("hfStatus").textContent = t; $("focusStatus").textContent = t; };
  function hfUI(on) {
    if (hfBtn) { hfBtn.textContent = on ? "Stop hands‑free" : "Hands‑free"; hfBtn.classList.toggle("listening", on); }
    const f = $("focusHf"); f.textContent = on ? "Stop hands-free" : "Hands-free: talk to me"; f.classList.toggle("listening", on);
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
    if (!$("card").hidden) markActive(-1);
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

  // ---------- start up ----------
  self.Tools.init({ speak: (t) => speak(t), show: (n) => show(n) });
  renderQuick();
  renderTiles();

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
