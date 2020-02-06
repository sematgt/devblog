import React from "react"
import { Link } from "gatsby"

export default function Footer () {
    return(
            <div className="footer">
              <hr />
              <div className="links">
                  <div className="gotomainpage">
                    <Link to="/"><span role="img" aria-label="wip">🔙</span>Go to main page</Link>
                  </div>
                  <div className="kofi">
                    <span><span role="img" aria-label="wip">☕</span>Buy author </span>      
                    <a href="https://ko-fi.com/simonb" id="name" target="_blank" rel="noopener noreferrer">a cup of tea</a>
                  </div>
              </div>
            </div>

    )
}