import restaurant from './restaurant'
import { combineReducers } from 'redux'

// This example is a little contrived because we only have one
// reducer. We don't really need to combine several reducers. In an
// earlier version of this repo, I just used our single restaurant
// reducer, but I thought there was value in demonstrating that you
// can use `combineReducers` to handle more complex state.

// Our restaurant reducer is only concerned with creating a restaurant
// property on our state object. Generally speaking, you'll probably
// want a reducer for each property on our state.

const rootReducer = combineReducers({
  restaurant
})

export default rootReducer
