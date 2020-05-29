import {createContext} from "react";

const initialState = {
  restaurant: '',
  isLoading: true,
  hasError: false
}

const RestaurantContext = createContext(initialState);

export default RestaurantContext;
