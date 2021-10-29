import React from 'react';
import "../styles/AddToFavorites.css";

const RemoveFromFavorites = ({data:movie, onRemoveMovie}) => {

    return (
      <div className="addToFavoritesContainer">
        <button
          className="button-abled"
          onClick={() => onRemoveMovie(movie)}
        >
          Remove from Favorites
          <i id="heart" className="fas fa-trash"></i>
        </button>
      </div>
    );
}

export default RemoveFromFavorites
