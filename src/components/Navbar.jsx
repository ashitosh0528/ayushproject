import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <img height={60} className='ms-3 rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&s" alt="" />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse h4 justify-content-end " id="navbarNav">
    <ul className="navbar-nav gap-5">
      <li className="nav-item active">
        <Link className="nav-link" to="/Home">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Abouts">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="Service">Service</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/Career">Career</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link me-4 " to="/Contacts">Contact us</Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar