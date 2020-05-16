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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/thumbnails`,
        name: "thumbnails",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1440,
              linkImagesToOriginal: true,
              showCaptions: ['title'],
              markdownCaptions: true
            },
          },
          `gatsby-remark-copy-linked-files`,
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
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer"
            }
          },
        ],

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
        icon: `content/thumbnails/icon.png`,
      },
    },
    "gatsby-image",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-166340209-1",
      },
    },
  ],
}
