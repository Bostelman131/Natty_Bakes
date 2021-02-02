import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { FaFileExcel } from 'react-icons/fa';
import { IoIosArrowDroprightCircle, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IconContext } from 'react-icons/lib';
import useInterval from 'useInterval'
import { 
    BodySec, BodyContainer, InfoRow, InfoColumn, TextWrapper,
    TopLine, Heading, Subtitle, 
    ImgWrapper, Img, ImageTag,
    ImageBlock, ArrowBlock, BackArrowWrapper, ForwardArrowWrapper, 
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
    menuTag,
    start,
    ProductData
}) => {
    let [ changeInterval ] = useState()
    const [ imageCount, setImage ] = useState(0);
    const sliderPhotoCount = ProductData.length;
    const [ hover, setHover ] = useState(false);
    const [ click, setClick ] = useState(false);
    const intervalDelay = 5000;
    const arrowTimeout = 3000;

    const handleBackClick = () => {
        (imageCount >= 1) ? setImage(imageCount-1) : setImage(sliderPhotoCount-1);
    }
    const handleForwardClick = () => {
        (imageCount < sliderPhotoCount-1) ? setImage(imageCount+1) : setImage(0);
    }
    const handleHover = () => setHover(true);
    const handleLeave = () => setHover(false);
    const handleClick = () => {
        setClick(true);
        changeInterval(null);
        setTimeout(()=>{setClick(false); changeInterval(intervalDelay)}, arrowTimeout);
    };

    changeInterval = useInterval(() => { handleForwardClick() }, intervalDelay);

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
                                        {menuTag}
                                    </MenuText>
                                </MenuLink>
                            </TextWrapper>
                        </InfoColumn>


                        <InfoColumn>
                            <ImageBlock 
                                onMouseEnter={handleHover} 
                                onMouseLeave={handleLeave}
                                onClick={handleClick}
                                >

                                { hover || click ? (
                                <ArrowBlock>
                                <BackArrowWrapper onClick={handleBackClick}>
                                    <IoIosArrowBack/>
                                </BackArrowWrapper>
                                </ArrowBlock>
                                ): false}

                                    {ProductData.map((product, index) => {
                                        return(
                                        <ImgWrapper start={start} shown={index == imageCount ? true : false} key={index}>
                                            <Img src={product.img} alt={product.alt} />
                                            <ImageTag primaryColor={primaryColor}>
                                                {product.tag}
                                            </ImageTag> 
                                        </ImgWrapper>                               
                                        );
                                    })
                                    }
                                                
                                

                                { hover || click ? (
                                <ArrowBlock>
                                <ForwardArrowWrapper onClick={handleForwardClick}>
                                    <IoIosArrowForward/>
                                </ForwardArrowWrapper>
                                </ArrowBlock>
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