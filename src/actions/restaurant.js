import axios from 'axios'

const LUNCH_PICKER_URL = 'https://6zkojio7gj.execute-api.us-east-1.amazonaws.com/dev/lunch'

// Use constants because it saves us from typing string wrong.
// Sidenote: This is a kludge to work around not having algebraic
// data types (like Elm).
export const FETCH_RESTAURANT = 'FETCH_RESTAURANT'

export const fetchRestaurant = () => ({
  type: FETCH_RESTAURANT,
  payload: axios.get(LUNCH_PICKER_URL)
})
