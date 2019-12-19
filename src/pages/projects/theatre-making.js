import React from 'react';
import { graphql } from 'gatsby';
import ProjectList from '../../components/projectList';
import Layout from '../../components/layout';
import CategorySelector from '../../components/categorySelector';
import { PropTypes } from 'prop-types';

const TheatreMaking = ({ data }) => {
  const posts =  data.theatre_making.edges;
  return (
    <Layout>
      <ProjectList
        title="Theatre Making"
        posts={posts}
      />
      <CategorySelector
        page="Theatre Making"
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

TheatreMaking.propTypes = {
  data: PropTypes.node,
};