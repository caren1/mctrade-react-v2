import styled from 'styled-components';

export const OfferDetails = styled.div`
height: 100vh;
padding: 3em;
background-color: #041B2D;
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
`
export const NavbarTitle = styled.h1`
color: #E0B084;
font-size: 3em;
font-family: 'Lora', serif;
margin-bottom: 0.5em;
font-weight: 500;
`

export const NavbarImageContainer = styled.div`
    padding: 1.5em 3em;
    /* flex: 0 1 auto; */
`

export const NavLogo = styled.img`
    max-height: 80px;
`

export const DetailsContainer = styled.div`
/* height: 100%; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
font-family: 'Poppins', sans-serif;
`

export const TopDetails = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
position: relative;
padding: 1em;
`
export const ArrowContainer = styled.div`
position: absolute;
left: 250px;
padding: 2em;
cursor: pointer;
/* margin-right: auto; */
`
export const Arrow = styled.span`
 display: block;
    width: 15px;
    height: 15px;
    border-bottom: 3px solid #E0B084;
    border-right: 3px solid #E0B084;
    transform: rotate(135deg);
    animation: willworklikethis 5s infinite;
`

export const IconWrapper = styled.div`
max-height: 70px;
max-width: 70px;
margin-right: 2em;
/* padding: 2em; */


img {
    fill: #E0B084;
    color: #E0B084;
    width: 100%;
    height: 100%;
    }
`


export const DetailsHeading = styled.h2`
font-size: 2em;
color: #ffffff;
font-weight: 300;
`

export const DetailsList = styled.ul`
max-width: 60%;
margin-left: auto;
line-height: 1.7;
/* list-style: none; */
`

export const ListItem = styled.li`
color: #E0B084;
font-weight: 200;
`
export const ListItemSpan = styled.span`
color: #ffffff;
`