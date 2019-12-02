// eslint-disable-next-line no-undef
module.exports = {
  siteMetadata: {
    title: 'Angharad Matthews',
    description: 'Performer - Designer - Theatre Maker',
    author: 'Matteo Carpi',
  },
  plugins: [
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-responsive-image`,
    //         options: {
    //           // It's important to specify the maxWidth (in pixels) of
    //           // the content container as this plugin uses this as the
    //           // base for generating different widths of each image.
    //           maxWidth: 1024,
    //         },
    //       },
    //     ]
    //   }
    // }
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-smoothscroll',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-normalize-paths',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        // eslint-disable-next-line no-undef
        path: `${__dirname}/content/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        // eslint-disable-next-line no-undef
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        // eslint-disable-next-line no-undef
        path: `${__dirname}/uploads`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-css-modules-scss-support',
      options: {
        localIdentName: '_[hash:base64:20]',
        sassLoader: {
          // sass-loader options
          // eslint-disable-next-line no-undef
          implementation: require('dart-sass'), // switch the implementation such as dart-sass
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
