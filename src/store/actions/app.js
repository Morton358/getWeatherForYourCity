import * as actionTypes from './actionTypes';

export const getWeatherStart = () => {
    return {
        type: actionTypes.GET_WEATHER_START
    };
};
export const getWeatherSuccess = (
    city,
    icon,
    description,
    tempCelsius,
    pressure,
    humidity,
    wind
) => {
    return {
        type: actionTypes.GET_WEATHER_SUCCESS,
        city: city,
        icon: icon,
        description: description,
        tempCelsius: tempCelsius,
        pressure: pressure,
        humidity: humidity,
        wind: wind
    };
};

export const getWeatherFailed = error => {
    return {
        type: actionTypes.GET_WEATHER_FAILED,
        getWeatherError: error
    };
};

export const getWeather = city => {
    return {
        type: actionTypes.GET_WEATHER_INITIAL,
        city: city
    };
};
