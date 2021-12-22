import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/MovieCard.css';
import noImage from '../images/noImage.png';

const MovieCard = ({ data: { Title, Poster, imdbID }}) => {
  
  const history = useHistory();

  return (
    <div className='movie'>
      <div className='poster'>
        <img className='image'
          onClick={() => {
            history.push('/movieInfo', { id: imdbID })
          }}
          src={Poster !== 'N/A' ? Poster : noImage}
          alt='movie'
        />
        <h3 className='movie-title'>{Title}</h3>
      </div>
    </div>
  );
 
  };

export default MovieCard;
