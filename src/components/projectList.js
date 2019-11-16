import React from 'react';
import styles from '../styles/ProjectList.module.scss';
import PostPreview from './postPreview';
import classnames from 'classnames';

const ProjectList = (props) => {
    const posts = props.posts;
  return (
    <section id="current-work" className={styles.container}>
      <h1 className={classnames(styles.title, props.title === 'Current Work' ? styles.left : styles.center)}>{props.title}</h1>
      <section className={styles.posts}>
        {posts.map((post) => {
          return (
            <PostPreview
              image={post.node.frontmatter.main_picture}
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