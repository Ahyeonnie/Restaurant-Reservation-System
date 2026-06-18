import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './styles/Navbar.css';
import hamburgerIcon from "../assets/hamburger.png";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} flex items-center justify-between px-6 py-4`}>
      <div className="container">
        <p className='text-xl font-bold text-white'>
          QuickBite
        </p>
          <ul className= {`nav-links ${ isOpen ? "flex flex-col space-y-4 transition-all duration-300" : "hidden"} md:flex md:space-x-6`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        <button className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-ring" onClick = {toggleMenu}>
          <img 
            src={hamburgerIcon} 
            alt="Menu" 
            className="h-9.5 w-9.5 object-contain block"
          />
        </button>
      </div> 
    </nav>
  );
}
