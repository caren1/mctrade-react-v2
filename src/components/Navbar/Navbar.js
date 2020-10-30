import React from 'react'

import {
    Nav,
    NavbarContainer,
    NavbarImageContainer,
    NavLogo,
    NavbarLinksContainer,
    TopLinks,
    LinkItem,
    Line,
    BotLinks
} from './Navbar.elements.js'

// import { Button } from '../../components'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavbarImageContainer>
                        <NavLogo src={'../../assets/icons/mct-logo.svg'}></NavLogo>
                    </NavbarImageContainer>
                    <NavbarLinksContainer>
                        <TopLinks>
                            <LinkItem>
                            kontakt@mc-trade.pl
                            </LinkItem>
                            <LinkItem>
                            (+48) 572 675 106
                            </LinkItem>
                            {/* <Button text='Zadzwoń' type='submit'/> */}
                        </TopLinks>
                        <Line></Line>
                        <BotLinks>
                            <LinkItem>
                                Firma
                            </LinkItem>
                            <LinkItem>
                                Projekty
                            </LinkItem>
                            <LinkItem>
                                Oferta
                            </LinkItem>
                            <LinkItem>
                                Praca
                            </LinkItem>
                            <LinkItem>
                                Kontakt
                            </LinkItem>
                        </BotLinks>
                    </NavbarLinksContainer>
                </NavbarContainer>
            </Nav>  
        </>
    )
}

export default Navbar
