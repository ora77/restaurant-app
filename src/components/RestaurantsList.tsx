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
  const { favorites, modal, addToFavorites, handleModal } =
    useFavoritesContext();

  const [restaurant, setRestaurant] = useState<Restaurant>(restaurants[0]);

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
                  handleModal(true);
                  setRestaurant(x);
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
      <Modal show={modal} restaurant={restaurant} />
      {/* modal appelé une seule fois dans le favorite context sans props? et on recupere les données de chaque restaurants avec les id de favorites */}
    </>
  );
};
