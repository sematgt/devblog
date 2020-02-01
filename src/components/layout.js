import React from "react"
import Navigation from "./navigation"
import config from "../../data/SiteConfig"
import "../styles/main.scss"
import { Link } from "gatsby"

export default function Layout(props) {
    const sidebar = props.sidebar;
    if (sidebar === "on") {
        return (
            <div className="layout">
                <div className="header"></div>
                <div className="body-wrapper">
                    <Navigation pages={config.menuLinks} />
                    <div className="content">{props.children}</div>
                </div>
            </div>
            )                
                }
        else { return (
            <div className="layout">
                <div className="header"></div>
                <div className="body-wrapper">
                    <div className="content">
                        {props.children}
                        </div>
                </div>
            </div>
        )
        }
    }

