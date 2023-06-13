import React, { useContext } from "react";
import { RestaurantsList } from "../../components/RestaurantsList";
import { RestaurantsContext } from "../../contexts/RestaurantsContext";

export const Homepage = () => {
  const { restaurants } = useContext(RestaurantsContext);
  return (
    <div>
      <RestaurantsList restaurants={restaurants} />
    </div>
  );
};
