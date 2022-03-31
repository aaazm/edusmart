import React from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import logo from "../images/logo.png"
import Model from '../component/Model'

const Header = () => {
  return(
    <header className='top-navbar'>
       <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand to="/">
      <NavLink to="/">
        <img src={logo} />
      </NavLink>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto align-items-center">
        <ul className='mb-0'>
          <li className='nav-item active'>
          <NavLink to="/" className='nav-link '>Home</NavLink>
          </li>
          <li className='nav-item'>
          <NavLink to="/about" className='nav-link'>About us</NavLink>
          </li>
          <li className='nav-item'>
          <NavLink to="/courses" className='nav-link'>Courses</NavLink>
          </li>
          <li className='nav-item'>
          <NavLink to="/blog" className='nav-link'>Blog</NavLink>
          </li>
          <li className='nav-item'>
          <NavLink to="/teacters" className='nav-link'>Teachers</NavLink>
          </li>
          <li className='nav-item'>
          <NavLink to="/contact" className='nav-link'>Contact</NavLink>
          </li>
        </ul>

        <ul className='nav navbar-nav navbar-right'>
          <li>
            {/* <NavLink to='/about' className='hover-btn-new log orange'>
              <span>Book Now</span>
            </NavLink> */}
            <Model />
          </li>
        </ul>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}

export default Header;