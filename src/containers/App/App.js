import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import { CircularProgress } from 'material-ui/Progress';

import WetherCard from '../../components/WeatherCard/WeatherCard';
import SearchField from '../../components/SearchField/SearchField';
import withErrorHandler from '../withErrorHandler/withErrorHandler';
import baner from '../../assets/images/header_image.png';
import styles from './App.module.css';
import * as actions from '../../store/actions/index';
import { icons } from '../../share/icons';
import axios from '../../share/axios-instance';
import { checkValidityInput } from '../../share/utility';

class App extends Component {
    state = {
        city: null,
        inputValid: true,
        inputTouched: false
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.city !== this.props.city) {
            window.scrollTo(0, 450);
        }
    }

    handleInputCity = event => {
        const validity = checkValidityInput(event.target.value);
        this.setState({
            city: event.target.value,
            inputValid: validity,
            inputTouched: true
        });
    };

    handleSubmitSearchForm = event => {
        event.preventDefault();
        this.props.onGetWeatherForecast(this.state.city);
    };

    render() {
        let weather = null;

        if (this.props.loading) {
            weather = (
                <center>
                    <CircularProgress size={100} />
                </center>
            );
        }

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
                    backgroundImg={this.props.icon.slice(2)}
                />
            );
        }

        return (
            <div className={styles.main}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <img src={baner} className={styles.baner} alt="baner" />
                    </Grid>
                    <Grid item xs={12}>
                        <SearchField
                            disableBtn={
                                !this.state.inputValid ||
                                !this.state.inputTouched
                            }
                            error={
                                !this.state.inputValid &&
                                this.state.inputTouched
                            }
                            inputHandler={event => this.handleInputCity(event)}
                            submitSearch={event =>
                                this.handleSubmitSearchForm(event)
                            }
                        />
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

export default connect(mapStateToProps, mapDispatchToProps)(
    withErrorHandler(App, axios)
);
