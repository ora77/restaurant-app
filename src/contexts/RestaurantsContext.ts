import { createContext } from "react";
import { Restaurant } from "../models/RestaurantType";


export type RestaurantsContextType = {
  restaurants: Restaurant[];
};

export const RestaurantsContext = createContext<RestaurantsContextType>({
  restaurants: [],
});


