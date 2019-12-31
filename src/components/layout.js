import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Footer from './footer';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            fontSize: '2rem',
            color: `#00000090 !important`
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `#00000090 !important`
            }}
            id="header-title"
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            color: `#0C0C0C !important`
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `#0C0C0C !important`
            }}
            id="header-inside-post"
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          backgroundColor: `white`,
          color: `#00000090`
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <h3 style={{ margin: '20px auto 0', width: '100%', textAlign: 'center'}}>Subscribe to my Newsletter</h3>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '90%',
          margin: '20px auto 0',
        }}>
          <iframe style={{ width: '100%' }} width="480" height="320" src="https://julianchristiananderson.substack.com/embed" frameborder="0" scrolling="no"></iframe>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout
