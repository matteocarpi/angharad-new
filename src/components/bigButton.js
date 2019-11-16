import React from 'react';
import { Link } from 'gatsby';
import styles from '../styles/BigButton.module.scss';

const BigButton = (props) => {
    return (
        <Link 
        to={props.to}
        className={styles.wrap}
        >
        <div
            className={styles.button}
        >
            <h1>{props.children}</h1>
        </div>
        </Link>
    );
};

export default BigButton;