import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./MovieInfo.css";

function MovieInfo(props) {

    const url = `http://www.omdbapi.com/?i=${props.id}&apikey=a165f90d`;

    const [movieInfo, setMovieInfo] = useState();
    const movieId = props;
 
    useEffect(() => {
            axios.get(url).then(res => {
            setMovieInfo(res.data);
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        } )  
    },[movieId]); 


    return (
      <div className="container">
        <div className="contant">
          {movieInfo && <img className="infoImage" src={movieInfo.Poster} alt="movieImage"></img>}
        </div>
      </div>
    );
}

export default MovieInfo
