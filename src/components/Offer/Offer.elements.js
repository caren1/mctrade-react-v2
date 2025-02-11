import styled from 'styled-components'

export const OfferContainer = styled.div`
min-height: 100vh;
max-height: 100%;
background-color: #041B2D;
padding: 2em 1em;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


export const OfferHeading = styled.h1`
color: #E0B084;
font-size: 65px;
text-align: center;
font-family: 'Lora', serif;
font-weight: 500;

@media screen and (max-width: 800px) {
    font-size: 45px;
}
`

export const Offers = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
max-width: 80%;
margin: auto;

`