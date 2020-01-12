import React from "react"
import { StaticQuery, Link } from "gatsby"

export default (props, {children}) => (
    <div className="navigation-wrapper"> 
    <div className="hiwords">Hello, I`m Simon, full-stack software engineer <span role="img">⛏</span>, working on open-source and writing about my vision to web-development.<span role="img">🧾</span></div>
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
            <p key={page.name}>{page.name}</p>
        ))}
    </div>
    <div className="content">
        {children}
    </div>
    </div>
)


// export default (props) => (
//     <div>
//     {console.log(props)}

//     </div>
// )