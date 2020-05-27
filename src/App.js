import React, { useEffect, useState } from "react";
import { get } from "axios";
import "./App.css";
import RestaurantDisplay from "./components/RestaurantDisplay";

const LUNCH_PICKER_URL =
  "https://6zkojio7gj.execute-api.us-east-1.amazonaws.com/dev/lunch";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [restaurant, setRestaurant] = useState("");

  const fetchRestaurant = async () => {
    try {
      setIsLoading(true);
      setHasError(false);
      const response = await get(LUNCH_PICKER_URL);
      setRestaurant(response.data.text);
      setIsLoading(false);
      setHasError(false);
    } catch (e) {
      setIsLoading(false);
      setHasError(true);
    }
  };

  useEffect(() => {
    fetchRestaurant();
  }, []);

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
