import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import styles from './SearchField.module.css';

const searchField = () => (
    <div className={styles.container}>
        <center>
            <TextField
                id="search"
                label="City:"
                placeholder="Wroclaw"
                type="search"
                className={styles.textField}
                margin="normal"
            />
            <Button
                style={{ backgroundColor: '#ed826c', color: 'white' }}
                size="small"
                variant="raised"
            >
                Search
            </Button>   
        </center>

    </div>
);

export default searchField;
