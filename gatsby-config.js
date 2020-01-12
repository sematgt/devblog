module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: ["gatsby-remark-prismjs", "gatsby-remark-images",],
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
  ],
}
