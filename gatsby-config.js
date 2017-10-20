module.exports = {
  // Note: it must *not* have a trailing slash.
  pathPrefix: `/hallingdata.no`,
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
        name: 'src',
      },
    },
    {
      resolve: 'gatsby-plugin-material-ui'
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-108385655-1',
      },
    },
  ],
}
