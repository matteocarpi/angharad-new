import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import universal from '../styles/Universal.module.scss';
import styles from '../styles/Home.module.scss';
import ProjectList from '../components/projectList';
import PropTypes from 'prop-types';
import CategorySelector from '../components/categorySelector';

const Home = ({ data }) => {
  const posts = data.currentWork.edges;

  return (
    <Layout>
      <div style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.50) 3%, rgba(0,0,0,0) 100%), url(${data.homeData.edges[0].node.frontmatter.home_picture.childImageSharp.fluid.src})`,
      }}
      className={styles.titleSlide}
      >
        <div className={styles.title}>
          <h1 className={universal.white}>Angharad Matthews</h1>
          <h4 className={universal.white}>Performer - Designer - Theatre Maker</h4>
        </div>

      </div>
        
      <ProjectList
        title="Current Work"
        posts={posts}
      />
      
      <CategorySelector
        page="Home"
      />
    </Layout>
  );
};

export default Home;

export const query = graphql`
  query HomePageQuery {
    homeData: allMarkdownRemark(filter: {fields: {slug: {eq: "/"}}}) {
      edges {
        node {
          frontmatter {
            home_picture {
              id
              childImageSharp {
                fluid(maxWidth: 1920) {
                  src
                }
              }
            }
          }
        }
      }
    }
    currentWork: allMarkdownRemark(sort: {fields: [frontmatter___date], order: ASC}, limit: 3, filter: {frontmatter: {current_work: {eq: true}}}) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          gallery {
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
        excerpt(pruneLength: 200)
        internal {
          content
        }
      }
    }
  }
  }
`;

Home.propTypes = {
  data: PropTypes.node,
};