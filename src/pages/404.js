import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from "react-helmet"

export default function NotFound() {
    return (
        <div className="not-found-page" style={{ marginLeft: 2 + 'rem' }}>
        <Helmet title="404 page not found" />
            <h1>404 page not found</h1>
            <span>Try to begin with </span>
            <Link to="/">
                Main page{" "}
                <span role="img" aria-label="home">
                    🏡
                </span>
            </Link>
        </div>
    )
}