
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Hotel Luxe</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rooms">Rooms</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;
