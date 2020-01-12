import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import config from "../../data/SiteConfig"

export default function Index({data}) {
    console.log(data.allMarkdownRemark)
    const { edges: posts } = data.allMarkdownRemark
    return (
        <Layout>
        <Helmet title={`${config.siteTitle}`} />
        <div className="blog-posts">
            {posts
                .filter(post => post.node.frontmatter.title.length > 0)
                .map(({ node: post }) => {
          return (
            <div className="blog-post-preview" key={post.id}>
              <h1>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h1>
              <span><small>{post.frontmatter.readtime} mins read</small></span>
              <p>{post.frontmatter.subtitle}</p>
              <h2>{post.frontmatter.date}</h2>
              <em>{"{"}{post.frontmatter.tags}{"}"}</em>
            </div>
          )
        })
            }
        </div>
    </Layout>
    )
        }

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            path
            subtitle
            readtime
            tags
          }
        }
      }
    }
  }
`
