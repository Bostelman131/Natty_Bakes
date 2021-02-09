import React from 'react';
import { FooterContainer} from './Footer.elements';
import { IconContext } from 'react-icons/lib';


export default function Footer() {
    return (
        <React.Fragment>
            <IconContext.Provider value={{color: 'white'}} >
                    <FooterContainer>
                        Footer Text
                    </FooterContainer>
            </IconContext.Provider>
        </React.Fragment>
    )
}
