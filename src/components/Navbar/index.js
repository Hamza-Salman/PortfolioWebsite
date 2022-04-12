import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavBarElement';

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/" style={{fontSize:'50px'}}>HS</NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/About" activeStyle>About</NavLink>
                <NavLink to="/Projects" activeStyle>Projects</NavLink>
                <NavLink to="/Resume" activeStyle>Resume</NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/">Home</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  );
};

export default Navbar;