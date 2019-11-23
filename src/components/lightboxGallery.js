import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { styles } from 'ansi-colors';
import Img from 'gatsby-image';
import { Dialog } from '@reach/dialog';

const LightboxGallery = (props) => {
  const images = props.images;
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className={styles.container}>
      {images.map((image, index) => {
        return (
          <>
            <button
              style={{
                border: 'none', 
                background: 'transparent',
                margin: 0,
                padding: 0,
              }
              }
              key={image}
              type="button"
              onClick={() => {
                setShowLightbox(true); 
                setSelectedImage(images[index]); 
              }}
            >
              <Img
                className={styles.thumb}
                key={image}
                fluid={image}
              />
            </button>
            <Dialog>
              <Img fluid={image}/>
              <button
                onClick={setShowLightbox(false)}
              >
                    Close
              </button>
            </Dialog>
          </>
        );
      })}
    </div>
  );
};

LightboxGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default LightboxGallery;