import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>About Advanced React Router</h1>
      
      <div style={{ lineHeight: '1.6', fontSize: '16px' }}>
        <p>
          This project demonstrates advanced routing techniques using React Router DOM. 
          It showcases how to build complex navigation structures that are common in 
          modern web applications.
        </p>

        <h2>Features Implemented:</h2>
        <ul style={{ marginLeft: '20px' }}>
          <li><strong>Nested Routes:</strong> Profile section with sub-routes for details and settings</li>
          <li><strong>Dynamic Routes:</strong> Blog posts and user profiles with parameter-based URLs</li>
          <li><strong>Protected Routes:</strong> Authentication-based route protection</li>
          <li><strong>Route Guards:</strong> Automatic redirection for unauthorized access</li>
          <li><strong>Navigation Links:</strong> Active link styling and seamless navigation</li>
        </ul>

        <h2>Technical Stack:</h2>
        <ul style={{ marginLeft: '20px' }}>
          <li>React 18+ with Vite</li>
          <li>React Router DOM v6</li>
          <li>Modern JavaScript (ES6+)</li>
          <li>CSS-in-JS for styling</li>
        </ul>

        <h2>Authentication System:</h2>
        <p>
          The application includes a simulated authentication system that demonstrates 
          how to protect routes and manage user sessions. Users can log in and out to 
          test the protected route functionality.
        </p>
      </div>
    </div>
  );
};

export default About;
