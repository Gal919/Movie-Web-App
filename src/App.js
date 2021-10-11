import React from "react";
import Navbar from "./components/Navbar";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact/>
          <Route path="/favorites"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
