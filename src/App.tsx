import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { data } from "./data/restaurants";
import { Homepage } from "./pages/Homepage/Homepage";
import { Details } from "./pages/Details/Details";
import { Favorites } from "./pages/Favorites/Favorites";
import { Header } from "./components/Header";
import { RestaurantsContext } from "./contexts/RestaurantsContext";
import { FavoritesContextProvider } from "./contexts/FavoritesContext";

const App = () => {
  const restaurants = data;

  return (
    <div className="main">
      <RestaurantsContext.Provider value={{ restaurants: restaurants }}>
        <FavoritesContextProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </Router>
        </FavoritesContextProvider>
      </RestaurantsContext.Provider>
    </div>
  );
};

export default App;
