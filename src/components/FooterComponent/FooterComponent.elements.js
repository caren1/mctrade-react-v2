import styled from 'styled-components'

export const FooterContainer = styled.footer `
height: 100vh;
width: 100%;
padding: 1em;
background-color: #041B2D;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    height: 100%;
}
`
