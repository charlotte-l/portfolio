const siteUrl = "https://charlottecameron.dev"

module.exports = {
  siteMetadata: {
    title: `Charlotte Cameron · Web Developer`,
    siteUrl: "https://charlottecameron.dev",
    description: `Hi! I'm Charlotte, I make websites.`,
    favicon: `/static/favicon/favicon.png`,
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
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
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
        }`,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
        }) => {
          return allPages.map(page => {
            return { ...page }
          })
        },
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          }
        },
        createLinkInHead: false
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap/sitemap-0.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-netlify`,
  ],
};
