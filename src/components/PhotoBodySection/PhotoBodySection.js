import React, { useState } from 'react';

import { PhotoBodySec, PhotoBodyContainer,PhotoBodyImage, AdditionalPhotoWrapper } from './PhotoBodySection.elements';

const PhotoBodySection = ({ 
    img1, alt1,
    img2, alt2,
    img3, alt3,
    img4, alt4,
    img5, alt5,
    img6, alt6,
    img7, alt7,
    img8, alt8
}) => {

    return(
        <React.Fragment>
            <PhotoBodySec>

                <PhotoBodyContainer>
                    <PhotoBodyImage src={img1} alt={alt1}/>
                    <PhotoBodyImage src={img2} alt={alt2}/>
                    <PhotoBodyImage src={img3} alt={alt3}/>
                    <PhotoBodyImage src={img4} alt={alt4}/>
                </PhotoBodyContainer>
                <PhotoBodyContainer AdditionalPhotos = {true}>
                    <PhotoBodyImage src={img5} alt={alt5}/>
                    <PhotoBodyImage src={img6} alt={alt6}/>
                    <PhotoBodyImage src={img7} alt={alt7}/>
                    <PhotoBodyImage src={img8} alt={alt8}/>
                </PhotoBodyContainer>

            </PhotoBodySec>
        </React.Fragment>
    );
};

export default PhotoBodySection;