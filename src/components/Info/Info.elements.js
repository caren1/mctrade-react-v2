import styled from 'styled-components'

export const InfoContainer = styled.div`
height: 100vh;
background-image: url('../../assets/images/intro-background.png');
background-attachment: fixed;
background-size: cover;
/* position: relative */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: left;
/* padding: 10em; */

@media screen and (max-width: 800px) {
    height:100%
}
`

export const TextContainer = styled.div`
max-width: 65%;
margin: 50px auto;
font-size: 10px;

@media screen and (max-width: 800px) {
    max-width: 75%;
    font-size: 9px;
    text-align: center;
}

@media screen and (max-width: 800px) {
    max-width: 80%;
    font-size: 8px;
}

`
export const InfoHeading = styled.h1`
color: #E0B084;
font-size: 7.5em;
font-family: 'Lora', serif;
margin-bottom: 0.5em;
font-weight: 500;
`

export const InfoSubheading = styled.p`
font-family: 'Poppins', sans-serif;
font-weight: 300;
font-size: 2em;
color: #ffffff;
line-height: 1.5;
`