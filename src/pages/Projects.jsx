import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Projects.css';

const projects = [
  { id: 1, title: 'StoneView Modern Villa', category: 'Residential', image: '/images/villa-exterior.webp', desc: 'A stunning exterior redesign integrating natural stone cladding and expansive glass panels.' },
  { id: 2, title: 'Cairo Loft Apartment', category: 'Interior', image: '/images/living-room-interior.webp', desc: 'Complete interior renovation featuring bespoke furniture and premium marble finishes.' },
  { id: 3, title: 'Minimal Kitchen Remodel', category: 'Renovation', image: '/images/kitchen.webp', desc: 'Modern luxury kitchen with smart integrations and sleek charcoal cabinetry.' },
  { id: 4, title: 'Executive Office Renovation', category: 'Commercial', image: '/images/office-renovation.webp', desc: 'A sophisticated corporate space designed for productivity and executive elegance.' },
  { id: 5, title: 'North Coast Summer House', category: 'Residential', image: '/images/apartment-interior.webp', desc: 'Light, airy, and luxurious seaside getaway with warm beige textures.' },
  { id: 6, title: 'Modular Garden Studio', category: 'Modular', image: '/images/modular-studio.webp', desc: 'A cutting-edge standalone modular structure built for creative focus.' },
];

export default function Projects() {
  return (
    <div className="projects-page section-padding container">
      <div className="text-center mb-xl">
        <h1>Our Portfolio</h1>
        <p className="subtitle mx-auto">A showcase of our finest construction, renovation, and interior design projects.</p>
      </div>

      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="portfolio-card fade-in">
            <Link to={`/projects/${project.id}`} className="portfolio-img-wrapper">
              <img src={project.image} alt={project.title} />
              <div className="portfolio-overlay">
                <span className="btn btn-outline border-white color-white">View Details</span>
              </div>
            </Link>
            <div className="portfolio-info">
              <span className="portfolio-category">{project.category}</span>
              <h3><Link to={`/projects/${project.id}`}>{project.title}</Link></h3>
              <p>{project.desc}</p>
              <Link to={`/projects/${project.id}`} className="read-more">
                Explore Project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
