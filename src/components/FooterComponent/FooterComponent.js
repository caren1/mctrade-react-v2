import React from 'react'
import { FooterContainer } from './FooterComponent.elements'

import FooterInfo from './FooterInfo/FooterInfo'
import FooterContact from './FooterContact/FooterContact'

const Footer = () => {
    return (
        <FooterContainer title="contact" id="contact">
            <FooterInfo />
            <FooterContact />
        </FooterContainer>
    )
}

export default Footer
