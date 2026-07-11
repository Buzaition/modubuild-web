import { Link } from 'react-router-dom';
import RealModelViewer from '../components/ui/RealModelViewer';

export default function ProjectDetails() {
  return (
    <div className="project-details-page pt-lg pb-xl">
      <div className="container section-padding">
        <Link to="/projects" className="btn btn-outline mb-lg text-sm">&larr; Back to Portfolio</Link>
        <div className="grid-2 align-center mb-xl">
          <div>
            <h1 className="mb-sm">StoneView Modern Villa</h1>
            <p className="subtitle mb-md">A stunning exterior redesign integrating natural stone cladding and expansive glass panels to create a seamless indoor-outdoor living experience.</p>
            <div className="grid-2 gap-sm mb-md text-sm">
              <div><strong>Client:</strong> Private</div>
              <div><strong>Location:</strong> North Coast</div>
              <div><strong>Service:</strong> Exterior & Renovation</div>
              <div><strong>Timeline:</strong> 8 Months</div>
            </div>
            <Link to="/quote" className="btn btn-primary mt-sm">Start a Similar Project</Link>
          </div>
          <div style={{ height: '400px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <RealModelViewer 
              src="/models/modern-villa.glb" 
              poster="/model-posters/modern-villa-poster.webp" 
              alt="StoneView Modern Villa"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
