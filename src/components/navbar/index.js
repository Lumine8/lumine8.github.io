import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../navbar/logo192.png')} alt='logo' style={{height:'50px'}} />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyles>
            About
          </NavLink>
          <NavLink to='/services' activeStyles>
            Services
          </NavLink>
          <NavLink to='/contact-us' activeStyles>
            Contact Us
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;