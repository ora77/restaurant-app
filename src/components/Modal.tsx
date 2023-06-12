import React from "react";
import "./Modal.css";
import { useFavoritesContext } from "../contexts/FavoritesContext";

type ModalProps = {
  show: boolean;
  handleClose: () => void;
  restaurantId: number;
  restaurantName: string;
};

export const Modal = ({
  show,
  handleClose,
  restaurantId,
  restaurantName,
}: ModalProps) => {
  const { deleteFromFavorites } = useFavoritesContext();
  if (!show) return null;
  return (
    <div className="modal">
      <section className="modal-main">
        <p className="modal-main-prompt">{`Retirer "${restaurantName}" des favoris?`}</p>
        <div className="modal-main-actions">
          <button
            className="modal-main-btn"
            onClick={() => {
              deleteFromFavorites(restaurantId);
              handleClose();
            }}
          >
            Confirmer
          </button>
          <button className="modal-main-btn" onClick={() => handleClose()}>
            Annuler
          </button>
        </div>
      </section>
    </div>
  );
};
