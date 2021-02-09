import React, { useState } from 'react';
import { PhotoBodySec, PhotoBodyContainer,PhotoBodyImage } from './PhotoBodySection.elements';
import  PopOutImage from './PopOutImage';

const PhotoBodySection = ({ 
    CollagePhotos
}) => {
    const [ popOutClick, setPopClick ] = useState(false);
    const [ clickedImg, setClickedImage ] = useState(0);
    const [ clickedAlt, setClickedAlt ] = useState('');

    const handleClick = (img, alt) => {
        if (popOutClick) {
            setClickedImage(img);
            setClickedAlt(alt);
        }
        setPopClick(!popOutClick);
    }

    return(
        <React.Fragment>
            <PhotoBodySec>

            <PopOutImage show={popOutClick} img={clickedImg} alt={clickedAlt} setPopClick={setPopClick}/>

                <PhotoBodyContainer>
                {CollagePhotos.map((photo, index) => {
                            return(
                                <PhotoBodyImage src={photo.img} alt={photo.alt} onClick={handleClick.bind(photo.img, photo.alt)} imageCount={index} key={index}/>                                                    
                            );
                    })
                } 
                </PhotoBodyContainer>
            </PhotoBodySec>
        </React.Fragment>
    );
};

export default PhotoBodySection;