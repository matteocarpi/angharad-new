import React from 'react';
import { graphql } from 'gatsby';
import ProjectList from '../../components/projectList';
import Layout from '../../components/layout';

const Design = ({ data }) => {
    const posts =  data.design.edges;
    return (
        <Layout>
            <ProjectList
                title="Design"
                posts={posts}
            />
        </Layout>
    );
};

export default Design;

export const query = graphql`
query DesignQuery {
    design: allMarkdownRemark(sort: {fields: [frontmatter___date], order: ASC}, filter: {frontmatter: {categories: {design: {eq: true}}}}) {
      edges {
        node {
            fields {
                slug
            }
          frontmatter {
            title
            main_picture
            gallery
            categories {
              design
              performance
              theatre_making
            }
          }
          excerpt(pruneLength: 300)
          internal {
            content
          }
        }
      }
    }
  }
`