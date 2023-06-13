import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="">Logo/ Nom de l'App</h1>
      </Link>

      <Link to="favorites">
        <button className="header__btn">Mes favoris</button>
      </Link>
    </div>
  );
};
