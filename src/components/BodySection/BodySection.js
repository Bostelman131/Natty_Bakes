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
    img1,
    alt1,
    imageTag1,
    img2,
    alt2,
    imageTag2,
    start
}) => {

/*     const [imageCount, setImage] = useState(0);
    const [hover, setHover] = useState(false);

    const handleBackClick = () => setClick(!click);
    const handleForwardClick = () => setClick(!click);
    const handleHover = () => setClick(!click);
 */
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
                            <ImageBlock>
                                <BackArrowWrapper>
                                    <IoIosArrowBack/>
                                </BackArrowWrapper>

                                <ImgWrapper start={start}>
                                    <Img src={img1} alt={alt1} />
                                    <ImageTag primaryColor={primaryColor}>
                                        {imageTag1}
                                    </ImageTag>
                                </ImgWrapper>

                                <ForwardArrowWrapper>
                                    <IoIosArrowForward/>
                                </ForwardArrowWrapper>

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