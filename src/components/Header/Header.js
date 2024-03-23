import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/' style={{ fontFamily: "monospace" }}>Bill Management System</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <img src="./menu.png" width='30px' alt="" />
          </button>

          <div className="collapse navbar-collapse left-head" id="navbarNavAltMarkup">
            <div className="navbar-nav float-end">
              <Link className="nav  list p-1" aria-current="page" to='/custom' >Customer List</Link> &nbsp; &nbsp; &nbsp; &nbsp;
              <Link className="nav  list p-1" to='/bill'>Bill Generator</Link>
            </div>
          </div>
        </div>
      </nav>




    </>
  )
}

export default Header
