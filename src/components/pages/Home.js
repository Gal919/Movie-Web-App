import React, { useEffect, useState } from "react";
import '../../App.css';
import axios from "axios";
import MovieCard from "../MovieCard"


function Home() {

    const url = `http://www.omdbapi.com/?s=avengers&apikey=a165f90d`
    
    const [movies, setMovies] = useState([]);

     useEffect(() => {
        axios.get(url).then(res => {
            console.log(res)
            var moviesList = res.data.Search;
            setMovies(moviesList);
        }).catch(err => {
            console.log(err)
        } )  
    },[]); 


    return (
      <div className="home">
        {movies.map((movie, index) => (
          <MovieCard key={movie.index} {...movie} />
        ))}
      </div>
    );


}

export default Home;







