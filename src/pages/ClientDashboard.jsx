import RealModelViewer from '../components/ui/RealModelViewer';

export default function ClientDashboard() {
  return (
    <div className="dashboard-page bg-ivory min-h-screen pt-lg pb-xl">
      <div className="container mt-lg">
        <div className="flex-between mb-lg">
          <h1>Client Dashboard Preview</h1>
          <div className="badge bg-bronze color-white px-md py-sm">Live Demo Mode</div>
        </div>
        
        <div className="grid-3 mb-lg">
          <div className="card">
            <h4 className="color-concrete-gray mb-xs">Active Project</h4>
            <h2>Cairo Loft Renovation</h2>
          </div>
          <div className="card">
            <h4 className="color-concrete-gray mb-xs">Current Phase</h4>
            <h2>Phase 3: Finishing</h2>
          </div>
          <div className="card">
            <h4 className="color-concrete-gray mb-xs">Budget Status</h4>
            <h2 className="color-bronze">On Track</h2>
          </div>
        </div>

        <div className="grid-2">
          <div className="card">
            <h3 className="mb-md">Timeline & Progress</h3>
            <div className="progress-bar mb-sm bg-light-stone">
              <div className="progress-fill" style={{width: '65%'}}></div>
            </div>
            <p className="text-right text-sm font-bold mb-md">65% Complete</p>
            
            <ul className="service-list">
              <li className="color-concrete-gray"><s>Phase 1: Demolition & Planning (Completed)</s></li>
              <li className="color-concrete-gray"><s>Phase 2: Electrical & Plumbing (Completed)</s></li>
              <li className="font-bold">Phase 3: Flooring & Wall Finishes (In Progress)</li>
              <li className="color-concrete-gray">Phase 4: Custom Cabinetry (Upcoming)</li>
              <li className="color-concrete-gray">Phase 5: Final Handover (Est. Nov 15)</li>
            </ul>
          </div>

          <div className="card" style={{ padding: 0, overflow: 'hidden', height: '400px', display: 'flex', flexDirection: 'column' }}>
            <div className="p-md pb-sm">
              <h3 className="mb-xs">Live 3D Preview</h3>
              <p className="text-sm color-concrete-gray">Current proposed layout for your living room.</p>
            </div>
            <div style={{ flex: 1, position: 'relative' }}>
              <RealModelViewer 
                src="/models/luxury-living-room.glb"
                poster="/model-posters/luxury-living-room-poster.webp"
                alt="Living Room 3D Preview"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
