import React, { createContext, useContext, useState } from "react";

type ContextProps = {
  children: React.ReactNode;
};

type FavoriteContextType = {
  addToFavorites: (restaurantId: number) => void;
  getFavorites: () => number[];
};

const FavoritesContext = createContext<FavoriteContextType>(
  {} as FavoriteContextType
);

export const useFavoritesContext = () => useContext(FavoritesContext);

const favorites: number[] = [];

export const FavoritesContextProvider = ({ children }: ContextProps) => {
  const addToFavorites = (restaurantId: number) => {
    if (localStorage.getItem("favorites") !== null) {
      favorites.length = 0;
      favorites.push(...JSON.parse(localStorage.getItem("favorites") || ""));
    }

    favorites.push(restaurantId);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const getFavorites = () => {
    if (localStorage.getItem("favorites") !== null) {
      return JSON.parse(localStorage.getItem("favorites") || "");
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        addToFavorites,
        getFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
