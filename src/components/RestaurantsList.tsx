import React, { useContext, useState } from "react";
import "./RestaurantsList.css";
import { Restaurant } from "../models/RestaurantType";
import { Card } from "./Card";
import { Link } from "react-router-dom";
import { useFavoritesContext } from "../contexts/FavoritesContext";
import { FaStar } from "react-icons/fa";
import { Modal } from "./Modal";

type RestaurantsListProps = {
  restaurants: Restaurant[];
};

export const RestaurantsList = ({ restaurants }: RestaurantsListProps) => {
  const { favorites, addToFavorites, deleteFromFavorites } =
    useFavoritesContext();
  const [modal, setModal] = useState(false);
  const [restaurantId, setRestaurantId] = useState(0);
  const [RestaurantName, setRestaurantName] = useState("");

  return (
    <>
      <main className="restaurants-list">
        {restaurants.map((x) => (
          <div className="card" key={x.id}>
            <Link className="link" to={`/details/${x.id}`}>
              <Card card={x} />
            </Link>
            {favorites.includes(x.id) ? (
              <FaStar
                className="remove-from-fav-icon"
                onClick={() => {
                  setModal(true);
                  setRestaurantId(x.id);
                  setRestaurantName(x.name);
                }}
              />
            ) : (
              <FaStar
                className="add-to-fav-icon"
                onClick={() => addToFavorites(x.id)}
              />
            )}
          </div>
        ))}
      </main>
      <Modal
        show={modal}
        handleClose={() => setModal(false)}
        restaurantId={restaurantId}
        restaurantName={RestaurantName}
      />
    </>
  );
};
