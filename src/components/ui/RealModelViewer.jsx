import '@google/model-viewer';
import { Sofa } from 'lucide-react';
import './RealModelViewer.css';

export default function RealModelViewer({ src, poster, alt, autoRotate = true, isNight = false }) {
  // We can simulate night mode with exposure and environment image if desired,
  // but for now we'll just adjust exposure.
  const exposure = isNight ? "0.4" : "1.2";
  const shadowIntensity = isNight ? "2" : "1";

  return (
    <div className="model-viewer-container">
      <model-viewer
        src={src}
        loading="lazy"
        alt={alt || "A 3D model of a ModuBuild project"}
        shadow-intensity={shadowIntensity}
        camera-controls
        auto-rotate={autoRotate ? "true" : undefined}
        auto-rotate-delay="0"
        rotation-per-second="30deg"
        interaction-prompt="auto"
        camera-orbit="45deg 75deg auto"
        environment-image="neutral"
        exposure={exposure}
        class="modubuild-model-viewer"
      >
        <div slot="poster" className="custom-poster">
          {poster && <img src={poster} alt="Poster" className="poster-img" />}
          <div className="animated-furniture-loader">
            <Sofa size={48} className="sofa-icon color-bronze" />
            <span className="color-white font-bold tracking-wide">LOADING 3D SPACE...</span>
          </div>
        </div>
      </model-viewer>
    </div>
  );
}
