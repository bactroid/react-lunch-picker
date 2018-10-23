import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

import {
  RESTAURANT_FETCH,
  RESTAURANT_UPDATE,
  RESTAURANT_LOADING,
  RESTAURANT_ERROR
} from '../actions/restaurant'

const LUNCH_PICKER_URL =
  'https://6zkojio7gj.execute-api.us-east-1.amazonaws.com/dev/lunch'

// Every time you see `yield` in this code, we're either resolving a
// promise or sending an action over to Redux.

// Yield Calls
// 1. Tell Redux we're loading.
// 2. Call our API using axios and wait on the promise resolution.
// 3. If we got a successful response, tell Redux to update our
//    restaurant.
// 4. If we got an error, tell Redux about it.

export function* fetchRestaurant () {
  yield put({ type: RESTAURANT_LOADING })
  try {
    const response = yield axios.get(LUNCH_PICKER_URL)
    yield put({ type: RESTAURANT_UPDATE, payload: response.data.text })
  } catch (e) {
    put({ type: RESTAURANT_ERROR })
  }
}

// This saga is "listening" in the background for when the
// RESTAURANT_FETCH call is made. This is what `takeEvery` does. When
// it sees our RESTAURANT_FETCH action, it calls the fetchRestaurant
// saga.

export function* watchFetchRestaurant () {
  yield takeEvery(RESTAURANT_FETCH, fetchRestaurant)
}
