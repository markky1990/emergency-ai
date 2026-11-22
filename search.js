// Plain keyword search. No AI, no network. Works the same every time.
(function (root) {
  const STOP = new Set(
    ("a an the to do does did i how what is are was my me we can should of for in on it and or with be if at by from " +
      "this that need long much there please tell about so get help someone something have has had im ive you your it's").split(" ")
  );

  function stem(w) {
    if (w.length > 5 && w.endsWith("ing")) return w.slice(0, -3);
    if (w.length > 4 && w.endsWith("ed")) return w.slice(0, -2);
    if (w.length > 3 && w.endsWith("s") && !w.endsWith("ss")) return w.slice(0, -1);
    return w;
  }

  function tokens(text) {
    return String(text)
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((w) => w && !STOP.has(w))
      .map(stem);
  }

  const index = new Map();
  function prepare(card) {
    if (index.has(card.id)) return index.get(card.id);
    const p = {
      title: new Set(tokens(card.title)),
      kw: new Set(tokens(card.keywords.join(" "))),
      kwPhrases: card.keywords.map((k) => tokens(k).join(" ")),
      body: new Set(tokens(card.steps.join(" ") + " " + (card.warning || "")))
    };
    index.set(card.id, p);
    return p;
  }

  function search(query, cards) {
    const q = tokens(query);
    if (!q.length) return [];
    const qJoined = q.join(" ");
    const results = [];
    for (const card of cards) {
      const p = prepare(card);
      let score = 0;
      for (const t of q) {
        if (p.title.has(t)) score += 3;
        if (p.kw.has(t)) score += 4;
        if (p.body.has(t)) score += 1;
      }
      for (const phrase of p.kwPhrases) {
        if (phrase && qJoined.includes(phrase)) score += 6;
      }
      if (score > 0) results.push({ card, score });
    }
    results.sort((a, b) => b.score - a.score);
    // Only keep results reasonably close to the best one.
    if (results.length) {
      const best = results[0].score;
      return results.filter((r) => r.score >= best * 0.4).slice(0, 4);
    }
    return results;
  }

  const api = { search, tokens };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.EmergencySearch = api;
})(typeof self !== "undefined" ? self : this);
