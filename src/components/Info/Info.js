import React from 'react'
import './Info.elements'

import { InfoContainer, InfoHeading, InfoSubheading, TextContainer } from './Info.elements'

const Info = ({ title, text }) => {
    return (
        <InfoContainer>
            {/* <h1>{title}</h1>
            <p>{text}</p>         */}
            <TextContainer>
                <InfoHeading>O Firmie</InfoHeading>
                <InfoSubheading>Firma MC Trade Sp. z o.o. istnieje na rynku już od 2011 roku i ma na swoim koncie wiele udanych realizacji oraz projektów na terenie całej Polski. <br /><br />

                    Głównym zakresem działalności są usługi ogólnobudowlane oraz remontowe, jak i renowacja i konserwacja wnętrz. Firma zaangażowana jest również w dziedzinę fotowoltaiki oraz pośrednictwa w rekrutacji pracowników. <br /><br />

                    W celu poznania szczegółów na temat naszej firmy, zapraszamy do zapoznania się z naszą ofertą. Jeżeli są Państwo zainteresowani nawiązaniem współpracy prosimy o kontakt telefoniczny, mailowy, bądź z wykorzystaniem formularza. <br/><br />

                    Szukamy za równo nowych projektów, podwykonawców jak i pracowników z branży budowlanej.
                </InfoSubheading>
            </TextContainer>  
        </InfoContainer>
    )
}

export default Info