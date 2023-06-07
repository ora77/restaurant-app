import React, { useContext } from "react";
import "./RestaurantsList.css";
import { RestaurantsContext } from "../contexts/RestaurantsContext";
import { Restaurant } from "../models/RestaurantType";
import { Card } from "./Card";
import { Link, useParams } from "react-router-dom";
import { Details } from "../pages/Details";

export const RestaurantsList = () => {
  const { restaurants } = useContext(RestaurantsContext);
  return (
    <main className="restaurants-list">
      {restaurants.map((x) => (
        <div key={x.id}>
          <Link className="link-card" to={`/details/${x.id}`}>
            <Card card={x} />
          </Link>
        </div>
      ))}
    </main>
  );
};
