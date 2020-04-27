const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/games", require("./routes/game"));

//Connect to Mongo
mongoose.connect(
  process.env.MONGODB_URI || process.env.Mongo_URI,
  { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("connected to MongoDB");
  }
);

//Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
