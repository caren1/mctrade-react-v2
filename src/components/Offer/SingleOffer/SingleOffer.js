import React from 'react'
import { SingleOfferContainer, OfferIcon, OfferTitle, OfferLink, Test } from './SingleOffer.elements'

const SingleOffer = ({ icon, title, onClick }) => {
    return (
        // <SingleOfferContainer>
        //     <OfferIcon src={icon}></OfferIcon>
        //     <OfferTitle>{title}</OfferTitle>
        //     <OfferLink onClick={onclick}>więcej</OfferLink>
        // </SingleOfferContainer>
        <SingleOfferContainer>
             {/* <OfferIcon></OfferIcon> */}
             <Test>X</Test>
             <OfferTitle>Usługi Ogólnobudowlane</OfferTitle>
             <OfferLink>więcej</OfferLink>
        </SingleOfferContainer>
    )
}

export default SingleOffer
