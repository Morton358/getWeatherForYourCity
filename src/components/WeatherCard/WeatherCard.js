import React from 'react';

import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import styles from './WeatherCard.module.css';

const weatherCard = props => {
    return (
        <Card raised className={styles.container}>
            <CardMedia
                className={styles.media}
                image={props.icon}
                title={props.description}
            />
            <CardContent>
                <Typography variant="display3" gutterBottom>
                    {props.city} {props.temp} °C
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
                    {props.description}
                </Typography>
                <Typography variant="subheading" gutterBottom>
                    Pressure: {props.pressure} hPa Humidity: {props.humidity}%
                    Wind: {props.wind} km/h
                </Typography>
            </CardContent>
        </Card>
    );
};

export default weatherCard;
