import React from "react"
import { StaticQuery, Link } from "gatsby"

export default (props, {children}) => (
    <div className="navigation-wrapper"> 
    <div className="hiwords">Hello, I`m Simon, full-stack software engineer <span role="img" aria-label="wip">⛏️</span>, working on open-source and writing about my vision to web-development.<span role="img" aria-label="paper">🧾</span></div>
    <StaticQuery
        query={graphql`
        query TagsList {
            allMarkdownRemark {
            distinct(field: frontmatter___tags)
            }
        }
        `} 
        render={data => (
            <div className="navigation">
                <p>tags=</p>
                {data.allMarkdownRemark.distinct
                .map(tag => (
                    <p key={tag}>{tag}</p>
                ))}
            </div>
        )}
    />
    <div className="navigation">
        {props.pages.map(page => (
            <div className="pageLink">
                <Link to={page.link} key={page.name}>{page.name}</Link>
            </div>
        ))}
    </div>
    <div className="newsletter">
        You can get materials directly from me by email. <span role="img" aria-label="mailbox">📬</span> 
        I`ll never send you a spam. <span role="img" aria-label="letter">📨</span> Subscribe to newsletter.
    </div>
    <div className="content">
        {children}
    </div>
    </div>
)

