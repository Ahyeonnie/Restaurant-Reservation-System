import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './styles/Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} flex items-center justify-between px-6 py-4`}>
      <p className='text-xl font-bold'>
        QuickBite
      </p>
      <ul className='hidden md:flex space-x-6'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <button className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-ring">
        <img 
          src="../assets/hamburger.png" 
          alt="Menu" 
          className="h-6 w-6"
        />
      </button>
    </nav>
  );
}
