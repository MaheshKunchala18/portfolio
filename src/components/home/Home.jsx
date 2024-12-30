import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactTyped } from 'react-typed';
import './Home.css';

const Home = () => {
    return (
        <div className="home-section">
            <Container>
                <Row className="align-items-center">
                    <Col sm={12} md={12} lg={6} className="text-content">
                        <h1 className="fs-1">Hello, </h1>
                        <h1 className="fs-1">I'm Mahesh Kunchala, </h1>
                        <h3 className="fs-1">
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
        </div>
    );
};

export default Home;
