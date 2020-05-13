import React from "react"
import config from "../../data/SiteConfig"
import Layout from "../components/layout"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"


export default function Template({ data }) {
  const { markdownRemark: post } = data
  if (post.frontmatter.postImage) {var featuredImage = post.frontmatter.postImage.url.childImageSharp.fluid}
  return (
    <div className="blog-post-container">
      <Helmet title={`${post.frontmatter.title} - ${config.siteTitle} `} />
      <SEO />
      <Layout sidebar="off">
        <div className="blog-post">
          <Link to="/">
          <span className="screen-reader-text">Link to main page</span>
            Main page{" "}
            <span role="img" aria-label="home">
              🏡
            </span>
          </Link>
          <div className="blog-heading">
            <h1>{post.frontmatter.title}</h1>
            <div className="post-subtitle">{post.frontmatter.subtitle}</div>
            <div className="post-timestring">
              <div>
                <small>Posted on {post.frontmatter.date} {post.frontmatter.edited && <span>Edited on {post.frontmatter.edited.slice(0,10)}</span>}</small>
              </div>
              <div>
                <small><i>{post.frontmatter.readtime} mins read</i></small>
              </div>
            </div>
            <hr />
          </div>
          {
            post.frontmatter.postImage &&
            <figure>
              <Img fluid={featuredImage} />
              <figcaption>
                Photo by <a href={post.frontmatter.postImage.creds.author.url} id="author" target="_blank" rel="noopener noreferrer">{post.frontmatter.postImage.creds.author.name}</a> on <a href={post.frontmatter.postImage.creds.source.url} id="source" target="_blank" rel="noopener noreferrer">{post.frontmatter.postImage.creds.source.name}</a>
              </figcaption>
            </figure>
          }
          { 
            post.frontmatter.tableOfContents === true &&
            <>
            <h2>Table of contents</h2>
            <div dangerouslySetInnerHTML={{__html: post.tableOfContents }} className="table-of-contents"/>
            </>
          }
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <Footer />
        </div>
      </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      tableOfContents(
        absolute: true
        pathToSlugField: "frontmatter.path"
        maxDepth: 2
      )
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        title
        subtitle
        tags
        readtime
        edited
        tableOfContents
        postImage {
          alt
          creds {
            author {
              name
              url
            }
            source {
              name
              url
            }
          }
          url {
            childImageSharp {
              fluid(maxWidth: 1440) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
