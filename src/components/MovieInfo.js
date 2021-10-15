import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../styles/MovieInfo.css"; 

const MovieInfo = () => {

    const [movieInfo, setMovieInfo] = useState();
    const {state : {id}} = useLocation();
 
    useEffect( () => {
      const func = async () => {
        try {
          const { data } = await axios.get(
            `http://www.omdbapi.com/?i=${id}&apikey=a165f90d`
          );
          setMovieInfo(data);
        } catch (error) {
          console.log(error?.message);
        }
      };
      func()
    },[id]); 


    return (
      <div className="movieInfo">
        {movieInfo && (
          <div className="container">
            <img className="image" src={movieInfo.Poster} alt="movieImage" />
            <div className="info">
              <h2 className="title">{movieInfo.Title}</h2>
              <h5>
                IMDB Rating: <span>{movieInfo.imdbRating}</span>
              </h5>
              <h5>
                Year: <span>{movieInfo.Year}</span>
              </h5>
              <h5>
                Language: <span>{movieInfo.Language}</span>
              </h5>
              <h5>
                Released: <span>{movieInfo.Released}</span>
              </h5>
              <h5>
                Runtime: <span>{movieInfo.Runtime}</span>
              </h5>
              <h5>
                Genre: <span>{movieInfo.Genre}</span>
              </h5>
              <h5>
                Director: <span>{movieInfo.Director}</span>
              </h5>
              <h5>
                Actors: <span>{movieInfo.Actors}</span>
              </h5>
              <h5>
                Plot: <span>{movieInfo.Plot}</span>
              </h5>
            </div>
          </div>
        )}
      </div>
    );
}

export default MovieInfo
