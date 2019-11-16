import React from 'react';
import { graphql } from 'gatsby';
import ProjectList from '../../components/projectList';
import Layout from '../../components/layout';

const Performance = ({ data }) => {
    const posts =  data.performance.edges;
    return (
        <Layout>
            <ProjectList
                title="Performance"
                posts={posts}
            />
        </Layout>
    );
};

export default Performance;

export const query = graphql`
query PerformanceQuery {
    performance: allMarkdownRemark(sort: {fields: [frontmatter___date], order: ASC}, filter: {frontmatter: {categories: {performance: {eq: true}}}}) {
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