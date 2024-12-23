import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ReactTyped } from 'react-typed';
import './Home.css';

const Home = () => {
    return (
        <section id="home" className="home-section">
            <Container>
                <Row className="align-items-center">
                    <Col sm={12} md={12} lg={6} className="text-content">
                        <h1>Hello, </h1>
                        <h2>I'm Mahesh Kunchala, </h2>
                        <h3>
                            a{' '}
                            <span className="highlight">
                                <ReactTyped
                                    strings={[
                                        'Full Stack Web Developer',
                                        'Competitive Programmer',
                                        'Tech Enthusiast',
                                        'Problem Solver'
                                    ]}
                                    typeSpeed={50}
                                    backSpeed={50}
                                    startDelay={500}
                                    backDelay={2000}
                                    loop={true}
                                />
                            </span>
                        </h3>
                    </Col>

                    <Col sm={12} md={12} lg={6} className="image-content">
                        {/* <img
                            src="https://img.freepik.com/free-photo/person-playing-3d-video-games-device_23-2151005751.jpg"
                            alt="Developer at work"
                            className="developer-image"
                        /> */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Home;
