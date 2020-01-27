import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import config from "../../data/SiteConfig"
import Postslist from "../components/postslist"

export default function Index({data}) {
    const { edges: posts } = data.allMarkdownRemark
    return (
        <Layout>
        <Helmet title={`${config.siteTitle}`} />
        <Postslist posts={posts} />
    </Layout>
    )
        }

export const pageQuery = graphql`
query IndexQuery {
  allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, filter: {frontmatter: {template: {eq: "blogpost"}}}) {
    edges {
      node {
        frontmatter {
          title
          tags
          subtitle
          readtime
          path
          date(formatString: "YYYY-MM-DD")
        }
      id
      }
    }
  }
}
`
