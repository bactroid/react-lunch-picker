import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import RestaurantContext from "../contexts/RestaurantContext";

const styles = {
  card: {
    width: 400,
    margin: 4
  }
};

const RestaurantDisplay = () => {
  const { restaurant, fetchRestaurant } = useContext(RestaurantContext);
  return (
    <Card>
      <CardContent>
        <h1>Today, for lunch, I recommend…</h1>
        <div>{restaurant}</div>
      </CardContent>
      <CardActions>
        <Button onClick={fetchRestaurant}>
          Nah. Pick something else.
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(RestaurantDisplay);
