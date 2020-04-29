import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/login/Login";
import Home from "./pages/Home";
import Activity from "./pages/Activity";
import Generator from "./pages/Generator";
import Exercise from "./pages/About";

const ENDPOINT = "http://localhost:5000";
const socket = socketIOClient(ENDPOINT);

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/activity/:activityId" exact component = {Activity}/>
        <Route path = "/home" exact component={Home}/>
        <Route path="/generator" component={Generator} />
        <Route path="/about" component={Exercise} />
      </Switch>
    </Router>
  );
}

export default App;
