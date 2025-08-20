import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to Advanced React Router Demo</h1>
      <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>
        This application demonstrates advanced routing techniques including:
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9'
        }}>
          <h3>🏠 Nested Routes</h3>
          <p>Profile component with nested routes for Details and Settings</p>
        </div>
        
        <div style={{
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9'
        }}>
          <h3>🔗 Dynamic Routes</h3>
          <p>Blog posts and user profiles with variable URLs</p>
        </div>
        
        <div style={{
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9'
        }}>
          <h3>🔒 Protected Routes</h3>
          <p>Authentication-required routes with login protection</p>
        </div>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h2>Quick Navigation</h2>
        <p>Use the navigation menu above to explore different routing features!</p>
      </div>
    </div>
  );
};

export default Home;
