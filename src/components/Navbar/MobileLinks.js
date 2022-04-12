import {NavLink, MobileNavMenu} from './NavBarElement';

const Links = (props) => {
    return (
        <MobileNavMenu>
            <NavLink onClick={() => props.isMobile && props.closeMobileMenu()} to="/" activeStyle>Home</NavLink>
            <NavLink onClick={() => props.isMobile && props.closeMobileMenu()} to="/" activeStyle>About</NavLink>
            <NavLink onClick={() => props.isMobile && props.closeMobileMenu()} to="/" activeStyle>Projects</NavLink>
            <NavLink onClick={() => props.isMobile && props.closeMobileMenu()} to="/Resume" activeStyle>Resume</NavLink>
        </MobileNavMenu>
    );
}

export default Links;