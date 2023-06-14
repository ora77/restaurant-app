import React, { createContext, useContext, useEffect, useState } from "react";
import { Modal } from "../components/Modal";
import { Restaurant } from "../models/RestaurantType";
import { RestaurantsContext } from "./RestaurantsContext";

type ContextProps = {
  children: React.ReactNode;
};

type FavoriteContextType = {
  favorites: number[];
  addToFavorites: (restaurantId: number) => void;
  deleteFromFavorites: (restaurentId: number) => void;
  selectedFavId: number | null;
  setSelectedFavId: (favId: number | null) => void;
};

const FavoritesContext = createContext<FavoriteContextType>(
  {} as FavoriteContextType
);

export const useFavoritesContext = () => useContext(FavoritesContext);

export const FavoritesContextProvider = ({ children }: ContextProps) => {
  // favorites c'est une variable d'état
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedFavId, setSelectedFavId] = useState<number | null>(null);
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const { restaurants } = useContext(RestaurantsContext);

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

  const deleteFromFavorites = () => {
    const clone = [...favorites];
    const newFavs = clone.filter((x) => x !== selectedFavId);
    setFavorites(newFavs);
    /* setFavorites((prev) => prev.filter(x => x !== restaurantId)); */
    localStorage.setItem("favorites", JSON.stringify(newFavs));
  };

  useEffect(() => {
    setRestaurant(restaurants.find((r) => r.id === selectedFavId) ?? null);
  }, [selectedFavId]);

  return (
    <FavoritesContext.Provider
      value={{
        addToFavorites,
        favorites,
        deleteFromFavorites,
        selectedFavId,
        setSelectedFavId,
      }}
    >
      {children}
      <Modal restaurant={restaurant} />
    </FavoritesContext.Provider>
  );
};
