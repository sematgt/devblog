import React from "react"
import { Helmet } from "react-helmet"
import config from "../../data/SiteConfig"
import Navigation from "../components/navigation"
import { Link } from "gatsby"

export default function Template ({
    data,
}) {
    const { markdownRemark: post } = data
    return (
        <div className="blog-post-container">
            <Helmet title={`${config.siteTitle} - ${post.frontmatter.title}`} />
            <Link to="/">Main page <span role="img" aria-label="home">🏡</span></Link>
            <Navigation pages={config.menuLinks} />
            <div className="blog-post">
                <h1>{post.frontmatter.title}</h1>
                <div 
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
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
