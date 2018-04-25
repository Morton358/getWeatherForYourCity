import { put } from 'redux-saga/effects';

import axios from '../../share/axios-instance';
import * as actions from '../actions/index';

export function* getWeatherSaga(action) {
    yield put(actions.getWeatherStart());
    try {
        const response = yield axios.get(`/weather?q=${action.city}&APPID=${process.env.REACT_APP_OPEN_WEATHER_KEY}`);
        const city = response.data.name;
        const icon = response.data.weather[0].icon;
        const description = response.data.weather[0].description;
        const tempCelsius = Math.round(response.data.main.temp - 273.15);
        const pressure = response.data.main.pressure;
        const humidity = response.data.main.humidity;
        const wind = Math.round(response.data.wind.speed * 3.6, 2);
        yield put(actions.getWeatherSuccess(city, icon, description, tempCelsius, pressure, humidity, wind));
    } catch (error) {
        yield put(actions.getWeatherFailed(error));
    }
}
