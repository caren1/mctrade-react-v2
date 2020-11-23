import React from 'react'
import { SingleProjectDetailsContainer, ArrowContainer, Arrow, Wrapper,
     ProjectTitle, ProjectDate, ProjectDetails, DetailItem, DetailItemSpan, ProjectGallery, GalleryItem, GalleryImage, ProjectIntro} from './SingleProjectDetails.elements'

const SingleProjectDetails = ({ project }) => {

    const { id, title, date, details, photos } = project;
    // console.log("PROPSZSZ", id, title, date, details, photos);

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
                    {details.map((detail, i) => (
                        <DetailItem key={i}>
                            <DetailItemSpan>{detail}</DetailItemSpan>
                        </DetailItem>
                    ))}
                </ProjectDetails>
                <ProjectGallery>
                    {photos.map((photo, i) => (
                        <GalleryItem key={i}>
                            <GalleryImage src={photo}></GalleryImage>
                        </GalleryItem>
                    ))}
                </ProjectGallery>
                </Wrapper>
            </SingleProjectDetailsContainer>
    )
}

export default SingleProjectDetails
