import React, { useEffect, useReducer } from "react";
import { get } from "axios";
import "./App.css";
import RestaurantDisplay from "./components/RestaurantDisplay";

const LUNCH_PICKER_URL =
  "https://6zkojio7gj.execute-api.us-east-1.amazonaws.com/dev/lunch";

// Actions
const FETCH_RESTAURANT_REQUEST = "FETCH_RESTAURANT_REQUEST";
const FETCH_RESTAURANT_SUCCESS = "FETCH_RESTAURANT_SUCCESS";
const FETCH_RESTAURANT_ERROR = "FETCH_RESTAURANT_ERROR";

// Initial App State
const initialState = {
  isLoading: true,
  hasError: false,
  restaurant: ""
};

const restaurantReducer = (state, action) => {
  switch (action.type) {
    case FETCH_RESTAURANT_REQUEST:
      return {
        ...state,
        isLoading: true,
        hasError: false
      };
    case FETCH_RESTAURANT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        restaurant: action.payload
      };
    case FETCH_RESTAURANT_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(restaurantReducer, initialState);
  const {isLoading, restaurant} = state

  const fetchRestaurant = async () => {
    dispatch({ type: FETCH_RESTAURANT_REQUEST });
    try {
      const response = await get(LUNCH_PICKER_URL);
      dispatch({ type: FETCH_RESTAURANT_SUCCESS, payload: response.data.text });
    } catch (e) {
      dispatch({ type: FETCH_RESTAURANT_ERROR, payload: e });
    }
  }

  useEffect(fetchRestaurant, []);

  return (
    <div className="App">
      <RestaurantDisplay
        restaurant={isLoading ? "Loading..." : restaurant}
        fetchRestaurant={fetchRestaurant}
      />
    </div>
  );
};

export default App;
