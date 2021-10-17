import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import "./styles/App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home"
import Favorites from "./components/pages/Favorites"
import MovieInfo from "./components/MovieInfo"
import FavoritesProvider from "./context/FavoritesContext";



const App = () => (
  <FavoritesProvider>
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/movieInfo" component={MovieInfo} />
        </Switch>
      </Router>
    </div>
  </FavoritesProvider>
);

export default App;
