import React, { useState } from 'react';
import Layout from '../components/layout';
import styles from '../styles/Project.module.scss';
import { graphql } from 'gatsby';
import { PropTypes } from 'prop-types';
import Markdown from 'markdown-to-jsx';
import Modali, { useModali } from 'modali';

const Project = ({ data }) => {
  const images = data.postData.frontmatter.gallery;
  const [selectedImage, setSelectedImage] = useState();
  const [lightbox, toggleLightbox] = useModali();

  return (
    <Layout>
      <div className={styles.project}>
        <Modali.Modal {...lightbox}>
          <img src={selectedImage}/>
        </Modali.Modal>
        <section className={styles.visual}>
          {images.map(image => {
            return (
              <button
                key={image} 
                onClick={() => {
                  toggleLightbox();
                  setSelectedImage(image);
                }}
              >
                <img 
                  src={image}
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