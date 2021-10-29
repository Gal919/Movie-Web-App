import React from 'react';
import "../styles/AddToFavorites.css";

const AddToFavorites = ({data:movie, onAddMovie, disabled}) => {

    return (
      <div className="addToFavoritesContainer">
        <button
          className= {disabled ? "button-disabled" : "button-abled"}
          disabled={disabled}
          onClick={() => onAddMovie(movie)}
        >
          Add to Favorites
          <i id="heart" className="fal fa-heart"></i>
        </button>
      </div>
    );
}

export default AddToFavorites
