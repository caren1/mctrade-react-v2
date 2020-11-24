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
    BotLinks
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
                            <LinkItem>kontakt@mc-trade.pl</LinkItem>
                            <LinkItem>(+48) 572 675 106</LinkItem>
                            <CallButton>Zadzwoń</CallButton>
                        </TopLinks>
                        <Line></Line>
                        <BotLinks>
                            <LinkItem href="/">Firma</LinkItem>
                            <LinkItem>Projekty</LinkItem>
                            <LinkItem>Oferta</LinkItem>
                            <LinkItem>Praca</LinkItem>
                            <LinkItem>Kontakt</LinkItem>
                        </BotLinks>
                    </NavbarLinksContainer>
                </NavbarContainer>
            </Nav>  
        </header>
    )
}

export default Navbar
