import React from 'react';
import Navigationbar from './components/navbar/Navigationbar';
import Home from './components/home/Home';
import About from './components/about/About';
import ParticleAnimation from './animations/ParticleAnimation';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
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
    </div>
  );
}

export default App;
