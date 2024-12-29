import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
    return (
        <section id="contact" className="contact-container">
            {/* Contact Header */}
            <div className="contact-heading">
                <h2>Get in Touch</h2>
                <p>Let's connect! Feel free to reach out on any platform below.</p>
            </div>

            {/* Social Links */}
            <div className="social-links">
                {/* LinkedIn */}
                <a
                    href="https://linkedin.com/in/mahesh-kunchala-23854624b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <FaLinkedin className="linkedin" />
                </a>
                {/* GitHub */}
                <a
                    href="https://github.com/MaheshKunchala18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <FaGithub className="github" />
                </a>
                {/* Email */}
                <a
                    href="mailto:maheshkunchala18@gmail.com"
                    className="social-icon"
                >
                    <FaEnvelope className="email" />
                </a>
            </div>

            {/* Footer */}
            <footer className="contact-footer">
                <p>
                    © {new Date().getFullYear()} Made by <strong>Mahesh Kunchala</strong>
                </p>
            </footer>
        </section>
    );
};

export default Contact;
