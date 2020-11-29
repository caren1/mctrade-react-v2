import React from 'react'
import { NavbarContainer, BottomListContainer, IconDetails, NavbarImageContainer, NavbarTitle, NavLogo, DetailsContainer, IconWrapper, TopDetails, ListItem, DetailsList, DetailsHeading, OfferDetails, ListItemSpan, CertificatesContainer, SingleCertificate, CloseButton } from './SingleOfferDetails.elements'
import mctlogo from '../../../assets/icons/mct-logo.svg'
import { SRLWrapper } from 'simple-react-lightbox'


const SingleOfferDetails = ({ offer, backFromPage }) => {
    const { title, icon, details, certificates } = offer;

    let certificatesContainer = null;
    
    if (certificates) {
        certificatesContainer = (
            <CertificatesContainer>
                {certificates.map((cert, i) => (
                    <SingleCertificate key={i} src={cert}></SingleCertificate>
                ))}
            </CertificatesContainer>
        )
    }

    return (
        <OfferDetails>

            <NavbarContainer>
                <NavbarImageContainer>
                    <NavLogo src={mctlogo}></NavLogo>
                </NavbarImageContainer>
                <NavbarTitle>Oferta</NavbarTitle>
            </NavbarContainer>
            <CloseButton onClick={backFromPage}></CloseButton>
            <DetailsContainer>
                <TopDetails>
                    <IconDetails>
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
                <SRLWrapper>
                    {certificatesContainer}
                </SRLWrapper>    
            </DetailsContainer>
        </OfferDetails>
    )
}

export default SingleOfferDetails
