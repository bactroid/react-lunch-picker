import { useEffect, useState } from "react";
import { get } from "axios";

const useLunchPicker = () => {
  const LUNCH_PICKER_URL =
    "https://6zkojio7gj.execute-api.us-east-1.amazonaws.com/dev/lunch";

  const [restaurant, setRestaurant] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

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

  return [restaurant, isLoading, hasError, fetchRestaurant]
};

export default useLunchPicker
