import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import config from '../../data/SiteConfig'

export default (props) => (
    <div className="navigation-wrapper"> 
    <div className="hiwords">
        <div className="text-wrapper">
            Hello, I`m Simon, full-stack software engineer <span role="img" aria-label="wip">⛏️</span>, working on <a href={config.github} target="_blank" rel="noopener noreferrer">open-source</a> and writing about my vision to web-development.<span role="img" aria-label="paper">🧾</span>
        </div>
    </div>
    <div className="navigation">
        <StaticQuery
            query={graphql`
            query TagsList {
                allMarkdownRemark {
                distinct(field: frontmatter___tags)
                }
            }
            `} 
            render={data => (
                <div className="navigation-menu">
                    <pre>[</pre>
                    <pre> {'{'}</pre>
                    <pre>   <span className="tags-list-header">tags</span>: [</pre>
                    {data.allMarkdownRemark.distinct
                    .map(tag => (
                    <pre>      <span className="navigation-menu-tag" key={tag}>"{tag}",</span></pre>
                    ))}
                    <pre>      ],</pre>
                    <pre> {'}'},</pre>
                </div>
            )}
        />
        <div className="navigation-menu">
            {props.pages.map(page => (
                <div className="page-link" key={page.name}>
                    <Link to={page.link} key={page.name}>{page.name}</Link>
                </div>
            ))}
        </div>
    </div>
    <div className="newsletter">
        <div className="text-wrapper">
            You can get materials directly from me by email. <span role="img" aria-label="mailbox">📬</span> 
            I`ll never send you a spam. <span role="img" aria-label="letter">📨</span> Subscribe to newsletter.
        </div>
    </div>
    </div>
)

