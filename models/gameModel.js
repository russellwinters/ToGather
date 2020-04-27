const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
  name: String,
  rules: Array,
  scoring: String,
});

module.exports = mongoose.model("games", gameSchema);
