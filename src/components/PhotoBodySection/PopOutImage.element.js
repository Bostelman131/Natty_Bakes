import styled from 'styled-components';

export const PopOutContainer = styled.div`
    background: gray;
    opacity: 0.75;
    width: 90%;
    height: 80%;
    position:fixed; 
    top: calc(50% - 40%); // half of width
    left: calc(50% - 40%); // half of height

    @media screen and (max-width: 960px) {
        right:5%;
        bottom:-10%;
        left:5%;
    }
`;


export const PopOutImg = styled.img`
    margin:auto auto;
`;