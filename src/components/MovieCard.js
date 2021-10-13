import React from 'react'
import "./MovieCard.css"

function MovieCard({Title, Poster}) {
    return (
        <div className="movie">
            <img src={Poster} alt='movie'></img>
            <h3>{Title}</h3>
        </div>
    )
}

export default MovieCard
