import React from 'react'
import { FooterContainer, BackToTopContainer, BackToTopLink } from './FooterComponent.elements'

import FooterInfo from './FooterInfo/FooterInfo'
import FooterContact from './FooterContact/FooterContact'

const Footer = () => {
    return (
        <FooterContainer title="contact" id="contact">
            <FooterInfo />
            <FooterContact />
            <BackToTopContainer>
                <BackToTopLink to="navbar" smooth={true} duration={500}> </BackToTopLink>
            </BackToTopContainer>
        </FooterContainer>
    )
}

export default Footer
