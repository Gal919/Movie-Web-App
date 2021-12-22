import { createContext, useEffect, useContext } from "react";
import { useState } from "react/cjs/react.development";

export const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({children}) => {
  
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const movieFavorites = JSON.parse(
      localStorage.getItem('favorites') 
    );
    setFavoriteMovies(movieFavorites ?? []);
  },[setFavoriteMovies])

  
  useEffect(() => {
      localStorage.setItem("favorites", JSON.stringify(favoriteMovies)
    );
  },[favoriteMovies])

  return <FavoritesContext.Provider value={{favoriteMovies, setFavoriteMovies}}>
    {children}
  </FavoritesContext.Provider>

  
}

export default FavoritesProvider;


