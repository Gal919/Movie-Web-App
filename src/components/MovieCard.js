import React from 'react'
import "../styles/MovieCard.css"

const MovieCard = ({ data: { Title, Poster, imdbID }, onSetId, onSetFavorites }) => {
  
  return (
    <div className="movie">
      <div className="poster">
        <img className="image"
          onClick={() => {
            onSetId(imdbID);
          }}
          src={Poster}
          alt="movie"
        />
      </div>
      <div className="titleBox">
        <h3 className="movieTitle">{Title}</h3>
        <i onClick={() => onSetFavorites({Title, Poster, imdbID})} id="heart" className="fal fa-heart"></i>
      </div>
    </div>
  );
 
  };

export default MovieCard;
