module.exports = {
  siteMetadata: {
    title: `Nerds Against Corona`,
    description: `Nerd-powered mini-hackathons om hulp en ondersteuning te bieden aan diegene die het nodig hebben!`,
    author: `@yoeran`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nerds-against-corona`,
        short_name: `nerds-against-corona`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4a0059`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
