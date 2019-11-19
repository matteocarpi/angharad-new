import React, { useState } from 'react';
import styles from '../styles/Image.module.scss';
import { PropTypes } from 'prop-types';

const Image = (props) => {
  const [enlarged, setEnlarged] = useState(false);

  return (
    <div>
      <div
        onClick={() => { 
          setEnlarged(!enlarged);
        }}
        key={styles.image}
        style={{
          backgroundImage: `url(${props.image})`,
        }} 
        className={styles.image}
      />
    </div>
  );
};

export default Image;

Image.propTypes = {
    image: PropTypes.string,
}