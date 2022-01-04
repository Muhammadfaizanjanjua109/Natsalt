import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';
function Navbar() {
    return (
        <div className='row flex-direction-column'>
      <div className=' bg-info'>
      <div className='col-10 mx-auto'>
       <nav className="navbar navbar-expand-lg navbar-dark bg-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <NavLink  className="nav-link f" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink  className="nav-link f" aria-current="page" to="/About">About Us</NavLink>
        </li>
        <li className="nav-item">
        <NavLink  className="nav-link f" aria-current="page" to="/Services">Services Us</NavLink>
        </li>
        <li className="nav-item">
        <NavLink  className="nav-link f" aria-current="page" to="/ContactUs">Contact Us</NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
       </div>
      </div>
        </div>
    )
}

export default Navbar
