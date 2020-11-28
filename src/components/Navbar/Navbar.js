import React from 'react'

import {
    Nav,
    NavbarContainer,
    NavbarImageContainer,
    NavLogo,
    NavbarLinksContainer,
    TopLinks,
    LinkItem,
    CallButton,
    Line,
    BotLinks,
    CallHref
} from './Navbar.elements.js'

const Navbar = () => {
    return (
        <header>
            <Nav>
                <NavbarContainer>
                    <NavbarImageContainer>
                        <NavLogo src={'../../assets/icons/mct-logo.svg'}></NavLogo>
                    </NavbarImageContainer>
                    <NavbarLinksContainer>
                        <TopLinks>
                            <LinkItem to="contact" smooth={true} duration={500}>kontakt@mc-trade.pl</LinkItem>
                            <LinkItem>(+48) 572 675 106</LinkItem>
                            <CallButton><CallHref href="tel:+48572-675-106">Zadzwoń</CallHref></CallButton>
                        </TopLinks>
                        <Line></Line>
                        <BotLinks>
                            <LinkItem to="info1" smooth={true} duration={500}>Firma</LinkItem>
                            <LinkItem to="offer" smooth={true} duration={500}>Oferta</LinkItem>
                            <LinkItem to="projects" smooth={true} duration={500}>Projekty</LinkItem>
                            <LinkItem to="info2" smooth={true} duration={500}>Praca</LinkItem>
                            <LinkItem to="contact" smooth={true} duration={500}>Kontakt</LinkItem>
                        </BotLinks>
                    </NavbarLinksContainer>
                </NavbarContainer>
            </Nav>  
        </header>
    )
}

export default Navbar
