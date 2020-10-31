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
`

export const TextContainer = styled.div`
max-width: 65%;
margin: auto auto;
`
export const InfoHeading = styled.h1`
color: #E0B084;
font-size: 75px;
font-family: 'Lora', serif;
margin-bottom: 35px;
`

export const InfoSubheading = styled.p`
font-family: 'Poppins', sans-serif;
font-weight: 300;
font-size: 20px;
color: #ffffff;
line-height: 1.5;
`