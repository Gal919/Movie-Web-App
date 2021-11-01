import React from "react";
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
            <Route path="/movie-app" exact component={Home} />
            <Route path="/movie-app/favorites" component={Favorites} />
            <Route path="/movie-app/movieInfo" component={MovieInfo} />
          </Switch>
        </Router>
      </div>
  </FavoritesProvider>
);

export default App;
