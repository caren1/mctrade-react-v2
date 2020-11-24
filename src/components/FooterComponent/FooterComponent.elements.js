import styled from 'styled-components'

export const FooterContainer = styled.footer `
min-height: 100vh;
max-height: 100%;
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
