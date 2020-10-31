import styled from 'styled-components'

export const SingleOfferContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
text-align: center;
/* border: 1px solid white; */
max-width: 250px;
height: 200px;
font-family: 'Poppins', sans-serif;
margin: 3em;
`

export const OfferTitle = styled.h1`
color: #ffffff;
font-weight: 300;
font-size: 16px;
margin-top: 20px;

`

export const OfferIcon = styled.img`

`
export const OfferLink = styled.a`
text-decoration: none;
color: #E0B084;
cursor: pointer;
font-weight: 300;

&:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-out;
}
`

export const Test = styled.p`

`