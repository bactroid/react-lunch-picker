import { FETCH_RESTAURANT } from '../actions/restaurant'

const initialState = "Loading..."

// Reducers are pure functions that do not change state. Instead, we
// take an initial state and an action, and return what we want our
// state to look like after we've received that action. Redux manages
// our state for us. All mutation is handled exclusively by Redux.

// Most reducers are built from switch statements based on the
// action.type. Actions are simple JS objects:

// {
//   type : String,
//   payload : Object
// }

// payload is an optional property.

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESTAURANT:
      return action.payload.data.text
    default:
      return state
  }
}
