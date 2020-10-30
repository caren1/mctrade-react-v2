import styled from 'styled-components'

export const Nav = styled.nav `
background-color: #000000;
min-height: 100px;
margin: 0;
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`

export const NavbarImageContainer = styled.div`
    padding: 1.5em 3em;
    /* flex: 0 1 auto; */
`

export const NavLogo = styled.img`
    max-height: 100px;
`

export const NavbarLinksContainer = styled.div`
flex: 1 1 80%;
display: flex;
flex-direction: column;
`

export const TopLinks = styled.div`
align-self: flex-end;
`

export const LinkItem = styled.a`
color: #ffffff;
`

export const Line = styled.hr`
border: 1px solid #E0B084;
`

export const BotLinks = styled.div`
align-self: flex-end;

`

