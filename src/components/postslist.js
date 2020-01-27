import React from 'react'
import { StaticQuery, Link, graphql } from "gatsby"
import config from '../../data/SiteConfig'

export default (props) => (
    <div className="blog-posts">
            {props.posts
                .filter(post => post.node.frontmatter.title.length > 0)
                .map(({ node: post }) => {
          return (
            <div className="blog-post-preview" key={post.id}>
            <Link to={post.frontmatter.path}>
              <h1>
                {post.frontmatter.title}
              </h1>
              <span><small>{post.frontmatter.readtime} mins read</small></span>
              <p>{post.frontmatter.subtitle}</p>
              <h2>{post.frontmatter.date}</h2>
              <em>{"{"}{post.frontmatter.tags}{"}"}</em>
            </Link>
            </div>
          )
        })
            }
        </div>
)


