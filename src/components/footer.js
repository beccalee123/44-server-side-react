import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <header
    style={{
      background: 'olive',
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <p>
      <Link to="/" style={{
            color: `black`,
            textDecoration: `none`,
            display: "inline",
            margin: "10px 10px 10px 0px",
          }}>Home</Link>
      <Link to="/counter/" style={{
            color: `black`,
            textDecoration: `none`,
            display: "inline",
            margin: "10px 10px 10px 0px",
          }}>Counter</Link>
      </p>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
