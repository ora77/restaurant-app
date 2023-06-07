import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { data } from "./data/restaurants";
import { Homepage } from "./pages/Homepage";
import { Details } from "./pages/Details";
import { Favorites } from "./pages/Favorites";
import { Header } from "./components/Header";
import { RestaurantsContext } from "./contexts/RestaurantsContext";

const App = () => {
  const restaurants = data;

  return (
    <div>
      <RestaurantsContext.Provider value={{ restaurants: restaurants }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
      </RestaurantsContext.Provider>
    </div>
  );
};

export default App;
