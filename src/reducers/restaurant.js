import { FETCH_RESTAURANT } from '../actions/restaurant'

const initialState = "Loading..."

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESTAURANT:
      return action.payload.data.text
    default:
      return state
  }
}
