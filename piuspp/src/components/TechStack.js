import React from 'react';

const TechStack = () => {
  const technologies = ['React', 'Node.js', 'JavaScript', 'HTML', 'CSS', 'Python', 'MongoDB', 'Express'];

  return (
    <section style={{ padding: '50px', textAlign: 'center' }}>
      <h2>My Tech Stack</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '30px' }}>
        {technologies.map((tech, index) => (
          <div key={index} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', width: '150px' }}>
            <h3>{tech}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
