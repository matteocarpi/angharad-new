import React from 'react';
import Layout from '../components/layout';
import styles from '../styles/Project.module.scss';
import { graphql } from 'gatsby';
import { PropTypes } from 'prop-types';
import Markdown from 'markdown-to-jsx';
import classnames from 'classnames';

const Project = ({ data }) => {
  const mainPicture = data.postData.frontmatter.main_picture;

  return (
    <Layout>
      <div className={styles.project}>

        <section className={styles.visual}>
          <div className={styles.gallery}>
            {data.postData.frontmatter.gallery.map((image, index) => {
              return (
                <div 
                  key={styles.image}
                  style={{
                    backgroundImage: `url(${image})`,
                  }} 
                  className={styles.image}
                />
              );
            })}
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
          main_picture
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