import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './HeroScroll.css';

const FRAME_COUNT = 120;
const FRAME_START = 1;

export default function HeroScroll() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const buttonsRef = useRef(null);
  const [images, setImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  // Preload images
  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const frameNum = (i + FRAME_START).toString().padStart(4, '0');
      img.src = `/hero/frames/frame_${frameNum}.webp`;
      
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
        if (i === 0 && canvasRef.current) {
          const ctx = canvasRef.current.getContext('2d');
          drawImageProp(ctx, img, 0, 0, canvasRef.current.width, canvasRef.current.height);
        }
      };
      img.onerror = () => {
        console.warn(`Failed to load frame ${frameNum}`);
        loadedCount++;
        setImagesLoaded(loadedCount);
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Handle scroll and resize
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      updateFrame();
    };

    const updateFrame = () => {
      const scrollTop = document.documentElement.scrollTop;
      const maxScroll = containerRef.current.scrollHeight - window.innerHeight;
      const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScroll));
      
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(scrollFraction * FRAME_COUNT)
      );

      const img = images[frameIndex];
      if (img && img.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawImageProp(ctx, img, 0, 0, canvas.width, canvas.height);
      }

      if (buttonsRef.current) {
        if (frameIndex >= FRAME_COUNT - 5) {
          buttonsRef.current.style.opacity = '1';
          buttonsRef.current.style.pointerEvents = 'auto';
          buttonsRef.current.style.transform = 'translateY(0)';
        } else {
          buttonsRef.current.style.opacity = '0';
          buttonsRef.current.style.pointerEvents = 'none';
          buttonsRef.current.style.transform = 'translateY(20px)';
        }
      }
    };

    window.addEventListener('scroll', updateFrame);
    window.addEventListener('resize', setCanvasSize);
    
    setCanvasSize();

    return () => {
      window.removeEventListener('scroll', updateFrame);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [images]);

  // Helper to draw image covering the canvas (like object-fit: cover)
  const drawImageProp = (ctx, img, x, y, w, h, offsetX = 0.5, offsetY = 0.5) => {
    if (arguments.length === 2) {
      x = y = 0;
      w = ctx.canvas.width;
      h = ctx.canvas.height;
    }

    let iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,
        nh = ih * r,
        cx, cy, cw, ch, ar = 1;

    if (nw < w) ar = w / nw;
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;
    nw *= ar;
    nh *= ar;

    cw = iw / (nw / w);
    ch = ih / (nh / h);

    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;

    ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
  };

  return (
    <div className="hero-scroll-container" ref={containerRef}>
      <div className="hero-sticky">
        <canvas ref={canvasRef} className="hero-canvas" />
        
        {/* Overlay Content */}
        <div className="hero-overlay" style={{ alignItems: 'flex-end', paddingBottom: '15vh' }}>
          <div className="hero-content fade-in">
            <div className="hero-actions" ref={buttonsRef} style={{ 
              opacity: 0, 
              pointerEvents: 'none', 
              transform: 'translateY(20px)', 
              transition: 'all 0.5s ease-in-out',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center'
            }}>
              <Link to="/quote" className="btn" style={{ backgroundColor: 'white', color: 'black', border: '2px solid black', borderRadius: '50px', whiteSpace: 'nowrap' }}>Begin Your Project</Link>
              <Link to="/3d-studio" className="btn" style={{ backgroundColor: 'white', color: 'black', border: '2px solid black', borderRadius: '50px', whiteSpace: 'nowrap' }}>Explore 3D Studio</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
