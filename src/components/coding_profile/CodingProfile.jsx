import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import DOMPurify from 'dompurify';
import './CodingProfile.css';

const MarkdownDisplay = ({ markdownText }) => {
    const sanitizedMarkdown = DOMPurify.sanitize(markdownText);
    return (
        <ReactMarkdown className="markdown-content">{sanitizedMarkdown}</ReactMarkdown>
    );
};

const CodingProfile = () => {
    const [hoveredCardId, setHoveredCardId] = useState(null);

    const handleMouseEnter = (id) => {
        setHoveredCardId(id);
    };

    const handleMouseLeave = () => {
        setHoveredCardId(null);
    };

    const leetcodeCard = `![](https://leetcard.jacoblin.cool/maheshkunchala18?theme=dark&ext=heatmap&cache=0)`;
    const gfgCard = `![GeeksForGeeks stats](https://gfgstatscard.vercel.app/mahesh18_k)`;
    const codeforcesCard = `![](https://codeforces-readme-stats.vercel.app/api/card?username=Mahesh18&theme=github_dark&disable_animations=false&show_icons=true&force_username=true)`;
    const codechefCard = `![](https://coding-profile.vercel.app/api/check?username=gkey_mahesh&theme=Dark)`;

    const cards = [
        { id: 'leetcode', markdown: leetcodeCard, link: 'https://leetcode.com/u/maheshkunchala18/' },
        { id: 'gfg', markdown: gfgCard, link: 'https://www.geeksforgeeks.org/user/mahesh18_k/' },
        { id: 'codeforces', markdown: codeforcesCard, link: 'https://codeforces.com/profile/Mahesh18' },
        { id: 'codechef', markdown: codechefCard, link: 'https://www.codechef.com/users/gkey_mahesh' }
    ];

    return (
        <div className="coding-profile-section">
            <Container fluid>
                <h2 className="section-title fs-2">My Coding Profile</h2>
                <Row className="justify-content-center align-items-center">
                    {cards.map((card) => (
                        <Col md={6} lg={5} className="mx-5 my-5" key={card.id}>
                            <div 
                                className="card-container"
                                id={card.id}
                                onMouseEnter={() => handleMouseEnter(card.id)}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => window.open(card.link, "_blank", "noopener,noreferrer")}
                            >
                                <Card className="coding-card shadow-lg card-wrapper">
                                    <MarkdownDisplay markdownText={card.markdown} />
                                </Card>
                                
                                <div className={`card-overlay ${hoveredCardId === card.id ? 'visible' : ''}`}>
                                    <div className="overlay-content">
                                        <h5>Click to see the complete coding profile!</h5>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default CodingProfile;
