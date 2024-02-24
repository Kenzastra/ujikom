import React from 'react'

const Navbar = () => {
  return (
    <div className='is-fullwidth'>
        <nav className="navbar has-background-info is-fullwidth is-justify-content-space-between" style={{overflow: "auto"}} role="navigation" aria-label="main navigation">
            <a className="navbar-item" href="https://bulma.io">
              <p className='is-size-3 has-text-weight-bold'>KKASIR</p>
            </a>
            <a className="navbar-item">
              <p className='is-size-6'>Log Out</p>
            </a>
        </nav>
    </div>
    
  )
}

export default Navbar