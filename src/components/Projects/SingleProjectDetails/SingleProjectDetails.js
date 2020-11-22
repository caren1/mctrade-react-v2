import React from 'react'
import { SingleProjectDetailsContainer, ArrowContainer, Arrow, ProjectIntro,Wrapper, ProjectTitle, ProjectDate, ProjectDetails, DetailItem, DetailItemSpan, ProjectGallery, GalleryItem, GalleryImage} from './SingleProjectDetails.elements'

const SingleProjectDetails = () => {
    return (
        <SingleProjectDetailsContainer>
            <Wrapper>
            <ArrowContainer>
                    <Arrow></Arrow>
                </ArrowContainer>
            <ProjectIntro>
                <ProjectTitle>Parafia pw. Św. Leonarda w Chociszewie</ProjectTitle>
                <ProjectDate>Termin realizacji : 2017 / 2018</ProjectDate>
            </ProjectIntro>
            <ProjectDetails>
                <DetailItem>
                    <DetailItemSpan>Zabezpieczenie belek stropowych / konserwacja środkami chemicznymi</DetailItemSpan>
                </DetailItem>
                <DetailItem>
                    <DetailItemSpan>Zabezpieczenie posufitki, odrobaczenie, konserwacja oraz malowanie</DetailItemSpan>
                </DetailItem>
                <DetailItem>
                    <DetailItemSpan>Wymiana oraz docieplenie stropów drewnianych, lakierowanie, wymiana okien</DetailItemSpan>
                </DetailItem>
                <DetailItem>
                    <DetailItemSpan>Zakładanie nowej instalacji elektrycznej wraz z zachowaniem wszelkich warunków zgodnych z procedurami dotyczącymi warunków p.poż.</DetailItemSpan>
                </DetailItem>
                <DetailItem>
                    <DetailItemSpan>Czyszczenie i wymiana fugi elewacyjnej na całości obiektu (piaskowanie cegieł)</DetailItemSpan>
                </DetailItem>
                <DetailItem>
                    <DetailItemSpan>Odnawianie drzwi zewnętrznych, czyszczenie, lakierowanie oraz malowanie</DetailItemSpan>
                </DetailItem>
                <DetailItem>
                    <DetailItemSpan>Izolacja zewnętrzna, układanie kostki granitowej wraz z nową instalacją wodną (rynny miedziane, wraz z koszami odprowadzającymi deszczówkę)</DetailItemSpan>
                </DetailItem>
                <DetailItem>
                    <DetailItemSpan>Odkrywanie części cegieł, fugowanie, malowanie oraz konserwacja</DetailItemSpan>
                </DetailItem>
                <DetailItem>
                    <DetailItemSpan>Czyszczenie belek ozdobnych (mur pruski) oraz konserwacja środkami chemicznymi</DetailItemSpan>
                </DetailItem>
                <DetailItem>
                    <DetailItemSpan>Prace zabezpieczające okna, witraże zewnętrzne wraz z uszczelnieniem okien oraz ich zabezpieczeniem</DetailItemSpan>
                </DetailItem>
                <DetailItem>
                    <DetailItemSpan>„Zszywanie muru” w miejscach osłabionych, popękanych</DetailItemSpan>
                </DetailItem>
                <DetailItem>
                    <DetailItemSpan>Nakładanie nowego tynku, przecieranie, malowanie całości ścian wewnętrzynch</DetailItemSpan>
                </DetailItem>
            </ProjectDetails>
            <ProjectGallery>
                <GalleryItem>
                    <GalleryImage src="https://guardian.ng/wp-content/uploads/2020/07/Roofing.jpg"></GalleryImage>
                </GalleryItem>
                <GalleryItem>
                    <GalleryImage src="https://guardian.ng/wp-content/uploads/2020/07/Roofing.jpg"></GalleryImage>
                </GalleryItem>
                <GalleryItem>
                    <GalleryImage src="https://guardian.ng/wp-content/uploads/2020/07/Roofing.jpg"></GalleryImage>
                </GalleryItem>
                <GalleryItem>
                    <GalleryImage src="https://guardian.ng/wp-content/uploads/2020/07/Roofing.jpg"></GalleryImage>
                </GalleryItem>
                <GalleryItem>
                    <GalleryImage src="https://guardian.ng/wp-content/uploads/2020/07/Roofing.jpg"></GalleryImage>
                </GalleryItem>
                <GalleryItem>
                    <GalleryImage src="https://guardian.ng/wp-content/uploads/2020/07/Roofing.jpg"></GalleryImage>
                </GalleryItem>
                <GalleryItem>
                    <GalleryImage src="https://guardian.ng/wp-content/uploads/2020/07/Roofing.jpg"></GalleryImage>
                </GalleryItem>
                <GalleryItem>
                    <GalleryImage src="https://guardian.ng/wp-content/uploads/2020/07/Roofing.jpg"></GalleryImage>
                </GalleryItem>
            </ProjectGallery>
             {/* {details.map((offerDetail, i) => (
                <DetailItem key={i}>
                    <DetailItemSpan>{offerDetail}</DetailItemSpan>
                </DetailItem>
                ))} */}
            </Wrapper>
        </SingleProjectDetailsContainer>
    )
}

export default SingleProjectDetails
