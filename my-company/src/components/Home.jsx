function Home() {
  return (
    <div style={{ 
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '3rem',
        color: '#333',
        marginBottom: '20px'
      }}>Welcome to Our Company</h1>
      <p style={{
        fontSize: '1.2rem',
        lineHeight: '1.6',
        color: '#666',
        maxWidth: '600px',
        margin: '0 auto'
      }}>We are dedicated to delivering excellence in all our services. 
      Our team of professionals is committed to providing innovative solutions 
      that meet your business needs.</p>
      <div style={{
        marginTop: '40px',
        padding: '30px',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#333', marginBottom: '15px' }}>Why Choose Us?</h2>
        <p style={{ color: '#666', lineHeight: '1.6' }}>
          With over 30 years of experience, we bring expertise, reliability, 
          and innovation to every project we undertake.
        </p>
      </div>
    </div>
  );
}

export default Home;
