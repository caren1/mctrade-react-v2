import styled from 'styled-components';

export const OfferDetails = styled.div `
min-height: 100vh;
max-height: 100%;
padding: 3em;
background-color: #041B2D;
scroll-snap-align: start;

@media screen and (max-width: 600px) {
    font-size: 15px;
    padding: 1em;
}
`

export const NavbarContainer = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    max-width: 100%;
    animation: animateLogo 2s ease-out;


    @media screen and (max-width: 800px) {
        display: none;
    }
`
export const NavbarTitle = styled.h1 `
color: #E0B084;
font-size: 3em;
font-family: 'Lora', serif;
margin-bottom: 0.5em;
font-weight: 500;
`

export const NavbarImageContainer = styled.div `
    padding: 1em 3em;
    `

export const NavLogo = styled.img `
    max-height: 80px;
`

export const DetailsContainer = styled.div `
display: flex;
flex-direction: column;
width: 100%;
font-family: 'Poppins', sans-serif;
position: relative;
animation: animateLogo 2s ease-out;

`

export const TopDetails = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
position: relative;
padding: 1em;
margin-bottom: 0.5em;
`
export const IconDetails = styled.div `
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 800px) {
    flex-direction: column;
}
`

export const IconWrapper = styled.div `
max-height: 80px;
max-width: 80px;
padding: 1em;

img {
    fill: #E0B084;
    color: #E0B084;
    width: 100%;
    height: 100%;
    }
`

export const BottomListContainer = styled.div `
max-width: 60%;
min-width: 500px;
margin: auto 40% auto 35%;

@media screen and (max-width: 800px) {
min-width: 100%;
max-width: 80%;
margin: auto auto;

display: flex;
align-items: center;
justify-content: center;
line-height: 2.5;
padding: 2em;
}
`

export const DetailsHeading = styled.h2 `
font-size: 2em;
color: #ffffff;
font-weight: 300;

@media screen and (max-width: 800px) {
    text-align: center;
    font-size: 1.5em;
}
`

export const DetailsList = styled.ul `
line-height: 1.7;

@media screen and (max-width: 500px) {
line-height: 2;
font-size: 13px;
}
`

export const ListItem = styled.li `
color: #E0B084;
font-weight: 200;
`
export const ListItemSpan = styled.span `
color: #ffffff;
`

export const CertificatesContainer = styled.div `
max-height: 20%;
height: 200px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 3em;

@media screen and (max-width: 500px) {
    height: 160px;
}
`

export const SingleCertificate = styled.img `
max-height: 100%;
max-width: 100%;
cursor: pointer;
margin: 10px;
`

export const CloseButton = styled.a `
  position: absolute;
  right: 35px;
  top: 25px;
  width: 30px;
  height: 30px;
  opacity: 0.7;
  transition: all 0.5s ease;
  cursor: pointer;
  z-index: 1;

&:hover {
  opacity: 1;
}
&:before, &:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #E0B084;
}
&:before {
  transform: rotate(45deg);
}
&:after {
  transform: rotate(-45deg);
}

@media screen and (max-width: 750px) {
  width: 10px;
  height: 10px;

  &:before, &:after {
  left: 15px;
  top: 0;
  content: ' ';
  height: 18px;
  width: 2px;
  background-color: #E0B084;
}

}
`