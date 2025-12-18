import React from 'react';

const Projects = () => {
  return (
    <section style={{ padding: '50px', textAlign: 'center' }}>
      <h2>My Projects</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', width: '300px' }}>
          <h3>Project 1</h3>
          <p>A web application built with React and Node.js.</p>
        </div>
        <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', width: '300px' }}>
          <h3>Project 2</h3>
          <p>An e-commerce platform using modern web technologies.</p>
        </div>
        <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', width: '300px' }}>
          <h3>Project 3</h3>
          <p>A mobile-responsive portfolio website.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
