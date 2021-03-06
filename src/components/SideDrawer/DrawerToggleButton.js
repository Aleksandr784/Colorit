import React from 'react';
import classes from './DrawerToggleButton.module.css';

const DrawerToggleButton = props => (
    
    <button className={classes.toggleButton} onClick={props.click} >
        <div className={classes.toggleButton__line} />
        <div className={classes.toggleButton__line} />
        <div className={classes.toggleButton__line} />
    </button>

);


export default DrawerToggleButton;