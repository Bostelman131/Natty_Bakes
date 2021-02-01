import React, { useState } from 'react';
import { IoIosArrowDroprightCircle, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IconContext } from 'react-icons/lib';
import { 
    BodySec, BodyContainer, InfoRow, InfoColumn, TextWrapper,
    TopLine, Heading, Subtitle, 
    ImgWrapper, Img, ImageTag,
    ImageBlock, BackArrowWrapper, ForwardArrowWrapper, 
    MenuLink, MenuIcon, MenuText 
} from './BodySection.element'

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
    img0,
    alt0,
    imageTag0,
    img1,
    alt1,
    imageTag1,
    img2,
    alt2,
    imageTag2,
    img3,
    alt3,
    imageTag3,
    img4,
    alt4,
    imageTag4,
    start
}) => {

    const imageStorage = {
        0 : [img0, alt0, imageTag0],
        1 : [img1, alt1, imageTag1],
        2 : [img2, alt2, imageTag2],
        3 : [img3, alt3, imageTag3],
        4 : [img4, alt4, imageTag4],
    }

    const [imageCount, setImage] = useState(0);
    const [hover, setHover] = useState(false);

    const handleBackClick = () => (imageCount >= 1) ? setImage(imageCount-1) : setImage(4);
    const handleForwardClick = () => (imageCount <= 3) ? setImage(imageCount+1) : setImage(0);
    const handleHover = () => setHover(true);
    const handleLeave = () => setHover(false);

    return(
        <React.Fragment>
            <IconContext.Provider value={{color: primaryColor}} >
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
                                <MenuLink to='/Menu'>
                                    <MenuIcon>
                                        <IoIosArrowDroprightCircle />
                                    </MenuIcon>
                                    <MenuText primaryColor={primaryColor}>
                                        Click Here To Explore Our Menu!
                                    </MenuText>
                                </MenuLink>
                            </TextWrapper>
                        </InfoColumn>


                        <InfoColumn>
                            <ImageBlock 
                                onMouseEnter={handleHover} 
                                onMouseLeave={handleLeave}>

                                { hover ? (
                                <BackArrowWrapper onClick={handleBackClick}>
                                    <IoIosArrowBack/>
                                </BackArrowWrapper>
                                ): false}

                                <ImgWrapper start={start}>
                                    <Img src={imageStorage[imageCount][0]} alt={imageStorage[imageCount][1]} />
                                    <ImageTag primaryColor={primaryColor}>
                                        {imageStorage[imageCount][2]}
                                    </ImageTag>
                                </ImgWrapper>

                                { hover ? (
                                <ForwardArrowWrapper onClick={handleForwardClick}>
                                    <IoIosArrowForward/>
                                </ForwardArrowWrapper>
                                ): false}

                            </ImageBlock>
                        </InfoColumn>
                    </InfoRow>
                </BodyContainer>
                </BodySec>
            </IconContext.Provider>
        </React.Fragment>
    );
};

export default BodySection;