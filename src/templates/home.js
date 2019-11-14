import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby';
import styles from '../styles/Home.module.scss';

export default ({data}, props) => {
  return (
    <Layout>
      <div style={{
        backgroundImage: `url(${data.allMarkdownRemark.edges[0].node.frontmatter.home_picture})`,
      }}
      className={styles.titleSlide}
      />
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(filter: {fields: {slug: {eq: "/"}}}) {
      edges {
        node {
          frontmatter {
            home_picture
          }
        }
      }
    }
  }
`
