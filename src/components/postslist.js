import React from 'react'
import { Link } from "gatsby"

export default (props) => (
    <div className="blog-posts">
            {props.posts
                .filter(post => post.node.frontmatter.title.length > 0)
                .map(({ node: post }) => {
          return (
            <React.Fragment key={post.id}>
            <Link to={post.frontmatter.path} key={post.id}>
            <div className="post-preview">
                <div className="post-preview-header-wrapper">
                    <div className="post-preview-header">
                        {post.frontmatter.title}
                    </div>
                    <div className="post-preview-readtime">
                        {post.frontmatter.readtime} mins read
                    </div>
                    <div className="post-preview-tags" data-tag={post.frontmatter.tags}>
                        {"{"}{post.frontmatter.tags}{"}"}
                    </div>
                </div>
                <div className="post-preview-subtitle">
                  {post.frontmatter.subtitle}
                </div>
            </div>
            </Link>
            </React.Fragment>
          )
        })
            }
    </div>
)


