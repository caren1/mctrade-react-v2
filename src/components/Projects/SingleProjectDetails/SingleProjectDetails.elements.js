import styled from 'styled-components';

export const SingleProjectDetailsContainer = styled.div`
min-height: 100vh;
background-color: #041B2D;
padding: 2em;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
position: relative;

@media screen and (max-width: 750px) {
    text-align: center;
}
`

export const Wrapper = styled.div`
max-width: 90%;
padding: 1em;
animation: animateLogo 2s ease-out;


@media screen and (max-width: 750px) {
    max-width: 100%;
}
`

export const ProjectIntro = styled.div`

`

export const ProjectTitle = styled.h1`
color: #E0B084;
font-size: 30px;
font-family: 'Lora', serif;
font-weight: 500;
margin-bottom: 0.2em;

@media screen and (max-width: 750px) {
    font-size: 22px;
    padding: 0;
}
`

export const ProjectDate = styled.h2`
color: #ffffff;
font-size: 25px;
font-family: 'Lora', serif;
font-weight: 200;
margin-bottom: 1em;
justify-self: flex-start;

@media screen and (max-width: 750px) {
    font-size: 16px;
}
`

export const ProjectDetails = styled.ul`
margin-left: 2em;
text-align: left;

@media screen and (max-width: 750px) {
    margin-left: 0;
}
`

export const DetailItem = styled.li`
color: #E0B084;
font-weight: 200;
font-family: 'Poppins', sans-serif;
line-height: 1.5;

`
export const DetailItemSpan = styled.span`
color: #ffffff;
font-size: 14px;

@media screen and (max-width: 750px) {
    font-size: 12px;
}

`

export const ProjectGallery = styled.div`
max-width: 100%;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
margin-top: 1em;
`

export const GalleryItem = styled.div`
width: 80px;
height: 100px;
cursor: pointer;
margin: 1em;
flex-basis: 20%;

@media screen and (max-width: 750px) {
    height: 50px;
    margin: 0.5em;
}
`

export const GalleryImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`

export const CloseButton = styled.a`
  position: absolute;
  right: 35px;
  top: 25px;
  width: 30px;
  height: 30px;
  opacity: 0.7;
  transition: all 0.5s ease;
  cursor: pointer;

&:hover {
  opacity: 1;
}
&:before, &:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #E0B084;
}
&:before {
  transform: rotate(45deg);
}
&:after {
  transform: rotate(-45deg);
}

@media screen and (max-width: 750px) {
  width: 10px;
  height: 10px;

  &:before, &:after {
  left: 15px;
  top: 0;
  content: ' ';
  height: 18px;
  width: 2px;
  background-color: #E0B084;
}

}
`
