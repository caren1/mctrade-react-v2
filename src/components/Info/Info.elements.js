import styled from 'styled-components'
import introbackground from '../../assets/images/intro-background.png'

export const InfoContainer = styled.div`
min-height: 100vh;
max-height: 100%;
background-image: url(${introbackground});
background-attachment: fixed;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: left;
`

export const TextContainer = styled.div`
max-width: 65%;
margin: 50px auto;
font-size: 10px;

@media screen and (max-width: 900px) {
    font-size: 8.5px;
}

@media screen and (max-width: 600px) {
    max-width: 80%;
    font-size: 7px;
    text-align: center;
}

`
export const InfoHeading = styled.h1`
color: #E0B084;
font-size: 6.5em;
font-family: 'Lora', serif;
margin-bottom: 0.5em;
font-weight: 500;
`

export const InfoSubheading = styled.p`
font-family: 'Poppins', sans-serif;
font-weight: 300;
font-size: 2em;
color: #ffffff;
line-height: 1.8;
margin-bottom: 1em;
`