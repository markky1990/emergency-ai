// Makes REVIEW-PACK.md: a document to give to a qualified reviewer
// (paramedic, nurse, first aid trainer, fire or emergency service officer).
// Run:  node tools/review-pack.js
const fs = require("fs");
const path = require("path");
const { cards, Trust, root } = require("./load");

// Highest risk first. Urgent guides, then anything with medical or life-safety content.
const rank = (c) => (c.urgent ? 0 : ["First aid", "Medical emergency", "Disasters"].includes(c.category) ? 1 : 2);
const sorted = [...cards].sort((a, b) => rank(a) - rank(b) || a.category.localeCompare(b.category) || a.title.localeCompare(b.title));

const out = [];
out.push("# Guide review pack");
out.push("");
out.push("Content version " + Trust.CONTENT.version + ", " + Trust.summary(cards).total + " guides.");
out.push("");
out.push("## For the reviewer");
out.push("Please read each guide. For each one, mark Approved, Approved with changes, or Not approved.");
out.push("Check that the steps are correct, safe, complete enough, and suitable for a non-expert under stress.");
out.push("Check the source named is the right one, and that the advice fits Australia.");
out.push("Write your name, role and date at the top once. Add comments under any guide.");
out.push("");
out.push("Reviewer name, role and organisation: ____________________________");
out.push("Date: ____________________");
out.push("");
out.push("## Review order");
out.push("| # | Guide | Category | Priority | Status |");
out.push("|---|-------|----------|----------|--------|");
sorted.forEach((c, i) => {
  const pri = rank(c) === 0 ? "Urgent" : rank(c) === 1 ? "High" : "Normal";
  out.push("| " + (i + 1) + " | " + c.title + " | " + c.category + " | " + pri + " | " + Trust.status(c).state + " |");
});
out.push("");

sorted.forEach((c, i) => {
  out.push("---");
  out.push("");
  out.push("## " + (i + 1) + ". " + c.title);
  out.push("");
  out.push("- Guide id: `" + c.id + "`  Fingerprint: `" + Trust.hash(c) + "`");
  out.push("- Category: " + c.category + (c.urgent ? "  (urgent guide)" : ""));
  out.push("- Source named: " + c.source);
  out.push("");
  c.steps.forEach((s, n) => out.push((n + 1) + ". " + s));
  if (c.warning) { out.push(""); out.push("**Warning shown:** " + c.warning); }
  out.push("");
  out.push("Decision: [ ] Approved   [ ] Approved with changes   [ ] Not approved");
  out.push("");
  out.push("Comments: ");
  out.push("");
});

out.push("---");
out.push("");
out.push("## After sign-off (for the developer)");
out.push("Add one line per approved guide to `REVIEWS` in `reviews.js`:");
out.push("");
out.push("    \"guide-id\": { reviewer: \"Name, role, organisation\", date: \"YYYY-MM-DD\", hash: \"fingerprint\" },");
out.push("");
out.push("If the guide text changes later, its fingerprint changes and the app shows it as a draft again.");

const file = path.join(root, "REVIEW-PACK.md");
fs.writeFileSync(file, out.join("\n") + "\n");
console.log("Wrote " + file + " (" + sorted.length + " guides)");
