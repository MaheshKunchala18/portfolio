import React from 'react';
import Navigationbar from './components/navbar/Navigationbar';
import Home from './components/home/Home';
import About from './components/about/About';
import ParticleAnimation from './animations/ParticleAnimation';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import CodingProfile from './components/coding_profile/CodingProfile';
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
    </div>
  );
}

export default App;
