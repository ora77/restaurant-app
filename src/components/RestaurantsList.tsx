import React from "react";
import "./RestaurantsList.css";
import { Restaurant } from "../models/RestaurantType";
import { Card } from "./Card";
import { Link } from "react-router-dom";
import { useFavoritesContext } from "../contexts/FavoritesContext";
import { FaStar } from "react-icons/fa";

type RestaurantsListProps = {
  restaurants: Restaurant[];
};

export const RestaurantsList = ({ restaurants }: RestaurantsListProps) => {
  const { favorites, addToFavorites, setSelectedFavId } = useFavoritesContext();

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
                  setSelectedFavId(x.id);
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
    </>
  );
};
