import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
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
                        {navLinks.map((link) => (
                            <Nav.Link
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={() => setExpanded(false)}
                                className={activeSection === link.id ? 'active-link' : ''}
                            >
                                {link.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigationbar;
