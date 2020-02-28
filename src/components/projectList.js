import React from 'react';
import styles from '../styles/ProjectList.module.scss';
import PostPreview from './postPreview';
import classnames from 'classnames';
import { PropTypes } from 'prop-types';

const ProjectList = (props) => {
  const posts = props.posts;
  return (
    <section id="current-work" className={styles.container}>
      <h1 className={classnames(styles.title, props.title === 'Current Work' ? styles.left : styles.center)}>{props.title}</h1>
      <section className={styles.posts}>
        {posts.map((post) => {
          return (
            <PostPreview
              key={post.node.frontmatter.title}
              image={post.node.frontmatter.gallery[0] && post.node.frontmatter.gallery[0].childImageSharp ? post.node.frontmatter.gallery[0].childImageSharp.fluid : ''}
              title={post.node.frontmatter.title}
              excerpt={post.node.excerpt}
              slug={post.node.fields.slug}
            />
          );
        })}
      </section>
    </section>
  );
};

export default ProjectList;

ProjectList.propTypes = {
  posts: PropTypes.node,
  title: PropTypes.string,

};