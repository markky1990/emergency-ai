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
  ["I'm caught in a rip at the beach", "rip-current"],
  ["our boat capsized", "boat-capsized"],
  ["a dog bit my leg", "dog-bite"],
  ["there is a tick on my son", "tick-bite"],
  ["a bat scratched me", "bat-bite"],
  ["shark attack", "shark-croc-attack"],
  ["I am lost bushwalking", "lost-bush"],
  ["I can't find my child in the shops", "missing-child"],
  ["he has been stabbed", "stab-gunshot"],
  ["finger cut off in a machine", "crush-amputation"],
  ["my nose won't stop bleeding", "nosebleed"],
  ["she fainted", "fainting"],
  ["toddler fit with a fever", "child-fever-fit"],
  ["friend overdosed", "overdose"],
  ["smoke from the bushfire is in my house", "bushfire-smoke"],
  ["heatwave coming", "heatwave"],
  ["returning home after the flood", "return-home"],
  ["make a family emergency plan", "family-plan"],
  ["what do I do with my pets in a disaster", "pets-emergency"],
  ["the frying pan is on fire", "kitchen-fire"],
  ["how do I use a fire extinguisher", "fire-extinguisher-blanket"],
  ["the powerboard is sparking and smells burning", "electrical-fire"],
  ["my e-bike battery is smoking", "lithium-battery-fire"],
  ["my clothes are on fire", "clothes-on-fire"],
  ["smoke alarm is going off", "smoke-alarm-escape-plan"],
  ["fire in my apartment building", "apartment-fire"],
  ["the clothes dryer is on fire", "heater-candle-dryer-fire"],
  ["the gas bottle on my barbecue is on fire", "bbq-gas-fire"],
  ["flames coming out of the chimney", "chimney-fire"],
  ["what do I say when I call triple zero", "how-to-call-000"],
  ["what should I grab when evacuating", "grab-papers-cash-medicines"],
  ["how do I find my family after the flood", "find-family-disaster"],
  ["what does watch and act mean", "emergency-warnings"],
  ["I think I am having a panic attack", "panic-attack"],
  ["he hit his head and is vomiting", "head-injury"],
  ["rash that does not fade with glass test", "sepsis-meningococcal"],
  ["my child has a barking cough and noisy breathing", "child-croup-breathing"],
  ["my newborn has a fever", "newborn-fever"],
  ["I am pregnant and bleeding", "pregnancy-bleeding"],
  ["someone is breaking into my house", "home-break-in"],
  ["a man is following me at night", "being-followed"],
  ["baby locked in a hot car", "hot-car-child-pet"],
  ["I hit a kangaroo", "animal-strike"],
  ["my car is stuck in floodwater", "flood-storm-driving"],
  ["car stalled on the train tracks", "level-crossing"],
  ["motorbike crash helmet", "motorbike-bicycle-crash"],
  ["giant hail is coming", "severe-storm-hail"],
  ["power line is down on the road", "fallen-trees-power-lines"],
  ["there is a tornado", "tornado"],
  ["dust storm is coming", "dust-storm"],
  ["the hill is sliding", "landslide"],
  ["storm blew the roof off", "storm-roof-damage"],
  ["is my tank water safe after the bushfire", "tank-water-after-disaster"],
  ["how do I collect rainwater", "collect-rain"],
  ["how to filter muddy water", "filter-water"],
  ["green scum on the lake", "blue-green-algae"],
  ["where can I find water in the bush", "find-water-bush"],
  ["how to keep cool in a blackout in summer", "keep-cool-no-power"],
  ["keep my insulin cold with no power", "medicines-cold-power-cut"],
  ["sick after cleaning up flood mud", "floodwater-germs"],
  ["my child has measles", "measles"],
  ["I think I have food poisoning", "food-poisoning"],
  ["old fibro sheet is broken asbestos", "asbestos"],
  ["a water pipe burst in the wall", "burst-pipe"],
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
