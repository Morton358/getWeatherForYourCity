import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { App } from './App';
import SearchField from '../../components/SearchField/SearchField';
import WetherCard from '../../components/WeatherCard/WeatherCard';

configure({ adapter: new Adapter() });

describe('<App />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('should always render SearchField', () => {
        expect(
            wrapper.find(SearchField)).toHaveLength(1);
    });

    it('should render <WetherCard /> when receive weather data from server', () => {
        wrapper.setProps({
            city: 'Wroclaw',
            icon: '01d',
            description: 'sky clear',
            tempCelsius: 27,
            pressure: 1017,
            humidity: 43,
            wind: 5.4
        });
        expect(wrapper.find(WetherCard)).toHaveLength(1);
    });
});
