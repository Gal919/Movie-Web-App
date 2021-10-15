import React from 'react'
import "../styles/MovieCard.css"

const MovieCard = ({ data: { Title, Poster, imdbID }, onSetId }) => (
  <div
    className="movie"
    onClick={() => {
      onSetId(imdbID);
    }}
  >
    <div className="poster">
      <img src={Poster} alt="movie" />
    </div>
    <div className="titleBox">
      <h3 className="movieTitle">{Title}</h3>
      <i id="heart" class="fal fa-heart"></i>
    </div>
  </div>
);

export default MovieCard;
