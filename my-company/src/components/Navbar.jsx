import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '1rem'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        <Link to="/" style={{
          color: 'white',
          textDecoration: 'none',
          padding: '10px 15px'
        }}>Home</Link>
        <Link to="/about" style={{
          color: 'white',
          textDecoration: 'none',
          padding: '10px 15px'
        }}>About</Link>
        <Link to="/services" style={{
          color: 'white',
          textDecoration: 'none',
          padding: '10px 15px'
        }}>Services</Link>
        <Link to="/contact" style={{
          color: 'white',
          textDecoration: 'none',
          padding: '10px 15px'
        }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
