import styled from 'styled-components';

export const ProjectsContainer = styled.div`
padding: 3em;
height: 100%;
background-color: #041B2D;
`

export const Title = styled.h1`
color: #E0B084;
font-size: 3em;
font-family: 'Lora', serif;
margin-bottom: 0.5em;
font-weight: 500;
text-align: center;

@media screen and (max-width: 700px) {
    font-size: 2em;
}
`
export const Line = styled.hr`
border: 0.2px solid #E0B084;
color: #E0B084;
background-color: #E0B084;
width: 10%;
margin: 1em auto 2em auto;
`