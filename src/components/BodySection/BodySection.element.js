import styled from 'styled-components';
import { Container } from 'GlobalStyles';
import { Link } from 'react-router-dom';


export const BodySec = styled.div`
    background: ${({ lightBg, primaryColor})  => (lightBg ? 'white': primaryColor)};
    color: ${({ lightBg, primaryColor})  => (lightBg ? primaryColor : 'white')};
    padding: 130px 0px 20px;

    @media screen and (max-width: 960px) {
        padding: 50px 0px 0px;
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
    font-size: 18px;
    font-family: 'Vollkorn', serif;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;

    @media screen and (max-width: 960px) {
        display: none;
    }
`;

export const Heading = styled.h1 `
    font-size: 3rem;
    margin-bottom: 30px;
    line-height: 1.1;
    text-decoration: underline;
    color: ${({ lightText, primaryColor})  => (lightText ? primaryColor : 'white')};

    @media screen and (max-width: 960px) {
        margin-top: 40px;
    }
`;

export const Subtitle = styled.p `
    font-size: 1.7rem;
    max-width: 90%;
    margin-bottom: 25px;
    font-size: 18px;
    line-height: 2;
    text-indent: 30px;
    color: ${({ lightTextDesc, primaryColor})  => (lightTextDesc ? primaryColor : 'white')};
`;

export const MenuLink = styled(Link)`
    text-decoration:none;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    margin-left: 40px;
    font-size: 1rem;
    margin-bottom: 40px;

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

export const BackArrowWrapper = styled.div`
    font-size: 2.5rem;
    transform: translate(50%, 0%);
    
    &:hover {
        font-size: 2.6rem;
    }
`;

export const ForwardArrowWrapper = styled.div`
    font-size: 2.5rem;
    transform: translate(-50%, 0%);

    &:hover {
        font-size: 2.6rem;
    }
`;

export const ImgWrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
`;

export const Img = styled.img`
    max-height: 300px;
`;

export const ImageTag = styled.div `
    font-size: 1rem;
    background: #9F7893;
    color: white;
    padding: 5px 5px;
    transform: translate(20%, -70%);
    border-radius: 5px;
`;

