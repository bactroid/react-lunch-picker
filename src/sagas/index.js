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

export function* fetchRestaurant () {
  yield put({ type: RESTAURANT_LOADING })
  try {
    const response = yield axios.get(LUNCH_PICKER_URL)
    yield put({ type: RESTAURANT_UPDATE, payload: response.data.text })
  } catch (e) {
    put({ type: RESTAURANT_ERROR })
  }
}

export function* watchFetchRestaurant () {
  yield takeEvery(RESTAURANT_FETCH, fetchRestaurant)
}
