import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../contexts/RestaurantsContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Details.css"

export const Details = () => {
  const { restaurants } = useContext(RestaurantsContext);

  type IdParams = {
    id: string;
  };

  const { id } = useParams() as IdParams;
  return (
    <main className="details">
      <h2>{restaurants[+id].name}</h2>
      <p>{restaurants[+id].description_long}</p>
      <button>Add to favorites</button>
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
    </main>
  );
};
