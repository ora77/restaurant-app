import React, { useContext } from "react";
import { RestaurantsList } from "../components/RestaurantsList";
import { RestaurantsContext } from "../contexts/RestaurantsContext";
import { useFavoritesContext } from "../contexts/FavoritesContext";
import { Restaurant } from "../models/RestaurantType";

export const Favorites = () => {
  const { restaurants } = useContext(RestaurantsContext);
  const { getFavorites } = useFavoritesContext();
  const favoritesId = getFavorites();
  console.log(favoritesId);
  const favoriteRestaurants = restaurants.filter((x) =>
    favoritesId.includes(x.id)
  );
  console.log(favoriteRestaurants);

  // Récupérer la liste des restaurants complètes
  // Récupérer la liste des ids des favoris (Favoris context + local storage)
  // Map sur la première liste, si l'id du restau est dans ma listes de favoris, je le garde.
  // sinon je ne le garde pas
  // Et c'est cette liste filtrée que je passe en prop
  return <RestaurantsList restaurants={favoriteRestaurants} />;
};
