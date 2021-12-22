import React , {useCallback} from 'react';
import { useFavorites } from '../../context/FavoritesContext';
import '../../styles/Favorites.css';
import MovieCard from '../MovieCard';
import RemoveFromFavorites from '../RemoveFromFavorites';
import movie from '../../images/movie.png';

const Favorites = () => {

    const {favoriteMovies, setFavoriteMovies} = useFavorites();
  
    const removeMovieFromFavorites = useCallback((movie) => {
      setFavoriteMovies(favoriteMovies.filter(
       (favourite) => favourite.imdbID !== movie.imdbID
     ))
     },[favoriteMovies, setFavoriteMovies]) 

    return (
      <div className='favorites-container'>
        <div className='favorites-title'>
          <h1>Favorites</h1>
        </div>
        <div className='movies'>
          {favoriteMovies.map((movie, index) => (
            <div>
              <MovieCard key={movie.index} data={movie} />
              <RemoveFromFavorites
                onRemoveMovie={removeMovieFromFavorites}
                data={movie}
                key={movie.imdbID}
              />
            </div>
          ))}
        </div>
        <div className='image-container'>
        <img className='backgroung-image' src={movie} alt='movie-poster' />
      </div>
      </div>
    );
}

export default Favorites
