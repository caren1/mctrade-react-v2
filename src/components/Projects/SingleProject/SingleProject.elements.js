import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const SingleProjectContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 200px;
max-height: 100%;
width: 60%;
padding: 1em 2em;
margin: 2em auto;
border: 1px solid #E0B084;
cursor: pointer;

:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-out;
    box-shadow: 0 2px 2px solid black;

}


@media screen and (max-width: 1000px) {
flex-direction: column-reverse;
text-align: center;
width: 100%;
}

@media screen and (max-width: 400px) {
    padding: 1em 1em;
}
`

export const ProjectImagesContainer = styled.div`
width: 100%;
`
export const MainImageContainer = styled.div`
width: 160px;
height: 160px;
margin: auto auto;

@media screen and (max-width: 1000px) {
display: none;
}
`

export const MainImage = styled.img`
max-width: 100%;
height: 100%;
object-fit: cover;
`

export const SubImagesContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const SubImageContainer = styled.div`
width: 50px;
height: 50px;
margin: 10px 2px 0 2px;

@media screen and (max-width: 1000px) {
height: 70px;
width: 70px;
}
`

export const SubImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`

export const ProjectDescriptionContainer = styled.div`
padding: 2em;

@media screen and (max-width: 600px) {
    padding: 1em;
}
`

export const ProjectTitle = styled.h1`
color: #E0B084;
font-size: 25px;
font-family: 'Lora', serif;
font-weight: 500;
margin-bottom: 1em;

@media screen and (max-width: 600px) {
    font-size: 20px;
}
`

export const ProjectDescription = styled.p`
font-family: 'Poppins', sans-serif;
font-weight: 200;
font-size: 14px;
color: #ffffff;
line-height: 1.5;

@media screen and (max-width: 600px) {
    font-size: 12px;
}
`

export const ProjectLinkWrapper = styled(Link)`
cursor: pointer;
height: 100%;
text-decoration: none;
`
