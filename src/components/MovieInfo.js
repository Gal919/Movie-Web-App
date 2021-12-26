import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../styles/MovieInfo.css'; 
import noImage from '../images/noImage.png';

const MovieInfo = () => {

    const [movieInfo, setMovieInfo] = useState();
    const {state : {id}} = useLocation();
    
    useEffect(() => {
      const getMovieInfo = async () => {
        try {
          const { data } = await axios.get(
            `http://www.omdbapi.com/?i=${id}&apikey=a165f90d`
          );
          setMovieInfo(data);
         
        } catch (error) {
          console.log(error?.message);
        }
      }
      getMovieInfo();
    },[id])


    return (
      <div>
        {movieInfo && (
          <div className='movieinfo-container'>
            <img className='image-info' src={movieInfo.Poster !== 'N/A'? movieInfo.Poster : noImage} alt='movieImage' />
            <div className='info'>
              <h2 className='title'>{movieInfo.Title !== 'N/A' ? movieInfo.Title : '-'}</h2>
              <p>
                IMDB Rating: <span>{movieInfo.imdbRating !== 'N/A' ? movieInfo.imdbRating : '-'}</span>
              </p>
              <p>
                Year: <span>{movieInfo.Year !== 'N/A' ? movieInfo.Year : '-'}</span>
              </p>
              <p>
                Language: <span>{movieInfo.Language !== 'N/A' ? movieInfo.Language : '-'}</span>
              </p>
              <p>
                Released: <span>{movieInfo.Released !== 'N/A' ? movieInfo.Released : '-'}</span>
              </p>
              <p>
                Runtime: <span>{movieInfo.Runtime !== 'N/A' ? movieInfo.Runtime : '-'}</span>
              </p>
              <p>
                Genre: <span>{movieInfo.Genre !== 'N/A' ? movieInfo.Genre : '-'}</span>
              </p>
              <p>
                Director: <span>{movieInfo.Director !== 'N/A' ? movieInfo.Director : '-'}</span>
              </p>
              <p>
                Actors: <span>{movieInfo.Actors !== 'N/A' ? movieInfo.Actors : '-'}</span>
              </p>
              <p>
                Plot: <span>{movieInfo.Plot !== 'N/A' ? movieInfo.Plot : '-'}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    );
}

export default MovieInfo
