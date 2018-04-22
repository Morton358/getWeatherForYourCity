/*eslint indent: ["error", 4, { "SwitchCase": 1 }]*/
import { updateObject } from '../../share/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    city: null,
    icon: null,
    description: null,
    tempCelsius: null,
    pressure: null,
    humidity: null,
    wind: null,
    error: null,
    errorOccured: false,
    loading: false
};

const getWeatherStart = state => {
    return updateObject(state, { loading: true });
};

const getWeatherSuccess = (state, action) => {
    return updateObject(state, {
        city: action.city,
        icon: action.icon,
        description: action.description,
        tempCelsius: action.tempCelsius,
        pressure: action.pressure,
        humidity: action.humidity,
        wind: action.wind,
        error: null,
        errorOccured: false,
        loading: false
    });
};

const getWeatherFailed = (state, action) => {
    return updateObject(state, {
        error: action.getWeatherError,
        errorOccured: true,
        loading: false
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_WEATHER_START:
            return getWeatherStart(state);
        case actionTypes.GET_WEATHER_SUCCESS:
            return getWeatherSuccess(state, action);
        case actionTypes.GET_WEATHER_FAILED:
            return getWeatherFailed(state, action);
        default:
            return state;
    }
};

export default reducer;
