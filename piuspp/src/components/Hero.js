import React from 'react';

const Hero = () => {
  return (
    <section style={{ backgroundColor: '#f8f9fa', padding: '100px 50px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Welcome to My Portfolio</h1>
      <p style={{ fontSize: '1.2rem', color: '#666' }}>I'm Pius Pumpuni, a passionate full-stack developer creating innovative web solutions.</p>
      <button style={{ padding: '15px 30px', fontSize: '1.1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '30px' }}>View My Work</button>
    </section>
  );
};

export default Hero;
