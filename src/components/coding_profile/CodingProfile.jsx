// import React, { useState } from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import ReactMarkdown from 'react-markdown';
// import DOMPurify from 'dompurify';
// import ReactCardFlip from 'react-card-flip';
// import './CodingProfile.css';

// const MarkdownDisplay = ({ markdownText }) => {
//     const sanitizedMarkdown = DOMPurify.sanitize(markdownText);

//     return (
//         <ReactMarkdown className="markdown-content">{sanitizedMarkdown}</ReactMarkdown>
//     );
// };

// const CodingProfile = () => {
//     const [flippedCards, setFlippedCards] = useState({});

//     const toggleFlip = (id) => {
//         setFlippedCards((prevState) => ({
//             ...prevState,
//             [id]: !prevState[id],
//         }));
//     };

//     const leetcodeCard = `![](https://leetcard.jacoblin.cool/maheshkunchala18?theme=dark&ext=heatmap)`;
//     const gfgCard = `![GeeksForGeeks stats](https://gfgstatscard.vercel.app/mahesh18_k)`;
//     const codeforcesCard = `![](https://codeforces-readme-stats.vercel.app/api/card?username=Mahesh18&theme=github_dark&disable_animations=false&show_icons=true&force_username=true)`;
//     const codechefCard = `![](https://coding-profile.vercel.app/api/check?username=gkey_mahesh&theme=Dark)`;

//     const cards = [
//         { id: 'leetcode', markdown: leetcodeCard, link: 'https://leetcode.com/u/maheshkunchala18/' },
//         { id: 'gfg', markdown: gfgCard, link: 'https://www.geeksforgeeks.org/user/mahesh18_k/' },
//         { id: 'codeforces', markdown: codeforcesCard, link: 'https://codeforces.com/profile/Mahesh18' },
//         { id: 'codechef', markdown: codechefCard, link: 'https://www.codechef.com/users/gkey_mahesh' }
//     ];

//     return (
//         <section className="coding-profile-section" id="coding-profile">
//             <Container fluid>
//                 <h2 className="section-title">My Coding Profile</h2>
//                 <Row className="justify-content-center align-items-center">

//                     {cards.map((card) => (
//                         <Col md={6} lg={5} className="mx-5 my-5" key={card.id}>
//                             <ReactCardFlip isFlipped={flippedCards[card.id] || false} flipDirection="horizontal">
//                                 {/* Front Side */}
//                                 <Card
//                                     className="coding-card shadow-lg card-wrapper"
//                                     onMouseEnter={() => toggleFlip(card.id)}
//                                     style={{ cursor: "pointer" }}
//                                 >
//                                     <MarkdownDisplay markdownText={card.markdown} />
//                                 </Card>

//                                 {/* Back Side */}
//                                 <Card
//                                     className="coding-card back-card shadow-lg card-wrapper"
//                                     onMouseLeave={() => toggleFlip(card.id)}
//                                     onClick={() => window.open(card.link, "_blank", "noopener,noreferrer")}
//                                     style={{ cursor: "pointer" }}
//                                 >
//                                     <div className="back-content">
//                                         <h5>Click to see the complete coding profile!</h5>
//                                     </div>
//                                 </Card>
//                             </ReactCardFlip>
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//         </section>
//     );
// };

// export default CodingProfile;






























import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import DOMPurify from 'dompurify';
import ReactCardFlip from 'react-card-flip';
import './CodingProfile.css';

const MarkdownDisplay = ({ markdownText }) => {
    const sanitizedMarkdown = DOMPurify.sanitize(markdownText);
    return (
        <ReactMarkdown className="markdown-content">{sanitizedMarkdown}</ReactMarkdown>
    );
};

const CodingProfile = () => {
    const [flippedCardId, setFlippedCardId] = useState(null); // Tracks the currently flipped card ID

    const handleMouseEnter = (id) => {
        setFlippedCardId(id); // Flip the card on mouse enter
    };

    const handleMouseLeave = (id) => {
        // Reset the flipped state on mouse leave if the current card matches
        if (flippedCardId === id) {
            setFlippedCardId(null);
        }
    };

    useEffect(() => {
        const handleMouseLeaveWindow = (event) => {
            // Ensure the card flips back to the front side when the mouse leaves the window
            if (!event.relatedTarget) {
                setFlippedCardId(null);
            }
        };

        window.addEventListener('mouseleave', handleMouseLeaveWindow);

        return () => {
            window.removeEventListener('mouseleave', handleMouseLeaveWindow);
        };
    }, []);

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
        <section className="coding-profile-section" id="coding-profile">
            <Container fluid>
                <h2 className="section-title">My Coding Profile</h2>
                <Row className="justify-content-center align-items-center">
                    {cards.map((card) => (
                        <Col md={6} lg={5} className="mx-5 my-5" key={card.id}>
                            <ReactCardFlip isFlipped={flippedCardId === card.id} flipDirection="horizontal">
                                {/* Front Side */}
                                <Card
                                    className="coding-card shadow-lg card-wrapper"
                                    onMouseEnter={() => handleMouseEnter(card.id)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <MarkdownDisplay markdownText={card.markdown} />
                                </Card>

                                {/* Back Side */}
                                <Card
                                    className="coding-card back-card shadow-lg card-wrapper"
                                    onMouseLeave={() => handleMouseLeave(card.id)}
                                    onClick={() => window.open(card.link, "_blank", "noopener,noreferrer")}
                                    style={{ cursor: "pointer" }}
                                >
                                    <div className="back-content">
                                        <h5>Click to see the complete coding profile!</h5>
                                    </div>
                                </Card>
                            </ReactCardFlip>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default CodingProfile;
