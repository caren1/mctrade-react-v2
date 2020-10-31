import React from 'react'
import { OfferContainer, OfferHeading, Offers } from './Offer.elements'

import SingleOffer from './SingleOffer/SingleOffer'
// - Offer -> SingleOffer -> SingleOfferDetails

const Offer = () => {
    return (
        <OfferContainer>
            <OfferHeading>Oferta</OfferHeading>
            <Offers>
                <SingleOffer />
                <SingleOffer />
                <SingleOffer />
                <SingleOffer />
                <SingleOffer />
            </Offers>
        </OfferContainer>
    )
}

export default Offer
