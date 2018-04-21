import { takeEvery } from 'redux-saga/effects';

import { getWeatherSaga } from './app';
import * as actionTypes from '../actions/actionTypes';

export function* watchApp() {
    yield takeEvery(actionTypes.GET_WEATHER_INITIAL, getWeatherSaga);
}
