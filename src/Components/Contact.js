import React from 'react';
import Navbar from './Navbar';
import Container from 'react-bootstrap/Container'

import ContactForm from './ContactForm'

export default function Contact() {

    return (
        <>
            <Navbar />
            <Container className="contactContainer" >
                <ContactForm />
            </Container>
        </>
    )
}