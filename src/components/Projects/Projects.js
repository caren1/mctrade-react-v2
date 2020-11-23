import React from 'react'
import { ProjectsContainer, Title, Line } from './Projects.elements'

import SingleProject from './SingleProject/SingleProject'
import projectDataDetails from '../../mct-projects.json'
console.log(projectDataDetails);

const Projects = () => {
    return (
        <ProjectsContainer>
            <Line></Line>
            <Title>Nasze realizacje</Title>
            {projectDataDetails.map((project) => (
                <SingleProject key={project.id} project={project}/>
            ))}
        </ProjectsContainer>
    )
}

export default Projects
