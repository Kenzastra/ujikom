import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <section className="hero is-info is-fullheight">
          <p>Welcome, admin</p>
          <div className="hero-body is-align-items-start">
            
            <a href='/barang' className="box mb-0 is-flex is-justify-content-center is-align-items-center" style={{width:"250px",height:"200px"}}>
              <p>Master Data</p>
            </a>
          
            <a href="/kasir" className='box mb-0 is-flex is-justify-content-center is-align-items-center ml-5' style={{width:"250px",height:"200px"}}>
                <p>Kasir</p>
            </a>
          </div>
        </section>
    </div>
  )
}

export default Dashboard