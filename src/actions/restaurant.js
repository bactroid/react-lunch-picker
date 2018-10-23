// Use constants because it saves us from typing string wrong.
// Sidenote: This is a kludge to work around not having algebraic
// data types (like Elm).

export const RESTAURANT_UPDATE = 'RESTAURANT_UPDATE'
export const RESTAURANT_LOADING = 'RESTAURANT_LOADING'
export const RESTAURANT_ERROR = 'RESTAURANT_ERROR'
export const RESTAURANT_FETCH = 'RESTAURANT_FETCH'

// This action creator will get mapped onto our App component via
// `mapDispatchToProps`.

export const fetchRestaurant = () => ({
  type: RESTAURANT_FETCH
})
