import React from "react"
import { Link } from "gatsby"
import Navigation from "./navigation"
import config from "../../data/SiteConfig"

export default ({children}) => (
    <div className="layout">
        <div className="header"></div>
        <Navigation pages={config.menuLinks} />
        {children}
    </div>
)

