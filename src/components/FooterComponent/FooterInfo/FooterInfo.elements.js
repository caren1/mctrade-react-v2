import styled from 'styled-components'

export const FooterInfo = styled.div`
max-width: 30%;
padding: 2em;
line-height: 1.4;
border-right: 2px solid #E0B084;
transition: all 0.2s ease;


@media screen and (max-width: 1000px) {
    max-width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-right: none;
}

`
export const FooterImageContainer = styled.div `
    padding: 1em;
`

export const FooterLogo = styled.img `
    max-height: 80px;
`

export const InfoHeading = styled.h1`
color: #ffffff;
font-family: 'Lora', serif;
font-weight: 200;
font-size: 16px;
margin: 1em 0;
`

export const InfoList = styled.ul`
margin: 1em 0;
color: ${props => props.second ? '#ffffff' : '#E0B084' }
`

export const InfoItem = styled.li`
list-style-type: none;
font-family: 'Poppins', sans-serif;
font-weight: 300;
`

