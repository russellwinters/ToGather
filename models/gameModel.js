const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
  name: String,
  rules: Array,
  category: String,
  timer: Number,
  players: Number,
  link: String,
});

module.exports = mongoose.model("games", gameSchema);
