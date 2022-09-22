import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light" id='navbar'>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">LOGO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav" id='navi'>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Prices</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Book
                           </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">New Booking</a></li>
                                <li><a className="dropdown-item" href="#">Duplicate Booking</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tracking</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Schedules</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Logistics Solutions</a>
                        </li>
                    </ul>


                    <ul className="navbar-nav" id='navii'>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                EN
                           </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">English</a></li>
                                <li><a className="dropdown-item" href="#">Espanol</a></li>
                                <li><a className="dropdown-item" href="#">Francais</a></li>
                                <li><a className="dropdown-item" href="#">Deutsch</a></li>
                                <li><a className="dropdown-item" href="#">Italiano</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Icon</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#">Icon</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar