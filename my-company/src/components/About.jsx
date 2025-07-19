function About() {
  return (
    <div style={{ 
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        color: '#333',
        marginBottom: '30px',
        textAlign: 'center'
      }}>About Us</h1>
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        marginBottom: '30px'
      }}>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: '#666',
          marginBottom: '20px'
        }}>
          Our company has been providing top-notch services since 1990. We specialize 
          in various fields including technology, marketing, and consultancy.
        </p>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: '#666'
        }}>
          Founded with a vision to transform businesses through innovative solutions, 
          we have grown from a small startup to a leading company in our industry. 
          Our success is built on strong relationships with our clients and a 
          commitment to excellence in everything we do.
        </p>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#333', marginBottom: '10px' }}>Our Mission</h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            To deliver exceptional value to our clients through innovative solutions.
          </p>
        </div>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#333', marginBottom: '10px' }}>Our Vision</h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            To be the leading company in providing comprehensive business solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
