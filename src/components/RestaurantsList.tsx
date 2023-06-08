import React, { useContext } from "react";
import "./RestaurantsList.css";
import { RestaurantsContext } from "../contexts/RestaurantsContext";
import { Restaurant } from "../models/RestaurantType";
import { Card } from "./Card";
import { Link, useParams } from "react-router-dom";
import { Details } from "../pages/Details";
import { useFavoritesContext } from "../contexts/FavoritesContext";

type RestaurantsListProps = {
  restaurants: Restaurant[];
};

export const RestaurantsList = ({ restaurants }: RestaurantsListProps) => {
  const { addToFavorites } = useFavoritesContext();
  return (
    <main className="restaurants-list">
      {restaurants.map((x) => (
        <div key={x.id}>
          <Link className="link-card" to={`/details/${x.id}`}>
            <Card card={x} />
          </Link>
          <button onClick={() => addToFavorites(x.id)}>Add to favorites</button>
        </div>
      ))}
    </main>
  );
};
