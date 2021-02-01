import styled from 'styled-components';
import { Container } from 'GlobalStyles';
import { Link } from 'react-router-dom';

export const PhotoBodySec = styled.div`
    padding: 120px 0px;

    @media screen and (max-width: 960px) {
        padding: 50px 0px;
    }
`;

export const PhotoBodyContainer = styled(Container)`
    display: flex;
    font-family: var(--BodyTextStyle);
    justify-content: space-between;
    flex-wrap: wrap;

    ${Container};

    @media screen and (max-width: 960px) {
        display: ${({AdditionalPhotos}) => (AdditionalPhotos ? 'none' : 'flex')};
    }
`;

export const PhotoBodyImage = styled.img`
    max-width: 24%;
    margin-bottom:20px;

    @media screen and (max-width: 960px) {
        max-width: 49%;
    }

    &:hover {
        opacity: 0.7; 
    }
`;
