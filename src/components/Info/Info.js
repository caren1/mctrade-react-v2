import React from 'react'
import './Info.elements'

import { InfoContainer, InfoHeading, InfoSubheading, TextContainer } from './Info.elements'


const Info = ({ title, text, subtext }) => {

    return (
        <InfoContainer>
            <TextContainer>
                <InfoHeading>{title}</InfoHeading>
                <InfoSubheading>{text}</InfoSubheading>
                <InfoSubheading>{subtext}</InfoSubheading>
            </TextContainer>  
        </InfoContainer>
    )
}

export default Info
