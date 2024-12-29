import React from 'react';
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
  return (
    <div className="App">
      <Navigationbar />
      <ParticleAnimation>
        <Home />
      </ParticleAnimation>
      <About />
      <Skills />
      <Projects />
      <CodingProfile />
      <Contact />
    </div>
  );
}

export default App;
