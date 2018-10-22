import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import ReduxPromise from 'redux-promise'

export default () => {
  return createStore(rootReducer, applyMiddleware(ReduxPromise))
}
