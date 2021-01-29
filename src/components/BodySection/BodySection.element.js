import styled from 'styled-components';
import { Container } from 'GlobalStyles';
import { Link } from 'react-router-dom';


export const BodySec = styled.div`
    background: ${({ lightBg, primaryColor})  => (lightBg ? 'white': primaryColor)};
    color: ${({ lightBg, primaryColor})  => (lightBg ? primaryColor : 'white')};
    font-size:2rem;
    padding: 160px 0;
`;

export const BodyContainer = styled(Container)`
    display: flex;
    justify-content: space-between;

    ${Container};
`;

export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items:center;
    flex-direction: ${( imgStart) => (imgStart ? 'row-reverse': 'row')};
`;

export const InfoColumn = styled.div`
    margin-bottom:15px;
    padding-right:15px;
    padding-left:15px;
    flex:1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    }
`;