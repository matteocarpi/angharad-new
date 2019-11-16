import React from 'react';
import styles from '../styles/Button.module.scss';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={styles.container}>
      <h5>{props.children}</h5>
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
};