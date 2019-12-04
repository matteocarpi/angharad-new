import React from 'react';
import Layout from '../components/layout';
import styles from '../styles/About.module.scss';
import { graphql } from 'gatsby';
import { PropTypes } from 'prop-types';
import Markdown from 'markdown-to-jsx';

const About = ({ data }) => {
  const file = data.aboutData.edges[0].node;
  const links = file.frontmatter.additional_links.map(link => { 
    return link;
  });
  
  return (

    <Layout>
      <div className={styles.container}>
        <div className={styles.left}>
          <div 
            className={styles.headshot} 
            style={{
              backgroundImage: `url(${file.frontmatter.headshot.childImageSharp.fluid.src})`,
            }}
          />
        </div>

        <div className={styles.right}>
          <h2>{data.site.siteMetadata.title}</h2>
          <h5>Performer - Designer - Theatre Maker</h5>
          <h3>Wales/Berlin</h3>
          <Markdown>{file.frontmatter.biography}</Markdown>
          
          <div className={styles.contacts}>

            <p><strong>Email:</strong><a href={`mailto:${file.frontmatter.email}`}> {file.frontmatter.email}</a></p>


            {links.map(link => {
              return (
                <p key={link.url}><strong>{link.name}: </strong><a href={link.url}> {link.url}</a></p>
              );
            })}

            <a className={styles.download} download="CV" target="blank" href={file.frontmatter.cv.absolutePath}>Download CV</a>
          </div>

        </div>


      </div>
    </Layout>
  );
};

export default About;

export const query = graphql`
query MyQuery {
  aboutData: allMarkdownRemark(filter: {frontmatter: {title: {eq: "About"}}}) {
    edges {
      node {
        frontmatter {
          biography
          cv {
            absolutePath
          }
          email
          headshot {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          additional_links {
            name
            url
          }
        }
      }
    }
  }
  site {
    siteMetadata {
      title
    }
  }
}
`;

About.propTypes = {
  data: PropTypes.node,
};