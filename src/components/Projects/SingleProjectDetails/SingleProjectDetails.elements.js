import styled from 'styled-components';

export const SingleProjectDetailsContainer = styled.div`
min-height: 100vh;
background-color: #041B2D;
padding: 2em;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`

export const Wrapper = styled.div`
max-width: 90%;
padding: 1em;
position: relative;
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
height: 80px;
cursor: pointer;
margin: 1em;
flex-basis: 20%;
`

export const GalleryImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`

export const ArrowContainer = styled.div `
cursor: pointer;
max-width: 20%;
padding:0;
position: absolute;
max-width: 20%;
left: -5%;
top: 4%;
z-index: 999;
`
export const Arrow = styled.span `
 display: block;
    width: 15px;
    height: 15px;
    border-bottom: 3px solid #E0B084;
    border-right: 3px solid #E0B084;
    transform: rotate(135deg);
    animation: willworklikethis 5s infinite;
`

