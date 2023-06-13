import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../contexts/RestaurantsContext";
import "./Details.css";
import { useFavoritesContext } from "../contexts/FavoritesContext";
import { Modal } from "../components/Modal";

export const Details = () => {
  const { restaurants } = useContext(RestaurantsContext);
  const { favorites, addToFavorites, modal, handleModal } =
    useFavoritesContext();

  const { id } = useParams();
  if (id === undefined) return null;

  const restaurant = restaurants[+id];

  return (
    <main className="details">
      <h2>{restaurant.name}</h2>
      <img src={restaurant.img}/>
      <p>{restaurant.description_long}</p>
      {favorites.includes(restaurant.id) ? (
        <button onClick={() => handleModal(true)}>Retirer des favoris</button>
      ) : (
        <button onClick={() => addToFavorites(restaurant.id)}>
          Ajouter aux favoris
        </button>
      )}
      <h2>Menu</h2>
      <h4>Entrées</h4>
      <ul className="details__menu-list">
        {restaurant.menu.entrees.map((x, i) => (
          <li key={"entree_" + i}>{x}</li>
        ))}
      </ul>
      <h4>Plats</h4>
      <ul className="details__menu-list">
        {restaurant.menu.dishes.map((x, i) => (
          <li key={"dish_" + i}>{x}</li>
        ))}
      </ul>
      <h4>Desserts</h4>
      <ul className="details__menu-list">
        {restaurant.menu.deserts.map((x, i) => (
          <li key={"dessert_" + i}>{x}</li>
        ))}
      </ul>
      <Modal show={modal} restaurant={restaurant} />
    </main>
  );
};
