import React, { useState, useCallback } from "react";
import useDebounce from "../../useDebounce";
import axios from "axios";
import MovieCard from "../MovieCard";
import SearchBar from "../SearchBar";
import movie from "../../images/movie.png"
import { useFavorites } from '../../context/FavoritesContext';
import AddToFavorites from "../AddToFavorites";
import RemoveFromFavorites from "../RemoveFromFavorites";


const Home = () => {

  const {favoriteMovies, setFavoriteMovies} = useFavorites();

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState(); 

  const getMovies = useCallback(async () => {
    try {
      const {
        data: { Search },
      } = await axios.get(
        `http://www.omdbapi.com/?s=${searchValue}&apikey=a165f90d`
      );

      searchValue === undefined ? setMovies([]) : setMovies(Search)
      
    } catch (error) {
      console.log(error?.message);
    }
  }, [searchValue]); 

  useDebounce(searchValue, 500, getMovies);

   const addMovieToFavorites = useCallback((movie) => {
    setFavoriteMovies([...favoriteMovies, movie]);
  },[favoriteMovies, setFavoriteMovies]) 

   const removeMovieFromFavorites = useCallback((movie) => {
      setFavoriteMovies(favoriteMovies.filter(
       (favourite) => favourite.imdbID !== movie.imdbID
     ))
     },[favoriteMovies, setFavoriteMovies]) 

 /*     function isFavorite (favorite, movie) {
       if (favorite.imdbID === movie.imdbID)
         return (
           <AddToFavorites
             onAddMovie={addMovieToFavorites}
             data={movie}
             key={movie.imdbID}
           />
         );
         else return (
          <RemoveFromFavorites onRemoveMovie={removeMovieFromFavorites}
          data={movie}
          key={movie.imdbID}/> 
         );
     } */

     
     let disabled;

 
  return (
    <div className="home">
      {console.log(favoriteMovies)}
      <SearchBar setSearchValue={setSearchValue} />
      {movies?.length > 0 &&
        movies.map((movie, index) => (
          <div>
            <MovieCard key={index} data={movie} />
            {favoriteMovies.find((favorite) => favorite.imdbID === movie.imdbID) ? disabled = true : disabled = false}
            <AddToFavorites
              onAddMovie={addMovieToFavorites}
              data={movie}
              disabled={disabled}
              key={movie.imdbID}
            />
          </div>
        ))}
      <div className="imageContainer">
        <img className="backgroundImage" src={movie} alt="cinemaImage" />
      </div>
    </div>
  );
};

export default Home;
