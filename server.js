const express = require("express");
const app = express();
const mongoose = require("mongoose");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/games", require("./routes/game"));
mongoose.connect(
  process.env.MONGODB_URI || process.env.Mongo_URI,
  { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("connected to MongoDB");
  }
);

const server = http.createServer(app);

const io = socketIo(server);
io.on('connection', function (socket) {

  require('./routes/websocket')(socket);
  return io;
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));


