import React from 'react'
import "../styles/MovieCard.css"

const MovieCard = ({data: {Title, Poster, imdbID}, onSetId}) => (
    <div onClick={() => {onSetId(imdbID)}} className="movie">
        <img src={Poster} alt='movie'></img>
        <h3>{Title}</h3>
    </div>
)

export default MovieCard;
