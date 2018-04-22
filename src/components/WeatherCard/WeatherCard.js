import React, { Component } from 'react';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import styles from './WeatherCard.module.css';

class WeatherCard extends Component {
    render() {
        const classesMedia = [styles.media];
        if (this.props.backgroundImg === 'd') {
            classesMedia.push(styles.backgroundDay);
        }
        if (this.props.backgroundImg === 'n') {
            classesMedia.push(styles.backgroundNight);
        }
        return (
            <Card raised className={styles.container}>
                <CardMedia
                    className={classesMedia.join(' ')}
                    image={this.props.icon}
                    title={this.props.description}
                />
                <CardContent>
                    <Typography variant="display3" gutterBottom>
                        {this.props.city}
                    </Typography>
                    <Typography variant="display3" gutterBottom>
                        {this.props.temp} °C
                    </Typography>
                    <Typography variant="display1" gutterBottom>
                        {new Date().toLocaleDateString('en-GB', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'numeric',
                            day: 'numeric'
                        })}
                    </Typography>
                    <Typography gutterBottom variant="headline">
                        {this.props.description}
                    </Typography>
                    <Typography variant="subheading" gutterBottom>
                        Pressure: {this.props.pressure} hPa &nbsp;&nbsp;
                        Humidity: {this.props.humidity}% &nbsp;&nbsp; Wind:{' '}
                        {this.props.wind} km/h
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default WeatherCard;
