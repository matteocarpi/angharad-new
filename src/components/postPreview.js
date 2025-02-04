import React from "react"
import Markdown from "markdown-to-jsx"
import * as styles from "../styles/PostPreview.module.scss"
import { Link } from "gatsby"
import { PropTypes } from "prop-types"
import Img from "gatsby-image"

const PostPreview = props => {
  return (
    <div>
      <article className={styles.container}>
        {props.image && <Img fluid={props.image} className={styles.image} />}
        <Link className={styles.title} to={props.slug}>
          <h3>{props.title}</h3>
        </Link>
        <p className={styles.description}>
          <Markdown>{props.excerpt}</Markdown>
        </p>
      </article>
    </div>
  )
}

export default PostPreview

PostPreview.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  slug: PropTypes.string,
  excerpt: PropTypes.string,
}
