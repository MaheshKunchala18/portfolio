import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faHtml5, faCss3Alt, faNodeJs, faAws } from '@fortawesome/free-brands-svg-icons';
import { faGitAlt, faReact, faBootstrap, faGithub } from '@fortawesome/free-brands-svg-icons';
import cprogramming from '../../assets/c.svg';
import cpp from '../../assets/cplusplus.svg';
import express from '../../assets/express.svg';
import mongodb from '../../assets/mongodb.svg';
import mysql from '../../assets/mysql.svg';
import vscode from '../../assets/vscode.svg';
import reactbootstrap from '../../assets/reactbootstrap.svg';
import postman from '../../assets/postman.svg';
import python from '../../assets/python.svg';
import './Skills.css';


const skills = [
    { type: 'font-awesome', name: 'HTML', color: '#E34F26', icon: faHtml5 },
    { type: 'font-awesome', name: 'CSS', color: '#264DE4', icon: faCss3Alt },
    { type: 'font-awesome', name: 'JavaScript', color: '#F7DF1E', icon: faJsSquare },
    { type: 'font-awesome', name: 'React.js', color: '#61DAFB', icon: faReact },
    { type: 'font-awesome', name: 'Node.js', color: '#68A063', icon: faNodeJs },
    { type: 'assets', name: 'Express.js', color: '#ffffff', icon: express },
    { type: 'assets', name: 'C++', color: '#004482', icon: cpp },
    { type: 'assets', name: 'C', color: '#3949ab', icon: cprogramming },
    { type: 'assets', name: 'Python', color: '#3776AB', icon: python },
    { type: 'assets', name: 'MySQL', color: '#4479A1', icon: mysql },
    { type: 'assets', name: 'MongoDB', color: '#47A248', icon: mongodb },
    { type: 'font-awesome', name: 'Bootstrap', color: '#712cf9', icon: faBootstrap },
    { type: 'assets', name: 'React-Bootstrap', color: '#61DAFB', icon: reactbootstrap },
    { type: 'font-awesome', name: 'AWS', color: '#FF9900', icon: faAws },
    { type: 'assets', name: 'VS Code', color: '#007ACC', icon: vscode },
    { type: 'font-awesome', name: 'Git', color: '#F05032', icon: faGitAlt },
    { type: 'font-awesome', name: 'Github', color: '#ffffff', icon: faGithub },
    { type: 'assets', name: 'Postman', color: '#FF6C37', icon: postman },
];


const Skills = () => {
    return (
        <div className="skills-section">
            <Container>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, y: 50, scale: 0.9 },
                        visible: { opacity: 1, y: 0, scale: 1 },
                    }}
                >
                    <h2 className="text-center mt-2">My Technical Skills</h2>
                    <Row className="justify-content-center mx-2">
                        {skills.map((skill, index) => (
                            <Col
                                key={index}
                                xs={3}
                                sm={3}
                                md={3}
                                lg={2}
                                className="d-flex justify-content-center mb-2 pt-3"
                            >
                                <div className="skill-container text-center">
                                    <motion.div
                                        className="skill-bubble"
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        style={{
                                            backgroundColor: `${skill.color}10`,
                                            boxShadow: `0 4px 15px ${skill.color}50`,
                                            '--bubble-color': skill.color,
                                        }}
                                    >
                                        {skill.type === 'font-awesome' ?
                                            <FontAwesomeIcon
                                                icon={skill.icon}
                                                color={skill.color}
                                                className='skill-icon'
                                            /> :
                                            <img className='skill-icon' src={skill.icon} alt="skillIcon" />
                                        }
                                    </motion.div>
                                    <p className="skill-name mt-2">{skill.name}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </motion.div>
            </Container>
        </div>
    );
};

export default Skills;
