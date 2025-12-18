import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import TechStack from '../components/TechStack';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />
    </div>
  );
};

export default Home;
