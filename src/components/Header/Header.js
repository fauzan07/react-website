import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../../assets/logo.png'

function Header(props){

    return(
      <>
      <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <NavLink className="navbar-brand" to="/"><img src={logo} alt="logo"/></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
            <li className="nav-item">
              <NavLink className="nav-link p-4" activeClassName="selected" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link p-4" to="/About">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link p-4" to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link p-4" to="/contact">Contact us</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      </header>
      </>

    );

}

export default Header;
