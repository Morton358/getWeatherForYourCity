import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import { CircularProgress } from 'material-ui/Progress';

import WetherCard from './components/WeatherCard/WeatherCard';
import SearchField from './components/SearchField/SearchField';
import baner from './assets/images/header_image.png';
import styles from './App.module.css';
import * as actions from './store/actions/index';
import { icons } from './share/icons';
// import _01d from './assets/images/01d.svg';

class App extends Component {
    state = {
        city: ''
    };

    handleInputCity = event => {
        this.setState({ city: event.target.value });
    };

    handleSubmitSearchForm = event => {
        event.preventDefault();
        this.props.onGetWeatherForecast(this.state.city);
    };

    render() {
        let weather = null;
        if (this.props.city) {
            weather = (
                <WetherCard
                    city={this.props.city}
                    icon={icons[this.props.icon]}
                    description={this.props.description}
                    temp={this.props.tempCelsius}
                    pressure={this.props.pressure}
                    humidity={this.props.humidity}
                    wind={this.props.wind}
                />
            );
        }
        if (this.props.loading) {
            weather = <CircularProgress variant="determinate" size={50} />;
        }
        return (
            <div className={styles.main}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <img src={baner} className={styles.baner} alt="baner" />
                    </Grid>
                    <Grid item xs={12}>
                        <SearchField
                            inputHandler={event => this.handleInputCity(event)}
                            submitSearch={event => this.handleSubmitSearchForm(event)}/>
                    </Grid>
                    <Grid item xs={12}>
                        {weather}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        city: state.city,
        icon: state.icon,
        description: state.description,
        tempCelsius: state.tempCelsius,
        pressure: state.pressure,
        humidity: state.humidity,
        wind: state.wind,
        error: state.error,
        errorOccured: state.errorOccured,
        loading: state.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetWeatherForecast: city => dispatch(actions.getWeather(city))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
