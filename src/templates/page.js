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
    return (
        <div className="blog-page-container">
            <Helmet title={`${page.frontmatter.title} - ${config.siteTitle}`} />
            <SEO />
            <Layout sidebar="off">
              <div className="blog-page">
                  <Link to="/">Main page <span role="img" aria-label="home">🏡</span></Link>
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
  }
`