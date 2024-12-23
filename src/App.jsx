import React from 'react';
import Navigationbar from './components/navbar/Navigationbar';
import Home from './components/home/Home';
import About from './components/about/About';
import ParticleAnimation from './animations/ParticleAnimation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <ParticleAnimation>
        <Home />
      </ParticleAnimation>
      <About />
    </div>
  );
}

export default App;
