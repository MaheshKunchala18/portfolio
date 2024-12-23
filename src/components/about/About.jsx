import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 992);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Container fluid className="about-section m-0 pt-5" id="about">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <h2 className="text-center mb-0">About Me</h2>
                <Row className="align-items-center">
                    {!isSmallScreen && (
                        <Col
                            lg={5}
                            md={12}
                            sm={0}
                            className="my-4 text-center position-relative"
                        >
                            <Image
                                src="https://img.freepik.com/premium-vector/programmer-man-is-working-with-laptop-seat_1023984-34870.jpg?w=740"
                                alt="Developer"
                                roundedCircle
                                className="about-image"
                            />
                            <div className="about-image-overlay"></div>
                        </Col>
                    )}

                    <Col lg={7} md={12} sm={12} className="my-4">
                        <div className="about-text">
                            <p>
                                Hi, I'm <strong>Mahesh Kunchala,</strong> a B.Tech student in
                                Computer Science at SRM University AP.

                                As a passionate learner, I am deeply enthusiastic about {" "}
                                <strong>Full Stack Web Development</strong> and {" "}
                                <strong>Competitive Programming</strong>. I enjoy solving complex problems
                                and building efficient, user-friendly solutions. My technical journey spans
                                from building responsive applications with the <strong>MERN Stack</strong>
                                {" "} to exploring cutting-edge{" "}<strong>AI/ML technologies</strong>.
                            </p>
                            <p>
                                I am proficient in programming languages like{" "}
                                <strong>C, C++, Python,</strong> and <strong>SQL</strong>. With
                                hands-on experience in frameworks like{" "}
                                <strong>React.js</strong> and <strong>Node.js</strong>, I
                                specialize in developing responsive, user-centric web
                                applications.
                            </p>
                            <p>
                                <strong>Future Goals:</strong> My aim is to work on innovative
                                projects that merge the best of web development and AI
                                technologies, creating meaningful solutions for real-world
                                challenges.
                            </p>
                        </div>
                    </Col>
                </Row>
            </motion.div>
        </Container>
    );
};

export default About;
