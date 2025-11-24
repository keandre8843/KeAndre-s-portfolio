import './App.css';
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Header />
      <About />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      </>
  );
}

export default App;
