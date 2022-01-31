import React from 'react';
import { useFavorites } from '../../context/FavoritesContext';
import '../../styles/Favorites.css';
import MovieCard from '../MovieCard';
import RemoveFromFavorites from '../RemoveFromFavorites';

const Favorites = () => {

    const {favoriteMovies, setFavoriteMovies} = useFavorites();
  
    const removeMovieFromFavorites = (movie) => {
      setFavoriteMovies(favoriteMovies.filter(
       (favourite) => favourite.imdbID !== movie.imdbID
     ))
     };

    return (
      <div className='favorites-container'>
        <div className='favorites-title'>
          <h1>Favorites</h1>
        </div>
        <div className='movies'>
          {favoriteMovies.map((movie) => (
            <div key={movie.imdbID}>
              <MovieCard data={movie} />
              <RemoveFromFavorites
                onRemoveMovie={removeMovieFromFavorites}
                data={movie}
              />
            </div>
          ))}
        </div>
      </div>
    );
};

export default Favorites;
