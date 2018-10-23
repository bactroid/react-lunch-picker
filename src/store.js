import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import { watchFetchRestaurant } from './sagas'

const sagaMiddleware = createSagaMiddleware()

// When you create your Redux store, you can optionally apply
// middleware. Here, we're applying ReduxPromise, which intercepts
// actions that have promises in them and resolves them on our behalf.

export default () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  )

  sagaMiddleware.run(watchFetchRestaurant)
  return store
}
