import React from 'react'
import { FooterImageContainer, FooterLogo, FooterInfo, InfoHeading, InfoList, InfoItem } from './FooterInfo.elements'

const Footer = () => {
    return (
            <FooterInfo>
                <FooterImageContainer>
                        <FooterLogo src={'../../assets/icons/mct-logo.svg'}></FooterLogo>
                </FooterImageContainer>
                <InfoHeading>Zapraszamy do kontaktu! Z przyjemnością odpowiemy na Państwa pytania.</InfoHeading>
                <InfoHeading>Realizujemy projekty głównie na terenie województwa warmińsko-mazurskiego, pomorskiego oraz mazowieckiego.</InfoHeading>
                <InfoList>
                    <InfoItem>MC Trade Sp. z o.o.</InfoItem>
                    <InfoItem>NIP: 5272655781</InfoItem>
                    <InfoItem>00-116 Warszawa</InfoItem>
                    <InfoItem>Świętokrzyska 30/63</InfoItem>
                </InfoList>
                <InfoList second>
                    <InfoItem>(+48) 572-675-106</InfoItem>
                    <InfoItem>kontakt@mc-trade.pl</InfoItem>
                    <InfoItem>praca@mc-trade.pl</InfoItem>
                    <InfoItem>m@mc-trade.pl</InfoItem>
                    <InfoItem>w@mc-trade.pl</InfoItem>
                </InfoList>
            </FooterInfo>
    )
}

export default Footer
