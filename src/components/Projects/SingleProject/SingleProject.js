import React from 'react'
import { SingleProjectContainer, ProjectImagesContainer, MainImageContainer, MainImage, SubImagesContainer, SubImage, ProjectDescriptionContainer, ProjectTitle, ProjectDescription, SubImageContainer } from './SingleProject.elements'

const SingleProject = () => {
    return (
        <SingleProjectContainer>

            <ProjectImagesContainer>
                <MainImageContainer>
                    <MainImage src="https://guardian.ng/wp-content/uploads/2020/07/Roofing.jpg"></MainImage>
                </MainImageContainer>

                <SubImagesContainer>
                        <SubImageContainer>
                            <SubImage src="https://guardian.ng/wp-content/uploads/2020/07/Roofing.jpg"></SubImage>
                        </SubImageContainer>
                        <SubImageContainer>
                            <SubImage src="https://guardian.ng/wp-content/uploads/2020/07/Roofing.jpg"></SubImage>
                        </SubImageContainer>
                        <SubImageContainer>
                            <SubImage src="https://guardian.ng/wp-content/uploads/2020/07/Roofing.jpg"></SubImage>
                        </SubImageContainer>   
                    </SubImagesContainer> 
                    
            </ProjectImagesContainer>

            <ProjectDescriptionContainer>
                <ProjectTitle>Przychodnia lekarska w Elblągu</ProjectTitle>
                <ProjectDescription>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum quibusdam voluptate iste autem, voluptates nobis odit impedit natus recusandae nam labore optio
                Laborum quibusdam voluptate iste autem, voluptates nobis odit impedit natus recusandae nam labore optio  corporis dolore facere cum deleniti ullam consequatur voluptatum!</ProjectDescription>
            </ProjectDescriptionContainer>

        </SingleProjectContainer>
    )
}

export default SingleProject
