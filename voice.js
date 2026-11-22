// Voice input with three engines:
//   vosk    - small offline engine, runs on the device
//   whisper - larger, more accurate offline engine, runs on the device
//   browser - the browser's own speech service (may need internet)
(function (root) {
  const W = "voice/whisper/models/Xenova/whisper-tiny.en/";
  const FILES = {
    vosk: ["voice/vosk/vosk.js", "voice/vosk/vosk-model-small-en-us-0.15.tar.gz"],
    whisper: [
      "voice/whisper/transformers.min.js",
      "voice/whisper/ort-wasm-simd-threaded.jsep.wasm",
      ...["config.json", "generation_config.json", "preprocessor_config.json", "tokenizer.json", "tokenizer_config.json",
        "added_tokens.json", "special_tokens_map.json", "normalizer.json", "vocab.json", "merges.txt",
        "onnx/encoder_model_quantized.onnx", "onnx/decoder_model_merged_quantized.onnx"].map((f) => W + f)
    ]
  };
  const abs = (p) => new URL(p, location.href).href;

  // ---------- save files on the device so voice works with no internet ----------
  async function download(engine, onProgress) {
    const list = FILES[engine];
    if (!list) return;
    const cache = await caches.open("voice-v1");
    for (let i = 0; i < list.length; i++) {
      onProgress && onProgress(i, list.length, list[i]);
      if (await cache.match(list[i])) continue;
      const res = await fetch(list[i]);
      if (!res.ok) throw new Error("Could not download " + list[i]);
      await cache.put(list[i], res);
    }
    onProgress && onProgress(list.length, list.length, "");
  }
  async function isDownloaded(engine) {
    if (!("caches" in root)) return false;
    try {
      const cache = await caches.open("voice-v1");
      for (const f of FILES[engine] || []) if (!(await cache.match(f))) return false;
      return true;
    } catch (e) { return false; }
  }

  // ---------- engine loading (kept in memory after first use) ----------
  const loading = {};
  function once(key, fn) {
    if (!loading[key]) loading[key] = fn().catch((e) => { delete loading[key]; throw e; });
    return loading[key];
  }
  function loadScript(src) {
    return new Promise((res, rej) => {
      const s = document.createElement("script");
      s.src = src; s.onload = res; s.onerror = () => rej(new Error("Could not load " + src));
      document.head.appendChild(s);
    });
  }
  const loadVosk = () => once("vosk", async () => {
    if (!root.Vosk) await loadScript("voice/vosk/vosk.js");
    // Must be a full address: the loader runs in a background worker, which would
    // otherwise look for the file at the top of the website instead of this folder.
    return root.Vosk.createModel(abs("voice/vosk/vosk-model-small-en-us-0.15.tar.gz"));
  });
  const loadWhisper = () => once("whisper", async () => {
    const tf = await import(abs("voice/whisper/transformers.min.js"));
    tf.env.allowRemoteModels = false;
    tf.env.allowLocalModels = true;
    tf.env.localModelPath = abs("voice/whisper/models/");
    tf.env.backends.onnx.wasm.wasmPaths = abs("voice/whisper/");
    tf.env.backends.onnx.wasm.numThreads = 1;
    return tf.pipeline("automatic-speech-recognition", "Xenova/whisper-tiny.en", { dtype: "q8", device: "wasm" });
  });

  // ---------- microphone ----------
  async function openMic(onChunk) {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia)
      throw new Error("The microphone only works when the app is opened from a secure web address (one that starts with https).");
    const stream = await navigator.mediaDevices.getUserMedia({ audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true } });
    const AC = root.AudioContext || root.webkitAudioContext;
    let ctx;
    try { ctx = new AC({ sampleRate: 16000 }); } catch (e) { ctx = new AC(); }
    const src = ctx.createMediaStreamSource(stream);
    const node = ctx.createScriptProcessor(4096, 1, 1);
    node.onaudioprocess = onChunk;
    src.connect(node);
    node.connect(ctx.destination);
    return {
      ctx,
      close() {
        node.onaudioprocess = null;
        try { node.disconnect(); src.disconnect(); } catch (e) {}
        stream.getTracks().forEach((t) => t.stop());
        ctx.close().catch(() => {});
      }
    };
  }

  function resample(data, from, to) {
    if (from === to) return data;
    const ratio = from / to, out = new Float32Array(Math.floor(data.length / ratio));
    for (let i = 0; i < out.length; i++) {
      const pos = i * ratio, i0 = Math.floor(pos), i1 = Math.min(i0 + 1, data.length - 1), f = pos - i0;
      out[i] = data[i0] * (1 - f) + data[i1] * f;
    }
    return out;
  }

  function clean(t) {
    return String(t || "").replace(/\[[^\]]*\]|\([^)]*\)|\*[^*]*\*/g, " ").replace(/\s+/g, " ").trim();
  }

  // ---------- one listen session ----------
  // cb: { onState(message, isListening), onText(text), onError(message), onEnd() }
  function listen(engine, cb) {
    let stopped = false, ended = false, stopNow = () => {};
    const end = () => { if (!ended) { ended = true; cb.onEnd && cb.onEnd(); } };
    const fail = (m) => { cb.onError && cb.onError(m); end(); };
    const ctl = { stop() { stopped = true; stopNow(); } };

    (async () => {
      try {
        if (engine === "browser") return await runBrowser();
        if (engine === "vosk") return await runVosk();
        if (engine === "whisper") return await runWhisper();
        fail("Unknown voice engine.");
      } catch (e) {
        fail(e && e.message ? e.message : "Voice input problem.");
      }
    })();

    async function runBrowser() {
      const SR = root.SpeechRecognition || root.webkitSpeechRecognition;
      if (!SR) return fail("This browser cannot listen. Choose another way of hearing you in Settings, or type your question.");
      const rec = new SR();
      rec.lang = navigator.language || "en-US";
      let got = false;
      rec.onresult = (e) => { got = true; cb.onText(e.results[0][0].transcript); };
      rec.onerror = (e) => cb.onError && cb.onError(e.error === "no-speech" ? "I didn't hear anything. Try again." : "Voice input problem (" + e.error + ").");
      rec.onend = () => { if (!got) cb.onState && cb.onState("", false); end(); };
      stopNow = () => rec.stop();
      cb.onState("Listening... (this one may need internet)", true);
      rec.start();
    }

    async function runVosk() {
      cb.onState("Getting the voice ready...", false);
      const model = await loadVosk();
      if (stopped) return end();
      let rec, mic, finished = false, timer;
      const finish = (text) => {
        if (finished) return;
        finished = true;
        clearTimeout(timer);
        mic && mic.close();
        try { rec && rec.remove(); } catch (e) {}
        text = clean(text);
        if (text) cb.onText(text); else cb.onError && cb.onError("I didn't hear anything. Try again.");
        end();
      };
      mic = await openMic((e) => { try { rec && rec.acceptWaveform(e.inputBuffer); } catch (err) {} });
      rec = new model.KaldiRecognizer(mic.ctx.sampleRate);
      rec.on("result", (m) => finish(m.result && m.result.text));
      rec.on("partialresult", (m) => cb.onState("Listening... " + ((m.result && m.result.partial) || ""), true));
      timer = setTimeout(() => finish(""), 12000);
      stopNow = () => finish("");
      cb.onState("Listening...", true);
    }

    async function runWhisper() {
      cb.onState("Getting the voice ready...", false);
      const asr = await loadWhisper();
      if (stopped) return end();
      const chunks = [];
      let speechStarted = false, lastLoud = 0, noise = 0.004, seen = 0, done = false;
      const t0 = performance.now();
      const mic = await openMic((e) => {
        if (done) return;
        const d = new Float32Array(e.inputBuffer.getChannelData(0));
        chunks.push(d);
        let s = 0;
        for (let i = 0; i < d.length; i++) s += d[i] * d[i];
        const rms = Math.sqrt(s / d.length), now = performance.now();
        if (seen < 3) { noise = Math.max(noise, rms); seen++; return; }
        if (rms > Math.max(0.015, noise * 3)) { speechStarted = true; lastLoud = now; }
        if (speechStarted && now - lastLoud > 1300) finishRecording();
        else if (!speechStarted && now - t0 > 8000) finishRecording();
        else if (now - t0 > 20000) finishRecording();
      });
      const rate = mic.ctx.sampleRate;
      async function finishRecording() {
        if (done) return;
        done = true;
        mic.close();
        if (!speechStarted && !stopped) { cb.onError && cb.onError("I didn't hear anything. Try again."); return end(); }
        cb.onState("Working out what you said...", false);
        try {
          let n = 0; chunks.forEach((c) => (n += c.length));
          const all = new Float32Array(n); let o = 0;
          chunks.forEach((c) => { all.set(c, o); o += c.length; });
          const out = await asr(resample(all, rate, 16000));
          const text = clean(Array.isArray(out) ? out[0].text : out.text);
          if (text) cb.onText(text); else cb.onError && cb.onError("I didn't catch that. Try again.");
        } catch (e) {
          cb.onError && cb.onError("Voice problem: " + (e.message || e));
        }
        end();
      }
      stopNow = finishRecording;
      cb.onState("Listening...", true);
    }
    return ctl;
  }

  // ---------- hands-free: keep the microphone open and listen for a few words ----------
  // The recogniser only hears the words in this short list, so it is far more reliable
  // than free speech. It only listens while listen() is waiting, never while the app is speaking.
  const COMMAND_WORDS = ["next", "back", "previous", "repeat", "again", "stop", "slower", "faster", "louder", "quieter",
    "call", "triple", "zero", "emergency", "numbers", "[unk]"];

  async function openCommands() {
    const model = await loadVosk();
    let rec = null, enabled = false, resolveFn = null;
    const mic = await openMic((e) => {
      if (enabled && rec) { try { rec.acceptWaveform(e.inputBuffer); } catch (err) {} }
    });
    rec = new model.KaldiRecognizer(mic.ctx.sampleRate, JSON.stringify(COMMAND_WORDS));
    rec.on("result", (m) => {
      const t = ((m.result && m.result.text) || "").replace(/\[unk\]/g, "").trim();
      if (t && enabled && resolveFn) { const f = resolveFn; resolveFn = null; enabled = false; f(t); }
    });
    return {
      // Resolves with the words heard, or null if nothing was heard before ms ran out.
      listen(ms) {
        return new Promise((res) => {
          enabled = true;
          const timer = setTimeout(() => {
            try { rec.retrieveFinalResult(); } catch (err) {}
            enabled = false; resolveFn = null; res(null);
          }, ms);
          resolveFn = (t) => { clearTimeout(timer); res(t); };
        });
      },
      cancel() { enabled = false; if (resolveFn) { const f = resolveFn; resolveFn = null; f(null); } },
      close() { enabled = false; resolveFn = null; try { mic.close(); } catch (err) {} try { rec.remove(); } catch (err) {} }
    };
  }

  root.Voice = { listen, download, isDownloaded, openCommands, FILES, _loaders: { vosk: loadVosk, whisper: loadWhisper } };
})(typeof self !== "undefined" ? self : this);
