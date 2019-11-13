import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby';


export default ({data}) => {
  return (
    <Layout>
      <div>Hello Home</div>
      {console.log('hello friend', data.allMarkdownRemark.edges[0].node.frontmatter.home_picture)}
      <img alt='' src={data.allMarkdownRemark.edges[0].node.frontmatter.home_picture} />
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
