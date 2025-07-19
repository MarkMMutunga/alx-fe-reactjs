import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '1rem',
      marginBottom: '20px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{ color: 'white', margin: 0 }}>Our Company</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/" style={{
            color: 'white',
            textDecoration: 'none',
            padding: '10px 15px',
            borderRadius: '5px',
            transition: 'background-color 0.3s'
          }}>Home</Link>
          <Link to="/about" style={{
            color: 'white',
            textDecoration: 'none',
            padding: '10px 15px',
            borderRadius: '5px',
            transition: 'background-color 0.3s'
          }}>About</Link>
          <Link to="/services" style={{
            color: 'white',
            textDecoration: 'none',
            padding: '10px 15px',
            borderRadius: '5px',
            transition: 'background-color 0.3s'
          }}>Services</Link>
          <Link to="/contact" style={{
            color: 'white',
            textDecoration: 'none',
            padding: '10px 15px',
            borderRadius: '5px',
            transition: 'background-color 0.3s'
          }}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
