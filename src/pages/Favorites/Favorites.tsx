import React, { useContext } from "react";
import { RestaurantsList } from "../../components/RestaurantsList";
import { RestaurantsContext } from "../../contexts/RestaurantsContext";
import { useFavoritesContext } from "../../contexts/FavoritesContext";

export const Favorites = () => {
  const { restaurants } = useContext(RestaurantsContext);
  const { favorites } = useFavoritesContext();
  const favoriteRestaurants = restaurants.filter((x) =>
    favorites.includes(x.id)
  );

  // Récupérer la liste des restaurants complètes
  // Récupérer la liste des ids des favoris (Favoris context + local storage)
  // Map sur la première liste, si l'id du restau est dans ma listes de favoris, je le garde.
  // sinon je ne le garde pas
  // Et c'est cette liste filtrée que je passe en prop
  return <RestaurantsList restaurants={favoriteRestaurants} />;
};
