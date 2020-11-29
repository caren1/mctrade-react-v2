import React from 'react'
import './Info.elements'

import { InfoContainer, InfoHeading, InfoSubheading, TextContainer } from './Info.elements'
import introBackground from '../../assets/images/intro-background.png'

const Info = ({ title, text, subtext }) => {

    return (
        <InfoContainer backgroundUrl={introBackground}>
            <TextContainer>
                <InfoHeading>{title}</InfoHeading>
                <InfoSubheading>{text}</InfoSubheading>
                <InfoSubheading>{subtext}</InfoSubheading>
            </TextContainer>  
        </InfoContainer>
    )
}

export default Info
