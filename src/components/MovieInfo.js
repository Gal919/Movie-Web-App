import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/MovieInfo.css'; 
import noImage from '../images/noImage.png';
import useFetch from '../useFetch';
import Loading from './Loading';

const MovieInfo = () => {

    const {state : { id }} = useLocation();

    const { data, isLoading } = useFetch(`https://www.omdbapi.com/?i=${id}&apikey=a165f90d`, id);

    const getImage = (value) => {
      return value !== 'N/A'? value : noImage;
    };

    const getInfo = (value) => {
      return value!== 'N/A' ? value : '-';
    };
  
    return (
      <div className='movieinfo'>
      {isLoading ? <Loading /> : 
        data && (
          <div className='movieinfo-container'>
            <img className='image-info' src={getImage(data?.data?.Poster)} alt='moviePoster' />
            <div className='info'>
              <h2 className='title'>{getInfo(data?.data?.Title)}</h2>
              <p>
                IMDB Rating: <span>{getInfo(data?.data?.imdbRating)}</span>
              </p>
              <p>
                Year: <span>{getInfo(data?.data?.Year)}</span>
              </p>
              <p>
                Language: <span>{getInfo(data?.data?.Language)}</span>
              </p>
              <p>
                Released: <span>{getInfo(data?.data?.Released)}</span>
              </p>
              <p>
                Runtime: <span>{getInfo(data?.data?.Runtime)}</span>
              </p>
              <p>
                Genre: <span>{getInfo(data?.data?.Genre)}</span>
              </p>
              <p>
                Director: <span>{getInfo(data?.data?.Director)}</span>
              </p>
              <p>
                Actors: <span>{getInfo(data?.data?.Actors)}</span>
              </p>
              <p>
                Plot: <span>{getInfo(data?.data?.Plot)}</span>
              </p>
            </div>
          </div>
        )}

      </div>
    );
};

export default MovieInfo;
