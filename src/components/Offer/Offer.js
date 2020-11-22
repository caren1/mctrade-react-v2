import React from 'react'
import { OfferContainer, OfferHeading, Offers } from './Offer.elements'

import SingleOffer from './SingleOffer/SingleOffer'
import offerDataDetails from '../../mct-offer.json'
// - Offer -> SingleOffer -> SingleOfferDetails
// console.log(offerDataDetails);

const Offer = () => {
    return (
        <OfferContainer>
            <OfferHeading>Oferta</OfferHeading>
            <Offers>
                {offerDataDetails.map((offer) => (
                    <SingleOffer key={offer.id} offer={offer} />
                ))}
            </Offers>
        </OfferContainer>
    )
}

export default Offer
