import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import config from "../../data/SiteConfig"
import Postslist from "../components/postslist"


class Index extends React.Component {
  constructor(props, data) {
    super(props);
    this.state = {
      tag: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.filterPosts = this.filterPosts.bind(this);
  }

  handleClick(tag) {
    this.setState({
      tag: tag,
    })
  }
  
  filterPosts(tag) {
    if (!tag) return [this.props.data.allMarkdownRemark.edges, false];
    else return [this.props.data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.tags === tag), true];
  }

  render() {
    const tag = this.state.tag;
    const [ posts, filtered ] = this.filterPosts(tag);
    console.log(filtered);
    return (
      <Layout sidebar="on" handleClick={this.handleClick}>
        <Helmet title={`${config.siteTitle}`} />
        <Postslist posts={posts} filtered={filtered}/>
      </Layout>
  )
  }
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

export default Index;