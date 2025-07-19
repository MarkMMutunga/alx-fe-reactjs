function Services() {
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
      }}>Our Services</h1>
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        marginBottom: '30px'
      }}>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          <li style={{
            padding: '15px',
            borderBottom: '1px solid #eee',
            fontSize: '1.1rem',
            color: '#666'
          }}>
            <strong style={{ color: '#333' }}>Technology Consulting</strong> - 
            Expert guidance on technology strategy and implementation
          </li>
          <li style={{
            padding: '15px',
            borderBottom: '1px solid #eee',
            fontSize: '1.1rem',
            color: '#666'
          }}>
            <strong style={{ color: '#333' }}>Market Analysis</strong> - 
            Comprehensive market research and competitive analysis
          </li>
          <li style={{
            padding: '15px',
            fontSize: '1.1rem',
            color: '#666'
          }}>
            <strong style={{ color: '#333' }}>Product Development</strong> - 
            Full-cycle product development from concept to launch
          </li>
        </ul>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '25px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#333', marginBottom: '15px' }}>Why Our Services?</h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            We combine industry expertise with innovative approaches to deliver 
            solutions that drive real business results.
          </p>
        </div>
        <div style={{
          backgroundColor: 'white',
          padding: '25px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#333', marginBottom: '15px' }}>Custom Solutions</h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            Every business is unique. We tailor our services to meet your 
            specific needs and objectives.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
