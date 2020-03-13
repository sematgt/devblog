module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/images`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 670,
              linkImagesToOriginal: true,
              wrapperStyle: '-webkit-box-shadow: 10px 10px 19px -4px rgba(0,0,0,0.25); -moz-box-shadow: 10px 10px 19px -4px rgba(0,0,0,0.25); box-shadow: 10px 10px 19px -4px rgba(0,0,0,0.25); margin: 0 0 2rem',
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              maintainCase: false,
              removeAccents: true,
              isIconAfterHeader: false,
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              inlineCodeMarker: '>',
            }
          },
        ],

      },
    },
    {
      resolve: `gatsby-remark-autolink-headers`,
      options: {
        offsetY: `100`,
        maintainCase: false,
        removeAccents: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Simon's dev blog`,
        short_name: `Simon's dev blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#fff`,
        icon: `static/logos/favicon.ico`,
      },
    },
  ],
}
