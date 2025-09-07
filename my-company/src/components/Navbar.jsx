import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      padding: '15px 30px',
      background: '#1e1e1e',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>About</Link>
      <Link to="/services" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
