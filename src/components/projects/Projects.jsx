import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";
import elitemart_project from "../../assets/elitemart_project.png";
import blogverse_project from "../../assets/blogverse_project.png";
import taskmaster_project from "../../assets/taskmaster_project.png";
import "./Projects.css";

const projects = [
    {
        id: 1,
        title: "EliteMart",
        description: "EliteMart is a E-Commerce Website with features such as product listings, category pages and dynamic shopping cart",
        image: elitemart_project,
        previewLink: "https://elitemartwebapp.netlify.app/",
        githubLink: "https://github.com/MaheshKunchala18/elitemart-frontend",
    },
    {
        id: 2,
        title: "BlogVerse",
        description: "Blogverse is a blog website featuring a dynamic home page that displays trending and top-rated posts",
        image: blogverse_project,
        previewLink: "https://blogversewebapp.netlify.app/",
        githubLink: "https://github.com/MaheshKunchala18/blogverse-frontend",
    },
    {
        id: 3,
        title: "TaskMaster",
        description: "TaskMaster is a task management system with features like task creation, editing, deletion and categorization",
        image: taskmaster_project,
        previewLink: "https://taskmasterwebapp.netlify.app/",
        githubLink: "https://github.com/MaheshKunchala18/taskmaster-frontend",
    },
];

const Projects = () => {
    return (
        <div className="projects-container">
            <Container fluid>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="fs-2 text-center mt-2 mb-4">My Projects</h2>
                    <Row className="justify-content-center align-items-center">
                        {projects.map((project) => (
                            <Col xs={10} sm={8} md={5} lg={3} className="mx-4 my-5" key={project.id}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="motion-card"
                                >
                                    <Card className="project-card">
                                        <div className="image-container">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="project-image"
                                            />
                                        </div>
                                        <Card.Body>
                                            <Card.Title>{project.title}</Card.Title>
                                            <Card.Text>{project.description}</Card.Text>
                                            <Button
                                                variant="primary"
                                                href={project.previewLink}
                                                target="_blank"
                                                className="overlay-btn"
                                            >
                                                🌐 Live Link
                                            </Button>
                                            <Button
                                                variant="dark"
                                                href={project.githubLink}
                                                target="_blank"
                                                className="overlay-btn"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faGithub}
                                                    className="mx-2"
                                                />
                                                Github
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </motion.div>
            </Container>
        </div>
    );
};

export default Projects;
