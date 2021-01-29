import React from 'react';
import styled from 'styled-components';


export const SignButton = styled.button `
    margin-top: .5rem;
    padding: 2.5px 20px;
    border-radius: 4px;
    font-size:1.5rem;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        font-weight: 500;
        padding: 2.75px 21px;
        transition: all 0.3s ease-out;
        background: white;
        color: #9F7893;
        transition: 250ms;
        border-radius: 4px;
    }

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 1rem;
        width: 100%;
        display: table;
        font-weight: 700;
        color: #9F7893;

    &:hover {
        padding: 1.25rem;
        font-weight: 700;
        transition: all 0.3s ease-out;
        background: white;
        transition: 250ms;
        border-radius: 4px;
        }
    }
`;