import React from 'react'
import Navbar from './Navbar'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { RHINO_URL, ELEPHANT_URL, monkeyContent, joke, jokeAnswer } from '../Constants'
import Video from './Video'
import './Styles/Home.css'

export default function Home() {
    return (
        <>
            <Navbar />
            <Container>
                <h1>Welcome animals...</h1>
                <Row>
                    <Col className='animal-heading-container' xs={12} sm={12} md={12} lg={12}>
                        <img src={RHINO_URL} alt="rhino"></img>
                        <img src={ELEPHANT_URL} alt="elephant"></img>
                        <img src={RHINO_URL} alt="rhino"></img>
                    </Col>
                </Row>
                <Row className="monkey-fact">
                    <Col xs={12} sm={12} md={6} lg={4}>
                        <h2>Did you know?</h2>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={8}>
                        {monkeyContent}
                    </Col>
                </Row>
                <Row className='sing-along'>
                    <Col className="video" xs={12} sm={12} md={6} lg={4}>
                        <Video className="animals-video" />
                    </Col>
                    <Col className="joker" xs={12} sm={12} md={6} lg={8}>
                        {joke}<br />{jokeAnswer}
                    </Col>
                </Row>
            </Container>
        </>
    )
}