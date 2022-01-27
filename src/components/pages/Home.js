import React, { useState, useEffect } from 'react';
import { useFavorites } from '../../context/FavoritesContext';
import useDebounce from '../../useDebounce';
import MovieCard from '../MovieCard';
import SearchBar from '../SearchBar';
import AddToFavorites from '../AddToFavorites';
import movie from '../../images/movie.png';
import useFetch from '../../useFetch';
import RemoveFromFavorites from '../RemoveFromFavorites';
import Loading from '../Loading';

const Home = () => {
  
  const {favoriteMovies, setFavoriteMovies} = useFavorites([]);
  const [searchValue, setSearchValue] = useState(''); 

  const value = useDebounce(searchValue, 500);

  const {data, isLoading} = useFetch(`https://www.omdbapi.com/?s=${value}&apikey=a165f90d`,value);

  useEffect( () => {
    const lastSearch = JSON.parse(
      localStorage.getItem('lastSearch') 
    );
    lastSearch ? setSearchValue(lastSearch) : setSearchValue('');  
  }, []);

  const addMovieToFavorites = (movie) => {
    setFavoriteMovies([...favoriteMovies, movie]);
  };

  const removeMovieFromFavorites = (movie) => {
    setFavoriteMovies(favoriteMovies.filter(
     (favourite) => favourite.imdbID !== movie.imdbID
   ));
   };

 
  return (
    <div className='home'>
      <SearchBar setSearchValue={setSearchValue} searchValue={searchValue} />
      {isLoading ? <Loading /> : 
      data?.data?.Search?.length > 0 &&
        data?.data?.Search?.map((movie) => (
          <div key={movie.imdbID}>
            <MovieCard  data={movie} />
            {favoriteMovies.find((favorite) => favorite.imdbID === movie.imdbID) ?  
            <RemoveFromFavorites onRemoveMovie={removeMovieFromFavorites} data={movie} />: <AddToFavorites
              onAddMovie={addMovieToFavorites}
              data={movie}
             />}
            
          </div>
        ))}
      <div className='image-container'>
        <img className='backgroung-image' src={movie} alt='movie' />
      </div>
    </div>
  );
};


export default Home;
