import React from 'react';
import { Flower3 } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar sticky-top navbar-dark bg-dark">
                <div className="container-md">
                    <div className="navbar-brand">
                        <Flower3 color="white" size={48} />
                        <Link className="nav-item" to='/'>home</Link>
                        <Link className="nav-item" to='/game'>game</Link>
                        <Link className="nav-item" to='/about'>about</Link>
                        <Link className="nav-item" to='/contact'>contact</Link>
                    </div>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>

    )
}
