import React from 'react';
import { Link } from 'gatsby';
import styles from '../styles/BigButton.module.scss';

const BigButton = (props) => {
    return (
        <Link 
        to={props.to}
        className={styles.bigButton}
        >
        {props.children}
        </Link>
    );
};

export default BigButton;