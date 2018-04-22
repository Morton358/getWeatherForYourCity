import reducer from './app';
import * as actionTypes from '../actions/actionTypes';

describe('app reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({
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
        });
    });
    it('should store the weather data upon successfull receiving data from Open Weather', () => {
        expect(
            reducer(
                {
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
                },
                {
                    type: actionTypes.GET_WEATHER_SUCCESS,
                    city: 'Wroclaw',
                    icon: '01d',
                    description: 'sky clear',
                    tempCelsius: 27,
                    pressure: 1017,
                    humidity: 43,
                    wind: 5.4
                }
            )
        ).toEqual({
            city: 'Wroclaw',
            icon: '01d',
            description: 'sky clear',
            tempCelsius: 27,
            pressure: 1017,
            humidity: 43,
            wind: 5.4,
            error: null,
            errorOccured: false,
            loading: false
        });
    });
});
