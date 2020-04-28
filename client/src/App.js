import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Games from "./pages/Games";
import Exercise from "./pages/Exercise";
import Random from "./pages/Random";

const ENDPOINT = "http://localhost:5000";
const socket = socketIOClient(ENDPOINT);



function App() {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [tests, setTest] = useState("");
  useEffect(() =>{
    socket.on('test', (data) => {
      console.log(data)
    })
    socket.on('get all online', (data) => {
      setOnlineUsers(data.names);
    })
    socket.on('user left', (data) => {
      console.log(`${data.username} left`);
      console.log(onlineUsers.filter(user => user !== data.username))
      setOnlineUsers(onlineUsers.filter(user => user.username !== data.username));
    })
    socket.on('user joined', (data) => {
      console.log(`${data.username} joined`);
      setOnlineUsers([...onlineUsers, {username: data.username, id: data.id}]);
    })
    return () => {
      socket.off('get all online');
      socket.off("user left");
      socket.off('user joined');
    };
  })
  const [response, setResponse] = useState("");
  const userList = onlineUsers.map((item) => {
    return <h4 onClick = {() => console.log(item.id)} >{item.username}</h4>
  })
  const test = async(username) => {
    socket.emit('add user', username);
  }
  const directMessage = async(message) => {
    socket.emit('direct message', {id:onlineUsers[0].id, message })
  }
  return (
    <Router className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/games" component={Games} />
        <Route path="/exercise" component={Exercise} />
        <Route path="/random" component={Random} />
      </Switch>
      <input onChange = {(event) => setResponse(event.target.value) }>
      </input>
      <button onClick = {() => test(response)}>button</button>
      <div>
        <h5>Online Users</h5>
        {userList}
      </div>
      <input onChange = {(event) => setTest(event.target.value)}></input>
      <button onClick = {() => directMessage(tests)}>Hello</button>
    
    </Router>
  );
}

export default App;
