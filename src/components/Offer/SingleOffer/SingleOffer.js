import React from 'react'
import { SingleOfferContainer, OfferTitle, OfferLink, OfferIcon, IconWrapper } from './SingleOffer.elements'


const SingleOffer = ({ offer } ) => {

    // console.log(props.offer);
    const { id, icon, title } = offer;
    
    return (
        <SingleOfferContainer>
            <IconWrapper>
             <OfferIcon src={icon} alt="offer-icon" />
            </IconWrapper>
            <OfferTitle>{title}</OfferTitle>
             <OfferLink to={`/offers/${id}`}>więcej</OfferLink>
        </SingleOfferContainer>
    )
}

export default SingleOffer
