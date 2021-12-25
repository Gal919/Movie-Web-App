import React, { useState, useCallback } from 'react';
import { useFavorites } from '../../context/FavoritesContext';
import useDebounce from '../../useDebounce';
import axios from 'axios';
import MovieCard from '../MovieCard';
import SearchBar from '../SearchBar';
import AddToFavorites from '../AddToFavorites';
import movie from '../../images/movie.png';

const Home = () => {
  
  const {favoriteMovies, setFavoriteMovies} = useFavorites([]);
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState(''); 
  let disabled;


  const getMovies = useCallback(async () => {
    try {
      const {
        data: { Search },
      } = await axios.get(
        `http://www.omdbapi.com/?s=${searchValue}&apikey=a165f90d`
      );

      searchValue === undefined ? setMovies([]) : setMovies(Search);
      
    } catch (error) {
      console.log(error?.message);
    }
  }, [searchValue]); 

  useDebounce(searchValue, 500, getMovies);

   const addMovieToFavorites = (movie) => {
    setFavoriteMovies([...favoriteMovies, movie]);
  }

     
  return (
    <div className='home'>
      <SearchBar setSearchValue={setSearchValue} searchValue={searchValue} />
      {movies?.length > 0 &&
        movies.map((movie) => (
          <div key={movie.imdbID}>
            <MovieCard  data={movie} />
            {favoriteMovies.find((favorite) => favorite.imdbID === movie.imdbID) ? disabled = true : disabled = false}
            <AddToFavorites
              onAddMovie={addMovieToFavorites}
              data={movie}
              disabled={disabled}
            />
          </div>
        ))}
      <div className='image-container'>
        <img className='backgroung-image' src={movie} alt='movie-poster' />
      </div>
    </div>
  );
};


export default Home;
