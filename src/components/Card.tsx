import React from "react";
import { Restaurant } from "../models/RestaurantType";
import "./Card.css";
import { Modal } from "./Modal";

type CardProps = {
  card: Restaurant;
};

export const Card = ({ card }: CardProps) => {
  return (
    <article className="card">
      <img src={card.img} />
      <h5>{card.name}</h5>
      <p>{card.description_short}</p>
    </article>
  );
};
