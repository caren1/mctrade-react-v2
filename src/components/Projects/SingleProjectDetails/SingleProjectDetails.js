import React, { useEffect } from 'react'
import { SingleProjectDetailsContainer, Wrapper,
     ProjectTitle, ProjectDate, ProjectDetails, CloseButton, DetailItem, DetailItemSpan, ProjectGallery, GalleryItem, GalleryImage, ProjectIntro} from './SingleProjectDetails.elements'
import { SRLWrapper } from 'simple-react-lightbox'

const SingleProjectDetails = ({ project, backFromPage }) => {

    const { title, date, details, photos } = project;
    // console.log("PROPSZSZ", id, title, date, details, photos);

    useEffect(() => {
        document.getElementById('title').focus()
    }, [])

    return (
        
            <SingleProjectDetailsContainer>
                <Wrapper>
                <CloseButton onClick={backFromPage}></CloseButton>
                <ProjectIntro>
                    <ProjectTitle id="title">{title}</ProjectTitle>
                    <ProjectDate>{date}</ProjectDate>
                </ProjectIntro>
                <ProjectDetails>
                    {details.map((detail, i) => (
                        <DetailItem key={i}>
                            <DetailItemSpan>{detail}</DetailItemSpan>
                        </DetailItem>
                    ))}
                </ProjectDetails>
                    <SRLWrapper>
                <ProjectGallery>
                    {photos.map((photo, i) => (
                        <GalleryItem key={i}>
                            <GalleryImage src={photo}></GalleryImage>
                        </GalleryItem>
                    ))}
                </ProjectGallery>
                    </SRLWrapper>
                </Wrapper>
            </SingleProjectDetailsContainer>
    )
}

export default SingleProjectDetails
