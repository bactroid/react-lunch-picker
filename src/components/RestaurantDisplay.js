import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'

const styles = {
  card: {
    width: 400,
    margin: 4
  }
}

const RestaurantDisplay = props => (
  <Card>
    <CardContent>
      <h1>Today, for lunch, I recommend…</h1>
      <div>{props.restaurant}</div>
    </CardContent>
    <CardActions>
      <Button onClick={props.fetchRestaurant}>Nah. Pick something else.</Button>
    </CardActions>
  </Card>
)

export default withStyles(styles)(RestaurantDisplay)
