const express = require("express");
const router = express.Router();
const GameModel = require("../models/gameModel");
const activitiesArray = require("../activities.json");

router.get("/:category/:timer/:players", async (req, res) => {
  const { category, timer, players } = req.params;

  let reqTimer = Number(timer);
  let reqPlayers = Number(players);

  //Take the extra step in case we want to specialized sorting. Easy enough to lock in what we have though
  let activities = await GameModel.find();

  let returnActivities = activities.filter((obj) => {
    return (
      obj.category === category &&
      obj.timer === reqTimer &&
      obj.players === reqPlayers
    );
  });
  console.log(returnActivities);
  if (returnActivities && returnActivities.length > 0) {
    res.json({
      activities: returnActivities,
    });
  } else {
    res.json({
      message: "No Activities Match your search",
    });
  }
});

//Only here if we need to send new activities to Mongo
router.post("/postFirst", (req, res) => {
  activitiesArray.forEach((obj) => {
    let newGame = new GameModel({
      name: obj.name,
      rules: obj.rules,
      category: obj.category,
      timer: obj.timer,
      players: obj.players,
    });

    newGame.save().then((data) => {
      console.log("Saved Activity");
    });
  });

  res.json({
    message: "success",
  });
});

module.exports = router;
