import React from 'react'
import { NavbarContainer, BottomListContainer, IconDetails, NavbarImageContainer, BottomDetails, NavbarTitle, NavLogo, DetailsContainer, ArrowContainer, IconWrapper, Arrow, TopDetails, ListItem, DetailsList, DetailsHeading, OfferDetails, ListItemSpan } from './SingleOfferDetails.elements'

import offerJSONData from '../../../../mct-offer.json';
const example = offerJSONData[0];

const SingleOfferDetails = ({ offer }) => {
    // console.log(offer);

    const { title, icon, details } = offer;

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
                
                    <IconDetails>
                    <ArrowContainer>
                    <Arrow></Arrow>
                </ArrowContainer>
                        <IconWrapper>
                            <img src={icon} alt="offer-icon" />
                        </IconWrapper>
                        <DetailsHeading>{title}</DetailsHeading>
                    </IconDetails>
                    
                </TopDetails>
                <BottomListContainer>
                        <DetailsList>
                        {details.map((offerDetail, i) => (
                            <ListItem key={i}>
                                <ListItemSpan>{offerDetail}</ListItemSpan>
                            </ListItem>
                            ))}
                        </DetailsList>
                    </BottomListContainer>
                
            </DetailsContainer>
        </OfferDetails>
    )
}

export default SingleOfferDetails
