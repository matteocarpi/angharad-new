import React, { useState } from 'react';
import Layout from '../components/layout';
import styles from '../styles/Project.module.scss';
import { graphql } from 'gatsby';
import { PropTypes } from 'prop-types';
import Markdown from 'markdown-to-jsx';
import Modali, { useModali } from 'modali';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import classnames from 'classnames';
import ReactPlayer from 'react-player';

const Project = ({ data }) => {
  const images = data.postData.frontmatter.gallery;
  let [selectedImage, setSelectedImage] = useState(0);
  const [lightbox, toggleLightbox] = useModali({ centered: true, large:true });
  return (
    <Layout>
      <div className={styles.project}>
        <Modali.Modal
          {...lightbox}
        >
          <div
            className={styles.lightboxContainer}
          >
            <FaChevronLeft className={styles.navIcon} onClick={() => setSelectedImage(selectedImage - 1)}/>
            <img className={styles.image} src={images[selectedImage].childImageSharp.fluid.src}/>
            <FaChevronRight
              className={styles.navIcon}
              onClick={() => {
                selectedImage === images.length - 1 ?
                  setSelectedImage(0)
                  :
                  setSelectedImage(selectedImage + 1);
              }}/>
          </div>
        </Modali.Modal>

        <section className={styles.visual}>
          {data.postData.frontmatter.video && (
            <div className={styles.videoWrap}>
              <ReactPlayer
                url={data.postData.frontmatter.videoLink}
                width="100%"
                height="100%"
              />
            </div>
          )}
          {images.map((image, index) => {
            return (
              <button
                key={image}
                onClick={() => {
                  toggleLightbox();
                  setSelectedImage(index);
                }}
                className={classnames(styles.thumbWrap, !data.postData.frontmatter.video && index === 0 && styles.first)}
              >

                <div
                  className={classnames(styles.thumb, !data.postData.frontmatter.video && index === 0 && styles.first)}
                  style={{
                    backgroundImage: `url(${image.childImageSharp.fluid.src})`}}
                />

              </button>
            );
          })}
        </section>

        <section className={styles.reading}>
          <h1>{data.postData.frontmatter.title}</h1>
          <Markdown>{data.postData.internal.content}</Markdown>
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
          gallery {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          video
          videoLink
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