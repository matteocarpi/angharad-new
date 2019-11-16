import React from 'react';
import { graphql } from 'gatsby';
import ProjectList from '../../components/projectList';
import Layout from '../../components/layout';

const TheatreMaking = ({ data }) => {
    const posts =  data.theatre_making.edges;
    return (
        <Layout>
            <ProjectList
                title="Theatre Making"
                posts={posts}
            />
        </Layout>
    );
};

export default TheatreMaking;

export const query = graphql`
query TheatreMakingQuery {
    theatre_making: allMarkdownRemark(sort: {fields: [frontmatter___date], order: ASC}, filter: {frontmatter: {categories: {theatre_making: {eq: true}}}}) {
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