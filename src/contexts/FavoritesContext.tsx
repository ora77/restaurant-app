import React, { createContext, useContext, useEffect, useState } from "react";

type ContextProps = {
  children: React.ReactNode;
};

type FavoriteContextType = {
  addToFavorites: (restaurantId: number) => void;
  favorites: number[];
  deleteFromFavorites: (restaurentId: number) => void;
};

const FavoritesContext = createContext<FavoriteContextType>(
  {} as FavoriteContextType
);

export const useFavoritesContext = () => useContext(FavoritesContext);

export const FavoritesContextProvider = ({ children }: ContextProps) => {
  // favorites c'est une variable d'état
  const [favorites, setFavorites] = useState<number[]>([]);

  const addToFavorites = (restaurantId: number) => {
    const clone = [...favorites];
    clone.push(restaurantId);
    setFavorites(clone);
    localStorage.setItem("favorites", JSON.stringify(clone));
  };

  const getFavorites = () => {
    const currFavs = localStorage.getItem("favorites");
    if (currFavs != null) {
      setFavorites(JSON.parse(currFavs));
    }
  };

  useEffect(() => getFavorites(), []);

  const deleteFromFavorites = (restaurantId: number) => {
    const clone = [...favorites];
    setFavorites(clone.filter((x) => x !== restaurantId));
     localStorage.setItem("favorites", JSON.stringify(clone)); 
  };

  

  return (
    <FavoritesContext.Provider
      value={{
        addToFavorites,
        favorites,
        deleteFromFavorites
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
