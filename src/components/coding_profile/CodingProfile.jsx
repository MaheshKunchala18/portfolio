import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import DOMPurify from 'dompurify';
import { motion } from 'framer-motion';
import './CodingProfile.css';

const MarkdownDisplay = ({ markdownText }) => {
    const sanitizedMarkdown = DOMPurify.sanitize(markdownText);

    return (
        <ReactMarkdown className="markdown-content">{sanitizedMarkdown}</ReactMarkdown>
    );
};

const CodingProfile = () => {
    const leetcodeCard = `![](https://leetcard.jacoblin.cool/maheshkunchala18?theme=dark&ext=heatmap)`;
    const gfgCard = `![GeeksForGeeks stats](https://gfgstatscard.vercel.app/mahesh18_k)`;
    const codeforcesCard = `![](https://codeforces-readme-stats.vercel.app/api/card?username=Mahesh18&theme=algolia&disable_animations=false&show_icons=true&force_username=true)`;
    const codechefCard = `![](https://coding-profile.vercel.app/api/check?username=gkey_mahesh&theme=Dark)`;

    return (
        <section className="coding-profile-section" id="coding-profile">
            <Container fluid>
                <h2 className="section-title">My Coding Profile</h2>
                <Row className="justify-content-center align-items-center">
                    {/* LeetCode Card */}
                    <Col md={6} lg={5} className="my-5">
                        <motion.div
                            className="card-wrapper"
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Card className="coding-card shadow-lg">
                                <MarkdownDisplay markdownText={leetcodeCard} />
                            </Card>
                        </motion.div>
                    </Col>

                    {/* GFG Card */}
                    <Col md={6} lg={5} className="my-5">
                        <motion.div
                            className="card-wrapper"
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Card className="coding-card shadow-lg">
                                <MarkdownDisplay markdownText={gfgCard} />
                            </Card>
                        </motion.div>
                    </Col>

                    {/* CodeForces Card */}
                    <Col md={6} lg={5} className="my-5">
                        <motion.div
                            className="card-wrapper"
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Card className="coding-card shadow-lg">
                                <MarkdownDisplay markdownText={codeforcesCard} />
                            </Card>
                        </motion.div>
                    </Col>

                    {/* CodeChef Card */}
                    <Col md={6} lg={5} className="my-5">
                        <motion.div
                            className="card-wrapper"
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Card className="coding-card shadow-lg">
                                <MarkdownDisplay markdownText={codechefCard} />
                            </Card>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CodingProfile;
