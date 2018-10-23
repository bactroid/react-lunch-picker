// import axios from 'axios'

// const LUNCH_PICKER_URL = 'https://6zkojio7gj.execute-api.us-east-1.amazonaws.com/dev/lunch'

// Use constants because it saves us from typing string wrong.
// Sidenote: This is a kludge to work around not having algebraic
// data types (like Elm).
export const RESTAURANT_UPDATE = 'RESTAURANT_UPDATE'
export const RESTAURANT_LOADING = 'RESTAURANT_LOADING'
export const RESTAURANT_ERROR = 'RESTAURANT_ERROR'
export const RESTAURANT_FETCH = 'RESTAURANT_FETCH'

export const fetchRestaurant = () => ({
  type: RESTAURANT_FETCH
})
