import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.tital}</a>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link "  href="/product">Product</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="/about">{props.about}</a>
                    </li> */}

                </ul>
                <div className={`form-check form-switch text-${props.mode==='dark'? 'light' : 'dark'}`}>
                    <input className="form-check-input mx-2" onClick={props.toggleMode} type="checkbox" role="switch" id="switchdark"/>
                    <label className="form-check-label me-2" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                </div>
                <form className="d-flex" role="search">
                    <input className="form-control me-2"  type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>

                </div>

            </div>
            </nav>
    </div>
  )
}

Navbar.propTypes = {
    tital: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
  }

Navbar.defaultProps = {
    tital: 'Haji Traders',
    about: 'About us'
  };
