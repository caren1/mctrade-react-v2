import React from 'react'
import { SingleOfferContainer, OfferTitle, OfferLink, IconWrapper } from './SingleOffer.elements'

import { ReactComponent as Crane } from '../../../icons/crane.svg';


const SingleOffer = ( props ) => {

    // console.log(props.offer);
    const { id, icon, title } = props.offer;

    return (
        // <SingleOfferContainer>
        //     <OfferIcon src={icon}></OfferIcon>
        //     <OfferTitle>{title}</OfferTitle>
        //     <OfferLink onClick={onclick}>więcej</OfferLink>
        // </SingleOfferContainer>
        <SingleOfferContainer>
            <IconWrapper>
             <img src={icon} alt="offer-icon" />
             {/* <OfferIcon src={icon} alt="offer-icon"></OfferIcon> */}
            </IconWrapper>
            <OfferTitle>{title}</OfferTitle>
             <OfferLink>więcej</OfferLink>
        </SingleOfferContainer>
    )
}

export default SingleOffer
