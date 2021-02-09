import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Navbar from './Navbar'
import './Styles/About.css'
import Sponsor from './Sponsor'
import { sponsors, aboutUsContentpOne, aboutUsContentpTwo, aboutUsContentpThree, POLAR_BEAR_URL } from '../Constants'

export default function About() {
    return (
        <>
            <Navbar />
            <Container>
                <h1>About us:</h1>
                <Row className='about-us-row'>
                    <Col className='about-us-container' xs={12} sm={12} md={7} lg={8}>
                        {aboutUsContentpOne}<p />{aboutUsContentpTwo}<p />{aboutUsContentpThree}
                    </Col>
                    <Col className='about-us-img-container' xs={12} sm={12} md={5} lg={4}>
                        <img className='polar-img' src={POLAR_BEAR_URL} alt="polar-bear-img" />
                    </Col>
                </Row>
                <h4>Sponsors:</h4>
                {sponsors.map(sponsor => (
                    <Sponsor sponsor={sponsor} />

                ))}
            </Container>

        </>
    )
}