import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  // Amazing app name !!
  return (
    <div className="header">
      <Link to="/">
        <h1 className="">HTMeaL</h1>
      </Link>

      <Link to="favorites">
        <button className="header__btn">Mes favoris</button>
      </Link>
    </div>
  );
};
