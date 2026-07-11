import { useState } from 'react';
import { Sun, Moon, Maximize, Share2, Save, MessageSquare, Ruler, Layers } from 'lucide-react';
import RealModelViewer from '../components/ui/RealModelViewer';
import './Studio3D.css';

const models = [
  { id: 'villa', name: 'Modern Villa', src: '/models/modern-villa.glb', poster: '/model-posters/modern-villa-poster.webp', cost: '$450,000' },
  { id: 'living', name: 'Luxury Living Room', src: '/models/luxury-living-room.glb', poster: '/model-posters/luxury-living-room-poster.webp', cost: '$84,500' },
  { id: 'kitchen', name: 'Kitchen Design', src: '/models/kitchen-design.glb', poster: '/model-posters/kitchen-design-poster.webp', cost: '$55,000' },
  { id: 'studio', name: 'Modular Studio', src: '/models/modular-studio.glb', poster: '/model-posters/modular-studio-poster.webp', cost: '$120,000' }
];

export default function Studio3D() {
  const [isNight, setIsNight] = useState(false);
  const [showMeasurements, setShowMeasurements] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeModel, setActiveModel] = useState(models[1]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => console.log(err));
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div className={`studio-page ${isFullscreen ? 'fullscreen-mode' : ''}`}>
      <div className="studio-layout">
        
        {/* Left Sidebar - Controls */}
        <div className="studio-sidebar left-sidebar">
          <div className="sidebar-section">
            <h3>Select Model</h3>
            <div className="button-group">
              {models.map(model => (
                <button 
                  key={model.id}
                  className={`btn btn-outline ${activeModel.id === model.id ? 'active' : ''}`}
                  onClick={() => setActiveModel(model)}
                >
                  {model.name}
                </button>
              ))}
            </div>
          </div>
            <h3>View Controls</h3>
            <div className="toggle-grid">
              <button 
                className={`toggle-btn ${isNight ? 'active' : ''}`}
                onClick={() => setIsNight(!isNight)}
              >
                {isNight ? <Moon size={18}/> : <Sun size={18}/>}
                {isNight ? 'Night Mode' : 'Day Mode'}
              </button>
              <button 
                className={`toggle-btn ${showMeasurements ? 'active' : ''}`}
                onClick={() => setShowMeasurements(!showMeasurements)}
              >
                <Ruler size={18}/>
                {showMeasurements ? 'Measurements On' : 'Measurements Off'}
              </button>
            </div>
          </div>
        </div>

        {/* Center - 3D Viewer Area */}
        <div className="studio-viewer">
          <div className="viewer-container">
            <RealModelViewer 
              src={activeModel.src} 
              poster={activeModel.poster} 
              alt={activeModel.name}
              autoRotate={!showMeasurements}
              isNight={isNight}
            />
            
            {showMeasurements && (
              <div className="mock-measurements">
                <div className="measure m-width">4.5m</div>
                <div className="measure m-height">3.2m</div>
              </div>
            )}
          </div>

          <div className="viewer-toolbar">
            <button className="toolbar-btn" onClick={toggleFullscreen}>
              <Maximize size={20} />
            </button>
          </div>
        </div>

        {/* Right Sidebar - Details & Actions */}
        <div className="studio-sidebar right-sidebar">
          <div className="sidebar-section">
            <h3>Project Details</h3>
            <p className="color-concrete-gray text-sm mb-md">Viewing: <strong>{activeModel.name}</strong></p>
            <div className="cost-card bg-ivory">
              <div className="text-sm color-concrete-gray mb-xs">Estimated Cost</div>
              <div className="cost-value font-serif color-bronze">{activeModel.cost}</div>
              <div className="cost-breakdown">
                <div className="flex-between"><span>Base Structure</span><span>60%</span></div>
                <div className="flex-between"><span>Materials</span><span>25%</span></div>
                <div className="flex-between"><span>Labor & Finishing</span><span>15%</span></div>
              </div>
            </div>
          </div>

          <div className="sidebar-section studio-actions">
            <button className="btn btn-primary flex-center gap-sm">
              <Save size={18}/> Save Design
            </button>
            <button className="btn btn-outline flex-center gap-sm">
              <Share2 size={18}/> Share Preview
            </button>
            <button className="btn btn-outline flex-center gap-sm">
              <MessageSquare size={18}/> Request Modification
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
