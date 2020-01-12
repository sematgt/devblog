import React from "react"
import { Helmet } from "react-helmet"
import config from "../../data/SiteConfig"

export default function Template ({
    data,
}) {
    const { markdownRemark: page } = data
    return (
        <div className="blog-page-container">
            <Helmet title={`${config.siteTitle} - ${page.frontmatter.title}`} />
            <div className="blog-page">
                <h1>{page.frontmatter.title}</h1>
                <div 
                    className="blog-page-content"
                    dangerouslySetInnerHTML={{ __html: page.html }} />
            </div>
        </div>
    )
}

export const pageQuery = graphql`
  query BlogPageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`