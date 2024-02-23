import React from 'react'

const Navbar = () => {
  return (
    <div className='is-fullwidth'>
        <nav className="navbar has-background-primary is-fullwidth" style={{overflow: "auto"}} role="navigation" aria-label="main navigation">
            <a className="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
            </a>
        </nav>
    </div>
    
  )
}

export default Navbar