import styled from 'styled-components'
import { Container } from 'GlobalStyles'
import { Link } from 'react-router-dom';


export const Nav = styled.nav `
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavbarContainer = styled(Container) `
    display: flex;
    height: 80px;
    justify-content: space-between;

    ${Container}
`;

export const NavLogo = styled(Link)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;

export const LogoIcon = styled.img`
    height: 80px;
    width: 114px;
    margin: 15px;
`;

export const LogoText = styled.div`
    display: block;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;
