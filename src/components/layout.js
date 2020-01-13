import React from "react"
import { Link } from "gatsby"
import Navigation from "./navigation"
import config from "../../data/SiteConfig"
import "../styles/main.scss"

export default ({children}) => (
    <div className="layout">
        <div className="header"></div>
        <div className="body-wrapper">
            <Navigation pages={config.menuLinks} />
            <div className="content">{children}</div>
        </div>
    </div>
)

