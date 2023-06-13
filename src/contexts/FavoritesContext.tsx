import React, { createContext, useContext, useEffect, useState } from "react";

type ContextProps = {
  children: React.ReactNode;
};

type FavoriteContextType = {
  favorites: number[];
  addToFavorites: (restaurantId: number) => void;
  deleteFromFavorites: (restaurentId: number) => void;
  modal: boolean;
  handleModal: (boolean: boolean) => void;
};

const FavoritesContext = createContext<FavoriteContextType>(
  {} as FavoriteContextType
);

export const useFavoritesContext = () => useContext(FavoritesContext);

export const FavoritesContextProvider = ({ children }: ContextProps) => {
  // favorites c'est une variable d'état
  const [favorites, setFavorites] = useState<number[]>([]);
  const [modal, setModal] = useState(false);

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
    /* setFavorites((prev) => prev.filter(x => x !== restaurantId)); */
    localStorage.setItem(
      "favorites",
      JSON.stringify(clone.filter((x) => x !== restaurantId))
    );
  };

  const handleModal = (boolean: boolean) => {
    setModal(boolean);
  };

  return (
    <FavoritesContext.Provider
      value={{
        addToFavorites,
        favorites,
        deleteFromFavorites,
        modal,
        handleModal,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
