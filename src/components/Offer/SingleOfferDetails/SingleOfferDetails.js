import React from 'react'
import { NavbarContainer, BottomListContainer, IconDetails, NavbarImageContainer, NavbarTitle, NavLogo, DetailsContainer, ArrowContainer, IconWrapper, Arrow, TopDetails, ListItem, DetailsList, DetailsHeading, OfferDetails, ListItemSpan, CertificatesContainer, SingleCertificate } from './SingleOfferDetails.elements'

const SingleOfferDetails = ({ offer, backFromPage }) => {
    const { title, icon, details, certificates } = offer;


    let certificatesContainer = null;
    
    if (certificates) {
        certificatesContainer = (
            <CertificatesContainer>
                {certificates.map((cert) => (
                    <SingleCertificate src={cert}></SingleCertificate>
                ))}
            </CertificatesContainer>
        )
    }

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
                    <ArrowContainer onClick={backFromPage}>
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
                    {certificatesContainer}
            </DetailsContainer>
        </OfferDetails>
    )
}

export default SingleOfferDetails
