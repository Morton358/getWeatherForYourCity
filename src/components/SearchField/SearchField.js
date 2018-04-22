import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import styles from './SearchField.module.css';

const searchField = props => (
    <div className={styles.container}>
        <center>
            <TextField
                id="search"
                label="City:"
                error={props.error}
                placeholder="Wrocław"
                type="search"
                className={styles.textField}
                margin="normal"
                onChange={props.inputHandler}
                onKeyPress={ev => {
                    if (ev.key === 'Enter') {
                        props.submitSearch(ev);
                    }
                }}
            />
            <Button
                disabled={props.disableBtn}
                // style={{ backgroundColor: '#ed826c', color: 'white' }}
                size="small"
                variant="raised"
                color="secondary"
                onClick={props.submitSearch}
            >
                Search
            </Button>
        </center>
    </div>
);

export default searchField;
