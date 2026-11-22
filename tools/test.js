// Standing tests. Run after any change to guides, search, or reviews:
//   node tools/test.js
// 1) Every guide is complete and well formed.
// 2) Real questions find the right guide.
// 3) Review sign-offs match the current guide text.
const { cards, Trust, Search } = require("./load");

let failures = 0;
const fail = (msg) => { failures++; console.log("FAIL | " + msg); };

// ---- 1. structure ----
const ids = new Set();
const allowedKeys = new Set(["id", "title", "category", "keywords", "steps", "warning", "source", "urgent"]);
for (const c of cards) {
  if (!c.id || ids.has(c.id)) fail("missing or duplicate id: " + c.id);
  ids.add(c.id);
  if (!c.title) fail(c.id + ": no title");
  if (!c.category) fail(c.id + ": no category");
  if (!c.source) fail(c.id + ": no source named");
  if (!Array.isArray(c.steps) || c.steps.length < 2) fail(c.id + ": needs at least 2 steps");
  if (!Array.isArray(c.keywords) || c.keywords.length < 3) fail(c.id + ": needs at least 3 keywords");
  if (c.steps && c.steps.some((s) => !s || s.length > 400)) fail(c.id + ": a step is empty or too long to read aloud");
  Object.keys(c).forEach((k) => { if (!allowedKeys.has(k)) fail(c.id + ": unknown field " + k); });
}

// ---- 2. questions ----
const questions = [
  ["how long do I need to boil water to purify it?", "water-boil"],
  ["he is not breathing", "cpr-adult"],
  ["there is a lot of blood", "bleeding-severe"],
  ["my son is choking on food", "choking-adult"],
  ["I burned my hand", "burns"],
  ["I'm freezing and shivering", "hypothermia"],
  ["my files are encrypted and there is a ransom note", "cyber-ransomware"],
  ["someone logged into my email", "cyber-account"],
  ["can I eat the food in my fridge after the power cut", "food-power-cut"],
  ["running a generator in the garage", "co-poisoning"],
  ["I think he is having a heart attack", "heart-attack"],
  ["her face is drooping and speech is slurred", "stroke"],
  ["swollen lips and can't breathe after eating peanuts", "anaphylaxis"],
  ["asthma attack what do I do", "asthma"],
  ["I was bitten by a snake", "snake-bite"],
  ["bluebottle sting", "marine-stings"],
  ["there is a bushfire coming", "bushfire"],
  ["the ground is shaking earthquake", "earthquake"],
  ["floodwater is rising", "flood"],
  ["someone has a gun in the building", "armed-attack"],
  ["found a suspicious bag", "bomb-threat"],
  ["my car is sinking in a river", "car-in-water"],
  ["I smell gas", "gas-leak"],
  ["baby is not breathing", "cpr-child-baby"],
  ["what number do I call for an ambulance", "emergency-numbers-au"],
  ["the baby is coming now", "childbirth-emergency"],
  ["diarrhoea and vomiting", "dehydration-diarrhoea"],
  ["house is on fire", "building-fire"],
  ["banks and card machines are down", "systems-down"],
  ["swallowed bleach", "poisoning"],
  ["nuclear fallout", "radiation"],
  ["stranded in the outback", "stranded-remote"],
  ["riot outside", "civil-disorder"],
  ["tsunami warning", "tsunami"],
  ["banana pancake recipe", "NONE"]
];
for (const [q, want] of questions) {
  const r = Search.search(q, cards);
  const got = r.length ? r[0].card.id : "NONE";
  if (got !== want) fail('"' + q + '" gave ' + got + ", wanted " + want);
}

// ---- 3. reviews ----
for (const id of Object.keys(Trust.REVIEWS)) {
  const c = cards.find((x) => x.id === id);
  if (!c) { fail("review for unknown guide: " + id); continue; }
  const r = Trust.REVIEWS[id];
  if (!r.reviewer || !r.date || !r.hash) fail(id + ": review needs reviewer, date and hash");
  if (Trust.status(c).state === "changed") fail(id + ": guide changed since it was reviewed, needs a new review");
}

for (const id of Object.keys(Trust.VERIFICATIONS)) {
  const c = cards.find((x) => x.id === id);
  if (!c) { fail("verification for unknown guide: " + id); continue; }
  const v = Trust.VERIFICATIONS[id];
  if (!v.date || !v.hash || !v.sources || !v.sources.length) fail(id + ": verification needs date, hash and sources");
  (v.sources || []).forEach((s) => { if (!/^https?:\/\//.test(s.url) || !s.name) fail(id + ": bad source " + JSON.stringify(s)); });
  if (Trust.status(c).state === "changed") fail(id + ": guide changed since it was verified, re-check it and run tools/stamp.js --restamp " + id);
}

const s = Trust.summary(cards);
console.log(cards.length + " guides, " + questions.length + " questions. " + s.checked + " expert-reviewed, " + s.verified + " verified against sources, " + s.draft + " drafts, " + s.changed + " changed.");
console.log(failures ? failures + " problem(s)" : "All tests passed");
process.exit(failures ? 1 : 0);
