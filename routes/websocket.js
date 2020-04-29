let numUsers = 0;
let names = [];

module.exports = function(socket) {

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

  socket.on('add user', (data) => {
    if (addedUser) return;
    console.log(socket.id)
    // we store the username in the socket session for this client
    socket.username = data.username;
    ++numUsers;
    names.push({username: socket.username, id: socket.id, userId: data._id});
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
}