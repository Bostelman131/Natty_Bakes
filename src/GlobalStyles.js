import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;

        --NavHeight: 60px;
        --MenuItemHeight: 100px;
        --PrimaryColor: #9F7893;
        --HeaderTextStyle: 'Satisfy', cursive;
        --BodyTextStyle: 'Vollkorn', serif;

    }
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1800px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;






export default GlobalStyle;