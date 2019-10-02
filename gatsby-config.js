module.exports = {
  siteMetadata: {
    title: "[]",
    description: "[]",
    author: "[]",
    siteurl: "[]",
    social: [
      {
        name: "facebook",
        url: "[]"
      }
    ]
  },
  plugins: [
    // Images Folder Sourcing
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    // Blog Folder Sourcing
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "static-files",
        path: `${__dirname}/static`
      }
    },
    // Creates a manifest for the website
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "[]",
        short_name: "[]",
        start_url: "/",
        background_color: "[]",
        theme_color: "[]",
        display: "minimal-ui"
        // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      }
    },
    // Loads web fonts from Google as specified
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: `Rajdhani`,
            subsets: [`latin`],
            variants: [`bold`]
          },
          {
            family: `Open Sans`,
            subsets: [`latin`],
            variants: [`regular`]
          }
        ]
      }
    },
    // Makes field "markdownRemark" queryable
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000
            }
          }
        ]
      }
    },
    // Transition Animation Link Component
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/layout.js`)
      }
    },

    // Emotion plugin for Gatsby
    `gatsby-plugin-emotion`,

    // Netlify CMS
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-netlify",

    // Robots TXT
    "gatsby-plugin-robots-txt",

    // Creates a Service Worker for offline use
    "gatsby-plugin-offline",

    // Allows the use of react-helmet within Gatsby
    "gatsby-plugin-react-helmet",

    // Creates ImageSharp nodes for image manipulation within GraphQL queries
    "gatsby-transformer-sharp",

    // Gives additional image processing functions
    "gatsby-plugin-sharp",

    // Gatsby Plugin for linting -- Using AirBNB
    "gatsby-plugin-eslint"
  ]
};
