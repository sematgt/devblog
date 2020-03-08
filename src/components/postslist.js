import React from 'react'
import { Link } from "gatsby"

export default (props) => (
    <div className="blog-posts">
    {   
        props.filtered === true &&
        <div className="filtered">
            <Link to={"/"} onClick={() => {props.handleClick()}}><span role="img" aria-label="back">🔙 </span>All tags</Link>
            <span> Posts on {props.posts["0"].node.frontmatter.tags} <span role="img" aria-label="arrow">⤵️</span></span>
        </div>
    }
            {props.posts
                .filter(post => post.node.frontmatter.title.length > 0)
                .map(({ node: post }) => {
          return (
            <React.Fragment key={post.id}>
            <Link className="postlink" to={post.frontmatter.path} key={post.id}>
            <div className="post-preview">
                <div className="post-preview-header-string">
                    <div className="post-preview-header">
                        {post.frontmatter.title} 
                    </div>
                    <div className="post-preview-readtime">
                        <div className="readtime">{post.frontmatter.readtime} mins read</div>
                    </div>
                </div>
                <div className="post-preview-subtitle-string">
                    <div className="post-preview-subtitle">
                        {post.frontmatter.subtitle}
                    </div>
                    <div className="post-preview-tags">
                        <span className="tags" data-tag={post.frontmatter.tags}>{post.frontmatter.tags}</span>
                    </div>
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


