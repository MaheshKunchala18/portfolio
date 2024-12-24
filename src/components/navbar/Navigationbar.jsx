import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navigationbar.css';

const Navigationbar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
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
                        <Nav.Link href="#home" onClick={() => setExpanded(false)}>
                            Home
                        </Nav.Link>
                        <Nav.Link href="#about" onClick={() => setExpanded(false)}>
                            About
                        </Nav.Link>
                        <Nav.Link href="#skills" onClick={() => setExpanded(false)}>
                            Skills
                        </Nav.Link>
                        <Nav.Link href="#projects" onClick={() => setExpanded(false)}>
                            Projects
                        </Nav.Link>
                        <Nav.Link href="#coding-profile" onClick={() => setExpanded(false)}>
                            Coding Profile
                        </Nav.Link>
                        <Nav.Link href="#contact" onClick={() => setExpanded(false)}>
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigationbar;
