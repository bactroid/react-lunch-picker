import React, { useMemo } from "react";
import RestaurantContext from "./contexts/RestaurantContext";
import "./App.css";
import RestaurantDisplay from "./components/RestaurantDisplay";
import useLunchPicker from "./hooks/useLunchPicker";

const App = () => {
  const [restaurant, isLoading, hasError, fetchRestaurant] = useLunchPicker();

  // useMemo ensures that we only update our context object if one of
  // these items changes
  const contextValue = useMemo(
    () => ({ restaurant, isLoading, hasError, fetchRestaurant }),
    [restaurant, isLoading, hasError, fetchRestaurant]
  );

  return (
    <RestaurantContext.Provider value={contextValue}>
      {hasError ? "Error retieving data. Please try again in a moment." : null}
      <RestaurantDisplay
        restaurant={isLoading ? "Loading..." : restaurant}
        fetchRestaurant={fetchRestaurant}
      />
    </RestaurantContext.Provider>
  );
};

export default App;
