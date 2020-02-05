import React from "react"
import config from "../../data/SiteConfig"
import Layout from '../components/layout'
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

export default function Template ({
    data,
}) {
    const { markdownRemark: post } = data
    return (
        <div className="blog-post-container">
        <Helmet title={`${config.siteTitle} - ${post.frontmatter.title}`} />        
          <Layout sidebar="off">
            <div className="blog-post">
            <Link to="/">Main page <span role="img" aria-label="home">🏡</span></Link>
                <h1>{post.frontmatter.title} <small>{post.frontmatter.readtime} mins read
                </small></h1>
                <div className="post-subtitle">
                  {post.frontmatter.subtitle}
                </div>
                {/* <hr /> */}
                <div 
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </Layout>
        </div>
    )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        title
        subtitle
        tags
        readtime
      }
    }
  }
`
