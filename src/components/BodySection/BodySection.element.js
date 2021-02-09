import styled from 'styled-components';
import {  Container } from 'GlobalStyles';
import { Link } from 'react-router-dom';


export const BodySec = styled.div`
    background: ${({ lightBg, primaryColor})  => (lightBg ? 'white': primaryColor)};
    color: ${({ lightBg, primaryColor})  => (lightBg ? primaryColor : 'white')};
    padding: 100px 0px 100px;

    @media screen and (max-width: 960px) {
        padding: 15px 0px 10px;
    }
`;

export const BodyContainer = styled(Container)`
    display: flex;
    justify-content: center;
    font-family: var(--BodyTextStyle);

    ${Container};
`;

export const InfoRow = styled.div`
    display: flex;
    align-items:center;
    max-width: 1000px;
    width: 80%;
    flex-direction: ${({imgStart }) => (imgStart ? 'row-reverse': 'row')};

    @media screen and (max-width: 960px) {
        flex-direction:column;
        flex-direction: column-reverse;
        width: 93%;
    }
`;

export const InfoColumn = styled.div`
    margin-bottom:15px;
    flex-basis: 50%;
    align-items:center;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;







export const TextWrapper = styled.div`
    padding-top: 0;
    padding-bottom: 20px;
    justify-content: flex-start;

    @media screen and (max-width: 768px) {
        padding-bottom: 10px;
    }
`;

export const TopLine = styled.div `
    color: ${({ lightTopLine, primaryColor})  => (lightTopLine ? primaryColor : 'white')};
    font-size: 1rem;
    font-family: 'Vollkorn', serif;
    line-height: 16px;
    letter-spacing: 1px;
    margin-bottom: 16px;
    align-content: flex-end;

    @media screen and (max-width: 960px) {
        display: none;
    }
`;

export const Heading = styled.h1 `
    font-size: 3rem;
    margin-bottom: 25px;
    padding-bottom: 0px;
    line-height: 1;
    border-bottom: 2px solid ${({ primaryColor }) => (primaryColor)};
    display: inline-block;
    height: 100%;
    vertical-align: bottom;
    color: ${({ lightText, primaryColor})  => (lightText ? primaryColor : 'white')};

    @media screen and (max-width: 960px) {
        margin-top: 40px;
        font-size: 1.7rem;
        margin-top: 0px;
        margin-bottom: 10px;
    }
`;

export const Subtitle = styled.p `
    font-size: 2rem;
    max-width: 95%;
    margin-bottom: 35px;
    font-size: 1rem;;
    line-height: 2;
    text-indent: 30px;
    color: ${({ lightTextDesc, primaryColor})  => (lightTextDesc ? primaryColor : 'white')};

    @media screen and (max-width: 960px) {
        margin-bottom: 20px;
    }
`;

export const MenuLink = styled(Link)`
    text-decoration:none;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    margin-left: 40px;
    font-size: 1.05rem;
    margin-bottom: 20px;
    color: var(--primaryColor);

    &:hover {
        transition: all 0.2s ease-in;
        text-decoration: underline;
    }

    @media screen and (max-width: 960px) {
        margin-left: 0px;
    }
`;

export const MenuIcon = styled.div`
    transform: translate(0%, 10%);    
    padding-right: 10px;
`;

export const MenuText = styled.p`
    color: primaryColor;
`;




export const ImageBlock = styled.div`
    display: flex;;
    align-items: center;
    justify-content: center;

    &:hover {
        
    }
`;

export const ArrowBlock = styled.div`
    font-size: 3.5rem;

    &:hover {
        transition: all 0.2s ease-in;
        font-size: 4rem;
    }
`;

export const BackArrowWrapper = styled.div`
    
    transform: translate(50%, 0%);
`;

export const ForwardArrowWrapper = styled.div`
    
    transform: translate(-50%, 0%);
`;

export const ImgWrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    display: ${({shown}) => (shown ? 'flex' : 'none')};
`;

export const Img = styled.img`
    max-width: 320px;
`;

export const ImageTag = styled.div `
    font-size: 1rem;
    background: #9F7893;
    color: white;
    padding: 5px 5px;
    transform: translate(20%, -70%);
    border-radius: 5px;
`;

