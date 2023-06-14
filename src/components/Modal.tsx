// Remove unused import 
import React, { useContext, useEffect, useState } from "react";
import "./Modal.css";
import { useFavoritesContext } from "../contexts/FavoritesContext";
import { Restaurant } from "../models/RestaurantType";

export const Modal = ({ restaurant }: { restaurant: Restaurant | null }) => {
  const { deleteFromFavorites, setSelectedFavId } = useFavoritesContext();

  if (restaurant == null) return null;

  return (
    <div className="modal">
      <section className="modal-main">
        <p className="modal-main-prompt">{`Retirer "${restaurant.name}" des favoris?`}</p>
        <div className="modal-main-actions">
          <button
            className="modal-main-btn"
            onClick={() => {
              deleteFromFavorites(restaurant.id);
              setSelectedFavId(null);
            }}
          >
            Confirmer
          </button>
          <button
            className="modal-main-btn"
            onClick={() => setSelectedFavId(null)}
          >
            Annuler
          </button>
        </div>
      </section>
    </div>
  );
};
