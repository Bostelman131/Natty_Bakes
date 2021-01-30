import styled from 'styled-components';
import { Container } from 'GlobalStyles';
import { Link } from 'react-router-dom';


export const BodySec = styled.div`
    background: ${({ lightBg, primaryColor})  => (lightBg ? 'white': primaryColor)};
    color: ${({ lightBg, primaryColor})  => (lightBg ? primaryColor : 'white')};
    padding: 120px 0;
`;

export const BodyContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    font-family: var(--BodyTextStyle);

    ${Container};
`;

export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items:center;
    flex-direction: ${({imgStart }) => (imgStart ? 'row-reverse': 'row')};

    @media screen and (max-width: 960px) {
        flex-direction: 'row-reverse';
    }
`;

export const InfoColumn = styled.div`
    margin-bottom:15px;
    padding-right:15px;
    padding-left:15px;
    flex:1;
    max-width: 60%;
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

export const TopLine = styled.div `
    color: ${({ lightTopLine, primaryColor})  => (lightTopLine ? primaryColor : 'white')};
    font-size: 18px;
    font-family: 'Vollkorn', serif;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`;

export const Heading = styled.h1 `
    font-size: 48px;
    margin-bottom: 24px;
    line-height: 1.1;
    color: ${({ lightText, primaryColor})  => (lightText ? primaryColor : 'white')};
`;

export const Subtitle = styled.p `
    font-size: 1.5rem;
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ lightTextDesc, primaryColor})  => (lightTextDesc ? primaryColor : 'white')};
`;

export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
`;