import React from 'react';
import { graphql } from 'gatsby';
import ProjectList from '../../components/projectList';
import Layout from '../../components/layout';
import CategorySelector from '../../components/categorySelector';
import { PropTypes } from 'prop-types';

const Performance = ({ data }) => {
  const posts =  data.performance.edges;
  return (
    <Layout>
      <ProjectList
        title="Performance"
        posts={posts}
      />
      <CategorySelector
        page="Performance"
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
            main_picture {
              childImageSharp {
                fluid(maxWidth: 300, maxHeight: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
`;

Performance.propTypes = {
  data: PropTypes.node,
};