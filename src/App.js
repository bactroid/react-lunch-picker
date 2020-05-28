import React from "react";
import "./App.css";
import RestaurantDisplay from "./components/RestaurantDisplay";
import useLunchPicker from './hooks/useLunchPicker'

const App = () => {
  const [restaurant, isLoading, hasError, fetchRestaurant] = useLunchPicker()
  return (
    <div className="App">
      {hasError ? "Error retieving data. Please try again in a moment." : null}
      <RestaurantDisplay
        restaurant={isLoading ? "Loading..." : restaurant}
        fetchRestaurant={fetchRestaurant}
      />
    </div>
  );
};

export default App;
