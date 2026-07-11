import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > 100 && currentScrollY > lastScrollY.current) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: '3D Studio', path: '/3d-studio' },
    { name: 'Projects', path: '/projects' },
    { name: 'Materials', path: '/materials' },
  ];

  return (
    <header className={clsx('navbar', isScrolled && 'navbar-scrolled', isHidden && 'navbar-hidden')}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          ModuBuild
        </Link>
        
        <nav className="navbar-links desktop-only">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="nav-link">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="navbar-actions desktop-only">
          <Link to="/quote" className="btn btn-primary">Start Your Project</Link>
        </div>

        <button 
          className="mobile-menu-toggle mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu glass-panel">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="mobile-nav-link">
              {link.name}
            </Link>
          ))}
          <Link to="/quote" className="btn btn-primary mobile-cta">Start Your Project</Link>
        </div>
      )}
    </header>
  );
}
