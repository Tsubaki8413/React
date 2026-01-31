import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="inner" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingTop: '15px',
        paddingBottom: '15px'
      }}>
        <h1 style={{ fontSize: '1.5rem' }}>My Portfolio</h1>
        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Top</Link></li>
          <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
          <li><Link to="/works" style={{ color: 'white', textDecoration: 'none' }}>Works</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;