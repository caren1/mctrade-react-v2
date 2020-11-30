import styled from 'styled-components'
import { Link } from 'react-scroll'

export const FooterContainer = styled.footer `
min-height: 100vh;
max-height: 100%;
width: 100%;
padding: 1em;
background-color: #041B2D;
display: flex;
align-items: center;
justify-content: center;
position: relative;

@media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    height: 100%;
}
`

export const BackToTopContainer = styled.div`
width: 50px;
height: 50px;
background-color: #E0B084;
border-radius: 50px;
cursor: pointer;
position: absolute;
bottom: 2%;
right: 5%;
animation: constantTop 5s infinite;

@media screen and (max-width: 500px) {
  bottom: 0;
}
`


export const BackToTopLink = styled(Link)`
 border: solid white;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 10px;
      cursor: pointer;
      transform: rotate(-135deg);
      top: 18px;
      left: 14px;
      position: relative;
     
` 


