import React, { useState, useEffect } from 'react';
import Navigationbar from './components/navbar/Navigationbar';
import ParticleAnimation from './animations/ParticleAnimation';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import CodingProfile from './components/coding_profile/CodingProfile';
import Contact from './components/contact/Contact';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="App">
      <Navigationbar activeSection={activeSection} />
      <ParticleAnimation>
        <section id="home"><Home /></section>
      </ParticleAnimation>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="coding-profile"><CodingProfile /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
