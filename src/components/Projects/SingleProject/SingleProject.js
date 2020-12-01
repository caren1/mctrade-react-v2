import React from 'react'
import { SingleProjectContainer, ProjectImagesContainer, ProjectLinkWrapper ,MainImageContainer, MainImage, SubImagesContainer, SubImage, ProjectDescriptionContainer, ProjectTitle, ProjectDescription, SubImageContainer } from './SingleProject.elements'

const SingleProject = ({ project }) => {

    const { id, title, photos, description } = project;

    return (
        <ProjectLinkWrapper to={`/projects/${id}`}>
        <SingleProjectContainer>

            <ProjectImagesContainer>
                <MainImageContainer>
                    <MainImage src={photos[0]}></MainImage>
                </MainImageContainer>

                <SubImagesContainer>
                        <SubImageContainer>
                            <SubImage src={photos[1]}></SubImage>
                        </SubImageContainer>
                        <SubImageContainer>
                            <SubImage src={photos[2]}></SubImage>
                        </SubImageContainer>
                        <SubImageContainer>
                            <SubImage src={photos[3]}></SubImage>
                        </SubImageContainer>   
                    </SubImagesContainer> 
                    
            </ProjectImagesContainer>

            <ProjectDescriptionContainer>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectDescription>{description}</ProjectDescription>
            </ProjectDescriptionContainer>

        </SingleProjectContainer>
        </ProjectLinkWrapper>
    )
}

export default SingleProject
