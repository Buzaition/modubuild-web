import '@google/model-viewer';
import './RealModelViewer.css';

export default function RealModelViewer({
  src = '/models/modern-villa.glb',
  poster = '/model-posters/modern-villa-poster.webp',
  alt = 'Interactive 3D model',
}) {
  return (
    <div className="real-model-viewer">
      <model-viewer
        src={src}
        poster={poster}
        alt={alt}
        camera-controls
        auto-rotate
        shadow-intensity="1"
        exposure="1"
        loading="lazy"
        touch-action="pan-y"
      />
    </div>
  );
}
