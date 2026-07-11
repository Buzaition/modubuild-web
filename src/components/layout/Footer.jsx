import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h2 className="footer-logo">ModuBuild</h2>
          <p className="footer-desc">Architectural Precision. Refined Luxury. Seamlessly integrating premium construction, bespoke interior design, and immersive 3D previews.</p>
        </div>
        
        <div className="footer-links">
          <h3>Company</h3>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>
        
        <div className="footer-links">
          <h3>Platform</h3>
          <Link to="/3d-studio">3D Studio</Link>
          <Link to="/materials">Materials Library</Link>
          <Link to="/client-dashboard">Client Dashboard</Link>
          <Link to="/admin-dashboard">Admin Dashboard</Link>
        </div>
        
        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <p>hello@modubuild.com</p>
          <p>+1 (800) 123-4567</p>
          <Link to="/quote" className="btn btn-outline footer-btn">Request a Quote</Link>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} ModuBuild. All rights reserved.</p>
      </div>
    </footer>
  );
}
