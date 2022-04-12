import NavLinks from './MobileLinks'
import {Bars} from './NavBarElement';
import {useState} from 'react'

const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const closeMobileMenu = () => setOpen(false);

    return (
        <div>
            <Bars
                onClick={() => setOpen(!open)} 
            />
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </div>
    );
}

export default MobileNavigation;