// Trust records. A guide shows one of four states:
//   "checked"  - a qualified person signed it off (REVIEWS below), text unchanged since.
//   "verified" - checked against published sources (verifications.js), text unchanged since.
//   "changed"  - it was checked, but the text has been edited since. Treated as unchecked.
//   "draft"    - not checked yet.
// Each record holds a fingerprint (hash) of the guide text when it was checked.
// If anyone edits the guide, the fingerprint no longer matches and the old check
// cannot cover the new text.
//
// To record an expert sign-off, add a line inside REVIEWS:
//   "water-boil": { reviewer: "Jane Smith, paramedic, St John", date: "2026-12-01", hash: "a1b2c3d4" },
// (node tools/review-pack.js prints each guide's fingerprint.)
//
// Source checks live in verifications-source.json. After editing it, run:
//   node tools/stamp.js
(function (root) {
  const CONTENT = { version: "0.3.0", updated: "2026-11-23" };

  const REVIEWS = {
    // (none yet)
  };

  let VERIFICATIONS = {};
  if (typeof module !== "undefined" && module.exports) {
    try { VERIFICATIONS = require("./verifications.js"); } catch (e) { VERIFICATIONS = {}; }
  } else {
    VERIFICATIONS = root.VERIFICATIONS || {};
  }

  function hash(card) {
    const s = [card.title, card.steps.join("|"), card.warning || ""].join("\n");
    let h = 0x811c9dc5;
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 0x01000193) >>> 0;
    }
    return h.toString(16).padStart(8, "0");
  }

  function status(card) {
    const h = hash(card);
    const r = REVIEWS[card.id];
    if (r && r.hash === h) return { state: "checked", review: r };
    const v = VERIFICATIONS[card.id];
    if (v && v.hash === h) return { state: "verified", verification: v };
    if (r || v) return { state: "changed" };
    return { state: "draft" };
  }

  function summary(cards) {
    const out = { checked: 0, verified: 0, changed: 0, draft: 0, total: cards.length };
    cards.forEach((c) => { out[status(c).state]++; });
    return out;
  }

  const api = { CONTENT, REVIEWS, VERIFICATIONS, hash, status, summary };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.Trust = api;
})(typeof self !== "undefined" ? self : this);
