import React from 'react'
import { ProjectsContainer, Title, Line } from './Projects.elements'

import SingleProject from './SingleProject/SingleProject'

const Projects = () => {
    return (
        <ProjectsContainer>
            <Line></Line>
            <Title>Nasze realizacje</Title>
            <SingleProject />
        </ProjectsContainer>
    )
}

export default Projects
