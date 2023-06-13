import React from "react";
import "./Modal.css";
import { useFavoritesContext } from "../contexts/FavoritesContext";
import { Restaurant } from "../models/RestaurantType";

type ModalProps = {
  show: boolean;
  restaurant: Restaurant;
};

export const Modal = ({ show, restaurant }: ModalProps) => {
  const { deleteFromFavorites, handleModal } = useFavoritesContext();
  if (!show) return null;
  return (
    <div className="modal">
      <section className="modal-main">
        <p className="modal-main-prompt">{`Retirer "${restaurant.name}" des favoris?`}</p>
        <div className="modal-main-actions">
          <button
            className="modal-main-btn"
            onClick={() => {
              deleteFromFavorites(restaurant.id);
              handleModal(false)
            }}
          >
            Confirmer
          </button>
          <button className="modal-main-btn" onClick={() => handleModal(false)}>
            Annuler
          </button>
        </div>
      </section>
    </div>
  );
};
