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
          <p><a href="mailto:hr@icc-collab.com" style={{color: 'var(--color-light-stone)', textDecoration: 'none'}}>hr@icc-collab.com</a></p>
          <p><a href="tel:+201031158933" style={{color: 'var(--color-light-stone)', textDecoration: 'none'}}>+201031158933</a></p>
          <Link to="/quote" className="btn btn-outline footer-btn">Request a Quote</Link>
        </div>
      </div>
      <div className="footer-bottom container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', width: '100%', gap: '1rem' }}>
          <p>&copy; {new Date().getFullYear()} ModuBuild. All rights reserved.</p>
          <p style={{ textAlign: 'right' }}>
            Developed by <a href="https://www.icc-collab.com/" target="_blank" rel="noopener noreferrer" style={{color: 'var(--color-muted-bronze)', fontWeight: 'bold', textDecoration: 'none'}}>ICC company</a>
            <br/><span style={{fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--color-light-stone)'}}>You imagine, We build</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
