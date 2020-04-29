const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    playedActivities: Array,
    recommendedActivities: Array,
  });
  
  module.exports = mongoose.model("users", userSchema);