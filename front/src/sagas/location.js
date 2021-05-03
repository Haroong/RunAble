import { all, call, put, fork, takeLatest } from '@redux-saga/core/effects';
import axios from 'axios';
import {
  GET_LOCATION_REQUEST,
  GET_LOCATION_SUCCESS,
  GET_LOCATION_FAILURE,
} from '../reducers/location';

function locationAPI(data) {
  return axios.post('/location', data);
}

function* location(action) {
  try {
    const result = yield call(locationAPI, action.data);
    yield put({
      type: GET_LOCATION_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: GET_LOCATION_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchLocation() {
  yield takeLatest(GET_LOCATION_REQUEST, location);
}

export default function* locationSaga() {
  yield all([fork(watchLocation)]);
}
