import React from "react";
import Navbar from "./components/Navbar";
import "./styles/App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home"
import MovieInfo from "./components/MovieInfo"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/favorites"/>
          <Route path="/movieInfo" component={MovieInfo}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
