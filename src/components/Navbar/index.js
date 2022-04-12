import React from 'react'
import {Nav, NavMenu, NavBtn, NavBtnLink, MobileNavMenu, HomeIcon} from './NavBarElement';
import MobileNavigation from './mobileNavigation';
import Navigation from './Navigation';

const Navbar = () => {
  return (
    <>
        <Nav>
            <HomeIcon to="/" style={{fontSize:'50px'}}>HS</HomeIcon>
            <NavMenu>
              <Navigation />
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/">Home</NavBtnLink>
            </NavBtn>
        </Nav>
        <nav style={{zIndex:'49'}}>
          <MobileNavMenu>
            <MobileNavigation />
          </MobileNavMenu>
        </nav>
    </>
  );
};

export default Navbar;