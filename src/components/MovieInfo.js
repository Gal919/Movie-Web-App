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
      <div>
        {movieInfo && (
          <div className="container">
            <img className="image" src={movieInfo.Poster} alt="movieImage" />
            <div className="info">
              <h2 className="title">{movieInfo.Title}</h2>
              <p>
                IMDB Rating: <span>{movieInfo.imdbRating}</span>
              </p>
              <p>
                Year: <span>{movieInfo.Year}</span>
              </p>
              <p>
                Language: <span>{movieInfo.Language}</span>
              </p>
              <p>
                Released: <span>{movieInfo.Released}</span>
              </p>
              <p>
                Runtime: <span>{movieInfo.Runtime}</span>
              </p>
              <p>
                Genre: <span>{movieInfo.Genre}</span>
              </p>
              <p>
                Director: <span>{movieInfo.Director}</span>
              </p>
              <p>
                Actors: <span>{movieInfo.Actors}</span>
              </p>
              <p>
                Plot: <span>{movieInfo.Plot}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    );
}

export default MovieInfo
