function Footer() {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: 'white',
      padding: '40px 20px',
      marginTop: '50px',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px',
        marginBottom: '30px'
      }}>
        <div>
          <h3 style={{ marginBottom: '15px', color: '#fff' }}>Our Company</h3>
          <p style={{ lineHeight: '1.6', color: '#ccc' }}>
            Delivering excellence in technology, marketing, and consultancy services since 1990.
          </p>
        </div>
        <div>
          <h3 style={{ marginBottom: '15px', color: '#fff' }}>Quick Links</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="/" style={{ color: '#ccc', textDecoration: 'none' }}>Home</a>
            <a href="/about" style={{ color: '#ccc', textDecoration: 'none' }}>About</a>
            <a href="/services" style={{ color: '#ccc', textDecoration: 'none' }}>Services</a>
            <a href="/contact" style={{ color: '#ccc', textDecoration: 'none' }}>Contact</a>
          </div>
        </div>
        <div>
          <h3 style={{ marginBottom: '15px', color: '#fff' }}>Contact Info</h3>
          <div style={{ color: '#ccc', lineHeight: '1.6' }}>
            <p>📧 info@ourcompany.com</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>📍 123 Business Ave, Suite 100</p>
          </div>
        </div>
      </div>
      <div style={{
        borderTop: '1px solid #555',
        paddingTop: '20px',
        fontSize: '14px',
        color: '#ccc'
      }}>
        <p>&copy; 2024 Our Company. All rights reserved. | Designed with ❤️</p>
      </div>
    </footer>
  );
}

export default Footer;
