import React from 'react'
import { SingleProjectDetailsContainer, ArrowContainer, Arrow, ProjectIntro,Wrapper, ProjectTitle, ProjectDate, ProjectDetails, DetailItem, DetailItemSpan, ProjectGallery, GalleryItem, GalleryImage} from './SingleProjectDetails.elements'

const SingleProjectDetails = ({ id, title, date, details, photos }) => {
    return (
        <SingleProjectDetailsContainer>
            <Wrapper>
            <ArrowContainer>
                    <Arrow></Arrow>
                </ArrowContainer>
            <ProjectIntro>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectDate>{date}</ProjectDate>
            </ProjectIntro>
            <ProjectDetails>
                {details.map((detail) => (
                    <DetailItem key={id}>
                        <DetailItemSpan>{detail}</DetailItemSpan>
                    </DetailItem>
                ))}
            </ProjectDetails>
            <ProjectGallery>
                {photos.map((photo) => (
                    <GalleryItem>
                        <GalleryImage src={photo}></GalleryImage>
                    </GalleryItem>
                ))}
            </ProjectGallery>
            </Wrapper>
        </SingleProjectDetailsContainer>
    )
}

export default SingleProjectDetails
