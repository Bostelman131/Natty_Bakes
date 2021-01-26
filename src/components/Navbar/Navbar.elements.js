import styled from 'styled-components';
import { Container } from 'GlobalStyles';
import { Link } from 'react-router-dom';


// NAVBAR CONTAINER ELEMENTS

export const Nav = styled.nav `
    height: var(--NavHeight);
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavbarContainer = styled(Container) `
    ${Container}

    display: flex;
    justify-content: space-between;
    background: red;
`;



// NAVBAR LOGO ELEMENTS

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
    margin-right: 0.5rem;
    height: var(--NavHeight);
    background: green;
`;





// NAVBAR MENU ITEMS

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: var(--NavHeight);
        left: ${({ click }) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: black;
    }
`;

export const NavItem = styled.li`
    height: var(--MenuItemHeight);
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2px solid purple;
    }

    @media screen and (max-width: 960px) {
        width: 100%;

        &:hover{
            border: none;
        }
    }
`;

export const NavLinks = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: purple;
            transition: all 0.3s ease;
        }
    }
`;

