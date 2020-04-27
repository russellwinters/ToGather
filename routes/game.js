const express = require("express");
const router = express.Router();
const GameModel = require("../models/gameModel");

router.post("/postFirst", (req, res) => {
  console.log("received");
  let rulesArray = [
    "Current player thinks of a their 'things': example would be 'things I wish Trump didn't say' ",
    "All other players think of creative responses and DM Current Player.",
    "Current Player reads out the responses and all other players vote on the best.",
    "Best response receives one point",
  ];
  let newGame = new GameModel({
    name: "Things",
    rules: rulesArray,
    scoring: "One point per round, awarded for the funniest answer",
  });
  newGame.save().then((data) => {
    console.log("saved");
  });

  res.json({
    message: "success",
  });
});

module.exports = router;
