import React from 'react';
import styles from '../styles/Button.module.scss';

const Button = (props) => {
    return (
        <button onClick={props.onClick} className={styles.container}>
            <h5>{props.children}</h5>
        </button>
    );
};

export default Button;