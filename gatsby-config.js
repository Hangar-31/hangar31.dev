module.exports = {
  siteMetadata: {
    title: "Hangar 31",
    description: "",
    author: "Hangar 31 LLC",
    siteUrl: "https://hangar31testing.netlify.com/"
  },
  plugins: [
    // Images Folder Sourcing
    // File sourcing into Gatsby for use with Gatsby Image and Filesystem API
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/assets`
      }
    },
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
        name: "Hangar 31",
        short_name: "Hangar 31",
        start_url: "/",
        background_color: "#0499D4",
        theme_color: "#ffffff",
        display: "minimal-ui",
        icon: "src/images/hangar-31-logo-black.png"
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
            variants: [`bold`, `regular`, `light`]
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
            resolve: `gatsby-remark-relative-images`
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800
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

    // Netlify
    "gatsby-plugin-netlify",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-netlify-cache",

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
    "gatsby-plugin-eslint",

    // Remove the trailing slashes from pathing
    "gatsby-plugin-remove-trailing-slashes",

    // Google Analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-127004091-1"
      }
    }
  ]
};
