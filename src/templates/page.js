import React from "react"
import config from "../../data/SiteConfig"
import Layout from '../components/layout'
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"

export default function Template ({
    data,
}) {
    const { markdownRemark: page } = data
    const iconNode = data.file
    return (
        <div className="blog-page-container">
            <Helmet title={`${page.frontmatter.title} - ${config.siteTitle}`} />
            <SEO iconNode={iconNode}/>
            <Layout sidebar="off">
              <div className="blog-page">
                  <Link to="/"><span className="screen-reader-text">Link to main page</span>Main page <span role="img" aria-label="home">🏡</span></Link>
                  <h1>{page.frontmatter.title}</h1>
                  <div 
                      className="blog-page-content"
                      dangerouslySetInnerHTML={{ __html: page.html }} />
              </div>
            </Layout>
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
    file(relativePath: {eq: "icon.png"}) {
      childImageSharp {
        fixed(height: 150, width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`