import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../contexts/RestaurantsContext";
import "./Details.css";
import { useFavoritesContext } from "../contexts/FavoritesContext";
import { Modal } from "../components/Modal";

export const Details = () => {
  const { restaurants } = useContext(RestaurantsContext);
  const { favorites, addToFavorites, deleteFromFavorites } =
    useFavoritesContext();
  const [modal, setModal] = useState(false);

  type IdParams = {
    id: string;
  };

  const { id } = useParams() as IdParams;
  return (
    <main className="details">
      <h2>{restaurants[+id].name}</h2>
      <p>{restaurants[+id].description_long}</p>
      {favorites.includes(restaurants[+id].id) ? (
        <button
          onClick={
            () => setModal(true) /* deleteFromFavorites(restaurants[+id].id) */
          }
        >
          Retirer des favoris
        </button>
      ) : (
        <button onClick={() => addToFavorites(restaurants[+id].id)}>
          Ajouter aux favoris
        </button>
      )}
      <h2>Menu</h2>
      <h4>Entrées</h4>
      <ul className="details__menu-list">
        {restaurants[+id].menu.entrees.map((x, i) => (
          <li key={"entree_" + i}>{x}</li>
        ))}
      </ul>
      <h4>Plats</h4>
      <ul className="details__menu-list">
        {restaurants[+id].menu.dishes.map((x, i) => (
          <li key={"dish_" + i}>{x}</li>
        ))}
      </ul>
      <h4>Desserts</h4>
      <ul className="details__menu-list">
        {restaurants[+id].menu.deserts.map((x, i) => (
          <li key={"dessert_" + i}>{x}</li>
        ))}
      </ul>
      <Modal
        show={modal}
        handleClose={() => setModal(false)}
        restaurantId={restaurants[+id].id}
        restaurantName={restaurants[+id].name}
      />
    </main>
  );
};
