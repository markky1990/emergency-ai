// Shared loader for the helper scripts in this folder.
const path = require("path");
const root = path.join(__dirname, "..");
const cards = require(path.join(root, "cards.js")).concat(require(path.join(root, "cards-more.js")));
const Trust = require(path.join(root, "reviews.js"));
const Search = require(path.join(root, "search.js"));
module.exports = { cards, Trust, Search, root };
