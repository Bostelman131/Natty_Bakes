import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { BodySec, BodyContainer, InfoRow, InfoColumn, TextWrapper,
    TopLine, Heading, Subtitle, ImgWrapper, Img } from './BodySection.element'

const BodySection = ({ 
    lightBg, 
    primaryColor, 
    imgStart, 
    lightTopLine, 
    topLine, 
    lightText, 
    headline, 
    lightTextDesc, 
    description,
    img,
    alt,
    start
}) => {

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

                                <TopLine 
                                lightTopLine={lightTopLine} 
                                primaryColor={primaryColor}>
                                    {topLine}
                                </TopLine>

                                <Heading 
                                lightText={lightText}
                                primaryColor={primaryColor}>
                                    {headline}
                                </Heading>

                                <Subtitle 
                                lightTextDesc={lightTextDesc}
                                primaryColor={primaryColor}>
                                    {description}
                                </Subtitle>

                            </TextWrapper>
                        </InfoColumn>

                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </BodyContainer>
                </BodySec>
            </IconContext.Provider>
        </React.Fragment>
    );
};

export default BodySection;