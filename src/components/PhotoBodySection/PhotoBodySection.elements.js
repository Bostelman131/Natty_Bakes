import styled from 'styled-components';
import { Container } from 'GlobalStyles';

export const PhotoBodySec = styled.div`
    padding: 30px 0px;

    @media screen and (max-width: 960px) {

    }
`;

export const PhotoBodyContainer = styled(Container)`
    display: flex;
    font-family: var(--BodyTextStyle);
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0px 140px;
    ${Container};

    @media screen and (max-width: 960px) {
        
        padding: 0px 10px;
    }
`;

export const PhotoBodyImage = styled.img`
    max-width: 15%;
    margin-bottom:20px;
    max-height: 300px;
    border-radius: 6px;

    @media screen and (max-width: 1100px) {
        display: ${({key}) => ( key > 7 ? 'none' : 'flex')};
        max-width: 24%;
    }

    @media screen and (max-width: 960px) {
        display: ${({imageCount}) => ( (imageCount > 5) ? 'none' : 'flex')};
        max-width: 32%;
    }

    &:hover {
        opacity: 0.7; 
    }
`;
