import React, { Component } from 'react';
import Grid from 'material-ui/Grid';

import WetherCard from './components/WeatherCard/WeatherCard';
import SearchField from './components/SearchField/SearchField';

import baner from './assets/images/header_image.png';
import styles from './App.module.css';
import icon from './assets/images/01d.svg';

class App extends Component {
    render() {
        const description = 'Clear sky';
        const temp = '23';
        const city = 'Wroclaw';
        const date = '19 kwi 2018';
        return (
            <div className={styles.main}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <img src={baner} className={styles.baner} alt="baner" />
                    </Grid>
                    <Grid item xs={12}>
                        <SearchField />
                    </Grid>
                    <Grid item xs={12}>
                        <WetherCard
                            city={city}
                            icon={icon}
                            description={description}
                            temp={temp}
                            date={date}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;
