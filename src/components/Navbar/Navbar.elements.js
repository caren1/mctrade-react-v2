import styled from 'styled-components'

export const Nav = styled.nav `
min-height: 100px;
margin: 0;
font-family: 'Lora', serif;
position: absolute;
top: 0;
z-index: 999;
min-width: 100%;
animation: animateLogo 1s ease-out;

@media screen and (max-width: 765px) {
    display: none;
}
`

export const NavbarContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`

export const NavbarImageContainer = styled.div `
    padding: 1.5em 3em;
`

export const NavLogo = styled.img `
    max-height: 100px;
`

export const NavbarLinksContainer = styled.div `
flex: 1;
display: flex;
flex-direction: column;
`

export const TopLinks = styled.div `
align-self: flex-end;
margin-bottom: 1em;
margin-right: 2em;
`

export const LinkItem = styled.a `
color: #ffffff;
padding: 1em;
font-size: 16px;
text-decoration: none;
cursor: pointer;

&:hover {
    color: #E0B084;
    transition: all 0.5s ease;
}
`

export const CallButton = styled.button `
border: 1px solid #E0B084;
background-color: transparent;
outline: none;
padding: 0.7rem 2rem;
margin-left: 1em;
color: white;
font-family: 'Lora', serif;
font-size: 16px;
cursor: pointer;


&:hover {
    background-color: #E0B084;
    color: #ffffff;
    transition: all 0.5s ease;
}
`

export const Line = styled.hr `
background-color: #E0B084;
border-width: 0;
height: 1px;
`

export const BotLinks = styled.div `
margin-top: 1em;
margin-right: 2em;
align-self: flex-end;
`