import React, { useState } from 'react'
import * as emailjs from 'emailjs-com'
import{ init } from 'emailjs-com';

import { FooterContactContainer, ContactTitle, ContactForm, ContactInput, SubmitButton } from './FooterContact.elements'

const FooterContact = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')


    init("user_l6L08efpIlEd6HRaDC2zi");

    const handleSubmit = (event) => {
        event.preventDefault()
        let templateParams = {
            from_name: name,
            from_surname: surname,
            from_email: email,
            from_phone: phone,
            to_name: 'kontakt@mc-trade.pl',
            subject: subject,
            message: message,
        }
     emailjs.send(
      'service_0pu87hi',
      'contact_form',
       templateParams,
     )
     resetForm();
    }

    const resetForm = () => {
        setName('');
        setSurname('');
        setPhone('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    return (
        <FooterContactContainer>
            <ContactTitle>Kontakt</ContactTitle>
            <ContactForm onSubmit={handleSubmit}>
                <ContactInput type="text" placeholder="Imię" name="name" value={name} onChange={(event) => setName(event.target.value)}></ContactInput>
                <ContactInput type="text" placeholder="Nazwisko" name="surname" value={surname} onChange={(event) => setSurname(event.target.value)}></ContactInput>
                <ContactInput type="text" placeholder="Telefon" name="phone" value={phone} onChange={(event) => setPhone(event.target.value)}></ContactInput>
                <ContactInput type="text" placeholder="E-mail" name="email" value={email} onChange={(event) => setEmail(event.target.value)}></ContactInput>
                <ContactInput type="text" placeholder="Temat" name="subject" value={subject} onChange={(event) => setSubject(event.target.value)}></ContactInput>
                <ContactInput xl type="text" placeholder="Wiadomość" name="message" value={message} onChange={(event) => setMessage(event.target.value)}></ContactInput>
                <SubmitButton type="submit" on>Wyślij</SubmitButton>
            </ContactForm>
        </FooterContactContainer>
    )
}

export default FooterContact
