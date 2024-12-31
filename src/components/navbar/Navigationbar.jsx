import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import './Navigationbar.css';

const Navigationbar = ({ activeSection }) => {
    const [expanded, setExpanded] = useState(false);

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'coding-profile', label: 'Coding Profile' },
        { id: 'contact', label: 'Contact' }
    ];

    const navbarAnimation = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const navLinkHoverAnimation = {
        scale: 1.05,
        color: "#3498db"
    };

    return (
        <motion.nav
            variants={navbarAnimation}
            initial="hidden"
            animate="visible"
        >
            <Navbar expand="lg" fixed="top" expanded={expanded}>
                <Container>
                    <Navbar.Brand href="/">MK</Navbar.Brand>

                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        onClick={() => setExpanded(!expanded)}
                    >
                        <FontAwesomeIcon
                            className={`bar-icon ${expanded ? 'open' : ''}`}
                            icon={expanded ? faTimes : faBars}
                        />
                    </Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto text-center">
                            {navLinks.map((link) => (
                                <motion.div
                                    key={link.id}
                                    whileHover={navLinkHoverAnimation}
                                >
                                    <Nav.Link
                                        href={`#${link.id}`}
                                        onClick={() => setExpanded(false)}
                                        className={activeSection === link.id ? 'active-link' : ''}
                                    >
                                        {link.label}
                                    </Nav.Link>
                                </motion.div>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </motion.nav>
    );
};

export default Navigationbar;
