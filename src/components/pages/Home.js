import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useDebounce from "../../useDebounce";
import axios from "axios";
import MovieCard from "../MovieCard";
import SearchBar from "../SearchBar";
import movie from "../../images/movie.png"
import { useFavorites } from '../../context/FavoritesContext';

const Home = () => {

  const history = useHistory();
  const {favoriteMovies, setFavoriteMovies} = useFavorites();

  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState();
  const [searchValue, setSearchValue] = useState(); 

  const getMovies = useCallback(async () => {
    try {
      const {
        data: { Search },
      } = await axios.get(
        `http://www.omdbapi.com/?s=${searchValue}&apikey=a165f90d`
      );

      if (searchValue === undefined) {
        setMovies([]);
      } else {
        setMovies(Search);
      }
    } catch (error) {
      console.log(error?.message);
    }
  }, [searchValue]); 

  useDebounce(searchValue, 500, getMovies);

  const addMovieToFavorites = useCallback((movie) => {
    setFavoriteMovies([...favoriteMovies, movie]);
    localStorage.setItem("favorites", JSON.stringify(favoriteMovies));
  },[favoriteMovies, setFavoriteMovies])

  return (
    <div className="home">
      <SearchBar setSearchValue={setSearchValue} />
      {movieId && history.push("/movieInfo", { id: movieId })}
      {movies?.length > 0 &&
        movies.map((movie, index) => (
          <MovieCard key={index} data={movie} onSetId={setMovieId} onSetFavorites={addMovieToFavorites} />
        ))}

      <div className="imageContainer">
        <img className="backgroundImage" src={movie} alt="cinemaImage" />
      </div>
    </div>
  );
};

export default Home;
