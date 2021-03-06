import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import LogoSRC from 'assets/Logo.svg';
import { Nav, NavbarContainer, NavLogo, LogoIcon, MobileIcon, NavMenu, NavItem, NavLinks } from "./Navbar.elements";
import { IconContext } from 'react-icons/lib';
import { SignButton } from 'components/Button/Button'

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return(
        <React.Fragment>
            <IconContext.Provider value={{color: 'white'}} >
            <Nav>
                <NavbarContainer>


                    <NavLogo to="/">
                        <LogoIcon src={LogoSRC} />
                        Natty Bakes
                    </NavLogo>



                    <MobileIcon onClick={handleClick}>
                        { click ? <FaTimes /> : <FaBars /> } 
                    </MobileIcon>



                    <NavMenu click={click} onClick={handleClick}>
                        <NavItem>
                            <NavLinks to='/'>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/Menu'>Menu</NavLinks>
                        </NavItem>                        
                        <NavItem>
                            <NavLinks to='/AboutUs'>About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <SignButton STYLE='btn--primary' SIZE='btn-medium'>Sign In</SignButton>
                        </NavItem>
                    </NavMenu>


                </NavbarContainer>
            </Nav> 
            </IconContext.Provider>
        </React.Fragment>
    );
};

export default Navbar;