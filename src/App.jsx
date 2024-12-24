import React from 'react';
import Navigationbar from './components/navbar/Navigationbar';
import Home from './components/home/Home';
import About from './components/about/About';
import ParticleAnimation from './animations/ParticleAnimation';
import './App.css';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <ParticleAnimation>
        <Home />
      </ParticleAnimation>
      <About />
      <Skills />
    </div>
  );
}

export default App;
