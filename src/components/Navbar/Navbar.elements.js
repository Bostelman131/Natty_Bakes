import styled from 'styled-components';
import { Container } from 'GlobalStyles';
import { Link } from 'react-router-dom';


// NAVBAR CONTAINER ELEMENTS

export const Nav = styled.nav `
    height: var(--NavHeight);
    background: #9F7893;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
    border-bottom: 1px solid white;
`;

export const NavbarContainer = styled(Container) `
    display: inline-flex;
    justify-content: space-between;
    height: var(--NavHeight);

    ${Container};
`;



// NAVBAR LOGO ELEMENTS

export const NavLogo = styled(Link)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: 700;
    font-family: var(--HeaderTextStyle);   
`;

export const LogoIcon = styled.img`
    margin-right: .75rem;
    height: 70%;
    fill: white;
`;





// NAVBAR MENU ITEMS

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 30%);
        font-size: 2rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    height: var(--NavHeight);


    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: var(--NavHeight);
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: #9F7893;
    }
`;

export const NavItem = styled.li`
    height: var(--NavHeight);
    border-bottom: 2px solid transparent;


    @media screen and (max-width: 960px) {
        width: 100%;
        height: var(--MenuItemHeight);

        &:hover{
            border: none;
        }
    }
`;

export const NavLinks = styled(Link)`
    font-family: var(--HeaderTextStyle);
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1rem 1.5rem;
    margin-top: 1.25rem;
    margin-bottom: 1rem;
    height: 30%;
    font-size: 1.5rem;

    &:hover {
        font-weight: 500;
        transition: all 0.1s ease;
        border-bottom: 2px solid white;
    }

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

    &:hover {
        font-size: 2.5rem;
        font-weight: 600;
        transition: all 0.3s ease;
        border-bottom: none;
    }
    }
`;

