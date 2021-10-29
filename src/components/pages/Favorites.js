import React , {useCallback} from 'react'
import "../../styles/Favorites.css"
import MovieCard from "../MovieCard";
import { useFavorites } from '../../context/FavoritesContext';
import RemoveFromFavorites from "../RemoveFromFavorites";
import movie from "../../images/movie.png"


const Favorites = () => {

   
    const {favoriteMovies, setFavoriteMovies} = useFavorites();
  
    const removeMovieFromFavorites = useCallback((movie) => {
      setFavoriteMovies(favoriteMovies.filter(
       (favourite) => favourite.imdbID !== movie.imdbID
     ))
     },[favoriteMovies, setFavoriteMovies]) 

    return (
      <div className="favoritesContainer">
        <div className="favoritesTitle">
          <h1>Favorites</h1>
        </div>
        <div className="movies">
          {favoriteMovies.map((movie, index) => (
            <div>
              <MovieCard key={index} data={movie} />
              <RemoveFromFavorites
                onRemoveMovie={removeMovieFromFavorites}
                data={movie}
                key={movie.imdbID}
              />
            </div>
          ))}
        </div>
        <div className="imageContainer">
        <img className="backgroundImage" src={movie} alt="cinemaImage" />
      </div>
      </div>
    );
}

export default Favorites
