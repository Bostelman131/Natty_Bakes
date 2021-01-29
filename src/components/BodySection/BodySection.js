import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { BodySec, BodyContainer, InfoRow, InfoColumn, TextWrapper } from './BodySection.element'

const BodySection = ({ lightBg, primaryColor, imgStart }) => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return(
        <React.Fragment>
            <IconContext.Provider value={{color: 'white'}} >
                <BodySec lightBg={lightBg} primaryColor={primaryColor}>
                <BodyContainer>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <subtitle lightTextDesc={lightTextDesc}>{description}</subtitle>
                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                </BodyContainer>
                </BodySec>
            </IconContext.Provider>
        </React.Fragment>
    );
};

export default BodySection;