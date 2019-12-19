import React from 'react';
import { graphql } from 'gatsby';
import ProjectList from '../../components/projectList';
import Layout from '../../components/layout';
import CategorySelector from '../../components/categorySelector';
import PropTypes from 'prop-types';

const Design = ({ data }) => {
  const posts =  data.design.edges;
  return (
    <Layout>
      <ProjectList
        title="Design"
        posts={posts}
      />
      <CategorySelector
        page="Design"
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

Design.propTypes = {
  data: PropTypes.node,
};