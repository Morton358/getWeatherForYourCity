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
                <Typography gutterBottom variant="headline" component="h1">
                    Temperature: {props.temp} °C
                </Typography>
                <Typography gutterBottom variant="headline" component="h2">
                    Lizard
                </Typography>
                <Typography component="p">
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default weatherCard;
