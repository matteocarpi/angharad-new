import React from 'react';
import Markdown from 'markdown-to-jsx';
import styles from '../styles/PostPreview.module.scss';
import { Link }from 'gatsby';
const PostPreview = (props) => {
    return (
        <div>
            <article className={styles.container}>
                <div 
                style={{
                    backgroundImage: `url(${props.image})`,
                }} 
                className={styles.image}
                />
                {/* <img alt={props.image} src={props.image}/> */}
                <Link className={styles.title} to={props.slug}>
                    <h3>{props.title}</h3>
                </Link>
                <p className={styles.description}>
                <Markdown>{props.excerpt}</Markdown>
                </p>
            </article>
        </div>
    );
};

export default PostPreview;