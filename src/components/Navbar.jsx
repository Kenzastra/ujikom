import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar has-background-warning" role="navigation" aria-label="main navigation">
          <div className="navbar-brand"/>
            <a className="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
            </a>
        </nav>
    </div>
  )
}

export default Navbar