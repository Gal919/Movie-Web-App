import React from 'react'
import "./MovieCard.css"

function MovieCard(props) {

    const {Title, Poster, imdbID} = props.data;

    return (
        <div onClick={() => {props.onSetId(imdbID)}} className="movie">
            <img src={Poster} alt='movie'></img>
            <h3>{Title}</h3>
        </div>
    )
}

export default MovieCard
