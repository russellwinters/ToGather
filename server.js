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
app.use("/api/calendar", require("./routes/calendar"))
//Connect to Mongo

// commenting this out cause i dont have the env vars file yet
// mongoose.connect(
//   process.env.MONGODB_URI || process.env.Mongo_URI,
//   { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true },
//   () => {
//     console.log("connected to MongoDB");
//   }
// );

const server = http.createServer(app);

const io = socketIo(server);

let interval;
let numUsers = 0;
let names = [];
io.on("connection", (socket) => {
  let addedUser = false;
  socket.emit('get all online', {
    names
  })
  socket.on('new message', (data) => {
    console.log(data)
    // we tell the client to execute 'new message'
    socket.broadcast.emit('new message', {
      username: socket.username,
      message: data
    });
  });
  socket.on('direct message', (data) => {

    socket.broadcast.to(data.id).emit("test",data.message)
  })

  socket.on('add user', (username) => {
    if (addedUser) return;
    console.log(socket.id)
    // we store the username in the socket session for this client
    socket.username = username;
    ++numUsers;
    names.push({username: socket.username, id: socket.id});
    addedUser = true;
    console.log(names);
    socket.emit('login', {
      numUsers: numUsers
    });
    // echo globally (all clients) that a person has connected
    socket.broadcast.emit('user joined', {
      username: socket.username,
      id: socket.id,
      numUsers: numUsers
    });
  });
  socket.on('disconnect', () => {
    if (addedUser) {
      --numUsers;
      names = names.filter(name => name !== socket.username)
      // echo globally that this client has left
      socket.broadcast.emit('user left', {
        username: socket.username,
        numUsers: numUsers,
        names
      });
    }
  });
});

const getApiAndEmit = socket => {
  console.log(socket)
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));