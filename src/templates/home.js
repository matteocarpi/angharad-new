import React, { useState } from "react"
import Layout from "../components/layout"
import { graphql, Link } from 'gatsby';
import styles from '../styles/Home.module.scss';
import PostPreview from '../components/postPreview';

export default ({data}, props) => {
  const currentPosts = data.currentWork.edges;
  const [displayCategories, setDisplayCategories] = useState(false);
  return (
    <Layout>
      <div style={{
        backgroundImage: `url(${data.homeData.edges[0].node.frontmatter.home_picture})`,
      }}
      className={styles.titleSlide}
      >
        <div className={styles.title}>
          <h1>Angharad Matthews</h1>
          <h2>Performer - Designer - Theatre Maker</h2>
        </div>

      </div>

      <section className={styles.currentWork}>
        <h1>Current Work</h1>
        <section className={styles.recentPosts}>
          {currentPosts.map((post) => {
            return (
              <PostPreview
                image={post.node.frontmatter.main_picture}
                title={post.node.frontmatter.title}
                excerpt={post.node.excerpt}
              />
            )
          })}
        </section>
      </section>
      
      <section>

        <button onClick={() => setDisplayCategories(!displayCategories)}>
          <h3>{!displayCategories ? 'MORE PROJECTS...' : 'LESS PROJECTS...'}</h3>
        </button>
        
        <section>
          <div className={styles.verticalLine}/>

          <div className={styles.options}>
            <Link 
              to="/projects/performance"
              className={styles.bigButton}
            >
            Performance
            </Link>

            <Link 
              to="/projects/design"
              className={styles.bigButton}
            >
            Design
            </Link>

            <Link 
              to="/projects/theatre-making"
              className={styles.bigButton}
            >
            Theatre Making
            </Link>
          </div>
        </section>

      </section>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    homeData: allMarkdownRemark(filter: {fields: {slug: {eq: "/"}}}) {
      edges {
        node {
          frontmatter {
            home_picture
          }
        }
      }
    }
    currentWork: allMarkdownRemark(sort: {fields: [frontmatter___date], order: ASC}, limit: 3, filter: {frontmatter: {current_work: {eq: true}}}) {
    edges {
      node {
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
        excerpt(pruneLength: 200)
        internal {
          content
        }
      }
    }
  }
  }
`
