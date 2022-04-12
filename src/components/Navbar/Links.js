import {NavLink, NavMenu} from './NavBarElement';

const Links = () => {
    return (
        <NavMenu>
            <NavLink to="/" activeStyle>Home</NavLink>
            <NavLink to="/" activeStyle>About</NavLink>
            <NavLink to="/" activeStyle>Projects</NavLink>
            <NavLink to="/Resume" activeStyle>Resume</NavLink>
        </NavMenu>
    );
}

export default Links;