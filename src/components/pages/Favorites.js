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
       
          <h1 className='favorites-title'>Favorites</h1>
        
        <div className='movies'>
          {favoriteMovies.length > 0 ? favoriteMovies.map((movie) => (
            <div key={movie.imdbID}>
              <MovieCard data={movie} />
              <RemoveFromFavorites
                onRemoveMovie={removeMovieFromFavorites}
                data={movie}
              />
            </div> 
          )) : <h3 className='no-movies'>No movies to show</h3>}
        </div>
      </div>
    );
};

export default Favorites;
