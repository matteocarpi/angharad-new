import React from 'react';
import Markdown from 'markdown-to-jsx';

const PostPreview = (props) => {
    return (
        <div>
            <article>
              <img alt={props.image} src={props.image}/>
              <h1>{props.title}</h1>
              <Markdown>{props.excerpt}</Markdown>
            </article>
        </div>
    );
};

export default PostPreview;