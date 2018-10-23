import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import ReduxPromise from 'redux-promise'

// When you create your Redux store, you can optionally apply
// middleware. Here, we're applying ReduxPromise, which intercepts
// actions that have promises in them and resolves them on our behalf.

export default () => {
  return createStore(rootReducer, applyMiddleware(ReduxPromise))
}
