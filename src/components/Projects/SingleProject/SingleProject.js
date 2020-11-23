import React from 'react'
import { SingleProjectContainer, ProjectImagesContainer, ProjectLinkWrapper ,MainImageContainer, MainImage, SubImagesContainer, SubImage, ProjectDescriptionContainer, ProjectTitle, ProjectDescription, SubImageContainer } from './SingleProject.elements'

const SingleProject = ({ project }) => {

    const { id, title, photos } = project; // todo: add description to JSON file

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
                <ProjectDescription>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum quibusdam voluptate iste autem, voluptates nobis odit impedit natus recusandae nam labore optio
                Laborum quibusdam voluptate iste autem, voluptates nobis odit impedit natus recusandae nam labore optio  corporis dolore facere cum deleniti ullam consequatur voluptatum!</ProjectDescription>
            </ProjectDescriptionContainer>

        </SingleProjectContainer>
        </ProjectLinkWrapper>
    )
}

export default SingleProject
