import React, { useContext } from "react";
import { RestaurantsList } from "../../components/RestaurantsList";
import { RestaurantsContext } from "../../contexts/RestaurantsContext";

export const Homepage = () => {
  const { restaurants } = useContext(RestaurantsContext);
  // If there is only one child, you don't need a container
  return (
    <div>
      <RestaurantsList restaurants={restaurants} />
    </div>
  );
};
