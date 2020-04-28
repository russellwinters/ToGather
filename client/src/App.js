import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Generator from "./pages/Generator";
import Exercise from "./pages/About";

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/generator" component={Generator} />
        <Route path="/about" component={Exercise} />
      </Switch>
    </Router>
  );
}

export default App;
