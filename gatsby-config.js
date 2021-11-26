module.exports = {
  siteMetadata: {
		title: `Charlotte Cameron · Web Developer`,
    titleTemplate: '%s · Charlotte Cameron',
		description: `Hi! I'm Charlotte, I make websites.`,
    url: `https://charlotte-cameron.github.io`,
    favicon: `/static/favicon/favicon.png`,
    nav: [
      { path: '/', name: 'Home' },
      { path: '/#about', name: 'About' },
      { path: '/#process', name: 'Process' },
      { path: '/#speaking', name: 'Speaking' },
      { path: '/#contact', name: 'Contact' },
    ],
	},
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Charlotte Cameron &mdash; Web Developer`,
        short_name: `Charlotte Cameron &mdash; Web Developer`,
        start_url: `https://charlotte-cameron.github.io`,
        background_color: `#F5F7F9`,
        theme_color: `#553C9A`,
        display: `minimal-ui`,
        icon: `static/favicon/favicon.png`,
      },
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },
  ],
};
