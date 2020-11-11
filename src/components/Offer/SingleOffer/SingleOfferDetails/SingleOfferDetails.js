import React from 'react'
import { NavbarContainer, NavbarImageContainer, NavbarTitle, NavLogo, DetailsContainer, ArrowContainer, IconWrapper, Arrow, TopDetails, ListItem, DetailsList, DetailsHeading, OfferDetails, ListItemSpan } from './SingleOfferDetails.elements'

import offerJSONData from '../../../../mct-offer.json';
const example = offerJSONData[0];

const SingleOfferDetails = (props) => {
    return (
        <OfferDetails>
            <NavbarContainer>
                <NavbarImageContainer>
                    <NavLogo src={'../../assets/icons/mct-logo.svg'}></NavLogo>
                </NavbarImageContainer>
                <NavbarTitle>Oferta</NavbarTitle>
            </NavbarContainer>
            <DetailsContainer>
                <TopDetails>
                    <ArrowContainer>
                        <Arrow></Arrow>
                    </ArrowContainer>
                    <IconWrapper>
                        <img src={example.icon} alt="offer-icon" />
                    </IconWrapper>
                    <DetailsHeading>{example.title}</DetailsHeading>
                </TopDetails>
                <DetailsList>
                    {/* <ListItem>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, doloremque?</ListItem>
                    <ListItem>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos repellat neque ipsum dolorem esse impedit.</ListItem>
                    <ListItem>Lorem ipsum dolor sit amet.</ListItem>
                    <ListItem>Lorem ipsum dolor sit amet.</ListItem>
                    <ListItem>Lorem ipsum dolor sit amet.</ListItem>
                    <ListItem>Lorem ipsum dolor sit amet.</ListItem>
                    <ListItem>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos repellat neque ipsum dolorem esse impedit.</ListItem>
                    <ListItem>Lorem ipsum dolor sit amet.</ListItem> */}
                    
                    {example.details.map((offerDetail) => (
                        <ListItem><ListItemSpan>{offerDetail}</ListItemSpan></ListItem>
                    ))}
                </DetailsList>
            </DetailsContainer>
        </OfferDetails>
    )
}

export default SingleOfferDetails
