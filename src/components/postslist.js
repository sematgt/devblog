import React from 'react'
import { Link } from "gatsby"

export default (props) => (
    <div className="blog-posts">
    {   
        props.filtered === true &&
        <div className="filtered">
            <Link to="/"><span role="img" aria-label="back">🔙 </span>All tags</Link>
            <div>Posts on {props.posts["0"].node.frontmatter.tags}<span role="img" aria-label="arrow">⤵</span></div>
        </div>
    }
            {props.posts
                .filter(post => post.node.frontmatter.title.length > 0)
                .map(({ node: post }) => {
          return (
            <React.Fragment key={post.id}>
            <Link className="postlink" to={post.frontmatter.path} key={post.id}>
            <div className="post-preview">
                <div className="post-preview-header-wrapper">
                    <div className="post-preview-header">
                        {post.frontmatter.title} <small>{post.frontmatter.readtime} mins read</small>
                    </div>
                    <div className="post-preview-tags" data-tag={post.frontmatter.tags}>
                        <p>{"{"}{post.frontmatter.tags}{"}"}</p>
                    </div>
                </div>
                <div className="post-preview-subtitle">
                  {post.frontmatter.subtitle}
                </div>
                 <div className="divider"></div>
            </div>
            </Link>
            </React.Fragment>
          )
        })
            }
    </div>
)


