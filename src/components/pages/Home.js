import React, { useEffect, useState } from "react";
import '../../App.css';
import axios from "axios";
import MovieCard from "../MovieCard"
import { useHistory } from "react-router-dom";


function Home() {

    const url = `http://www.omdbapi.com/?s=avengers&apikey=a165f90d`
    
    const [movies, setMovies] = useState([]);
    const [movieId, setMovieId] = useState();

     useEffect(() => {
        axios.get(url).then(res => {
            setMovies(res.data.Search);
            console.log(res.data.Search)
        }).catch(err => {
            console.log(err)
        } )  
    },[]); 

    var history = useHistory();

    return (
      <div className="home">
        {movieId && history.push("/movieInfo", { id: movieId })}

        {movies.map((movie, index) => (
          <MovieCard key={index} data={movie} onSetId={setMovieId} />
        ))}
      </div>
    );


}

export default Home;







