import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const SingleOfferContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
text-align: center;
width: 230px;
height: 200px;
font-family: 'Poppins', sans-serif;
margin: 3em;

:hover{
    transform: scale(1.05);
    transition: all 0.2s ease-out;
}


@media screen and (max-width: 800px) {
justify-content: space-evenly;
margin: 2em
}
`

export const OfferTitle = styled.h1`
color: #ffffff;
font-weight: 300;
font-size: 16px;
margin-top: 20px;

@media screen and (max-width: 800px) {
font-size: 14px;
}
`

export const IconWrapper = styled.div`
max-height: 80px;
max-width: 80px;

img {
    fill: #E0B084;
    color: #E0B084;
    width: 100%;
    height: 100%;
    }


@media screen and (max-width: 800px) {
    max-height: 60px;
    max-width: 60px;
}
`
export const OfferLink = styled(Link)`
text-decoration: none;
color: #E0B084;
cursor: pointer;
font-weight: 300;

&:hover {
    transform: scale(1.05);
    transform:  translateY(2px);
    transition: all 0.2s ease-out;
}

@media screen and (max-width: 800px) {
    font-size: 12px;
}
`
