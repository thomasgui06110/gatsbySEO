/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby Bootstrap",
    description: "This is the description of our website",
    keywords: "Gatsby, wordpress",
    image: '/static/gatsby.jpg',
    url: 'https://www.gatsbyjs.org'

  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    { resolve: `gatsby-transformer-remark` },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `gallery.planethoster.world/gallery`,
        protocol: `https`,
        hostingWPCOM: false
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Bootstrap`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about-us/`, `/projects/*`],
      },
    },
  ]
};
