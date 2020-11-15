import React from 'react'
import { FooterContainer, NavbarImageContainer, NavLogo, FooterInfo, InfoHeading, InfoList, InfoItem } from './Footer.elements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterInfo>
                <NavbarImageContainer>
                        <NavLogo src={'../../assets/icons/mct-logo.svg'}></NavLogo>
                </NavbarImageContainer>
                <InfoHeading>Zapraszamy do kontaktu! Z przyjemnością odpowiemy na Państwa pytania.</InfoHeading>
                <InfoHeading>Realizujemy projekty głównie na terenie województwa warmińsko-mazurskiego, pomorskiego oraz mazowieckiego.</InfoHeading>
                <InfoList>
                    <InfoItem>MC Trade Sp. z o.o.</InfoItem>
                    <InfoItem>NIP: 5272655781</InfoItem>
                    <InfoItem>00-116 Warszawa</InfoItem>
                    <InfoItem>Świętokrzyska 30/63</InfoItem>
                </InfoList>
                <InfoList>
                    <InfoItem>(+48) 572-675-106</InfoItem>
                    <InfoItem>kontakt@mc-trade.pl</InfoItem>
                    <InfoItem>praca@mc-trade.pl</InfoItem>
                    <InfoItem>m@mc-trade.pl</InfoItem>
                    <InfoItem>w@mc-trade.pl</InfoItem>
                </InfoList>
            </FooterInfo>
            {/* <FooterForm> */}

            {/* </FooterForm> */}
        </FooterContainer>
    )
}

export default Footer
