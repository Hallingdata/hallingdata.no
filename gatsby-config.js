module.exports = {
  siteMetadata: {
    siteUrl: `https://www.hallingdata.no`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
        name: "src",
      },
    },
    "gatsby-plugin-material-ui",
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          
          allSitePage(
            filter: {
              path: {regex: "/^((?!(kontakt-takk|404)).)*$/"},
            }
          ) {
            edges {
              node {
                path
              }
            }
          }
      }`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#673ab7`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-108385655-1",
      },
    },
    `gatsby-plugin-netlify`, // make sure to put last in the array
  ],
}
