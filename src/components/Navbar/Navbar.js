import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import LogoSRC from 'assets/Logo.svg';
import { Nav, NavbarContainer, NavLogo, LogoIcon, LogoText, MobileIcon } from "./Navbar.elements";

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return(
        <React.Fragment>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <LogoIcon src={LogoSRC} />
                        <LogoText>
                            Natty Bakes
                        </LogoText>
                    </NavLogo>

                    <MobileIcon onClick={handleClick}>
                        { click ? <FaTimes /> : <FaBars /> } 
                    </MobileIcon>

                </NavbarContainer>
            </Nav>
        </React.Fragment>
    );
};

export default Navbar;