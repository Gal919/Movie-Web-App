import React from 'react'
import "../../styles/Favorites.css"
import { useFavorites } from '../../context/FavoritesContext';

const Favorites = () => {

    const {favoriteMovies} = useFavorites()
    
    return (
      <div className="favoritesContainer">
        <div className="favoritesTitle">
          <h1>Favorites</h1>
        </div>
        <div className="movies">
          {favoriteMovies.map((movie, index) => (
            <div className="favorite">
              <img className="movieImage" src={movie.Poster} alt="movie"></img>
              <h3 className="movieTitle">{movie.Title}</h3>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Favorites
