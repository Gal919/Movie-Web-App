import React, { useEffect, useState } from "react";
import '../../App.css';
import axios from "axios";
import MovieCard from "../MovieCard"
import MovieInfo from "../MovieInfo";


function Home() {

    const url = `http://www.omdbapi.com/?s=avengers&apikey=a165f90d`
    
    const [movies, setMovies] = useState([]);
    const [movieId, setMovieId] = useState();

     useEffect(() => {
        axios.get(url).then(res => {
            setMovies(res.data.Search);
        }).catch(err => {
            console.log(err)
        } )  
    },[]); 


    return (
      <div className="home">
        {movieId && <MovieInfo id={movieId} />}
        {movies.map((movie, index) => (
          <MovieCard key={index} data={movie} onSetId={setMovieId} />
        ))}
      </div>
    );


}

export default Home;







