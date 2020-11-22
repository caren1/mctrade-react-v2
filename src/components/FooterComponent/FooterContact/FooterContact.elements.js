import styled from 'styled-components';

export const FooterContactContainer = styled.div`
/* max-width: 60%; */
padding-left: 4em;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
`

export const ContactTitle = styled.h1`
color: #E0B084;
font-size: 3em;
font-family: 'Lora', serif;
font-weight: 500; 
`

export const ContactForm = styled.form`
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
justify-content: center;
width: 100%;
padding: 1em;
`

export const ContactInput = styled.input`
display: block;
margin: 0.8em 0;
padding: 1.25em 2em;
padding: ${props => props.xl ? '3em 2em' : '1.25em 2em'};
max-width: 100%;
min-width: 400px;
background-color: transparent;
border: 2px solid #E0B084;
transition: all 0.5s ease;


&::placeholder {
    color: #ffffff;
    text-align: center;
    opacity: 0.5;
    font-family: 'Roboto Slab', serif;
    font-size: 13px;
    letter-spacing: 0.2px;
}

&:focus, :target {
    outline: none;
    border: 2px solid #ffffff;

    ::placeholder {
        opacity: 0.1;
    }
}

`
export const SubmitButton = styled.button`
margin: 1em 0;
color: #ffffff;
width: 80%;
padding: 1em;
background-color: #E0B084;
font-family: 'Roboto Slab', serif;
font-size: 16px;
font-weight: 200;
transition: all 0.2s ease;



&:hover, :focus, :target {
    color: #E0B084;
    background-color: transparent;
    border: 2px solid #E0B084;
    cursor: pointer;
}
`