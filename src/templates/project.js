import React, { useState } from 'react';
import Layout from '../components/layout';
import styles from '../styles/Project.module.scss';
import { graphql } from 'gatsby';
import { PropTypes } from 'prop-types';
import Markdown from 'markdown-to-jsx';
import Modali, { useModali } from 'modali';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import classnames from 'classnames';

const Project = ({ data }) => {
  const images = data.postData.frontmatter.gallery;
  let [selectedImage, setSelectedImage] = useState();
  const [lightbox, toggleLightbox] = useModali({ large:true });

  return (
    <Layout>
      <div className={styles.project}>
        <Modali.Modal 
          centered={true} 
          {...lightbox}
        >
          <div
            className={styles.lightboxContainer}
          >
            <FaChevronLeft className={styles.navIcon} onClick={() => setSelectedImage(selectedImage--)}/>
            <img src={images[selectedImage]}/>
            <FaChevronRight className={styles.navIcon} onClick={() => setSelectedImage(selectedImage++)}/>
          </div>
        </Modali.Modal>
        <section className={styles.visual}>
          {images.map((image, index) => {
            return (
              <button
                key={images[index]} 
                onClick={() => {
                  toggleLightbox();
                  setSelectedImage(index);
                }}
                className={classnames(styles.thumbWrap, index === 0 && styles.first)}
              >
                <div 
                  className={classnames(styles.thumb, index === 0 && styles.first)}
                  style={{
                    backgroundImage: `url(${images[index]})`}}
                />
              </button>
            );
          })}

          <div className={styles.lightbox}>
            <div 
              className={styles.image}
              styles={{
                backgroundImage: `url(${selectedImage})`,
              }}
            />
          </div>
        </section>
        
        <section className={styles.reading}>
          <h1>{data.postData.frontmatter.title}</h1>
          <p>
            <Markdown>{data.postData.internal.content}</Markdown>
          </p>
        </section>

      </div>
    </Layout>
  );
};

export default Project;

export const query = graphql`
query PostData($slug: String!) {
  postData: markdownRemark(fields: {slug: {eq: $slug}}) {
        frontmatter {
          title
          gallery
        }
        internal {
          content
        }
    }
}
`;

Project.propTypes = {
  data: PropTypes.node,
};