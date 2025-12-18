import React from 'react';

const Contact = () => {
  return (
    <section style={{ padding: '50px', textAlign: 'center' }}>
      <h2>Contact Me</h2>
      <p>Get in touch with me!</p>
      <form style={{ maxWidth: '400px', margin: '0 auto' }}>
        <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ddd', borderRadius: '4px' }} />
        <input type="email" placeholder="Your Email" style={{ width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ddd', borderRadius: '4px' }} />
        <textarea placeholder="Your Message" style={{ width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ddd', borderRadius: '4px', height: '100px' }}></textarea>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
