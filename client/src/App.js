import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Games from "./pages/Games";
import Exercise from "./pages/Exercise";
import Random from "./pages/Random";

function App() {
  return (
    <Router className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/games" component={Games} />
        <Route path="/exercise" component={Exercise} />
        <Route path="/random" component={Random} />
      </Switch>
    </Router>
  );
}

export default App;
