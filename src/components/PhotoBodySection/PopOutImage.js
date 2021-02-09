import React from 'react'
import { PopOutContainer, PopOutImg } from './PopOutImage.element.js';

const PopOutImage = ({ show, img, alt, setPopClick }) => {
    return(
        <React.Fragment>
            {show ? 
            <PopOutContainer>
                <PopOutImg src={img}/>
            </PopOutContainer> 
            : null} 
        </React.Fragment>
    );
};

export default PopOutImage;